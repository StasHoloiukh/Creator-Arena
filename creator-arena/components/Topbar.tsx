"use client";

import { useState } from "react";
import { Search, Flame } from "lucide-react";
import { getLevelData } from "@/lib/xp";

// Mock user progress data (this will come from DB later)
const mockUser = {
    streak: 8,
    totalXp: 1500,
    credits: 152
};

export function Topbar() {
    // Use state to hold the progress, making it reactive and ready for DB integration
    const [progress] = useState(mockUser);

    // Calculate current level and XP progress dynamically
    const levelData = getLevelData(progress.totalXp);

    return (
        <header className="h-17 w-full flex items-center justify-between px-6 border-b border-white/5 bg-[#0a0a0f] sticky top-0 z-30">

            {/* Left: Search */}
            <div className="flex-1">
                <div className="relative w-full max-w-lg">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8a99]" />
                    <input
                        type="text"
                        placeholder="Searching for topics, creators, trends..."
                        className="w-full h-10 bg-[#12111a] border border-white/5 rounded-xl pl-10 pr-12 text-sm text-white placeholder:text-[#8a8a99] focus:outline-none focus:border-white/10 focus:ring-1 focus:ring-white/10 transition-all"
                    />
                </div>
            </div>

            {/* Right: Badges */}
            <div className="flex items-stretch gap-3">

                {/* Streak Badge */}
                <div className="flex items-center gap-1.5 px-3 rounded-full bg-[#12111a] border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)] cursor-pointer hover:bg-white/5 transition-colors group">
                    <Flame size={16} className="text-orange-500 fill-orange-500/20 group-hover:scale-110 transition-transform" />
                    <span className="text-[13px] font-bold text-white group-hover:text-orange-50 transition-colors">{progress.streak}</span>
                </div>

                {/* Level / XP Badge */}
                <div className="flex flex-col px-3 py-1.5 rounded-xl bg-[#12111a] border border-purple-500/20 shadow-[0_0_10px_rgba(167,139,250,0.05)] cursor-pointer hover:bg-white/5 transition-colors min-w-32.5">
                    <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-black text-[#a78bfa] tracking-wider px-5">LVL {levelData.level}</span>
                        <span className="text-[10px] text-[#8a8a99] font-medium">{levelData.totalXp.toLocaleString("en-US")} / {levelData.nextLevelBaseXp.toLocaleString("en-US")} XP</span>
                    </div>

                    <div className="w-full bg-[#272733] rounded-full h-1.5 overflow-hidden">
                        <div
                            className="bg-[#a78bfa] h-1.5 rounded-full shadow-[0_0_8px_rgba(167,139,250,0.5)] relative transition-all duration-500"
                            style={{ width: `${levelData.progressPercentage}%` }}
                        >
                            <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]"></div>
                        </div>
                    </div>
                </div>

                {/* Credits Badge */}
                <div className="flex items-center gap-1.5 px-3 rounded-full bg-[#12111a] border border-yellow-500/20 shadow-[0_0_10px_rgba(250,204,21,0.05)] cursor-pointer hover:bg-white/5 transition-colors group">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)] group-hover:rotate-12 transition-transform">
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
                    </svg>

                    <div className="flex items-center gap-1 text-[13px]">
                        <span className="font-bold text-white">{progress.credits.toLocaleString()}</span>
                        <span className="text-[#8a8a99] font-medium">Credits</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
