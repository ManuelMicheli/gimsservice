import Switcher from "@/components/sandbox/Switcher";
import ServicesA from "@/components/sandbox/services/ServicesA";
import ServicesB from "@/components/sandbox/services/ServicesB";
import ServicesC from "@/components/sandbox/services/ServicesC";

export const metadata = { title: "Sandbox — Services" };

export default function ServicesSandbox() {
  return (
    <main className="min-h-screen bg-bg">
      <Switcher
        variants={[
          { id: "a", label: "A · List", node: <ServicesA /> },
          { id: "b", label: "B · Stack", node: <ServicesB /> },
          { id: "c", label: "C · Bento", node: <ServicesC /> },
        ]}
      />
    </main>
  );
}
