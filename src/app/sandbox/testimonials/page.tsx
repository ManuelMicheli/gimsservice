import Switcher from "@/components/sandbox/Switcher";
import TestimonialsA from "@/components/sandbox/testimonials/TestimonialsA";
import TestimonialsB from "@/components/sandbox/testimonials/TestimonialsB";
import TestimonialsC from "@/components/sandbox/testimonials/TestimonialsC";

export const metadata = { title: "Sandbox — Testimonials" };

export default function TestimonialsSandbox() {
  return (
    <main className="min-h-screen bg-surface">
      <Switcher
        variants={[
          { id: "a", label: "A · Grid", node: <TestimonialsA /> },
          { id: "b", label: "B · Spotlight", node: <TestimonialsB /> },
          { id: "c", label: "C · Rows", node: <TestimonialsC /> },
        ]}
      />
    </main>
  );
}
