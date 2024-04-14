import { Socials } from "@/components/Socials";
import Left from "@/pages/Left";
import Right from "@/pages/Right";

export default function Home() {
  return (
    <main id="/" className="flex-col h-[100vh]">
      <div className="lg:flex">
        <Left/> 
        <Right />
      </div>
      <Socials />
    </main>
  );
}
