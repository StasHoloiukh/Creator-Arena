import Link from "next/link";
import { Flame } from "lucide-react";

const mockData = {
  streak: 8,
  dailyArena: {
    current: 5,
    total: 10,
    rewardXP: 60,
    rewardCredits: 15
  }
};

export function DailyPulseCard() {
  const data = mockData;
  const roundsLeft = data.dailyArena.total - data.dailyArena.current;
  const progressPercentage = (data.dailyArena.current / data.dailyArena.total) * 100;
  
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="bg-[#12111a] rounded-3xl border border-white/5 p-6 relative flex flex-col h-full min-h-80">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="text-[11px] font-black text-[#8a8a99] tracking-widest uppercase mb-1 block">
            Daily Pulse
          </span>
          <h2 className="text-[16px] font-bold text-white">Your streak today</h2>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1a1825] border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
          <Flame size={14} className="text-orange-500 fill-orange-500/20" />
          <span className="text-[12px] font-bold text-white">{data.streak} days</span>
        </div>
      </div>

      {/* Progress Section */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-5 mb-6">
          
          <div className="relative w-30 h-30 shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r={radius} fill="none" stroke="#272733" strokeWidth="8" />
              <circle
                cx="40" cy="40" r={radius}
                fill="none" stroke="#8b5cf6" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-[20px] font-extrabold text-white leading-none tracking-tight">
                {data.dailyArena.current}
                <span className="text-[14px] font-bold text-[#8a8a99]">/{data.dailyArena.total}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[16px] font-bold text-white">
              Yet {roundsLeft} rapid rounds
            </span>
            <span className="text-[13px] text-[#8a8a99] font-medium">
              Award: +{data.dailyArena.rewardCredits} Credits • +{data.dailyArena.rewardXP} XP
            </span>
          </div>

        </div>
      </div>

      <Link
        href="/arena"
        className="w-full py-3.5 rounded-xl bg-[#1a1825] border border-white/5 text-center text-[14px] font-bold text-white hover:bg-[#222030] transition-colors mt-auto shadow-sm"
      >
        Finish Daily Arena
      </Link>
    </div>
  );
}
