import { SITE } from "@/lib/site";

// Pulsante flottante WhatsApp, visibile su tutte le pagine (bottom-right).
export default function WhatsAppWidget() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatta su WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_18px_rgba(0,0,0,0.28)] transition-transform duration-300 ease-soft hover:scale-110 md:bottom-7 md:right-7"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden
        className="h-7 w-7"
      >
        <path d="M16.04 4C9.42 4 4.04 9.36 4.04 15.96c0 2.11.56 4.16 1.61 5.97L4 28l6.22-1.62a12.05 12.05 0 0 0 5.81 1.48h.01c6.62 0 12-5.36 12-11.96 0-3.2-1.25-6.2-3.52-8.46A11.93 11.93 0 0 0 16.04 4Zm0 21.84h-.01a10 10 0 0 1-5.1-1.4l-.37-.21-3.69.96.99-3.59-.24-.37a9.92 9.92 0 0 1-1.53-5.27c0-5.48 4.47-9.94 9.96-9.94 2.66 0 5.16 1.04 7.04 2.92a9.86 9.86 0 0 1 2.91 7.03c0 5.48-4.47 9.87-9.96 9.87Zm5.46-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.21 5.1 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
