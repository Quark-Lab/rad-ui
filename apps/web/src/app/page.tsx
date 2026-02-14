import { Hero } from "@/components/hero";
import { Showcase } from "@/components/showcase";
import { ThemeBar } from "@/components/theme-bar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ThemeBar />
      <Showcase />
    </main>
  );
}
