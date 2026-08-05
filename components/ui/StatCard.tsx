type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.03]
      p-8
      text-center
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#C3261F]/60
      hover:shadow-[0_25px_80px_rgba(195,38,31,.25)]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#C3261F]/10 via-transparent to-transparent opacity-0 transition duration-500 hover:opacity-100" />

      <div className="relative">

        <h3 className="text-5xl font-black text-white">
          {value}
        </h3>

        <p className="mt-4 text-zinc-400">
          {label}
        </p>

      </div>

    </div>
  );
}