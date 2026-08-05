"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        group
        relative
        overflow-hidden
        rounded-full
        bg-[#00C805]
        px-8
        py-4
        font-bold
        text-black
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_20px_60px_rgba(0,200,5,.35)]
        active:scale-95
        ${className}
      `}
    >
      {/* Shine Effect */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}