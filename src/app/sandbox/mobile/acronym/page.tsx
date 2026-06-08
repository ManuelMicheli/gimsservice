import Switcher from "@/components/sandbox/Switcher";
import PhoneFrame from "@/components/sandbox/PhoneFrame";
import AcronymMobileA from "@/components/sandbox/mobile-acronym/AcronymMobileA";
import AcronymMobileB from "@/components/sandbox/mobile-acronym/AcronymMobileB";
import AcronymMobileC from "@/components/sandbox/mobile-acronym/AcronymMobileC";

export const metadata = { title: "Sandbox Mobile — Acronym" };

export default function AcronymMobileSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · Rows", node: <PhoneFrame label="A · Editorial Rows"><AcronymMobileA /></PhoneFrame> },
        { id: "b", label: "B · Blocks", node: <PhoneFrame label="B · Letter Blocks"><AcronymMobileB /></PhoneFrame> },
        { id: "c", label: "C · Centered", node: <PhoneFrame label="C · Centered Monogram"><AcronymMobileC /></PhoneFrame> },
      ]}
    />
  );
}
