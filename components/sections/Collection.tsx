"use client";

import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";
import TiltCard from "@/components/ui/TiltCard";

const misfits = [
  {
    id: "#001",
    image: "/images/nft1.png",
    rarity: "Legendary",
  },
  {
    id: "#187",
    image: "/images/nft2.png",
    rarity: "Epic",
  },
  {
    id: "#555",
    image: "/images/nft3.png",
    rarity: "Genesis",
  },
  {
    id: "#842",
    image: "/images/nft5.png",
    rarity: "Rare",
  },
  {
    id: "#999",
    image: "/images/nft4.png",
    rarity: "Mythic",
  },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#00C805]/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <SectionTitle
            eyebrow="Genesis Collection"
            title="Meet The Misfits."
            description="Every TRIQZY is unique. Five examples from the Genesis collection."
          />
        </Reveal>

        {/* Top Row */}

        <div className="mt-24 grid gap-10 lg:grid-cols-3">

          {misfits.slice(0, 3).map((nft, index) => (

            <Reveal
              key={nft.id}
              delay={index * 0.08}
            >

              <TiltCard>

                <div
                  className="
                    group
                    overflow-hidden
                    rounded-[34px]
                    border
                    border-white/5
                    bg-[#111111]
                    transition-all
                    duration-500
                    hover:-translate-y-4
                    hover:border-[#00C805]
                    hover:shadow-[0_30px_90px_rgba(0,200,5,.18)]
                  "
                >

                  <div className="relative overflow-hidden">

                    <Image
                      src={nft.image}
                      alt={nft.id}
                      width={700}
                      height={700}
                      className="
                        aspect-square
                        w-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute right-5 top-5 rounded-full border border-[#00C805]/20 bg-black/70 px-4 py-2 text-sm font-semibold text-[#00C805] backdrop-blur-xl">
                      {nft.rarity}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  </div>

                  <div className="p-7">

                    <h3 className="text-3xl font-black text-white">
                      TRIQZY {nft.id}
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      Genesis Collection
                    </p>

                  </div>

                </div>

              </TiltCard>

            </Reveal>

          ))}

        </div>

        {/* Bottom Row */}

        <div className="mt-10 grid gap-10 md:grid-cols-2">

          {misfits.slice(3).map((nft, index) => (

            <Reveal
              key={nft.id}
              delay={(index + 3) * 0.08}
            >

              <TiltCard>

                <div
                  className="
                    group
                    overflow-hidden
                    rounded-[34px]
                    border
                    border-white/5
                    bg-[#111111]
                    transition-all
                    duration-500
                    hover:-translate-y-4
                    hover:border-[#00C805]
                    hover:shadow-[0_30px_90px_rgba(0,200,5,.18)]
                  "
                >

                  <div className="relative overflow-hidden">

                    <Image
                      src={nft.image}
                      alt={nft.id}
                      width={700}
                      height={700}
                      className="
                        aspect-square
                        w-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute right-5 top-5 rounded-full border border-[#00C805]/20 bg-black/70 px-4 py-2 text-sm font-semibold text-[#00C805] backdrop-blur-xl">
                      {nft.rarity}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />                  </div>

                  <div className="p-7">

                    <h3 className="text-3xl font-black text-white">
                      TRIQZY {nft.id}
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      Genesis Collection
                    </p>

                  </div>

                </div>

              </TiltCard>

            </Reveal>

          ))}

        </div>

        {/* CTA */}

        <Reveal delay={0.5}>

          <div className="mt-20 flex justify-center">

            <a
              href="#mint"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#00C805]
                px-10
                py-4
                text-lg
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_20px_60px_rgba(0,200,5,.35)]
              "
            >
              Explore Genesis
            </a>

          </div>

        </Reveal>

      </div>

    </section>
  );
}