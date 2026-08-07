"use client";

import { useState } from "react";
import { supabase } from "@/Lib-temp/supabase";
import SuccessModal from "./SuccessModal";

type Props = {
  completedTasks: number;
};

export default function SubmissionForm({ completedTasks }: Props) {
  const [xUsername, setXUsername] = useState("");
  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const allTasksCompleted = completedTasks === 4;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!allTasksCompleted) {
      alert("Complete all required tasks first.");
      return;
    }

    if (!xUsername.trim()) {
      alert("Please enter your X username.");
      return;
    }

    if (!wallet.startsWith("0x") || wallet.length !== 42) {
      alert("Please enter a valid wallet address.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("allowlist")
      .insert([
        {
          x_username: xUsername.trim(),
          wallet: wallet.trim(),
          email: email.trim() || null,
        },
      ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setSuccess(true);

    setXUsername("");
    setWallet("");
    setEmail("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="rounded-[30px] border border-white/5 bg-[#101010] p-8"
      >
        <h3 className="text-3xl font-black text-white">
          Submit Entry
        </h3>

        <p className="mt-2 text-zinc-400">
          Complete all tasks before submitting your wallet.
        </p>

        <div className="mt-6 rounded-2xl border border-[#00C805]/20 bg-[#00C805]/10 p-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">
              Progress
            </span>

            <span className="font-bold text-[#00C805]">
              {completedTasks}/4
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-6">

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-300">
              X Username
            </label>

            <input
              type="text"
              value={xUsername}
              onChange={(e) => setXUsername(e.target.value)}
              placeholder="@yourusername"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-[#00C805]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-300">
              Wallet Address
            </label>

            <input
              type="text"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              placeholder="0x..."
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-[#00C805]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-300">
              Email (Optional)
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-[#00C805]"
            />
          </div>

          <button
            type="submit"
            disabled={!allTasksCompleted || loading}
            className={`w-full rounded-2xl py-4 text-lg font-bold transition-all duration-300 ${
              allTasksCompleted
                ? "bg-[#00C805] text-black hover:scale-[1.02]"
                : "cursor-not-allowed bg-zinc-700 text-zinc-400"
            }`}
          >
            {loading
              ? "Submitting..."
              : allTasksCompleted
              ? "Submit Entry"
              : `Complete ${
                  4 - completedTasks
                } More Task${4 - completedTasks > 1 ? "s" : ""}`}
          </button>

        </div>
      </form>

      <SuccessModal
        open={success}
        onClose={() => setSuccess(false)}
      />
    </>
  );
}