"use client";

import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#d54234]/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <SectionTitle
            eyebrow="THE STORY"
            title="Built For The Misfits."
            description="TRIQZY isn&apos;t just another PFP collection. It&apos;s a Genesis identity created for people who refuse to blend into the crowd."
          />
        </Reveal>

        <div className="mt-24 grid gap-16 lg:grid-cols-2">

          <Reveal delay={0.1}>
            <div className="rounded-[34px] border border-white/5 bg-white/[0.02] p-10 backdrop-blur-xl">

              <h3 className="text-3xl font-black text-white">
                More Than A JPEG
              </h3>

              <p className="mt-6 leading-9 text-zinc-400">
                Every TRIQZY is hand-crafted with its own identity,
                expression and attitude.
              </p>

              <p className="mt-6 leading-9 text-zinc-400">
                Limited to only 1,111 Genesis Misfits,
                ownership represents entry into a community
                built around collectors,
                creators and internet culture.
              </p>

            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-[34px] border border-[#d54234]/20 bg-gradient-to-br from-[#d54234]/10 via-black to-black p-10">

              <div className="grid gap-8">

                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
                    Supply
                  </p>

                  <h2 className="mt-2 text-5xl font-black text-white">
                    1111
                  </h2>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
                    Blockchain
                  </p>

                  <h2 className="mt-2 text-5xl font-black text-white">
                    Robinhood
                  </h2>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
                    Standard
                  </p>

                  <h2 className="mt-2 text-5xl font-black text-white">
                    ERC-721
                  </h2>
                </div>

              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}