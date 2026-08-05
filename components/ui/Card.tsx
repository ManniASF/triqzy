import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#C3261F]/60
        hover:-translate-y-2
        hover:shadow-[0_25px_80px_rgba(195,38,31,.25)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}