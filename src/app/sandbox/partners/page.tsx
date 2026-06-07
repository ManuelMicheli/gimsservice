import Switcher from "@/components/sandbox/Switcher";
import PartnersA from "@/components/sandbox/partners/PartnersA";
import PartnersB from "@/components/sandbox/partners/PartnersB";
import PartnersC from "@/components/sandbox/partners/PartnersC";

export const metadata = { title: "Sandbox — Partners" };

export default function PartnersSandbox() {
  return (
    <main className="min-h-screen bg-bg">
      <Switcher
        variants={[
          { id: "a", label: "A · Split", node: <PartnersA /> },
          { id: "b", label: "B · Marquee", node: <PartnersB /> },
          { id: "c", label: "C · Spec strip", node: <PartnersC /> },
        ]}
      />
    </main>
  );
}
