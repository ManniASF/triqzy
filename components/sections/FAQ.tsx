"use client";

import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";

const faqs = [
  {
    question: "What is TRIQZY?",
    answer:
      "TRIQZY is a Genesis NFT collection of 1,111 unique digital collectibles built for collectors, creators and internet culture.",
  },
  {
    question: "What blockchain is TRIQZY on?",
    answer:
      "TRIQZY is deployed on Robinhood EVM, providing a fast, secure and EVM-compatible experience.",
  },
  {
    question: "When is mint?",
    answer:
      "The official mint date will be announced across our social channels after the allowlist campaign ends.",
  },
  {
    question: "How many NFTs can I mint?",
    answer:
      "The current limit is 5 NFTs per wallet unless stated otherwise before launch.",
  },
  {
    question: "Will there be an allowlist?",
    answer:
      "Yes. Community participation, engagement and campaign activities will determine allowlist eligibility.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#00C805]/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6">

        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know before joining the TRIQZY Genesis collection."
          />
        </Reveal>

        <div className="mt-20 space-y-6">

          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05}>

              <div className="overflow-hidden rounded-[28px] border border-white/5 bg-[#101010]">

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left transition hover:bg-white/5"
                >
                  <span className="text-xl font-bold text-white">
                    {faq.question}
                  </span>

                  <span className="text-3xl text-[#00C805]">
                    {open === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-8 leading-8 text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}