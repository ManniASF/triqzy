"use client";

import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Follow TRIQZY",
    description:
      "Follow our official X account and turn on notifications so you never miss announcements.",
  },
  {
    number: "02",
    title: "Connect Your X",
    description:
      "Connect your X account through the website to verify your participation.",
  },
  {
    number: "03",
    title: "Join The Community",
    description:
      "Become an active member of the community by engaging with posts and discussions.",
  },
  {
    number: "04",
    title: "Earn Your Spot",
    description:
      "Complete campaigns and community tasks for a chance to secure an allowlist position.",
  },
];

export default function Allowlist() {
  return (
    <section
      id="allowlist"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-[600px] w-[600px] rounded-full bg-[#00C805]/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <SectionTitle
            eyebrow="ALLOWLIST"
            title="How To Join"
            description="Four simple steps to become part of the Genesis collection."
          />
        </Reveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.08}
            >
              <div className="group rounded-[30px] border border-white/5 bg-[#101010] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#00C805] hover:shadow-[0_20px_60px_rgba(0,200,5,.15)]">

                <div className="flex items-center gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00C805] text-xl font-black text-black">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                </div>

                <p className="mt-6 leading-8 text-zinc-400">
                  {step.description}
                </p>

              </div>
            </Reveal>
          ))}

        </div>

        <Reveal delay={0.4}>
          <div className="mt-20 flex justify-center">

            <button
              className="
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
              Join Allowlist
            </button>

          </div>
        </Reveal>

      </div>
    </section>
  );
}