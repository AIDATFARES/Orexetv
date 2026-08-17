"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, X, CreditCard, Bitcoin, Wallet } from "lucide-react";

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
    name: "FIESTA BASIC",
    subtitle: "Perfect for trying out our premium service.",
    price: 35,
    durationLabel: "3 Months",
    period: "/ 3 months",
    saving: "Save 22%",
    features: defaultFeatures,
    buttonText: "Select Basic",
  },
  {
    id: "12-months",
    name: "FIESTA ULTIMATE",
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
    name: "FIESTA PRO",
    subtitle: "A solid choice for half a year of uninterrupted joy.",
    price: 49.99,
    durationLabel: "6 Months",
    period: "/ 6 months",
    saving: "Save 44%",
    features: defaultFeatures,
    buttonText: "Select Pro",
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
    <section id="pricing" className="relative bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <header className="mx-auto max-w-3xl text-center mb-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#7000FF]/10 text-[#7000FF] font-bold text-xs tracking-widest uppercase mb-6 border border-[#7000FF]/20">
            IPTV SUBSCRIPTION PLANS
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.1]">
            Choose Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7000FF] to-[#FF00BD]">
              Premium IPTV Plan
            </span>
          </h2>
          <p className="mt-5 text-xl font-bold tracking-wide text-black sm:text-2xl">Affordable, Buffer-Free Streaming</p>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">No hidden fees. Instant activation. Unlock unlimited <Link href="/channels" className="font-semibold text-[#7000FF] hover:text-[#FF00BD] hover:underline transition-colors">live TV and VOD</Link> today.</p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-10 max-w-2xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Choose your connections</p>
          <div className="grid grid-cols-3 rounded-2xl border border-primary-500/30 bg-white p-1.5 shadow-sm">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  aria-checked={selected}
                  className={`rounded-xl px-3 py-3 text-sm font-bold transition-all ${selected ? "bg-[#7000FF] text-white shadow-lg shadow-primary-600/30" : "text-slate-500 hover:text-black hover:bg-orange-50"}`}
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 items-start pt-4">
          {plans.map((plan) => (
            <article 
              key={plan.id}
              className={`relative flex flex-col rounded-2xl bg-white p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1 border-2 ${
                plan.popular 
                  ? "border-primary-500 shadow-[0_15px_40px_-10px_rgba(34,197,94,0.25)] md:-mt-4" 
                  : "border-primary-300 shadow-sm hover:shadow-md hover:border-primary-400"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-b-xl rounded-t-sm bg-gradient-to-r from-primary-500 to-slate-800 px-5 py-1.5 shadow-md whitespace-nowrap">
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-white">🔥 BEST VALUE</span>
                </div>
              )}
              
              <div className="text-center pb-6 border-b border-slate-100">
                <h3 className="text-2xl font-black text-black">{plan.durationLabel}</h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7000FF]">{plan.name}</p>
                
                <div className="mt-6 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black tracking-tighter text-primary-500">${priceFor(plan)}</span>
                  <span className="mt-1 text-xs font-semibold text-slate-400">{plan.period}</span>
                </div>
                
                <div className="min-h-[20px] mt-2 flex items-center justify-center gap-2">
                  {plan.saving && (
                    <p className="text-xs font-bold text-accent-500">{plan.saving}</p>
                  )}
                  {plan.oldPrice && (
                     <p className="text-xs font-semibold text-slate-400 line-through">${(plan.oldPrice * devices).toFixed(2)}</p>
                  )}
                </div>
              </div>

              <ul className="mt-6 flex-grow space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${plan.popular ? "text-primary-500" : "text-accent-500"}`} strokeWidth={2.5} />
                    ) : (
                      <X className="h-4 w-4 shrink-0 mt-0.5 text-slate-300" strokeWidth={2.5} />
                    )}
                    <span className={`text-[13px] font-medium leading-tight ${feature.included ? "text-slate-700" : "text-slate-300"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button 
                  type="button"
                  onClick={() => handleOrder(plan)}
                  className={`w-full rounded-xl py-3.5 text-sm font-bold text-white transition-all duration-300 active:scale-95 active:!bg-green-500 active:!shadow-[0_0_20px_rgba(34,197,94,0.6)] ${
                    plan.popular 
                      ? "bg-[#7000FF] shadow-[0_8px_20px_rgba(34,197,94,0.3)] hover:bg-[#22c55e] hover:-translate-y-0.5" 
                      : "bg-slate-800 hover:bg-black hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  {plan.buttonText} &rarr;
                </button>
                <p className="text-center text-[11px] font-medium text-slate-400 mt-3">
                  Instant Activation
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Payment Methods & Guarantee */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h4 className="text-base font-bold text-black flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary-500" />
                Secure Payments & Instant Access
              </h4>
              <p className="text-sm text-slate-500">Pay safely using Crypto, Credit Card, or PayPal. Your details are encrypted instantly.</p>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <CreditCard className="h-8 w-8 hover:text-[#7000FF] transition-colors" />
              <Bitcoin className="h-8 w-8 hover:text-[#7000FF] transition-colors" />
              <Wallet className="h-8 w-8 hover:text-[#7000FF] transition-colors" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
