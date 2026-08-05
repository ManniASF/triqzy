export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex">

      <span className="mb-4 text-[11px] uppercase tracking-[0.45em] text-zinc-500">
        Scroll to Explore
      </span>

      <div className="relative flex h-16 w-px justify-center bg-white/10">

        <div className="absolute h-3 w-3 rounded-full bg-white/60 animate-bounce" />

      </div>

    </div>
  );
}