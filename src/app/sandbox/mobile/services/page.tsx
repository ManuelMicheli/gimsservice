import Switcher from "@/components/sandbox/Switcher";
import PhoneFrame from "@/components/sandbox/PhoneFrame";
import ServicesMobileA from "@/components/sandbox/mobile-services/ServicesMobileA";
import ServicesMobileB from "@/components/sandbox/mobile-services/ServicesMobileB";
import ServicesMobileC from "@/components/sandbox/mobile-services/ServicesMobileC";

export const metadata = { title: "Sandbox Mobile — Services" };

export default function ServicesMobileSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · List", node: <PhoneFrame label="A · Editorial List"><ServicesMobileA /></PhoneFrame> },
        { id: "b", label: "B · Tiles", node: <PhoneFrame label="B · Image Tiles"><ServicesMobileB /></PhoneFrame> },
        { id: "c", label: "C · Thumb", node: <PhoneFrame label="C · Thumb List"><ServicesMobileC /></PhoneFrame> },
      ]}
    />
  );
}
