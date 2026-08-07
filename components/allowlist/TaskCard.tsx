"use client";

import { Check, ExternalLink } from "lucide-react";

type Props = {
  completedTasks: number;
  setCompletedTasks: React.Dispatch<React.SetStateAction<number>>;
};

const tasks = [
  {
    title: "Follow @TRIQZY",
    action: "Follow",
    link: "https://x.com/triqzy_nfts",
  },
  {
    title: "Like the pinned post",
    action: "Like",
    link: "https://x.com/triqzy_nfts",
  },
  {
    title: "Repost the pinned post",
    action: "Repost",
    link: "https://x.com/triqzy_nfts",
  },
  {
    title: "Join Telegram",
    action: "Join",
    link: "https://t.me/TRIQZY",
  },
];

export default function TaskCard({
  completedTasks,
  setCompletedTasks,
}: Props) {
  const completed = Array(tasks.length)
    .fill(false)
    .map((_, index) => index < completedTasks);

  const verifyTask = (index: number) => {
    if (index === completedTasks) {
      setCompletedTasks((prev) => prev + 1);
    }
  };

  return (
    <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8">
      {/* Header */}

      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-black">
            Complete Tasks
          </h3>

          <span className="rounded-full bg-[#00C805]/10 px-4 py-2 font-bold text-[#00C805]">
            {completedTasks}/{tasks.length}
          </span>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#00C805] transition-all duration-500"
            style={{
              width: `${(completedTasks / tasks.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="space-y-5">
        {tasks.map((task, index) => (
          <div
            key={task.title}
            className={`rounded-2xl border p-5 transition-all ${
              completed[index]
                ? "border-[#00C805]/40 bg-[#00C805]/5"
                : "border-white/5 bg-black/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                    completed[index]
                      ? "bg-[#00C805] text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {completed[index] ? (
                    <Check size={18} />
                  ) : (
                    index + 1
                  )}
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    {task.title}
                  </h4>

                  <p className="text-sm text-zinc-500">
                    Required
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={task.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#00C805]/30 px-4 py-2 text-sm font-semibold text-[#00C805] transition hover:bg-[#00C805] hover:text-black"
                >
                  {task.action}

                  <ExternalLink
                    size={14}
                    className="ml-2 inline"
                  />
                </a>

                <button
                  disabled={completed[index] || index !== completedTasks}
                  onClick={() => verifyTask(index)}
                  className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                    completed[index]
                      ? "bg-[#00C805] text-black"
                      : index === completedTasks
                      ? "bg-white text-black hover:bg-[#00C805]"
                      : "cursor-not-allowed bg-white/10 text-zinc-500"
                  }`}
                >
                  {completed[index] ? "Verified" : "Verify"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}