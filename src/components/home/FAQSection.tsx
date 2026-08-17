import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "1. What is ArgonTV?",
    answer: (
      <>
        ArgonTV is a premium IPTV service that offers live TV, VOD movies, TV series, and sports channels in high-quality streaming, including 4K. Check out our{" "}
        <Link
          href="/channels-list"
          className="text-[#7000FF] font-semibold hover:text-[#FF00BD] transition-colors"
        >
          live TV channels
        </Link>{" "}
        and{" "}
        <a
          href="#pricing"
          className="text-primary-500 font-semibold hover:text-primary-400 transition-colors"
        >
          IPTV subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "2. Do I need a subscription to use ArgonTV?",
    answer: (
      <>
        Yes, a subscription is required. However, we offer a{" "}
        <a
          href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20argontv%20IPTV."
          target="_blank"
          rel="noreferrer"
          className="text-primary-500 font-semibold hover:text-primary-400 transition-colors"
        >
          free trial
        </a>{" "}
        so you can test the service before committing to our{" "}
        <a
          href="#pricing"
          className="text-primary-500 font-semibold hover:text-primary-400 transition-colors"
        >
          subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "3. What devices are compatible with ArgonTV?",
    answer: (
      <>
        ArgonTV works on Android TV, Firestick, Smart TVs, Android phones, tablets, and apps like Tivimate. Follow our step-by-step{" "}
        <Link
          href="/installation"
          className="text-primary-500 font-semibold hover:text-primary-400 transition-colors"
        >
          installation guides
        </Link>{" "}
        to get started.
      </>
    ),
  },
  {
    id: 4,
    question: "4. Can I watch on multiple devices at the same time?",
    answer: (
      <>
        Yes, we offer multi-device support. You can choose an{" "}
        <a
          href="#pricing"
          className="text-primary-500 font-semibold hover:text-primary-400 transition-colors"
        >
          IPTV subscription plan
        </a>{" "}
        that allows streaming on more than one device simultaneously. Perfect for families or shared accounts.
      </>
    ),
  },
  {
    id: 5,
    question: "5. Can I watch sports on ArgonTV?",
    answer: (
      <>
        Absolutely. We offer a wide selection of live sports channels, including major leagues and international events. Explore our full{" "}
        <Link
          href="/channels-list"
          className="text-[#7000FF] font-semibold hover:text-[#FF00BD] transition-colors"
        >
          channels catalog
        </Link>
        .
      </>
    ),
  },
  {
    id: 6,
    question: "6. What payment methods do you accept?",
    answer: (
      <>
        We accept PayPal, cryptocurrency (such as Bitcoin), credit cards, and instant bank transfers for quick and secure payments. Contact our{" "}
        <Link
          href="/contact"
          className="text-primary-500 font-semibold hover:text-primary-400 transition-colors"
        >
          support team
        </Link>{" "}
        for any payment inquiries.
      </>
    ),
  },
  {
    id: 7,
    question: "7. What kind of content is included?",
    answer: (
      <>
        The service includes live TV channels, sports, movies, TV series, kids&apos; content, international channels, and more – all in HD or 4K quality. Learn more in our{" "}
        <Link
          href="/blog"
          className="text-primary-500 font-semibold hover:text-primary-400 transition-colors"
        >
          IPTV articles & guides
        </Link>
        .
      </>
    ),
  },
  {
    id: 8,
    question: "8. Do I need a VPN?",
    answer: (
      <>
        A VPN is not required but is recommended in some regions to ensure unrestricted access and added privacy. Read our{" "}
        <Link
          href="/faq"
          className="text-primary-500 font-semibold hover:text-primary-400 transition-colors"
        >
          FAQ knowledge base
        </Link>{" "}
        for further setup details.
      </>
    ),
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white text-black relative z-10 border-t border-black/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#7000FF]/10 text-[#7000FF] font-bold text-xs tracking-widest uppercase mb-6 border border-[#7000FF]/20 animate-fade-up">
            SUPPORT & HELP
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.1] animate-fade-up">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7000FF] to-[#FF00BD]">
              Questions (FAQ)
            </span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base mt-5 leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Find answers to common questions about our IPTV service, including{" "}
            <Link
              href="/pricing"
              className="text-[#7000FF] font-semibold hover:text-[#FF00BD] transition-colors"
            >
              subscriptions
            </Link>
            ,{" "}
            <Link
              href="/channels"
              className="text-[#7000FF] font-semibold hover:text-[#FF00BD] transition-colors"
            >
              channels
            </Link>
            , streaming quality, payments, and more. If you need further help, our{" "}
            <Link
              href="/contact"
              className="text-[#7000FF] font-semibold hover:text-[#FF00BD] transition-colors"
            >
              Contact Support
            </Link>
          </p>
        </div>

        {/* 2-Column FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-[1140px] mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="flex flex-col rounded-2xl overflow-hidden border border-black/10 bg-white shadow-xl hover:border-primary-500/40 transition-colors animate-fade-up"
              style={{ animationDelay: `${0.2 + (index * 0.05)}s`, animationFillMode: 'both' }}
            >
              {/* Header Banner */}
              <div className="bg-slate-100 border-b border-black/10 px-5 py-4 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-primary-500 shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-black leading-snug">
                  {faq.question}
                </h3>
              </div>

              {/* Answer Content */}
              <div className="p-5 sm:p-6 text-sm sm:text-base text-slate-700 leading-relaxed flex-1 bg-white">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Knowledge Base */}
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#7000FF] text-white font-bold text-xs sm:text-sm hover:bg-[#5500cc] transition-all duration-300 shadow-lg"
          >
            <span>View Complete FAQ Knowledge Base</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
