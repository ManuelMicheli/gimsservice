"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions";
import { SERVICE_TYPES } from "@/lib/site";

const initial: ContactState = { ok: false, message: "" };

const fieldCls =
  "w-full border-b border-line bg-transparent py-3 font-body text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-ink";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-body text-[0.78rem] uppercase tracking-[0.16em] text-bg transition-all duration-500 ease-soft hover:bg-accent disabled:opacity-60"
    >
      {pending ? "Invio in corso…" : "Invia richiesta →"}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <div className="flex min-h-[18rem] flex-col items-start justify-center gap-3">
        <span className="overline text-accent">Richiesta inviata</span>
        <p className="max-w-md font-display text-2xl text-ink md:text-3xl">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
        {state.errors?.nome && <Err>{state.errors.nome}</Err>}
      </div>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email*"
          className={fieldCls}
          aria-label="Email"
        />
        {state.errors?.email && <Err>{state.errors.email}</Err>}
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
        <select name="tipo" defaultValue="" className={`${fieldCls} cursor-pointer`} aria-label="Tipo di intervento">
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
        {state.errors?.messaggio && <Err>{state.errors.messaggio}</Err>}
      </div>

      <label className="flex items-start gap-3 sm:col-span-2">
        <input name="privacy" type="checkbox" className="mt-1 accent-[var(--accent)]" />
        <span className="font-body text-[0.78rem] leading-relaxed text-muted">
          Acconsento al trattamento dei dati secondo l&apos;informativa privacy.*
        </span>
      </label>
      {state.errors?.privacy && (
        <div className="sm:col-span-2 -mt-3">
          <Err>{state.errors.privacy}</Err>
        </div>
      )}

      <div className="flex items-center gap-4 sm:col-span-2">
        <SubmitButton />
        {!state.ok && state.message && (
          <span className="font-body text-[0.78rem] text-accent">{state.message}</span>
        )}
      </div>
    </form>
  );
}

function Err({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 font-body text-[0.7rem] text-accent">{children}</p>;
}
