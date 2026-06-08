import Switcher from "@/components/sandbox/Switcher";
import PhoneFrame from "@/components/sandbox/PhoneFrame";
import MethodMobileA from "@/components/sandbox/mobile-method/MethodMobileA";
import MethodMobileB from "@/components/sandbox/mobile-method/MethodMobileB";
import MethodMobileC from "@/components/sandbox/mobile-method/MethodMobileC";

export const metadata = { title: "Sandbox Mobile — Method" };

export default function MethodMobileSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · Ghost", node: <PhoneFrame label="A · Ghost Rows"><MethodMobileA /></PhoneFrame> },
        { id: "b", label: "B · Cards", node: <PhoneFrame label="B · Numbered Cards"><MethodMobileB /></PhoneFrame> },
        { id: "c", label: "C · Timeline", node: <PhoneFrame label="C · Timeline"><MethodMobileC /></PhoneFrame> },
      ]}
    />
  );
}
