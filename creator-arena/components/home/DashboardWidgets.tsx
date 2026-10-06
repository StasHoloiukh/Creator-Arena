"use client";

import Link from "next/link";
import { getCategoryStyle } from "@/lib/categoryStyles";

const mockSignals = [
  {
    id: 1,
    title: "Minimal thumbnails",
    subtitle: "winning text-heavy in Gaming",
    value: "+18%",
    category: "Gaming"
  },
  {
    id: 2,
    title: "8-12s hooks",
    subtitle: "better kept in Electronic",
    value: "+11%",
    category: "Music"
  },
  {
    id: 3,
    title: "AI Agents",
    subtitle: "rapidly converging with game development",
    value: "0.82",
    category: "Tech & AI"
  }
];

export function DashboardWidgets() {
  return (
    <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">

      {/* QUICK BATTLE */}
      <div className="bg-[#12111a] border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6 relative flex flex-col min-h-[300px] sm:min-h-[350px]">
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-black text-[#8a8a99] tracking-widest uppercase mb-1 block">
              Quick Battle
            </span>
            <h2 className="text-[15px] sm:text-[16px] font-bold text-white">What will you press?</h2>
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#8a8a99] bg-white/5 px-3 py-1.5 rounded-full">
            Gaming
          </span>
        </div>

        <div className="flex-1 flex items-stretch justify-between relative mt-2 pb-1">
          {/* Card A */}
          <Link href='/arena' className="w-[48%] flex flex-col group">
            <div className="w-full flex-1 rounded-2xl bg-linear-to-b from-[#192b45] to-[#0a0a0f] border border-white/5 relative overflow-hidden shadow-lg transition-all duration-300 group-hover:border-white/40 group-hover:-translate-y-1">
              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
              <div className="absolute bottom-3 sm:bottom-4 left-0 w-full text-center px-1">
                <p className="text-[10px] sm:text-[11px] font-black text-white/90 tracking-wider drop-shadow-md leading-tight">I SURVIVED<br className="sm:hidden" /> 100 DAYS</p>
              </div>
            </div>
            <p className="text-[9px] sm:text-[10px] font-medium text-[#8a8a99] text-center mt-2 sm:mt-3 px-1 leading-tight">A • Minimal • high contrast</p>
          </Link>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-80%] text-[10px] sm:text-[12px] font-black text-[#8a8a99] bg-[#12111a] px-2 py-1 rounded-full z-10 border border-white/5">
            VS
          </div>

          {/* Card B */}
          <Link href='/arena' className="w-[48%] flex flex-col group">
            <div className="w-full flex-1 rounded-2xl bg-linear-to-b from-[#311c1c] to-[#0a0a0f] border border-white/5 relative overflow-hidden shadow-lg transition-all duration-300 group-hover:border-white/40 group-hover:-translate-y-1">
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
              <div className="absolute bottom-3 sm:bottom-4 left-0 w-full text-center px-1">
                <p className="text-[10px] sm:text-[11px] font-black text-white/90 tracking-wider leading-tight drop-shadow-md">100 DAYS = 100<br />BOSSES</p>
              </div>
            </div>
            <p className="text-[9px] sm:text-[10px] font-medium text-[#8a8a99] text-center mt-2 sm:mt-3 px-1 leading-tight">B • Text-heavy • action</p>
          </Link>
        </div>
      </div>

      {/* YOUR SIGNALS */}
      <div className="bg-[#12111a] border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col">
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-black text-[#8a8a99] tracking-widest uppercase mb-1 block">
              Your Signals
            </span>
            <h2 className="text-[15px] sm:text-[16px] font-bold text-white">Actual news</h2>
          </div>
          <Link href="/news" className="text-[#8a8a99] hover:text-white cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M9 21v-9" /><path d="M21 3l-9 9" /></svg>
          </Link>
        </div>

        <div className="flex flex-col gap-5 mt-2">
          {mockSignals.map((signal) => {
            const style = getCategoryStyle(signal.category);
            return (
              <Link href='/news' key={signal.id} className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
                <div
                  className="w-10 h-10 rounded-xl bg-[#1a1825] flex items-center justify-center"
                  style={{ color: style.color }}
                  
                >
                  {style.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[12px] sm:text-[13px] font-bold text-white truncate">{signal.title}</h3>
                  <p className="text-[10px] sm:text-[11px] text-[#8a8a99] truncate">{signal.subtitle}</p>
                </div>
                <span className="text-[12px] sm:text-[13px] font-bold text-emerald-400 whitespace-nowrap ml-2">{signal.value}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* MY CAMPAIGNS */}
      <div className="bg-[#12111a] border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col md:col-span-2 xl:col-span-1">
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-black text-[#8a8a99] tracking-widest uppercase mb-1 block">
              My Campaigns
            </span>
            <h2 className="text-[15px] sm:text-[16px] font-bold text-white">Active tests</h2>
          </div>
          <Link href="/lab" className="text-[12px] font-medium text-[#8a8a99] hover:text-white transition-colors">
            All &rarr;
          </Link>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 mt-2">
          {/* Campaign 1 */}
          <div>
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h3 className="text-[12px] sm:text-[13px] font-bold text-white truncate pr-2">
                AI game — thumbnail <span className="text-[10px] sm:text-[11px] text-[#8a8a99] font-medium ml-1 hidden sm:inline">Thumbnail</span>
              </h3>
              <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded-full shrink-0">live</span>
            </div>
            <div className="h-1.5 w-full bg-[#1a1825] rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-[90%]" />
            </div>
          </div>

          {/* Campaign 2 */}
          <div>
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h3 className="text-[12px] sm:text-[13px] font-bold text-white truncate pr-2">
                Launch title v3 <span className="text-[10px] sm:text-[11px] text-[#8a8a99] font-medium ml-1 hidden sm:inline">Title</span>
              </h3>
              <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded-full shrink-0">live</span>
            </div>
            <div className="h-1.5 w-full bg-[#1a1825] rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-[60%]" />
            </div>
          </div>

          {/* Campaign 3 */}
          <div>
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h3 className="text-[12px] sm:text-[13px] font-bold text-white truncate pr-2">
                Night Drive hook <span className="text-[10px] sm:text-[11px] text-[#8a8a99] font-medium ml-1 hidden sm:inline">Music</span>
              </h3>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#8a8a99] border border-white/10 px-2 py-0.5 rounded-full shrink-0">done</span>
            </div>
            <div className="h-1.5 w-full bg-[#1a1825] rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-full" />
            </div>
          </div>

            {/* Campaign 4 */}
          <div>
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h3 className="text-[12px] sm:text-[13px] font-bold text-white truncate pr-2">
                Fc 27 vs eFootball <span className="text-[10px] sm:text-[11px] text-[#8a8a99] font-medium ml-1 hidden sm:inline">Gaming</span>
              </h3>
              <span className="text-[9px] sm:text-[10px] font-bold text-yellow-500 border border-yellow-500/30 px-2 py-0.5 rounded-full shrink-0">draft</span>
            </div>
            <div className="h-1.5 w-full bg-[#1a1825] rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-[0%]" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
