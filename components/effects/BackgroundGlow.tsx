export default function BackgroundGlow() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">

        <div className="absolute left-[-200px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#9F2A24]/12 blur-[180px]" />

        <div className="absolute right-[-200px] top-[300px] h-[450px] w-[450px] rounded-full bg-purple-500/8 blur-[200px]" />

        <div className="absolute bottom-[-150px] left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[220px]" />

      </div>
    </>
  );
}