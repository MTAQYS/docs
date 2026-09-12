import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductStage } from "@/components/ProductStage";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { SuiteStrip } from "@/components/SuiteStrip";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 fog-layer" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <ProductStage />
        <HowItWorks />
        <Features />
        <Pricing />
        <SuiteStrip />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
