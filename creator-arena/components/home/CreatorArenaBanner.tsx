import Link from "next/link";
import { Flame } from "lucide-react";

export function CreatorArenaBanner() {
  return (
    <div className="xl:col-span-2 bg-[#12111a] rounded-3xl border border-white/5 p-6 sm:p-8 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start justify-between min-h-80">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] bottom-[-20%] w-[50%] h-[60%] bg-[#8b5cf6]/10 blur-[100px] rounded-full" />
      </div>

      {/* Left Content */}
      <div className="flex-1 relative z-10 max-w-lg pt-1">
        <span className="text-[11px] font-black tracking-widest uppercase mb-4 block">
          Creator <span className="text-[#a78bfa]">Arena</span>
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] mb-4">
          Play online. <br />
          <span className="text-[#a78bfa]">Understand what wins.</span>
        </h1>

        <p className="text-[14px] text-[#8a8a99] mb-6 leading-relaxed max-w-[90%] font-medium">
          Quick duels, predictions, and creator quizzes transform into a live map of preferences—without exchanging external views.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/arena"
            className="px-6 py-3.5 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[15px] font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            Enter the Arena
          </Link>
          <Link
            href="/lab"
            className="px-6 py-3.5 rounded-xl bg-transparent border border-white/10 hover:bg-white/5 text-white text-[15px] font-bold transition-colors"
          >
            Create a test
          </Link>
        </div>
      </div>

      {/* Right Floating Cards Demo */}
      <div className="relative mt-12 md:mt-0 w-full md:w-80 h-60 md:h-full shrink-0 flex items-center justify-center md:justify-end pointer-events-none z-10">
        
        {/* Card A (Blue) */}
        <div className="absolute right-[45%] md:right-36 top-[10%] md:top-auto z-10 w-32 sm:w-36 h-52 bg-linear-to-b from-[#192b45] to-[#0a0a0f] border border-white/10 rounded-2xl p-4 flex flex-col justify-end shadow-[0_10px_40px_rgba(0,0,0,0.5)] -rotate-6 transform hover:rotate-0 transition-transform origin-bottom-right">
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#3b82f6]/30 blur-[28px] rounded-full" />
          
          <div className="relative z-10">
            <p className="text-[8px] font-bold text-white/50 tracking-wider mb-1">THUMBNAIL A</p>
            <h3 className="text-white font-black text-[15px] leading-tight mb-1.5">AI GAME <br /> IN 7 DAYS</h3>
          </div>

          <div className="absolute -bottom-3 left-3 bg-[#12111a] border border-white/10 rounded-xl px-2 py-1 flex flex-col shadow-xl">
            <span className="text-[10px] text-white font-bold flex items-center gap-1">
              <Flame size={10} className="text-orange-500 fill-orange-500/20" /> 78%
            </span>
            <span className="text-[8px] text-[#8a8a99] mt-0.5 px-0.5">accuracy</span>
          </div>
        </div>

        {/* VS Badge */}
        <div className="absolute right-[38%] md:right-32 top-[50%] md:top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#12111a] border border-white/10 flex items-center justify-center text-[9px] font-black text-white shadow-xl">
          VS
        </div>

        {/* Card B (Purple/Orange) */}
        <div className="absolute right-0 top-[25%] md:top-auto z-0 w-32 sm:w-36 h-52 bg-linear-to-b from-[#311c3a] to-[#0a0a0f] border border-white/10 rounded-2xl p-4 flex flex-col justify-end shadow-[0_10px_40px_rgba(0,0,0,0.5)] rotate-6 transform hover:rotate-0 transition-transform origin-bottom-left">
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange-500/20 blur-[28px] rounded-full" />
          
          <div className="absolute -top-3 right-3 bg-[#12111a] border border-white/10 rounded-xl px-2 py-1 flex flex-col items-center shadow-xl">
            <span className="text-[11px] text-white font-black">+12</span>
            <span className="text-[8px] text-[#8a8a99] mt-0.5">streak</span>
          </div>

          <div className="relative z-10">
            <p className="text-[8px] font-bold text-white/50 tracking-wider mb-1">THUMBNAIL B</p>
            <h3 className="text-white font-black text-[15px] leading-tight mb-2">I LET AI <br /> BUILD IT</h3>
            <p className="text-[12px] font-bold text-white">38%</p>
          </div>
        </div>

      </div>
    </div>
  );
}
