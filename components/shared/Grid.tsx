type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Grid({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {children}
    </div>
  );
}