import { supabaseAdmin } from "@/Lib/supabase-admin";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { data } = await supabaseAdmin
    .from("allowlist")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-[#070707] px-8 py-14 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black">
              TRIQZY Admin
            </h1>

            <p className="mt-2 text-zinc-400">
              Genesis FCFS Dashboard
            </p>
          </div>

          <div className="rounded-2xl border border-[#00C805]/20 bg-[#101010] px-6 py-4">
            <p className="text-sm text-zinc-400">
              Total Entries
            </p>

            <p className="text-3xl font-black text-[#00C805]">
              {data?.length ?? 0}
            </p>
          </div>

        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-5 text-left">X Username</th>
                <th className="px-6 py-5 text-left">Wallet</th>
                <th className="px-6 py-5 text-left">Email</th>
                <th className="px-6 py-5 text-left">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((user) => (
                <tr
                  key={user.id}
                  className="border-t border-white/5 hover:bg-white/[0.03]"
                >
                  <td className="px-6 py-5">
                    @{user.x_username}
                  </td>

                  <td className="px-6 py-5 font-mono text-sm">
                    {user.wallet}
                  </td>

                  <td className="px-6 py-5">
                    {user.email || "-"}
                  </td>

                  <td className="px-6 py-5 text-zinc-400">
                    {new Date(user.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}