"use client";

import { useState } from "react";
import { Flame, Trophy } from "lucide-react";

export default function ArenaPage() {
    const [streak] = useState(7);
    const [rating] = useState(1749);
    const [activeMode, setActiveMode] = useState("Vote Mode");

    const modes = ["Vote Mode", "Prediction Mode","Category Ladder", "Competitive"];

    let modeTitle = "";
    let modeDescription = "";

    // Глянути режими гри
    switch (activeMode) {
        case "Vote Mode":
            modeTitle = "What is objectively better?";
            modeDescription = "Choose honestly — there is no right answer";
            break;
        case "Prediction Mode":
            modeTitle = "What will the community choose?";
            modeDescription = "Guess the majority's choice to earn a Prediction Rating";
            break;
        case "Category Ladder":
            modeTitle = "Do you want to become better in one category?";
            modeDescription = "Improve your skills in a specific category";
            break;
         case "Competitive":
            modeTitle = "Do you want to be the best of the best ?";
            modeDescription = "Level up your guessing skills and be the best.";
            break;
    }

    return (
        <div className="flex flex-col h-[calc(100vh-6.75rem)] sm:h-[calc(100vh-4.25rem)] w-full max-w-350 mx-auto px-3 sm:px-6 lg:px-8 pb-2 sm:pb-6 md:pb-8 overflow-hidden animate-slide-up">
            {/* Header Section */}
            <div className="flex justify-between items-start pt-1.5 sm:pt-4 md:pt-5 shrink-0">
                <div className="max-w-2xl">
                    <span className="text-[9px] sm:text-[10px] font-black text-[#a78bfa] tracking-widest uppercase mb-0.5 sm:mb-1.5 block">Play</span>
                    <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Creator Arena</h1>
                    <p className="text-[#8a8a99] text-[11px] sm:text-[13px] md:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                        One click is one valuable signal. Vote Mode gathers honest preference data, while Prediction Mode tests your ability to read the crowd.
                    </p>
                </div>
                {activeMode === "Competitive" && (
                    <div className="flex gap-2 sm:gap-3">
                        {/* Streak Badge */}
                        <div className="flex flex-col items-center justify-center bg-[#12111a] border border-white/5 rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-1.5 sm:py-2 min-w-16 sm:min-w-20 shadow-lg transition-transform hover:scale-105">
                            <span className="text-[8px] sm:text-[9px] font-bold text-[#8a8a99] uppercase tracking-wider mb-0.5">Streak</span>
                            <div className="flex items-center gap-1 sm:gap-1.5">
                                <Flame size={14} className="text-orange-500 fill-orange-500/20 sm:w-4 sm:h-4" />
                                <span className="text-sm sm:text-base md:text-lg font-bold text-white">{streak}</span>
                            </div>
                        </div>
                        {/* Rating Badge */}
                        <div className="flex flex-col items-center justify-center bg-[#12111a] border border-white/5 rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-1.5 sm:py-2 min-w-16 sm:min-w-20 shadow-lg transition-transform hover:scale-105">
                            <span className="text-[8px] sm:text-[9px] font-bold text-[#8a8a99] uppercase tracking-wider mb-0.5">Rating</span>
                            <div className="flex items-center gap-1 sm:gap-1.5">
                                <Trophy size={13} className="text-[#8b5cf6] fill-[#8b5cf6]/20 sm:w-3.5 sm:h-3.5" />
                                <span className="text-sm sm:text-base md:text-lg font-bold text-white">{rating.toLocaleString('uk-UA')}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation Tabs */}
            <div className="mt-3 sm:mt-4 flex flex-col gap-3 shrink-0">
                {/* Modes */}
                <div className="flex gap-1 p-1 bg-[#12111a] border border-white/5 rounded-full w-fit max-w-full overflow-x-auto">
                    {modes.map((mode) => (
                        <button
                            key={mode}
                            onClick={() => setActiveMode(mode)}
                            className={`px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-300 ${activeMode === mode
                                ? "bg-white/10 text-white shadow-md"
                                : "text-[#8a8a99] hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {mode}
                        </button>
                    ))}
                </div>
            </div>

            {/* Arena Main Area */}
            <div className="flex-1 mt-2 sm:mt-4 flex flex-col items-center relative min-h-0">
                <div className="text-center mb-2 sm:mb-3 shrink-0">
                    <span className="text-[9px] sm:text-[10px] font-black text-[#8a8a99] tracking-[0.2em] uppercase block">{activeMode}</span>
                </div>

                <div className="flex w-full max-w-5xl items-stretch justify-center gap-3 sm:gap-4 md:gap-6 relative flex-1 min-h-0 pb-1">
                    {/* Option A */}
                    <div className="flex-1 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-linear-to-b from-[#192b45] to-[#0a0a0f] border border-white/5 relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-2 group cursor-pointer flex flex-col">
                        <div className="absolute top-[20%] right-[25%] w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 rounded-full bg-yellow-400/60 shadow-[0_0_80px_rgba(250,204,21,0.6)] blur-2xl sm:blur-3xl group-hover:scale-125 group-hover:bg-yellow-400/80 transition-all duration-700" />

                        <div className="absolute top-[25%] right-[30%] w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full bg-[#fac748] shadow-[0_0_30px_rgba(250,204,21,0.5)] group-hover:scale-110 transition-all duration-500" />

                        <div className="mt-auto p-3.5 sm:p-5 md:p-6 relative z-10 bg-linear-to-t from-black/90 via-black/40 to-transparent">
                            <span className="text-[8px] sm:text-[9px] font-black text-blue-400 tracking-widest uppercase mb-1 sm:mb-2 block">Option A</span>
                            <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-black text-white leading-tight mb-2 sm:mb-3 drop-shadow-lg uppercase">I Survived<br />100 Days</h3>
                            <div className="flex flex-col gap-1 sm:gap-1.5 bg-black/20 p-2.5 sm:p-3 md:p-3.5 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/5 group-hover:bg-black/30 transition-colors">
                                <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-white/90">Minimal • high contrast</span>
                                <span className="text-[8px] sm:text-[9px] md:text-[10px] text-[#8a8a99]">Click to vote • Identity hidden</span>
                            </div>
                        </div>
                    </div>

                    {/* VS Badge */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 pointer-events-none">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#12111a] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)] mb-1 sm:mb-1.5 backdrop-blur-md">
                            <span className="text-xs sm:text-sm md:text-base font-black text-white">VS</span>
                        </div>
                        <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold text-[#8a8a99] uppercase tracking-widest">choose</span>
                    </div>

                    {/* Option B */}
                    <div className="flex-1 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-linear-to-b from-[#311c1c] to-[#0a0a0f] border border-white/5 relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-red-500/30 hover:-translate-y-2 group cursor-pointer flex flex-col">
                        <div className="absolute top-[25%] left-[30%] w-20 sm:w-30 md:w-36 h-20 sm:h-30 md:h-36 rounded-full bg-[#f97316]/50 shadow-[0_0_80px_rgba(249,115,22,0.4)] blur-2xl sm:blur-3xl group-hover:scale-125 group-hover:bg-[#f97316]/70 transition-all duration-700" />

                        <div className="absolute top-[30%] left-[35%] w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 rounded-full bg-[#f95738] shadow-[0_0_30px_rgba(249,115,22,0.5)] group-hover:scale-110 transition-all duration-500" />

                        <div className="mt-auto p-3.5 sm:p-5 md:p-6 relative z-10 bg-linear-to-t from-black/90 via-black/40 to-transparent">
                            <span className="text-[8px] sm:text-[9px] font-black text-red-400 tracking-widest uppercase mb-1 sm:mb-2 block">Option B</span>
                            <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-black text-white leading-tight mb-2 sm:mb-3 drop-shadow-lg uppercase">100 Days = 100<br />Bosses</h3>
                            <div className="flex flex-col gap-1 sm:gap-1.5 bg-black/20 p-2.5 sm:p-3 md:p-3.5 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/5 group-hover:bg-black/30 transition-colors">
                                <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-white/90">Text-heavy • action</span>
                                <span className="text-[8px] sm:text-[9px] md:text-[10px] text-[#8a8a99]">Click to vote • Identity hidden</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mode Question / Description */}
                <div className="text-center pt-2 pb-1 shrink-0">
                    <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-white tracking-tight mb-0.5 sm:mb-1">{modeTitle}</h2>
                    <p className="text-[#8a8a99] text-[11px] sm:text-[12px] md:text-[13px]">{modeDescription}</p>
                </div>
            </div>
        </div>
    );
}
