"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, CreditCard, Bitcoin, Wallet, CheckCircle2 } from "lucide-react";

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  durationLabel: string;
  period: string;
  saving?: string;
  popular?: boolean;
  features: PlanFeature[];
  buttonText: string;
};

const defaultFeatures: PlanFeature[] = [
  { text: "4K, HD & SD Quality", included: true },
  { text: "+30,000 Live TV Channels", included: true },
  { text: "All Live Sports", included: true },
  { text: "+150,000 Movies & Series (VOD)", included: true },
  { text: "Anti-Freezing (No Buffering)", included: true },
  { text: "Up to 4 Days Catch-Up", included: true },
  { text: "TV Guide (EPG)", included: true },
  { text: "Free Pay-Per-View (PPV)", included: true },
  { text: "Built-in VPN Protection", included: true },
  { text: "Adult Channels (Optional)", included: true },
  { text: "3-Day Money-Back Guarantee", included: true },
  { text: "24/7 Technical Support", included: true },
];

const plans: Plan[] = [
  {
    id: "3-months",
    name: "3 Months",
    subtitle: "Perfect for trying out our premium service.",
    price: 35,
    durationLabel: "3 Months",
    period: "/ 3 months",
    saving: "Save 22%",
    features: defaultFeatures,
    buttonText: "Select Pro",
  },
  {
    id: "12-months",
    name: "12 Months",
    subtitle: "The ultimate entertainment experience for a full year.",
    price: 69.99,
    oldPrice: 80,
    durationLabel: "12 Months",
    period: "/ year",
    saving: "Save 61%",
    popular: true,
    features: defaultFeatures,
    buttonText: "Get Ultimate Pass",
  },
  {
    id: "6-months",
    name: "6 Months",
    subtitle: "A solid choice for half a year of uninterrupted joy.",
    price: 49.99,
    durationLabel: "6 Months",
    period: "/ 6 months",
    saving: "Save 44%",
    features: defaultFeatures,
    buttonText: "Select Basic",
  },
];

export default function PricingSection() {
  const [devices, setDevices] = useState(1);

  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the ${plan.name} plan (${plan.durationLabel}) with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="pricing" className="relative bg-[#141414] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <header className="mx-auto max-w-3xl text-center mb-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#E50914]/10 text-[#E50914] font-bold text-xs tracking-widest uppercase mb-6 border border-[#E50914]/20">
            IPTV SUBSCRIPTION PLANS
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Choose Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#B3000B]">
              Premium IPTV Plan
            </span>
          </h2>
          <p className="mt-5 text-xl font-bold tracking-wide text-white sm:text-2xl">Affordable, Buffer-Free Streaming</p>
          <p className="mt-2 text-sm text-gray-400 sm:text-base">No hidden fees. Instant activation. Unlock unlimited <Link href="/channels" className="font-semibold text-[#E50914] hover:text-[#B3000B] hover:underline transition-colors">live TV and VOD</Link> today.</p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-14 max-w-2xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-gray-400">Choose your connections</p>
          <div className="grid grid-cols-3 rounded-md border border-white/10 bg-[#1e1e1e] p-1.5 shadow-sm">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  aria-checked={selected}
                  className={`rounded px-3 py-3 text-sm font-bold transition-all ${selected ? "bg-[#E50914] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                  key={count}
                  onClick={() => setDevices(count)}
                  role="radio"
                  type="button"
                >
                  {count} Device{count > 1 ? "s" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-md bg-[#262626] p-8 text-left transition-transform duration-300 hover:-translate-y-1 ${plan.popular
                  ? "border-t-[3px] border-t-[#E50914] md:scale-105 z-10 shadow-2xl"
                  : "border border-white/5"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#E50914] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  MOST POPULAR
                </div>
              )}

              <div className="pb-6 border-b border-white/10">
                <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 min-h-[40px]">{plan.subtitle}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight text-white">${priceFor(plan)}</span>
                  <span className="text-sm font-medium text-gray-400">{plan.period}</span>
                </div>

                <div className="min-h-[20px] mt-2 flex items-center gap-2">
                  {plan.saving && (
                    <p className="text-xs font-bold text-[#E50914]">{plan.saving}</p>
                  )}
                  {plan.oldPrice && (
                    <p className="text-xs font-medium text-gray-500 line-through">${(plan.oldPrice * devices).toFixed(2)}</p>
                  )}
                </div>
              </div>

              <ul className="mt-8 flex-grow space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 shrink-0 text-[#E50914]" strokeWidth={3} />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-gray-500" strokeWidth={3} />
                    )}
                    <span className={`text-sm ${feature.included ? "text-gray-200" : "text-gray-500"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => handleOrder(plan)}
                  className={`w-full py-4 text-sm font-bold text-white transition-all duration-300 rounded-sm transform active:scale-95 hover:-translate-y-1 hover:shadow-lg ${plan.popular
                      ? "bg-[#E50914] hover:bg-[#B3000B] hover:shadow-[#E50914]/40"
                      : "bg-transparent border border-gray-600 hover:border-gray-400 hover:bg-white/5 hover:shadow-white/5"
                    }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Payment Methods & Guarantee */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-md bg-[#1e1e1e] border border-white/10 p-6 shadow-sm">

            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#E50914]" />
                Secure Payments & Instant Access
              </h4>
              <p className="text-sm text-gray-400">Pay safely using Crypto, Credit Card, or PayPal. Your details are encrypted instantly.</p>
            </div>

            <div className="flex items-center gap-4 text-gray-400">
              <CreditCard className="h-8 w-8 hover:text-[#E50914] transition-colors" />
              <Bitcoin className="h-8 w-8 hover:text-[#E50914] transition-colors" />
              <Wallet className="h-8 w-8 hover:text-[#E50914] transition-colors" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
