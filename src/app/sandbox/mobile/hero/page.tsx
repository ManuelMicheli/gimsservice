import Switcher from "@/components/sandbox/Switcher";
import PhoneFrame from "@/components/sandbox/PhoneFrame";
import HeroMobileA from "@/components/sandbox/mobile-hero/HeroMobileA";
import HeroMobileB from "@/components/sandbox/mobile-hero/HeroMobileB";
import HeroMobileC from "@/components/sandbox/mobile-hero/HeroMobileC";

export const metadata = { title: "Sandbox Mobile — Hero" };

export default function HeroMobileSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · Cinematic", node: <PhoneFrame label="A · Cinematic"><HeroMobileA /></PhoneFrame> },
        { id: "b", label: "B · Split", node: <PhoneFrame label="B · Editorial Split"><HeroMobileB /></PhoneFrame> },
        { id: "c", label: "C · Framed", node: <PhoneFrame label="C · Framed Gallery"><HeroMobileC /></PhoneFrame> },
      ]}
    />
  );
}
