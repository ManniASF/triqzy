import Hero from "@/components/hero/Hero";

import Story from "@/components/sections/Story";
import Collection from "@/components/sections/Collection";
import Mint from "@/components/sections/Mint";
import Allowlist from "@/components/sections/Allowlist";
import FAQ from "@/components/sections/FAQ";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#070707] pt-24">

      {/* Hero */}
      <Hero />

      {/* Story */}
      <Story />

      {/* Collection */}
      <Collection />

      {/* Mint */}
      <Mint />

      {/* Allowlist */}
      <Allowlist />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

    </main>
  );
}