import Switcher from "@/components/sandbox/Switcher";
import PhoneFrame from "@/components/sandbox/PhoneFrame";
import PartnersMobileA from "@/components/sandbox/mobile-partners/PartnersMobileA";
import PartnersMobileB from "@/components/sandbox/mobile-partners/PartnersMobileB";
import PartnersMobileC from "@/components/sandbox/mobile-partners/PartnersMobileC";

export const metadata = { title: "Sandbox Mobile — Partners" };

export default function PartnersMobileSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · Marquee", node: <PhoneFrame label="A · Claim + Marquee"><PartnersMobileA /></PhoneFrame> },
        { id: "b", label: "B · List", node: <PhoneFrame label="B · Numbered List"><PartnersMobileB /></PhoneFrame> },
        { id: "c", label: "C · Grid", node: <PhoneFrame label="C · Grid Cards"><PartnersMobileC /></PhoneFrame> },
      ]}
    />
  );
}
