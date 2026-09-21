import Link from "next/link";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import BrandMarquee from "@/components/home/BrandMarquee";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle } from "lucide-react";

export const metadata = {
  title: "IPTV Setup Guide for Firestick, Smart TV & Android | Orexetv",
  description:
    "Quick 5-minute setup instructions for your Smart TV, Fire TV Stick, Android Box, Apple TV & PC. Easy M3U & Xtream Codes setup guides with Orexetv.",
  alternates: {
    canonical: "/installation",
  },
  openGraph: {
    title: "IPTV Setup Guide for Firestick, Smart TV & Android | Orexetv",
    description:
      "Quick 5-minute setup instructions for your Smart TV, Fire TV Stick, Android Box, Apple TV & PC. Easy M3U & Xtream Codes setup guides with Orexetv.",
    url: "https://www.orexetv.vip/installation",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Setup Guide for Firestick, Smart TV & Android | Orexetv",
    description:
      "Quick 5-minute setup instructions for your Smart TV, Fire TV Stick, Android Box, Apple TV & PC. Easy M3U & Xtream Codes setup guides with Orexetv.",
  },
};

export default function Installation() {
  return (
    <main className="min-h-screen bg-[#06040F] text-white pt-24 pb-24 relative overflow-hidden bg-grid-pattern">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute top-[6%] left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[radial-gradient(circle,rgba(124,58,237,0.15)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="badge-pill mb-4 inline-flex items-center gap-2">
            <span className="dot-blink" /> Installation Guide
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
            <span className="block text-white">Orexetv IPTV Installation Guide:</span>
            <span className="mt-2 block bg-gradient-to-r from-[#C084FC] via-[#818CF8] to-[#22D3EE] bg-clip-text text-transparent">
              Setup on Any Device Quickly
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            Comprehensive step-by-step instructions to configure Orexetv on all your devices.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-400">
            Orexetv works on Smart TVs, Firestick, Android, iOS, MAG, and more. New to Orexetv? Check{" "}
            <Link className="font-bold text-[#C084FC] hover:underline" href="/pricing">Orexetv Pricing</Link>, or browse the{" "}
            <Link className="font-bold text-[#C084FC] hover:underline" href="/channels">Orexetv Channel List</Link> before you start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-bold text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0B0714] border border-white/10 px-4 py-2">
              <Monitor className="h-4 w-4 text-[#22D3EE]" /> 15+ Devices Supported
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0B0714] border border-white/10 px-4 py-2">
              <Clock3 className="h-4 w-4 text-[#C084FC]" /> 5–15 Minutes Setup
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0B0714] border border-white/10 px-4 py-2">
              <Headphones className="h-4 w-4 text-emerald-400" /> 24/7 Support Available
            </span>
          </div>
        </header>

        {/* Quick Start Guide Section */}
        <section className="mb-20 rounded-3xl border border-white/10 bg-[#0B0714] p-8 sm:p-14 shadow-2xl backdrop-blur-xl">
          <header className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">Quick Start Guide in 3 Steps</h2>
            <p className="mt-2 text-sm text-slate-400">Get started with Orexetv quickly and easily in three straightforward steps.</p>
          </header>
          <div className="grid gap-8 md:grid-cols-3">
            <QuickStartCard icon={Download} step="1" title="Download App">
              Download and install a top IPTV player like{" "}
              <Link href="/blog/best-iptv-devices" className="text-[#C084FC] hover:underline font-semibold">
                IPTV Smarters or TiviMate
              </Link>{" "}
              from your device app store.
            </QuickStartCard>
            <QuickStartCard icon={Link2} step="2" title="Add M3U URL">
              Input your Orexetv M3U playlist URL or Xtream Codes, sent immediately after ordering a{" "}
              <Link href="/pricing" className="text-[#818CF8] hover:underline font-semibold">
                subscription plan
              </Link>
              .
            </QuickStartCard>
            <QuickStartCard icon={PlayCircle} step="3" title="Start Streaming">
              Gain immediate access to{" "}
              <Link href="/channels" className="text-[#22D3EE] hover:underline font-semibold">
                50,000+ live channels
              </Link>{" "}
              and movies with{" "}
              <Link href="/blog/how-to-fix-iptv-buffering" className="text-[#4CFF91] hover:underline font-semibold">
                zero buffering
              </Link>
              .
            </QuickStartCard>
          </div>

          {/* Apps Platform Logos Banner */}
          <div className="mt-16 border-t border-white/10 pt-12">
            <p className="text-center text-xs font-extrabold tracking-widest text-slate-400 uppercase mb-8">
              Supported on all your favorite devices
            </p>
            <BrandMarquee 
              imagesFolder="devices" 
              images={[
                "Amazon-Fire-tv-stick-krooz-tv.webp",
                "Apple-TV-krooz-tv.webp",
                "hisense-krooz-tv.webp",
                "iptv-smarter-krooz-tv.webp",
                "LG-smart-krooz-tv.webp",
                "Shield-krooz-tv.webp",
                "Smart-android-tv-krooz-tv.webp",
                "sony-select-krooz-tv.webp",
                "Tv-media-boxs-krooz-tv.webp",
                "Windows-krooz-tv.webp",
                "xbox-live-krooz-tv.webp"
              ]}
              cardClassName="flex-shrink-0 w-[150px] h-[75px] md:w-[200px] md:h-[90px] relative bg-[#06040F] border border-white/10 rounded-2xl p-4 hover:border-purple-500/50 transition-all duration-300 shadow-md flex items-center justify-center"
              imageClassName="object-contain drop-shadow-sm brightness-90 hover:brightness-100"
            />
          </div>
        </section>

        {/* Detailed Interactive Device Setup Guide */}
        <DeviceSetupGuide />

        {/* Bottom Help Section */}
        <section className="mx-auto mt-20 max-w-2xl text-center rounded-3xl border border-white/10 bg-[#0B0714] p-10 shadow-xl backdrop-blur-xl">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Need Help Setting Up Orexetv IPTV?</h2>
          <p className="mt-2 text-sm text-slate-400">
            Our technical support team is available 24/7 on WhatsApp to assist you with installation. You can also explore our{" "}
            <Link href="/faq" className="text-[#C084FC] hover:underline font-semibold">
              troubleshooting FAQ
            </Link>{" "}
            for instant answers.
          </p>
          <div className="mt-6">
            <Link className="btn-primary-voltra px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider inline-flex items-center gap-2" href="/contact">
              Contact Support
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

function QuickStartCard({ children, icon: Icon, step, title }: { children: React.ReactNode; icon: typeof Download; step: string; title: string }) {
  return (
    <article className="glass-card-hover flex flex-col rounded-2xl p-8 text-center items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-[#C084FC] mb-5">
        <Icon className="h-7 w-7" strokeWidth={1.8} />
      </div>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-xs font-black text-white shadow-md mb-3">
        {step}
      </span>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-xs sm:text-sm leading-relaxed text-slate-400">{children}</p>
    </article>
  );
}
