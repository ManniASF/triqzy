type GlowProps = {
  className?: string;
};

export default function Glow({
  className = "",
}: GlowProps) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[#C3261F]/10 blur-[180px] ${className}`}
    />
  );
}