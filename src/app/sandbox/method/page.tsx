import Switcher from "@/components/sandbox/Switcher";
import MethodA from "@/components/sandbox/method/MethodA";
import MethodB from "@/components/sandbox/method/MethodB";
import MethodC from "@/components/sandbox/method/MethodC";

export const metadata = { title: "Sandbox — Method" };

export default function MethodSandbox() {
  return (
    <main className="min-h-screen bg-ink">
      <Switcher
        variants={[
          { id: "a", label: "A · Ghost Grid", node: <MethodA /> },
          { id: "b", label: "B · Ghost Rows", node: <MethodB /> },
          { id: "c", label: "C · Ghost 2×2", node: <MethodC /> },
        ]}
      />
    </main>
  );
}
