"use server";

import { SERVICE_TYPES, SITE } from "@/lib/site";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function esc(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const FALLBACK_MSG = `Invio momentaneamente non disponibile. Scrivimi a ${SITE.email} o chiamami al ${SITE.phoneDisplay}.`;

/**
 * Server Action del form contatti.
 * Invia la richiesta a SITE.email via Resend (https://resend.com).
 * Config su Vercel: RESEND_API_KEY (obbligatoria); CONTACT_FROM opzionale
 * (default onboarding@resend.dev, valido senza dominio verificato).
 * Senza chiave non fingiamo il successo: messaggio con contatti diretti.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nome = String(formData.get("nome") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telefono = String(formData.get("telefono") ?? "").trim();
  const tipo = String(formData.get("tipo") ?? "").trim();
  const messaggio = String(formData.get("messaggio") ?? "").trim();
  const privacy = formData.get("privacy") === "on";
  // honeypot anti-spam
  const trap = String(formData.get("azienda") ?? "");

  const errors: Record<string, string> = {};
  if (nome.length < 2) errors.nome = "Inserisci il tuo nome.";
  if (!isEmail(email)) errors.email = "Inserisci un'email valida.";
  if (messaggio.length < 5) errors.messaggio = "Scrivi due righe sul tuo progetto.";
  if (tipo && !SERVICE_TYPES.includes(tipo)) errors.tipo = "Tipo non valido.";
  if (!privacy) errors.privacy = "Devi accettare l'informativa privacy.";

  if (trap) {
    // bot: fingiamo successo senza fare nulla
    return { ok: true, message: "Grazie! Ti ricontatto al più presto." };
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Controlla i campi evidenziati.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[GIMS contact] RESEND_API_KEY mancante: richiesta non inviata.");
    return { ok: false, message: FALLBACK_MSG };
  }

  const html = `
    <h2>Nuova richiesta dal sito gims-service</h2>
    <p><strong>Nome:</strong> ${esc(nome)}</p>
    <p><strong>Email:</strong> ${esc(email)}</p>
    <p><strong>Telefono:</strong> ${esc(telefono) || "—"}</p>
    <p><strong>Tipo di intervento:</strong> ${esc(tipo) || "—"}</p>
    <p><strong>Messaggio:</strong></p>
    <p>${esc(messaggio).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "GIMS Service <onboarding@resend.dev>",
        to: [SITE.email],
        reply_to: email,
        subject: `Richiesta preventivo${tipo ? ` — ${tipo}` : ""} — ${nome}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("[GIMS contact] Resend error:", res.status, await res.text());
      return { ok: false, message: FALLBACK_MSG };
    }
  } catch (err) {
    console.error("[GIMS contact] invio fallito:", err);
    return { ok: false, message: FALLBACK_MSG };
  }

  return {
    ok: true,
    message: "Grazie! Ho ricevuto la tua richiesta: ti ricontatto al più presto.",
  };
}
