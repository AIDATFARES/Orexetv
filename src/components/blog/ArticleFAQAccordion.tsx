"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function ArticleFAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="my-8 space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-[#06040F] ${
              isOpen ? "border-[#8B5CF6]/60 shadow-[0_0_20px_rgba(139,92,246,0.15)]" : "border-white/10 hover:border-purple-500/30"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-white/5 transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-[#C084FC] shrink-0" />
                <h3 className="font-bold text-sm sm:text-base text-white leading-snug">
                  {faq.question}
                </h3>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 text-[#C084FC]" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 py-4 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
