import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">

      <div className="absolute h-[360px] w-[360px] rounded-full bg-[#8F1D1D]/20 blur-[120px]" />

      <Image
        src="/images/triqzy.png"
        alt="TRIQZY"
        width={460}
        height={460}
        priority
        className="
          relative
          z-10
          select-none
          object-contain
          drop-shadow-[0_30px_80px_rgba(0,0,0,.55)]
        "
      />

    </div>
  );
}