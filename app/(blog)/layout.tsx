import Sidebar from "@/app/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[25%_75%] xl:grid-cols-[20%_80%]">
      <Sidebar />
      {children}
    </div>
  );
}
