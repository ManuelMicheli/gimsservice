import Switcher from "@/components/sandbox/Switcher";
import PhoneFrame from "@/components/sandbox/PhoneFrame";
import WorkMobileA from "@/components/sandbox/mobile-work/WorkMobileA";
import WorkMobileB from "@/components/sandbox/mobile-work/WorkMobileB";
import WorkMobileC from "@/components/sandbox/mobile-work/WorkMobileC";

export const metadata = { title: "Sandbox Mobile — Featured Work" };

export default function WorkMobileSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · Stacked", node: <PhoneFrame label="A · Stacked Editorial"><WorkMobileA /></PhoneFrame> },
        { id: "b", label: "B · Overlay", node: <PhoneFrame label="B · Overlay Cards"><WorkMobileB /></PhoneFrame> },
        { id: "c", label: "C · Caption", node: <PhoneFrame label="C · Caption Strip"><WorkMobileC /></PhoneFrame> },
      ]}
    />
  );
}
