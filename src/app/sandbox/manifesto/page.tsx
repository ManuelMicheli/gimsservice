import Switcher from "@/components/sandbox/Switcher";
import ManifestoA from "@/components/sandbox/manifesto/ManifestoA";
import ManifestoB from "@/components/sandbox/manifesto/ManifestoB";
import ManifestoC from "@/components/sandbox/manifesto/ManifestoC";

export const metadata = { title: "Sandbox — Manifesto" };

export default function ManifestoSandbox() {
  return (
    <main className="min-h-screen bg-bg">
      <Switcher
        variants={[
          { id: "a", label: "A · Split", node: <ManifestoA /> },
          { id: "b", label: "B · Typographic", node: <ManifestoB /> },
          { id: "c", label: "C · Quote Card", node: <ManifestoC /> },
        ]}
      />
    </main>
  );
}
