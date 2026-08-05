"use client";

import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroVisual() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 120,
    damping: 18,
  });

  const springY = useSpring(rotateY, {
    stiffness: 120,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateYValue = ((x / rect.width) - 0.5) * 16;
    const rotateXValue = -((y / rect.height) - 0.5) * 16;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <Reveal delay={0.2}>
      <div
        className="relative flex h-[700px] items-center justify-center"
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        {/* Glow */}

        <div className="absolute h-[560px] w-[560px] rounded-full bg-[#00C805]/10 blur-[160px]" />

        {/* Left */}

        <motion.div
          style={{
            rotateX: springX,
            rotateY: springY,
          }}
          className="
            absolute
            left-0
            top-24
            hidden
            w-52
            -rotate-12
            lg:block
          "
        >
          <Image
            src="/images/nft2.png"
            alt=""
            width={500}
            height={500}
            className="
              rounded-[28px]
              border
              border-white/10
              shadow-2xl
            "
          />
        </motion.div>

        {/* Center */}

        <motion.div
          style={{
            rotateX: springX,
            rotateY: springY,
          }}
          className="
            relative
            z-20
            w-full
            max-w-md
            rounded-[36px]
            border
            border-[#00C805]/20
            bg-[#101010]
            p-5
            shadow-[0_40px_120px_rgba(0,200,5,.15)]
          "
        >
          <Image
            src="/images/nft1.png"
            alt=""
            width={900}
            height={900}
            className="rounded-[24px]"
          />

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Genesis
              </p>

              <h3 className="mt-2 text-3xl font-black">
                TRIQZY #001
              </h3>
            </div>

            <span className="rounded-full bg-[#00C805] px-5 py-2 font-bold text-black">
              Legendary
            </span>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          style={{
            rotateX: springX,
            rotateY: springY,
          }}
          className="
            absolute
            bottom-24
            right-0
            hidden
            w-56
            rotate-12
            lg:block
          "
        >
          <Image
            src="/images/nft4.png"
            alt=""
            width={500}
            height={500}
            className="
              rounded-[28px]
              border
              border-white/10
              shadow-2xl
            "
          />
        </motion.div>
      </div>
    </Reveal>
  );
}