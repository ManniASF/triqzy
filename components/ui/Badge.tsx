type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#C3261F]/30 bg-[#C3261F]/10 px-4 py-1 text-sm font-medium text-[#E33831]">
      {children}
    </span>
  );
}