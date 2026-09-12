import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AgentStrip } from "@/components/AgentStrip";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { SuiteStrip } from "@/components/SuiteStrip";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden bg-bg">
      <Navbar />
      <main>
        <Hero />
        <AgentStrip />
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
