import Switcher from "@/components/sandbox/Switcher";
import PhoneFrame from "@/components/sandbox/PhoneFrame";
import AreaMobileA from "@/components/sandbox/mobile-area/AreaMobileA";
import AreaMobileB from "@/components/sandbox/mobile-area/AreaMobileB";
import AreaMobileC from "@/components/sandbox/mobile-area/AreaMobileC";

export const metadata = { title: "Sandbox Mobile — Service Area" };

export default function AreaMobileSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · Overlay", node: <PhoneFrame label="A · Map + Overlay Card"><AreaMobileA /></PhoneFrame> },
        { id: "b", label: "B · Content-First", node: <PhoneFrame label="B · Content-First"><AreaMobileB /></PhoneFrame> },
        { id: "c", label: "C · Map Banner", node: <PhoneFrame label="C · Map Banner"><AreaMobileC /></PhoneFrame> },
      ]}
    />
  );
}
