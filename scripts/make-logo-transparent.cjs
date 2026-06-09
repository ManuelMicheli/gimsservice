// One-off: deriva logo-mark.png trasparente (no riquadro) da public/logo.png.
// Decoder/encoder PNG minimale (RGBA 8-bit, no interlace) su zlib nativo.
const fs = require("fs");
const zlib = require("zlib");

const SRC = "public/logo.png";
const OUT = "public/logo-mark.png";

function decode(file) {
  const b = fs.readFileSync(file);
  const w = b.readUInt32BE(16);
  const h = b.readUInt32BE(20);
  if (b[25] !== 6 || b[24] !== 8 || b[28] !== 0)
    throw new Error("atteso RGBA 8-bit non-interlacciato");
  // concat IDAT
  let p = 8;
  const idat = [];
  while (p < b.length) {
    const len = b.readUInt32BE(p);
    const type = b.toString("ascii", p + 4, p + 8);
    if (type === "IDAT") idat.push(b.subarray(p + 8, p + 8 + len));
    p += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = w * 4;
  const out = Buffer.alloc(h * stride);
  let pos = 0;
  const paeth = (a, bb, c) => {
    const pp = a + bb - c;
    const pa = Math.abs(pp - a), pb = Math.abs(pp - bb), pc = Math.abs(pp - c);
    return pa <= pb && pa <= pc ? a : pb <= pc ? bb : c;
  };
  for (let y = 0; y < h; y++) {
    const f = raw[pos++];
    for (let x = 0; x < stride; x++) {
      const v = raw[pos++];
      const a = x >= 4 ? out[y * stride + x - 4] : 0;
      const up = y > 0 ? out[(y - 1) * stride + x] : 0;
      const ul = x >= 4 && y > 0 ? out[(y - 1) * stride + x - 4] : 0;
      let r;
      if (f === 0) r = v;
      else if (f === 1) r = v + a;
      else if (f === 2) r = v + up;
      else if (f === 3) r = v + ((a + up) >> 1);
      else r = v + paeth(a, up, ul);
      out[y * stride + x] = r & 0xff;
    }
  }
  return { w, h, data: out };
}

function encode({ w, h, data }) {
  const stride = w * 4;
  const raw = Buffer.alloc(h * (stride + 1));
  for (let y = 0; y < h; y++) {
    raw[y * (stride + 1)] = 0; // filtro none
    data.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  const chunk = (type, body) => {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(body.length);
    const t = Buffer.from(type, "ascii");
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(Buffer.concat([t, body])) >>> 0);
    return Buffer.concat([len, t, body, crc]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6;
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

const CRC_TBL = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) c = CRC_TBL[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return ~c;
}

// ---- pipeline ----
const img = decode(SRC);
const { w, h, data } = img;
const N = w * h;
const idx = (x, y) => (y * w + x) * 4;
const inkAt = (i) => 255 - Math.min(data[i], data[i + 1], data[i + 2]); // 0=bianco

// maschera ink
const INK = 40;
const ink = new Uint8Array(N);
for (let i = 0; i < N; i++) ink[i] = inkAt(i * 4) > INK ? 1 : 0;

// componenti connesse (4-conn); marca quelle che toccano il bordo = riquadro
const comp = new Int32Array(N).fill(-1);
const frame = new Uint8Array(N);
const stack = [];
let cid = 0;
for (let s = 0; s < N; s++) {
  if (!ink[s] || comp[s] !== -1) continue;
  stack.length = 0;
  stack.push(s);
  comp[s] = cid;
  const members = [];
  let touchesEdge = false;
  while (stack.length) {
    const c = stack.pop();
    members.push(c);
    const x = c % w, y = (c / w) | 0;
    if (x === 0 || y === 0 || x === w - 1 || y === h - 1) touchesEdge = true;
    const nb = [];
    if (x > 0) nb.push(c - 1);
    if (x < w - 1) nb.push(c + 1);
    if (y > 0) nb.push(c - w);
    if (y < h - 1) nb.push(c + w);
    for (const nn of nb) if (ink[nn] && comp[nn] === -1) { comp[nn] = cid; stack.push(nn); }
  }
  if (touchesEdge) for (const m of members) frame[m] = 1;
  cid++;
}

// alpha: bianco->0, riquadro->0, resto = intensità ink
let minX = w, minY = h, maxX = 0, maxY = 0;
for (let py = 0; py < h; py++) {
  for (let px = 0; px < w; px++) {
    const p = py * w + px;
    const i = p * 4;
    let a = frame[p] ? 0 : inkAt(i);
    if (a < 20) a = 0;
    // ink -> bianco (visibile su sfondo scuro), alpha = intensità
    data[i] = 255; data[i + 1] = 255; data[i + 2] = 255;
    data[i + 3] = a;
    if (a > 0) {
      if (px < minX) minX = px;
      if (px > maxX) maxX = px;
      if (py < minY) minY = py;
      if (py > maxY) maxY = py;
    }
  }
}

// autocrop + padding
const pad = 8;
minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad);
maxX = Math.min(w - 1, maxX + pad); maxY = Math.min(h - 1, maxY + pad);
const cw = maxX - minX + 1, ch = maxY - minY + 1;
const cropped = Buffer.alloc(cw * ch * 4);
for (let y = 0; y < ch; y++)
  data.copy(cropped, y * cw * 4, idx(minX, minY + y), idx(minX, minY + y) + cw * 4);

fs.writeFileSync(OUT, encode({ w: cw, h: ch, data: cropped }));
console.log(`OK ${OUT} ${cw}x${ch}  (orig ${w}x${h}, comps ${cid})`);
