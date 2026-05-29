"use server";

import { SERVICE_TYPES } from "@/lib/site";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/**
 * Server Action del form contatti.
 * TODO (cliente): collegare invio reale — es. Resend / Nodemailer / webhook,
 * inviando a josegiardino68@gmail.com. Qui validiamo e restituiamo lo stato.
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

  // Placeholder invio. Sostituire con integrazione reale.
  console.log("[GIMS contact]", { nome, email, telefono, tipo, messaggio });

  return {
    ok: true,
    message: "Grazie! Ho ricevuto la tua richiesta: ti ricontatto al più presto.",
  };
}
