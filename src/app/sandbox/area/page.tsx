import Switcher from "@/components/sandbox/Switcher";
import AreaA from "@/components/sandbox/area/AreaA";
import AreaB from "@/components/sandbox/area/AreaB";
import AreaC from "@/components/sandbox/area/AreaC";

export const metadata = { title: "Sandbox — Service Area" };

export default function AreaSandbox() {
  return (
    <main className="min-h-screen bg-bg">
      <Switcher
        variants={[
          { id: "a", label: "A · Split", node: <AreaA /> },
          { id: "b", label: "B · Map-forward", node: <AreaB /> },
          { id: "c", label: "C · Zone List", node: <AreaC /> },
        ]}
      />
    </main>
  );
}
