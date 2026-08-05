"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#070707]
        transition-all
        duration-700
        ${
          hide
            ? "pointer-events-none opacity-0"
            : "opacity-100"
        }
      `}
    >
      {/* Glow */}

      <div className="absolute h-[400px] w-[400px] rounded-full bg-[#00C805]/10 blur-[120px]" />

      {/* Logo */}

      <div className="relative flex flex-col items-center">

        <div
          className="
            h-24
            w-24
            animate-spin
            rounded-full
            border-[5px]
            border-[#00C805]/20
            border-t-[#00C805]
          "
        />

        <h1 className="mt-10 text-5xl font-black tracking-[0.35em] text-white">
          TRIQZY
        </h1>

        <p className="mt-4 uppercase tracking-[0.45em] text-[#00C805]">
          Genesis Collection
        </p>

      </div>
    </div>
  );
}