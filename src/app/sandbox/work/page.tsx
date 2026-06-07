import Switcher from "@/components/sandbox/Switcher";
import WorkA from "@/components/sandbox/work/WorkA";
import WorkB from "@/components/sandbox/work/WorkB";
import WorkC from "@/components/sandbox/work/WorkC";

export const metadata = { title: "Sandbox — Featured Work" };

export default function WorkSandbox() {
  return (
    <main className="min-h-screen bg-bg">
      <Switcher
        variants={[
          { id: "a", label: "A · Grid", node: <WorkA /> },
          { id: "b", label: "B · Rows", node: <WorkB /> },
          { id: "c", label: "C · Scroll", node: <WorkC /> },
        ]}
      />
    </main>
  );
}
