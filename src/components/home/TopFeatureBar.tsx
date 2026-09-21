"use client";

import { Tv, Film, ShieldCheck, Zap, Headphones } from "lucide-react";

export default function TopFeatureBar() {
  const highlights = [
    {
      icon: Tv,
      title: "+50,000 Channels",
      desc: "150+ Countries 🇺🇸🇬🇧🇨🇦",
      accent: "text-[#C084FC] bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Film,
      title: "200,000+ VOD",
      desc: "Movies & Series 4K",
      accent: "text-[#818CF8] bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Uptime",
      desc: "Anti-Freeze 10.0",
      accent: "text-[#4CFF91] bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Zap,
      title: "60 FPS 4K Ultra HD",
      desc: "Crystal Clear Sports",
      accent: "text-[#22D3EE] bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: Headphones,
      title: "24/7 Live Support",
      desc: "WhatsApp & Email",
      accent: "text-[#F472B6] bg-pink-500/10 border-pink-500/20",
    },
  ];

  return (
    <div className="w-full pt-8 pb-4">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-3 py-6 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-3.5 sm:p-4 flex items-center gap-3.5 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`p-2.5 rounded-xl border shrink-0 ${item.accent} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight truncate">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
