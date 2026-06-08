import Switcher from "@/components/sandbox/Switcher";
import PhoneFrame from "@/components/sandbox/PhoneFrame";
import TestimonialsMobileA from "@/components/sandbox/mobile-testimonials/TestimonialsMobileA";
import TestimonialsMobileB from "@/components/sandbox/mobile-testimonials/TestimonialsMobileB";
import TestimonialsMobileC from "@/components/sandbox/mobile-testimonials/TestimonialsMobileC";

export const metadata = { title: "Sandbox Mobile — Testimonials" };

export default function TestimonialsMobileSandbox() {
  return (
    <Switcher
      variants={[
        { id: "a", label: "A · Spotlight", node: <PhoneFrame label="A · Spotlight Carousel"><TestimonialsMobileA /></PhoneFrame> },
        { id: "b", label: "B · Cards", node: <PhoneFrame label="B · Stacked Cards"><TestimonialsMobileB /></PhoneFrame> },
        { id: "c", label: "C · Slider", node: <PhoneFrame label="C · Editorial Slider"><TestimonialsMobileC /></PhoneFrame> },
      ]}
    />
  );
}
