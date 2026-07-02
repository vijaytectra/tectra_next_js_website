"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const FAQS = [
  {
    question: "How does a software development company in Chennai work with clients in the US?",
    answer: "We operate across time zones with dedicated project managers, clear communication channels, and agile delivery cycles, ensuring US clients get real-time updates, on-time delivery, and zero compromise on quality.",
  },
  {
    question: "How long does it take to build custom software with a development company in Chennai?",
    answer: "Most standard web and mobile applications take between 8 to 16 weeks from inception to deployment. We provide a precise timeline after our initial discovery session.",
  },
  {
    question: "What industries does Tectra Technologies serve as a custom software development company?",
    answer: "We serve a diverse range of industries including Healthcare, SaaS, E-Commerce, Logistics, Fintech, and Enterprise Operations with tailored AI and cloud solutions.",
  },
  {
    question: "How do I know if a software development company in Chennai is the right fit for my US-based business?",
    answer: "We offer transparent pricing, senior-level engineering talent, strong US time zone overlap, and proven track records with global clients. We also sign strict NDAs before any technical discussion.",
  },
];

export default function MainFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="w-full bg-white pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="mb-10"
        >
          <span
            style={{
              color: "#2B2B2B",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontSize: "11.52px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "17.28px",
              letterSpacing: "2.995px",
              textTransform: "uppercase",
            }}
          >
            19 &nbsp; FAQ
          </span>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Dark Promo Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="lg:col-span-5 bg-[#111113] p-8 md:p-10 flex flex-col justify-between h-fit self-start"
          >
            <div className="flex flex-col items-start">
              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "31px",
                  letterSpacing: "-0.44px",
                }}
                className="mb-8"
              >
                Still deciding? Talk to a consultant — free 30-minute technical assessment, no obligation.
              </h3>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#111113] px-6 py-3 text-[13px] font-medium hover:bg-neutral-100 transition-colors duration-200"
                style={{ fontFamily: "Aspekta, system-ui, sans-serif" }}
              >
                <span>Book a call</span>
                <span>→</span>
              </Link>
            </div>

            {/* Embedded Consultant Card */}
            <div className="bg-white p-4 flex gap-4 items-center border border-neutral-200/60 mt-12">
              <div className="relative w-16 h-20 bg-neutral-100 overflow-hidden shrink-0 border border-neutral-200">
                <Image
                  src="/images/arjun_menon.png"
                  alt="Arjun Menon"
                  fill
                  className="object-cover grayscale contrast-125 brightness-95"
                  sizes="64px"
                />
              </div>
              <div className="flex-1 flex flex-col items-start text-left">
                <span
                  style={{
                    color: "#737373",
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                  }}
                >
                  PROJECT CONSULTANT
                </span>
                <span className="text-[9px] text-[#A3A3A3] font-sans">
                  at Tectra®
                </span>
                <h4
                  style={{
                    color: "#111113",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                  className="mt-1 mb-2"
                >
                  Arjun Menon
                </h4>

                <Link
                  href="/contact"
                  className="bg-[#111113] hover:bg-neutral-800 text-white text-[10px] font-semibold tracking-wider px-3.5 py-1.5 transition-colors duration-200 inline-flex items-center gap-1.5"
                >
                  <span>Let's talk</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Main Heading & FAQ Accordion List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            <h2
              className="mb-8 text-3xl sm:text-4xl lg:text-[44px] leading-tight lg:leading-[52.8px]"
              style={{
                color: "#111113",
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontStyle: "normal",
                fontWeight: 300,
                letterSpacing: "-1.1px",
              }}
            >
              Questions? We have answers
            </h2>

            {/* Accordion Items */}
            <div className="flex flex-col border-t border-[#E4E4E4]">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border-b border-[#E4E4E4]">
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full py-6 flex items-center justify-between gap-6 text-left group cursor-pointer"
                    >
                      <span
                        className="w-full"
                        style={{
                          color: "#111113",
                          fontFamily: '"Funnel Display", system-ui, sans-serif',
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "25.2px",
                        }}
                      >
                        {faq.question}
                      </span>
                      <span className="text-[#A3A3A3] text-lg font-light shrink-0">
                        {isOpen ? "×" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: easeOut }}
                          className="overflow-hidden"
                        >
                          <p
                            style={{
                              alignSelf: "stretch",
                              color: "#6F6F76",
                              fontFamily: "Aspekta, system-ui, sans-serif",
                              fontSize: "15px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "25.5px",
                            }}
                            className="pb-6 pr-6 w-full"
                          >
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
