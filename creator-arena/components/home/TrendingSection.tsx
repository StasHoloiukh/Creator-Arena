import Link from "next/link";
import { getCategoryStyle, DEFAULT_CATEGORY_STYLE } from "@/lib/categoryStyles";

const trendingData = [
  {
    id: 1,
    title: "AI Agents",
    category: "Tech & AI",
    growth: 34,
    chartData: [20, 25, 30, 45, 60, 80, 100]
  },
  {
    id: 2,
    title: "Simulation Games",
    category: "Gaming",
    growth: 21,
    chartData: [30, 35, 38, 42, 50, 70, 95]
  },
  {
    id: 3,
    title: "Hyperpop revival",
    category: "Music",
    growth: 18,
    chartData: [15, 20, 25, 35, 45, 60, 80]
  },
  {
    id: 4,
    title: "Solo SaaS",
    category: "Creator Business",
    growth: 15,
    chartData: [10, 15, 25, 30, 45, 65, 85]
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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {trendingData.map((item) => (
          <TrendingCard key={item.id} {...item} />
        ))}
      </div>

    </div>
  );
}

type TrendingCardProps = {
  id: number;
  title: string;
  category: string;
  growth: number;
  chartData: number[];
};

function TrendingCard({ title, category, growth, chartData }: Readonly<TrendingCardProps>) {
  const style = category === "Loading..." ? DEFAULT_CATEGORY_STYLE : getCategoryStyle(category);

  return (
    <div className="bg-[#12111a] border border-white/5 rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer group flex flex-col h-full">
      <div className="flex items-start justify-between mb-8">

        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg ${style.shadow}`}
          style={{ backgroundColor: style.color }}
        >
          {style.icon}
        </div>

        {/* Growth Badge */}
        <span className="text-[12px] font-bold text-emerald-400 flex items-center gap-0.5 bg-emerald-400/10 px-2 py-1 rounded-md">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
          </svg>
          +{growth}%
        </span>

      </div>

      <div className="mt-auto">
        <h3 className={`text-[15px] font-bold text-white mb-1 transition-colors ${style.hoverText}`}>
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
              style={{ height: `${height}%`, backgroundColor: style.color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
