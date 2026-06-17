"use client";

import { useState } from "react";
import { SERVICE_TYPES, SITE } from "@/lib/site";

// Il form vive nel footer (bg-ink scuro): testo chiaro, non text-ink.
const fieldCls =
  "w-full border-b border-bg/20 bg-transparent py-3 font-body text-bg placeholder:text-bg/50 outline-none transition-colors focus:border-bg";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // honeypot anti-spam: bot compila → non facciamo nulla
    if (String(fd.get("azienda") ?? "")) {
      setSent(true);
      return;
    }

    const nome = String(fd.get("nome") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const telefono = String(fd.get("telefono") ?? "").trim();
    const tipo = String(fd.get("tipo") ?? "").trim();
    const messaggio = String(fd.get("messaggio") ?? "").trim();
    const privacy = fd.get("privacy") === "on";

    const next: Record<string, string> = {};
    if (nome.length < 2) next.nome = "Inserisci il tuo nome.";
    if (!isEmail(email)) next.email = "Inserisci un'email valida.";
    if (messaggio.length < 5) next.messaggio = "Scrivi due righe sul tuo progetto.";
    if (!privacy) next.privacy = "Devi accettare l'informativa privacy.";

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});

    const text = [
      "Nuova richiesta dal sito GIMS Service",
      `Nome: ${nome}`,
      `Email: ${email}`,
      `Telefono: ${telefono || "—"}`,
      `Tipo di intervento: ${tipo || "—"}`,
      "",
      "Messaggio:",
      messaggio,
    ].join("\n");

    const url = `${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[18rem] flex-col items-start justify-center gap-3">
        <span className="overline text-accent">Ci siamo quasi</span>
        <p className="max-w-md font-display text-2xl text-bg md:text-3xl">
          Ho aperto WhatsApp con la tua richiesta già pronta: tocca invia per
          recapitarla a José.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {/* honeypot nascosto */}
      <input
        type="text"
        name="azienda"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden
      />

      <div>
        <input name="nome" placeholder="Nome*" className={fieldCls} aria-label="Nome" />
        {errors.nome && <Err>{errors.nome}</Err>}
      </div>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email*"
          className={fieldCls}
          aria-label="Email"
        />
        {errors.email && <Err>{errors.email}</Err>}
      </div>
      <div>
        <input
          name="telefono"
          placeholder="Telefono"
          className={fieldCls}
          aria-label="Telefono"
        />
      </div>
      <div>
        <select
          name="tipo"
          defaultValue=""
          className={`${fieldCls} cursor-pointer [&>option]:bg-bg [&>option]:text-ink`}
          aria-label="Tipo di intervento"
        >
          <option value="" disabled>
            Tipo di intervento
          </option>
          {SERVICE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <textarea
          name="messaggio"
          rows={3}
          placeholder="Messaggio*"
          className={`${fieldCls} resize-none`}
          aria-label="Messaggio"
        />
        {errors.messaggio && <Err>{errors.messaggio}</Err>}
      </div>

      <label className="flex items-start gap-3 sm:col-span-2">
        <input name="privacy" type="checkbox" className="mt-1 accent-[var(--accent)]" />
        <span className="font-body text-[0.78rem] leading-relaxed text-bg/60">
          Acconsento al trattamento dei dati secondo l&apos;informativa privacy.*
        </span>
      </label>
      {errors.privacy && (
        <div className="sm:col-span-2 -mt-3">
          <Err>{errors.privacy}</Err>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-bg px-8 py-4 font-body text-[0.78rem] uppercase tracking-[0.16em] text-ink transition-all duration-500 ease-soft hover:bg-accent hover:text-bg"
        >
          Invia su WhatsApp →
        </button>
      </div>
    </form>
  );
}

function Err({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 font-body text-[0.7rem] text-accent">{children}</p>;
}
