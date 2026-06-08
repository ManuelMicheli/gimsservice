import Switcher from "@/components/sandbox/Switcher";
import PhoneFrame from "@/components/sandbox/PhoneFrame";
import ManifestoMobileA from "@/components/sandbox/mobile-manifesto/ManifestoMobileA";
import ManifestoMobileB from "@/components/sandbox/mobile-manifesto/ManifestoMobileB";
import ManifestoMobileC from "@/components/sandbox/mobile-manifesto/ManifestoMobileC";

export const metadata = { title: "Sandbox Mobile — Manifesto" };

export default function ManifestoMobileSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · Stacked", node: <PhoneFrame label="A · Stacked Editorial"><ManifestoMobileA /></PhoneFrame> },
        { id: "b", label: "B · Cover", node: <PhoneFrame label="B · Cover Portrait"><ManifestoMobileB /></PhoneFrame> },
        { id: "c", label: "C · Framed", node: <PhoneFrame label="C · Framed Photo"><ManifestoMobileC /></PhoneFrame> },
      ]}
    />
  );
}
