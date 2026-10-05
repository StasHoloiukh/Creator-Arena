"use client";

import Link from "next/link";
import { ArrowUpRight, Music, Radio } from "lucide-react";

export function DashboardWidgets() {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* QUICK BATTLE */}
      <div className="bg-[#12111a] border border-white/5 rounded-3xl p-6 relative flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[11px] font-black text-[#8a8a99] tracking-widest uppercase mb-1 block">
              Quick Battle
            </span>
            <h2 className="text-[16px] font-bold text-white">What will you press?</h2>
          </div>
          <span className="text-[11px] font-bold text-[#8a8a99] bg-white/5 px-3 py-1.5 rounded-full">
            Gaming
          </span>
        </div>

        <div className="flex-1 flex items-stretch justify-between relative mt-2 pb-1">
          {/* Card A */}
          <Link href='/arena' className="w-[48%] flex flex-col group">
            <div className="w-full flex-1 rounded-2xl bg-linear-to-b from-[#192b45] to-[#0a0a0f] border border-white/5 relative overflow-hidden shadow-lg transition-all duration-300 group-hover:border-white/40 group-hover:-translate-y-1">
              <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
              <div className="absolute bottom-4 left-0 w-full text-center">
                <p className="text-[11px] font-black text-white/90 tracking-wider drop-shadow-md">I SURVIVED 100 DAYS</p>
              </div>
            </div>
            <p className="text-[10px] font-medium text-[#8a8a99] text-center mt-3">A • Minimal • high contrast</p>
          </Link>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-80%] text-[12px] font-black text-[#8a8a99] bg-[#12111a] px-2 py-1 rounded-full z-10 border border-white/5">
            VS
          </div>

          {/* Card B */}
          <Link href='/arena' className="w-[48%] flex flex-col group">
            <div className="w-full flex-1 rounded-2xl bg-linear-to-b from-[#311c1c] to-[#0a0a0f] border border-white/5 relative overflow-hidden shadow-lg transition-all duration-300 group-hover:border-white/40 group-hover:-translate-y-1">
              <div className="absolute top-5 left-5 w-9 h-9 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
              <div className="absolute bottom-4 left-0 w-full text-center">
                <p className="text-[11px] font-black text-white/90 tracking-wider leading-tight drop-shadow-md">100 DAYS = 100<br />BOSSES</p>
              </div>
            </div>
            <p className="text-[10px] font-medium text-[#8a8a99] text-center mt-3">B • Text-heavy • action</p>
          </Link>
        </div>
      </div>

      {/* YOUR SIGNALS */}
      <div className="bg-[#12111a] border border-white/5 rounded-3xl p-6 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[11px] font-black text-[#8a8a99] tracking-widest uppercase mb-1 block">
              Your Signals
            </span>
            <h2 className="text-[16px] font-bold text-white">Most powerful inside info</h2>
          </div>
          <span className="text-[#8a8a99] hover:text-white cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M9 21v-9" /><path d="M21 3l-9 9" /></svg>
          </span>
        </div>

        <div className="flex flex-col gap-5 mt-2">
          {/* Signal 1 */}
          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-[#1a1825] flex items-center justify-center text-[#a78bfa]">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-[13px] font-bold text-white">Minimal thumbnails</h3>
              <p className="text-[11px] text-[#8a8a99]">winning text-heavy у Gaming</p>
            </div>
            <span className="text-[13px] font-bold text-emerald-400">+18%</span>
          </div>

          {/* Signal 2 */}
          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-[#1a1825] flex items-center justify-center text-[#a78bfa]">
              <Music size={18} strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-[13px] font-bold text-white">8-12s hooks</h3>
              <p className="text-[11px] text-[#8a8a99]">better kept in Electronic</p>
            </div>
            <span className="text-[13px] font-bold text-emerald-400">+11%</span>
          </div>

          {/* Signal 3 */}
          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-[#1a1825] flex items-center justify-center text-[#a78bfa]">
              <Radio size={18} strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-[13px] font-bold text-white">AI Agents</h3>
              <p className="text-[11px] text-[#8a8a99]"> rapidly converging with game development</p>
            </div>
            <span className="text-[13px] font-bold text-emerald-400">0.82</span>
          </div>
        </div>
      </div>

      {/* MY CAMPAIGNS */}
      <div className="bg-[#12111a] border border-white/5 rounded-3xl p-6 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[11px] font-black text-[#8a8a99] tracking-widest uppercase mb-1 block">
              My Campaigns
            </span>
            <h2 className="text-[16px] font-bold text-white">Активні тести</h2>
          </div>
          <Link href="/campaigns" className="text-[12px] font-medium text-[#8a8a99] hover:text-white transition-colors">
            All &rarr;
          </Link>
        </div>

        <div className="flex flex-col gap-6 mt-2">
          {/* Campaign 1 */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[13px] font-bold text-white">
                AI game — thumbnail <span className="text-[11px] text-[#8a8a99] font-medium ml-1">Thumbnail</span>
              </h3>
              <span className="text-[10px] font-bold text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded-full">live</span>
            </div>
            <div className="h-1.5 w-full bg-[#1a1825] rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-[90%]" />
            </div>
          </div>

          {/* Campaign 2 */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[13px] font-bold text-white">
                Launch title v3 <span className="text-[11px] text-[#8a8a99] font-medium ml-1">Title</span>
              </h3>
              <span className="text-[10px] font-bold text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded-full">live</span>
            </div>
            <div className="h-1.5 w-full bg-[#1a1825] rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-[60%]" />
            </div>
          </div>

          {/* Campaign 3 */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[13px] font-bold text-white">
                Night Drive hook <span className="text-[11px] text-[#8a8a99] font-medium ml-1">Music</span>
              </h3>
              <span className="text-[10px] font-bold text-[#8a8a99] border border-white/10 px-2 py-0.5 rounded-full">done</span>
            </div>
            <div className="h-1.5 w-full bg-[#1a1825] rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-full" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
