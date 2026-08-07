"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SuccessModal({
  open,
  onClose,
}: Props) {
  useEffect(() => {
    if (!open) return;

    confetti({
      particleCount: 180,
      spread: 90,
      origin: {
        y: 0.65,
      },
    });
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-[92%] max-w-lg rounded-[32px] border border-[#00C805]/20 bg-[#101010] p-10 text-center shadow-[0_30px_100px_rgba(0,200,5,.15)]">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#00C805]/15 text-5xl">
          🎉
        </div>

        <h2 className="mt-8 text-4xl font-black text-white">
          You're In!
        </h2>

        <p className="mt-5 leading-8 text-zinc-400">
          Your wallet has been successfully submitted for the
          <span className="font-semibold text-white">
            {" "}TRIQZY Genesis FCFS Allowlist.
          </span>

          <br />
          <br />

          Our team will verify your completed tasks and notify successful
          participants before mint.
        </p>

        <button
          onClick={onClose}
          className="mt-10 w-full rounded-2xl bg-[#00C805] py-4 text-lg font-black text-black transition-all duration-300 hover:scale-[1.02]"
        >
          Continue 🚀
        </button>

      </div>

    </div>
  );
}