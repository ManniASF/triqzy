"use client";

import Reveal from "@/components/shared/Reveal";
import Button from "@/components/ui/Button";

export default function HeroContent() {
  return (
    <div className="relative z-10">

      <Reveal>
        <p className="mb-6 inline-flex items-center rounded-full border border-[#00C805]/20 bg-[#00C805]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#00C805]">
          Robinhood Genesis Collection
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h1 className="max-w-3xl text-6xl font-black leading-[0.92] tracking-tight text-white md:text-7xl xl:text-8xl">
          OWN THE
          <br />
          <span className="text-[#00C805]">
            MISFIT ERA.
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
          TRIQZY is a premium Genesis NFT collection built on Robinhood EVM.
          Created for collectors, creators and digital culture. Limited supply.
          Timeless identity.
        </p>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-12 flex flex-wrap gap-5">

          <Button>
            Mint Soon
          </Button>

          <a
            href="#collection"
            className="
              rounded-full
              border
              border-white/10
              px-8
              py-4
              text-white
              transition
              duration-300
              hover:border-[#00C805]
              hover:text-[#00C805]
            "
          >
            View Collection
          </a>

        </div>
      </Reveal>

      <Reveal delay={0.35}>
        <div className="mt-16 grid grid-cols-3 gap-8">

          <div>
            <h3 className="text-4xl font-black text-white">
              1111
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Genesis NFTs
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">
              ERC-721
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Standard
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">
              RH
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Robinhood EVM
            </p>
          </div>

        </div>
      </Reveal>

    </div>
  );
}