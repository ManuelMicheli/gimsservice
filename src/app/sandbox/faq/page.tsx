import Switcher from "@/components/sandbox/Switcher";
import FaqA from "@/components/sandbox/faq/FaqA";
import FaqB from "@/components/sandbox/faq/FaqB";

export const metadata = { title: "Sandbox — FAQ" };

export default function FaqSandbox() {
  return (
    <main className="min-h-screen bg-surface">
      <Switcher
        variants={[
          { id: "a", label: "A · Static", node: <FaqA /> },
          { id: "b", label: "B · Accordion", node: <FaqB /> },
        ]}
      />
    </main>
  );
}
