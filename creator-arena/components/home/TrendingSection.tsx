import Link from "next/link";
import React from "react";

const trendingData = [
  {
    id: 1,
    title: "AI Agents",
    category: "Tech • AI",
    growth: "+34%",
    color: "#8b5cf6",
    shadow: "shadow-purple-500/20",
    hoverText: "group-hover:text-[#a78bfa]",
    chartData: [20, 25, 30, 45, 60, 80, 100],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
    )
  },
  {
    id: 2,
    title: "Simulation Games",
    category: "Gaming",
    growth: "+21%",
    color: "#3b82f6",
    shadow: "shadow-blue-500/20",
    hoverText: "group-hover:text-[#3b82f6]",
    chartData: [30, 35, 38, 42, 50, 70, 95],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
    )
  },
  {
    id: 3,
    title: "Hyperpop revival",
    category: "Music",
    growth: "+18%",
    color: "#d946ef",
    shadow: "shadow-fuchsia-500/20",
    hoverText: "group-hover:text-[#d946ef]",
    chartData: [15, 20, 25, 35, 45, 60, 80],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
    )
  },
  {
    id: 4,
    title: "Solo SaaS",
    category: "Creator Business",
    growth: "+15%",
    color: "#f97316",
    shadow: "shadow-orange-500/20",
    hoverText: "group-hover:text-[#f97316]",
    chartData: [10, 15, 25, 30, 45, 65, 85],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
    )
  }
];

export function TrendingSection() {
  return (
    <div className="mt-8">
      
      {/* Header */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <span className="text-[11px] font-black text-[#8a8a99] tracking-widest uppercase mb-1 block">
            Now Trending
          </span>
          <h2 className="text-xl font-bold text-white">What is gaining momentum</h2>
        </div>
        <Link href="/map" className="text-[13px] font-medium text-[#8a8a99] hover:text-white transition-colors flex items-center gap-1">
          Open Relation Map &rarr;
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingData.map((item, i) => (
          <TrendingCard key={item.id} {...item} />
        ))}
      </div>
      
    </div>
  );
}

type TrendingCardProps = {
  title: string;
  category: string;
  growth: string;
  color: string;
  shadow: string;
  hoverText: string;
  icon: React.ReactNode;
  chartData: number[];
};

function TrendingCard({title, category, growth, color, shadow, hoverText, icon, chartData }: Readonly<TrendingCardProps>) {
  return (
    <div className="bg-[#12111a] border border-white/5 rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer group flex flex-col h-full">
      <div className="flex items-start justify-between mb-8">
        
        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg ${shadow}`}
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        
        {/* Growth Badge */}
        <span className="text-[12px] font-bold text-emerald-400 flex items-center gap-0.5 bg-emerald-400/10 px-2 py-1 rounded-md">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
          </svg>
          {growth}
        </span>

      </div>
      
      <div className="mt-auto">
        <h3 className={`text-[15px] font-bold text-white mb-1 transition-colors ${hoverText}`}>
          {title}
        </h3>
        <p className="text-[12px] text-[#8a8a99] font-medium mb-4">
          {category}
        </p>

        {/* Mini Bar Chart */}
        <div className="flex items-end justify-between gap-1 h-6">
          {chartData.map((height, i) => (
            <div
              key={i + 1}
              className="w-full rounded-t-sm opacity-50 transition-opacity group-hover:opacity-100"
              style={{ height: `${height}%`, backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
