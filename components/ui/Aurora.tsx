"use client";

export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Top Glow */}

      <div
        className="
          absolute
          left-1/2
          top-[-220px]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#00C805]/12
          blur-[180px]
          animate-pulse
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          left-[-180px]
          top-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#00C805]/8
          blur-[160px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          right-[-180px]
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-400/5
          blur-[180px]
        "
      />

    </div>
  );
}