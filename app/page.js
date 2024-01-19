import Drawer from "@/components/Drawer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex justify-center min-h-screen mt-20">
        <Drawer />
      </div>
    </main>
  );
}
