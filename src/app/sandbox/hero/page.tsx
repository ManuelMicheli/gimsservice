import Switcher from "@/components/sandbox/Switcher";
import HeroA from "@/components/sandbox/hero/HeroA";
import HeroB from "@/components/sandbox/hero/HeroB";
import HeroC from "@/components/sandbox/hero/HeroC";

export const metadata = { title: "Sandbox — Hero" };

export default function HeroSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · Editorial", node: <HeroA /> },
        { id: "b", label: "B · Monumental", node: <HeroB /> },
        { id: "c", label: "C · Framed", node: <HeroC /> },
      ]}
    />
  );
}
