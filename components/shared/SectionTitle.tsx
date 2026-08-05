interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.45em] text-[#d54234]">
        {eyebrow}
      </p>

      <h2 className="mx-auto max-w-5xl text-5xl font-black leading-none text-white md:text-7xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}