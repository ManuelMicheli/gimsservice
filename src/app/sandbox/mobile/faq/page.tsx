import Switcher from "@/components/sandbox/Switcher";
import PhoneFrame from "@/components/sandbox/PhoneFrame";
import FaqMobileA from "@/components/sandbox/mobile-faq/FaqMobileA";
import FaqMobileB from "@/components/sandbox/mobile-faq/FaqMobileB";
import FaqMobileC from "@/components/sandbox/mobile-faq/FaqMobileC";

export const metadata = { title: "Sandbox Mobile — FAQ" };

export default function FaqMobileSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · Clean", node: <PhoneFrame label="A · Clean Accordion"><FaqMobileA /></PhoneFrame> },
        { id: "b", label: "B · Numbered", node: <PhoneFrame label="B · Numbered Accordion"><FaqMobileB /></PhoneFrame> },
        { id: "c", label: "C · Cards", node: <PhoneFrame label="C · Card Accordion"><FaqMobileC /></PhoneFrame> },
      ]}
    />
  );
}
