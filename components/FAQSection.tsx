"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: ReadonlyArray<FAQItem>;
  className?: string;
}

export default function FAQSection({ items, className = "" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={`w-full bg-[#F7F7F7] flex flex-col items-start self-stretch px-6 pt-8 pb-16 sm:px-12 md:px-16 lg:px-20 xl:px-28 md:pt-10 md:pb-[100px] ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start">
        <motion.h2
          className="font-dm-sans text-[28px] sm:text-[32px] font-normal not-italic leading-[1.3] text-[#171717] mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Have Any Questions ?
        </motion.h2>

        <motion.div
          className="w-full flex flex-col"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="border-t border-[#DEDEDE] last:border-b"
            >
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between gap-4 py-6 text-left group transition-colors duration-200 ${openIndex === i ? "bg-[#EDEDED] px-4 -mx-4" : ""}`}
              >
                <span className="font-dm-sans text-[16px] sm:text-[18px] font-medium not-italic leading-[1.3] text-[#1B1C1C] transition-colors duration-200">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 text-[#1B1C1C]"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 6.5L9 11.5L14 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`overflow-hidden ${openIndex === i ? "bg-[#EDEDED] px-4 -mx-4" : ""}`}
                  >
                    <p className="font-dm-sans text-[15px] font-normal leading-[1.6] text-[#737373] pb-6 pr-8">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
