"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../Lib-temp/supabase";

const MAX_SPOTS = 500;

export default function AllowlistCounter() {
  const [claimed, setClaimed] = useState(0);

  useEffect(() => {
    loadCount();

    const channel = supabase
      .channel("allowlist-counter")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "allowlist",
        },
        () => {
          loadCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function loadCount() {
    const { count } = await supabase
      .from("allowlist")
      .select("*", {
        head: true,
        count: "exact",
      });

    setClaimed(count ?? 0);
  }

  const remaining = MAX_SPOTS - claimed;

  return (
    <div className="mb-10 rounded-[30px] border border-[#00C805]/20 bg-[#101010] p-8">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Genesis FCFS
          </p>

          <h2 className="mt-2 text-4xl font-black text-white">
            {claimed}
            <span className="text-zinc-500"> / {MAX_SPOTS}</span>
          </h2>
        </div>

        <div className="text-right">
          <p className="text-sm text-zinc-500">
            Spots Left
          </p>

          <p className="text-3xl font-black text-[#00C805]">
            {remaining}
          </p>
        </div>

      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-[#00C805] transition-all duration-700"
          style={{
            width: `${(claimed / MAX_SPOTS) * 100}%`,
          }}
        />

      </div>

    </div>
  );
}