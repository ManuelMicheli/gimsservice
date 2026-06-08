import type { ReactNode } from "react";

// Cornice telefono per anteprima mobile fedele su desktop.
// Le varianti dentro usano SOLO classi base (no md:) → layout mobile sempre,
// indipendente dalla viewport reale. 390×844 ≈ iPhone 14/15.
export default function PhoneFrame({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-neutral-900 py-10">
      {label && (
        <p className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-white/40">
          {label}
        </p>
      )}
      <div className="relative h-[844px] w-[390px] shrink-0 overflow-hidden rounded-[2.75rem] border-[10px] border-black bg-bg shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {/* notch */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-[60] h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />
        {/* viewport scrollabile */}
        <div className="hide-scrollbar h-full w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
