"use client";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#00C805]/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,.65))]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          <HeroContent />

          <HeroVisual />

        </div>

      </div>
    </section>
  );
}