"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Swords,
  LayoutTemplate,
  Music,
  CircleDot,
  Sparkles,
  ArrowUpRight,
  MoreHorizontal
} from "lucide-react";

import { useState } from "react";

// Mock data to demonstrate dynamic behavior
const mockUser = {
  name: "Demo Creator",
  initials: "N",
  role: "Level 7 • Scout",
  color: "bg-blue-500"
};

const mockDailyArena = {
  current: 0,
  total: 10,
  reward: 15
};

export function Sidebar() {
  const pathname = usePathname();

  //NEED TO CHANGE AFTER ADDING DB
  // These could be fetched from a global store/context later
  const [user, setUser] = useState(mockUser);
  const [dailyArena, setDailyArena] = useState(mockDailyArena);

  const navItems = [
    { id: 1, name: "Review", href: "/", icon: Home },
    { id: 2, name: "Arena", href: "/arena", icon: Swords, badge: "LIVE" },
    { id: 3, name: "Creator Lab", href: "/lab", icon: LayoutTemplate },
    { id: 4, name: "Music Arena", href: "/music", icon: Music, badge: "LIVE" },
    { id: 5, name: "Relation Map", href: "/map", icon: CircleDot },
    { id: 6, name: "Discover", href: "/discover", icon: Sparkles },
    { id: 7, name: "Campaigns", href: "/campaigns", icon: ArrowUpRight },
  ];

  return (
    <aside className="fixed left-0 top-0 w-200px h-screen bg-[#0d0d12] border-r border-white/3 flex flex-col z-40 text-sm font-medium">

      {/* Header Logo */}
      <div className="p-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#231b42] flex items-center justify-center border border-[#3b2a6b]">
          <span className="font-bold text-[#b490f5] text-sm">CA</span>
        </div>

        <div className="flex flex-col">
          <Link href="/" className="text-[15px] font-black tracking-wide text-white flex items-center gap-1.5">
            CREATOR <span className="text-[#a78bfa]">ARENA</span>
          </Link>
          <span className="text-[11px] text-[#8a8a99]">Play • Build • Explore</span>
        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2 space-y-2 overflow-hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center justify-between px-3 py-3 rounded-xl transition-all group ${isActive
                ? "bg-[#181328] text-white"
                : "text-[#8a8a99] hover:bg-white/5 hover:text-white"
                }`}
            >
              <div className="flex items-center gap-3.5">
                <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-[#a78bfa]" : "text-[#6b6b7a] group-hover:text-white transition-colors"} />
                <span className={`font-semibold ${isActive ? "text-white" : ""}`}>{item.name}</span>
              </div>
              {item.badge && (
                <span className="text-[9px] font-bold tracking-wider bg-[#103a27] text-[#34d399] px-2 py-0.5 rounded-full uppercase">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Daily Arena Card */}
      <div className="px-4 pb-4">
        <div className="bg-[#12111a] rounded-2xl p-4 border border-white/5 shadow-lg relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-end gap-2 mb-3">
              <span className="text-[11px] font-bold text-[#8a8a99] tracking-widest uppercase">Daily Arena</span>
              <span className="text-2xl font-bold text-white leading-none">
                {dailyArena.current}<span className="text-lg text-[#8a8a99]">/{dailyArena.total}</span>
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#272733] rounded-full h-1.5 mb-3">
              <div
                className="bg-[#8b5cf6] h-1.5 rounded-full"
                style={{ width: `${(dailyArena.current / dailyArena.total) * 100}%` }}
              ></div>
            </div>

            <p className="text-[12px] text-[#8a8a99] leading-snug mb-4">
              Finish {dailyArena.total} rounds and claim +{dailyArena.reward} Credits.
            </p>

            <Link
              href="/arena"
              className="block w-full py-2.5 px-4 bg-[#1e1b30] hover:bg-[#2a2444] border border-white/5 text-center text-white text-sm font-bold rounded-xl transition-colors"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <Link href="/profile" className="p-4 pt-2 mt-auto border-t border-white/5">
        <div className="flex items-center justify-between cursor-pointer group rounded-xl p-1 hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-full ${user.color} flex items-center justify-center text-white font-bold shadow-md`}>
              {user.initials}
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-white group-hover:text-[#a78bfa] transition-colors">{user.name}</span>
              <span className="text-[11px] text-[#8a8a99]">{user.role}</span>
            </div>
          </div>
          <MoreHorizontal size={16} className="text-[#6b6b7a] group-hover:text-white transition-colors mr-1" />
        </div>
      </Link>

    </aside>
  );
}
