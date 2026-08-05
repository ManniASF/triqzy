import { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlowCard({
  children,
  className = "",
}: GlowCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-[#121212]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#C3261F]
        hover:shadow-[0_35px_90px_rgba(195,38,31,.30)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#C3261F]/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {children}
    </div>
  );
}