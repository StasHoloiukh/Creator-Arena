import { CreatorArenaBanner } from "@/components/home/CreatorArenaBanner";
import { DailyPulseCard } from "@/components/home/DailyPulseCard";
import { TrendingSection } from "@/components/home/TrendingSection";
import { DashboardWidgets } from "@/components/home/DashboardWidgets";

export default function Home() {
  return (
    <div className="p-6 max-w-300 mx-auto w-full animate-slide-up">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CreatorArenaBanner />
        <DailyPulseCard />
      </div>
      <TrendingSection />
      <DashboardWidgets />
    </div>
  );
}
