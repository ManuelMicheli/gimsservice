import Switcher from "@/components/sandbox/Switcher";
import AcronymA from "@/components/sandbox/acronym/AcronymA";
import AcronymB from "@/components/sandbox/acronym/AcronymB";
import AcronymC from "@/components/sandbox/acronym/AcronymC";

export const metadata = { title: "Sandbox — Acronym" };

export default function AcronymSandbox() {
  return (
    <main className="min-h-screen bg-bg">
      <Switcher
        variants={[
          { id: "a", label: "A · Drawer", node: <AcronymA /> },
          { id: "b", label: "B · Curtain", node: <AcronymB /> },
          { id: "c", label: "C · Panel", node: <AcronymC /> },
        ]}
      />
    </main>
  );
}
