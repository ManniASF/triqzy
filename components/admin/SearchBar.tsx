"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search wallet or X username..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-[#101010]
      px-5
      py-4
      text-white
      outline-none
      transition
      focus:border-[#00C805]
      "
    />
  );
}