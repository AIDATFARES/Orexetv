import Link from "next/link";
import { Monitor, Laptop, Smartphone, Tablet, List } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 flex items-center justify-center bg-black overflow-hidden text-center">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-interface-neon.webp"
          alt="ArgonTV Interface"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 flex flex-col items-center gap-6">

        {/* Top Tag */}
        <div className="inline-flex items-center border border-[#7000FF] rounded-full px-4 py-1.5 backdrop-blur-sm bg-black/40">
          <span className="w-2 h-2 rounded-full bg-[#FF00BD] mr-2 animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold text-[#00F0FF] tracking-widest uppercase">
            +7,500 Satisfied customers
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight leading-[1] text-white drop-shadow-2xl mt-4">
          Experience <span className="text-[#FF00BD] text-glow">ArgonTV</span><br />
          Infinite Entertainment
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 font-medium max-w-[700px] mt-2 drop-shadow-lg leading-relaxed">
          Step into the future of television with <strong>ArgonTV</strong>. Enjoy exclusive access to <Link href="/channels" title="Explore IPTV Channels" className="font-bold text-white hover:text-[#00F0FF] underline decoration-white/30 underline-offset-4 hover:decoration-[#00F0FF] transition-colors">+50,000 Channels</Link>, <strong>+120,000 Films & Series</strong>, and VIP sports coverage. Say goodbye to buffering and expensive cable bills—<span className="font-bold text-[#00F0FF]"><Link href="/pricing" title="ArgonTV Premium Subscriptions" className="hover:text-white underline decoration-[#00F0FF]/40 underline-offset-4 hover:decoration-white transition-colors">grab your premium subscription</Link> or <a href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20argontv%20IPTV." target="_blank" rel="noreferrer" className="hover:text-white underline decoration-[#00F0FF]/40 underline-offset-4 hover:decoration-white transition-colors">start a free trial today!</a></span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center w-full sm:w-auto">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20argontv%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="btn-primary-voltra py-4 px-8 text-sm sm:text-base font-bold flex items-center justify-center tracking-wider hover:scale-105"
          >
            GET 12 MONTHS — 2 MONTHS FREE &rarr;
          </a>
          <a
            href="#pricing"
            className="py-4 px-8 text-sm sm:text-base font-bold text-white bg-transparent border-2 border-[#00F0FF] rounded-xl hover:bg-[#00F0FF]/15 shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 flex items-center justify-center gap-2 tracking-wider hover:scale-105"
          >
            <List className="w-5 h-5" /> View Plans
          </a>
        </div>

        {/* Bottom Icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-white/90 mt-8">
          <div className="flex flex-col items-center gap-2 group hover:text-[#00F0FF] transition-colors cursor-pointer">
            <Monitor className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Smart TV</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-[#00F0FF] transition-colors cursor-pointer">
            <Laptop className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Laptop / PC</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-[#00F0FF] transition-colors cursor-pointer">
            <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Android</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-[#00F0FF] transition-colors cursor-pointer">
            <Tablet className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">IOS</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-[#00F0FF] transition-colors cursor-pointer">
            <Monitor className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Windows</span>
          </div>
        </div>

      </div>
    </section>
  );
}
