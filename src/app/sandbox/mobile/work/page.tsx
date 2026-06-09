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
        { id: "a", label: "A · Stack", node: <PhoneFrame label="A · Cinematic Stack"><WorkMobileA /></PhoneFrame> },
        { id: "b", label: "B · Gallery", node: <PhoneFrame label="B · Tactile Gallery"><WorkMobileB /></PhoneFrame> },
        { id: "c", label: "C · Editorial", node: <PhoneFrame label="C · Editorial Parallax"><WorkMobileC /></PhoneFrame> },
      ]}
    />
  );
}
