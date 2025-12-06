import "../globals.css";
import { Sidebar } from "@/components";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="fixed bottom-0 left-0 md:top-0 md:h-screen w-full md:w-[16em]">
        <Sidebar />
      </div>
      <div className="md:ml-[16em] mb-[3.5em] md:mb-0">{children}</div>
    </div>
  );
}
