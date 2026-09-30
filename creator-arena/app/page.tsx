import Link from "next/link";
import { ArrowRight, Trophy, Zap, Map } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto mt-12 animate-slide-up">
      {/* Hero Section */}
      <section className="text-center mb-16 relative w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-primary/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6 text-text-muted hover:bg-white/10 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse-glow"></span>
            Public Beta v2.0
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Can you beat <br />
            <span className="text-gradient">the internet?</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10">
            Play the internet. Test your ideas before publishing. See what is winning — and why. Join the ultimate gamified creator intelligence network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/arena" 
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              Play Arena <ArrowRight size={20} />
            </Link>
            <Link 
              href="/lab" 
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-panel text-white font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              Test My Ideas
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-accent-primary/50 transition-colors group relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent-primary/20 blur-3xl rounded-full group-hover:bg-accent-primary/40 transition-colors"></div>
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent-primary/30 transition-colors">
            <Trophy className="text-accent-primary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Predict & Win</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Guess what the community chose in blind battles. Build your rating as a top scout in Gaming, Music, and AI.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-accent-secondary/50 transition-colors group relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent-secondary/20 blur-3xl rounded-full group-hover:bg-accent-secondary/40 transition-colors"></div>
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent-secondary/30 transition-colors">
            <Zap className="text-accent-secondary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Creator Lab</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Run rapid A/B tests on thumbnails, titles, and hooks before you publish. Get real preference data in minutes.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-accent-tertiary/50 transition-colors group relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent-tertiary/20 blur-3xl rounded-full group-hover:bg-accent-tertiary/40 transition-colors"></div>
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent-tertiary/30 transition-colors">
            <Map className="text-accent-tertiary" size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Relation Map</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Explore the public knowledge graph of trend relations, formats, and creators. Understand the ecosystem.
          </p>
        </div>
      </section>
      
      {/* Mini Arena Demo Placeholder */}
      <section className="w-full mt-20 mb-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Live Trending Battles</h2>
          <Link href="/arena" className="text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors flex items-center gap-1">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="glass-panel rounded-2xl border border-white/10 p-1 flex items-center justify-center min-h-[300px] bg-black/40">
           <div className="text-center">
             <Swords className="mx-auto text-text-muted mb-4 opacity-50" size={48} />
             <p className="text-text-muted font-medium">Interactive Demo Battles Loading...</p>
             <p className="text-xs text-text-muted/70 mt-2">Which thumbnail gets the click?</p>
           </div>
        </div>
      </section>
    </div>
  );
}

// Re-importing Swords since we used it in the placeholder
import { Swords } from "lucide-react";
