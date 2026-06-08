import type { Metadata } from "next";

// La sandbox è solo per sviluppo: mai indicizzata dai motori.
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function SandboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
