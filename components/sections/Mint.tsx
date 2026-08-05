"use client";

import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";

const items = [
  {
    label: "TOTAL SUPPLY",
    value: "1111",
    sub: "Unique Digital Misfits",
  },
  {
    label: "BLOCKCHAIN",
    value: "Robinhood EVM",
    sub: "Fast • Secure • EVM",
  },
  {
    label: "MINT PRICE",
    value: "TBA",
    sub: "To Be Announced",
  },
  {
    label: "VERIFICATION",
    value: "Wallet + X",
    sub: "Required for Allowlist",
  },
];

export default function Mint() {
  return (
    <section
      id="mint"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090909] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        <Reveal>
          <SectionTitle
            eyebrow="Mint Overview"
            title="Everything You Need"
            description="The essentials before joining the TRIQZY allowlist."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {items.map((item) => (
            <Reveal key={item.label}>
              <div
                className="
                rounded-[34px]
                border
                border-white/5
                bg-[#101010]
                p-10
                transition-all
                duration-300
                hover:border-[#d54234]
                hover:-translate-y-2
                hover:shadow-[0_25px_70px_rgba(213,66,52,.18)]
                "
              >
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                  {item.label}
                </p>

                <h3 className="mt-3 text-5xl font-black text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {item.sub}
                </p>
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}