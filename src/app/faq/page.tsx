"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CircleHelp, Clock3, CreditCard, HelpCircle, Mail, MessageCircle, MonitorPlay, Send, Settings2, UserRound } from "lucide-react";

type Category = "About orexetv" | "Setup & streaming" | "Plans & access" | "Payments & support";

type FAQItem = {
  category: Category;
  question: string;
  answer: React.ReactNode;
};

const categories: { label: Category; icon: typeof CircleHelp }[] = [
  { label: "About orexetv", icon: CircleHelp },
  { label: "Setup & streaming", icon: Settings2 },
  { label: "Plans & access", icon: UserRound },
  { label: "Payments & support", icon: CreditCard },
];

const faqs: FAQItem[] = [
  {
    category: "About orexetv",
    question: "1. What is Orexetv?",
    answer: (
      <>
        Orexetv is a premium IPTV service that offers live TV, VOD movies, TV series, and sports channels in high-quality streaming, including 4K. Check out our{" "}
        <Link href="/channels" className="text-[#C084FC] font-semibold hover:underline">live TV channels</Link> and{" "}
        <Link href="/pricing" className="text-[#C084FC] font-semibold hover:underline">IPTV subscription plans</Link>.
      </>
    ),
  },
  {
    category: "About orexetv",
    question: "2. Is Orexetv authorized?",
    answer: (
      <>
        Orexetv is intended to be used in accordance with applicable laws, local regulations, and our{" "}
        <Link href="/dmca" className="text-[#C084FC] font-semibold hover:underline">
          DMCA policy
        </Link>
        . You can also read our in-depth{" "}
        <Link href="/blog/choose-iptv-service-guide" className="text-[#818CF8] font-semibold hover:underline">
          IPTV Buyer's Guide
        </Link>
        .
      </>
    ),
  },
  {
    category: "About orexetv",
    question: "3. What channels and content are included with Orexetv?",
    answer: (
      <>
        Orexetv includes a broad selection of live channels covering sports, news, and entertainment, along with a regularly updated on-demand library of movies and TV series. Check our <Link href="/channels" className="text-[#C084FC] font-semibold hover:underline">full channels catalog</Link>.
      </>
    ),
  },
  {
    category: "About orexetv",
    question: "4. Can I watch live sports and PPV events on Orexetv?",
    answer: (
      <>
        Orexetv includes a range of live sports channels and events. Coverage can include football, NFL, NBA, UFC, and pay-per-view events. Explore our <Link href="/channels" className="text-[#C084FC] font-semibold hover:underline">live sports section</Link>.
      </>
    ),
  },
  {
    category: "About orexetv",
    question: "5. Which devices can I use?",
    answer: (
      <>
        Orexetv works with compatible IPTV apps on Smart TVs, Android TV, Firestick, Apple TV, smartphones, tablets, and computers. Follow our <Link href="/installation" className="text-[#C084FC] font-semibold hover:underline">installation guides</Link> to get started.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "1. How do I install Orexetv on my device?",
    answer: (
      <>
        Start by installing a compatible IPTV player on your device. Enter the Orexetv credentials from your email. View our step-by-step <Link href="/installation" className="text-[#C084FC] font-semibold hover:underline">installation guides</Link> for detailed instructions.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "2. Can I use Orexetv on a Smart TV?",
    answer: (
      <>
        Yes, Orexetv can be used on Smart TVs including Samsung, LG, and Android TV models using compatible IPTV players like Tivimate or Smarters. Read our recommendations in the{" "}
        <Link href="/blog/best-iptv-devices" className="text-[#C084FC] font-semibold hover:underline">
          best IPTV devices guide
        </Link>
        .
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "3. What internet speed do I need for smooth Orexetv streaming?",
    answer: (
      <>
        For reliable playback, allow at least 15 Mbps per stream for HD and 35 Mbps per stream for 4K. Read our complete guide on{" "}
        <Link href="/blog/internet-speed-for-iptv" className="text-[#C084FC] font-semibold hover:underline">
          internet speed for IPTV
        </Link>
        .
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "4. Why is Orexetv buffering or freezing?",
    answer: (
      <>
        Restart your IPTV app and router. If buffering persists, review our full checklist in{" "}
        <Link href="/blog/how-to-fix-iptv-buffering" className="text-[#C084FC] font-semibold hover:underline">
          how to fix IPTV buffering
        </Link>
        , or{" "}
        <Link href="/contact" className="text-[#22D3EE] font-semibold hover:underline">
          contact support
        </Link>{" "}
        for instant assistance.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "5. Do I need a VPN to use Orexetv?",
    answer: (
      <>
        A VPN is not required but is recommended in some regions to ensure unrestricted access and added privacy. Contact our <Link href="/contact" className="text-[#C084FC] font-semibold hover:underline">support team</Link> for VPN setup recommendations.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "1. Are there any hidden fees or contracts with Orexetv?",
    answer: (
      <>
        No contracts and no hidden fees. Choose an <Link href="/pricing" className="text-[#C084FC] font-semibold hover:underline">IPTV subscription plan</Link> with transparent pricing and instant delivery.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "2. Can I use Orexetv on multiple devices?",
    answer: (
      <>
        Yes! We offer multi-device subscription plans. Select the 1, 2, or 3 device option on our <Link href="/pricing" className="text-[#C084FC] font-semibold hover:underline">pricing page</Link>.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "3. What are Orexetv M3U and Xtream Codes details?",
    answer: (
      <>
        Your welcome email includes both M3U playlist URLs and Xtream Codes credentials for fast setup in any IPTV app.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "1. Does Orexetv offer a free trial?",
    answer: (
      <>
        Yes, we offer a <a href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20orexetv%20IPTV." target="_blank" rel="noreferrer" className="text-[#C084FC] font-semibold hover:underline">free trial</a> so you can test our service before subscribing.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "2. Which payment methods does Orexetv accept?",
    answer: (
      <>
        We accept PayPal, Crypto (Bitcoin), Credit Cards, and Instant Bank Transfers. For help with payments, reach out to our <Link href="/contact" className="text-[#C084FC] font-semibold hover:underline">support team</Link>.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "3. How long does activation take after I purchase a plan?",
    answer: (
      <>
        Activation is instant! Your login details are generated and sent straight to your email immediately after payment confirmation.
      </>
    ),
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>("About orexetv");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleFaqs = faqs.filter((faq) => faq.category === activeCategory);

  function selectCategory(category: Category) {
    setActiveCategory(category);
    setActiveIndex(null);
  }

  function sendSupportMessage(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello Orexetv support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#06040F] text-white pt-24 pb-24 px-4 sm:px-6 relative overflow-hidden bg-grid-pattern">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[radial-gradient(circle,rgba(124,58,237,0.16)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mx-auto mb-14 max-w-3xl text-center md:mb-18">
          <div className="badge-pill mb-4 inline-flex items-center gap-2">
            <span className="dot-blink" /> Help Center
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
            <span className="block text-white">Orexetv IPTV Frequently Asked</span>
            <span className="mt-2 block bg-gradient-to-r from-[#C084FC] via-[#818CF8] to-[#22D3EE] bg-clip-text text-transparent">
              Questions &amp; Support
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
            Find answers to common questions about our IPTV service, including{" "}
            <Link href="/pricing" className="text-[#C084FC] font-semibold hover:underline">subscriptions</Link>,{" "}
            <Link href="/installation" className="text-[#C084FC] font-semibold hover:underline">devices</Link>, streaming quality, payments, and more. If you need further help, our{" "}
            <Link href="/contact" className="text-[#C084FC] font-semibold hover:underline">support team</Link> is here for you.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10">
          {/* Categories Sidebar */}
          <aside aria-label="FAQ categories" className="md:sticky md:top-28 md:self-start">
            <div className="rounded-3xl border border-white/10 bg-[#0B0714] p-3 shadow-xl backdrop-blur-xl">
              <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
                {categories.map(({ label, icon: Icon }) => {
                  const isSelected = activeCategory === label;
                  return (
                    <button
                      aria-pressed={isSelected}
                      className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left text-xs sm:text-sm font-bold transition-all duration-300 md:w-full ${
                        isSelected
                          ? "bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white shadow-lg shadow-purple-500/30"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                      key={label}
                      onClick={() => selectCategory(label)}
                      type="button"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* FAQ Accordion List */}
          <section aria-live="polite" className="space-y-4">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-[#C084FC]">
                <MonitorPlay className="h-4 w-4" />
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight text-white">{activeCategory}</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {visibleFaqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                const contentId = `faq-${activeCategory.replaceAll(" ", "-").toLowerCase()}-${index}`;

                return (
                  <article 
                    className={`flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 bg-[#0B0714] ${
                      isOpen ? "border-[#8B5CF6]/60 shadow-[0_0_25px_rgba(139,92,246,0.15)]" : "border-white/10 hover:border-purple-500/30"
                    }`} 
                    key={faq.question}
                  >
                    {/* Header Banner */}
                    <div 
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="cursor-pointer px-6 py-4 flex items-center justify-between gap-3 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-[#C084FC] shrink-0" />
                        <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <button
                        aria-controls={contentId}
                        aria-expanded={isOpen}
                        className="text-slate-400 hover:text-white transition-colors ml-2"
                        type="button"
                      >
                        <ChevronDown className={`h-4 w-4 shrink-0 text-[#C084FC] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {/* Answer Content */}
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5" id={contentId}>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        {/* Bottom Contact Section */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <header className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">Get in Touch with Our 24/7 Support Desk</h2>
            <p className="mt-2 text-sm text-slate-400">We&apos;re here to help you get the best streaming experience. Reach out anytime.</p>
          </header>

          <div className="grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-8">
            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <a className="glass-card-hover flex min-h-36 flex-col items-center justify-center rounded-2xl p-6 text-center" href="mailto:support@orexetv.vip">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-[#C084FC]"><Mail className="h-5 w-5" /></span>
                <span className="mt-3 block text-sm font-bold text-white">Email Us</span>
                <span className="mt-1 block text-xs text-slate-400">General inquiries &amp; help</span>
                <span className="mt-2 block text-xs font-semibold text-[#C084FC]">support@orexetv.vip</span>
              </a>

              <a className="glass-card-hover flex min-h-36 flex-col items-center justify-center rounded-2xl p-6 text-center" href="https://wa.me/213552069874?text=Hello%20orexetv%20IPTV%20support%2C%20I%20need%20help." rel="noreferrer" target="_blank">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"><MessageCircle className="h-5 w-5" /></span>
                <span className="mt-3 block text-sm font-bold text-white">WhatsApp Support</span>
                <span className="mt-1 block text-xs text-slate-400">Fastest technical response</span>
                <span className="mt-2 block text-xs font-semibold text-emerald-400">Start Chat →</span>
              </a>

              <div className="glass-card-hover flex min-h-36 flex-col items-center justify-center rounded-2xl p-6 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#22D3EE]"><Clock3 className="h-5 w-5" /></span>
                <span className="mt-3 block text-sm font-bold text-white">Response Time</span>
                <span className="mt-1 block text-xs text-slate-400">Under <strong className="text-white">2 hours</strong> on standard hours</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0B0714] p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="text-lg font-black uppercase tracking-tight text-white mb-6">Send us a message</h3>
              <form action={sendSupportMessage} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Name
                    <input className="mt-2 w-full rounded-xl border border-white/10 bg-[#06040F] px-4 py-3 text-xs sm:text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#8B5CF6]" name="name" placeholder="John Doe" required />
                  </label>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email address
                    <input className="mt-2 w-full rounded-xl border border-white/10 bg-[#06040F] px-4 py-3 text-xs sm:text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#8B5CF6]" name="email" placeholder="john@example.com" required type="email" />
                  </label>
                </div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Subject
                  <input className="mt-2 w-full rounded-xl border border-white/10 bg-[#06040F] px-4 py-3 text-xs sm:text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#8B5CF6]" name="subject" placeholder="How can we help?" />
                </label>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Message
                  <textarea className="mt-2 min-h-28 w-full resize-y rounded-xl border border-white/10 bg-[#06040F] px-4 py-3 text-xs sm:text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#8B5CF6]" name="message" placeholder="Describe your question or issue..." required />
                </label>
                <button className="btn-primary-voltra w-full py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2" type="submit">
                  <Send className="h-4 w-4" /> Send message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
