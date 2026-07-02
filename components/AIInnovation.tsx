"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

const chatContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.4,
    },
  },
};

const robotMessageVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 14,
      mass: 0.9,
    },
  },
};

const userMessageVariants = {
  hidden: { opacity: 0, x: 30, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 14,
      mass: 0.9,
    },
  },
};

const ITEMS = [
  {
    num: "01",
    title: "LLM Integration",
    desc: "Fine-tuned GPT-4 and Claude models for your proprietary data.",
  },
  {
    num: "02",
    title: "Autonomous Agents",
    desc: "AI agents that execute multi-step workflows across your software stack.",
  },
  {
    num: "03",
    title: "RAG Architecture",
    desc: "Secure retrieval-augmented generation for enterprise knowledge bases.",
  },
  {
    num: "04",
    title: "Computer Vision",
    desc: "Automated inspection and visual analysis for logistics and manufacturing.",
  },
];

export default function AIInnovation() {
  return (
    <section
      className="w-full bg-white pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* Left Column - Headers and Tech Info */}
          <div>
            <motion.div
              variants={fadeInUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mb-12"
            >
              <span
                className="mb-6 block"
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
                12 &nbsp; AI INNOVATION
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-[49.6px] leading-[38px] sm:leading-[46px] lg:leading-[52.576px]"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  color: "#111",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontStyle: "normal",
                  fontWeight: 300,
                  letterSpacing: "-0.992px",
                }}
              >
                Every product we build has AI at its core
              </h2>
            </motion.div>

            {/* Staggered Info List */}
            <motion.div
              variants={fadeInUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-10"
            >
              {ITEMS.map((item) => (
                <div key={item.num} className="flex gap-6 items-start">
                  <span
                    style={{
                      color: "#111",
                      fontFamily: '"Funnel Display", system-ui, sans-serif',
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "20px",
                    }}
                    className="shrink-0 pt-0.5 select-none"
                  >
                    {item.num} /
                  </span>
                  <div>
                    <h4
                      style={{
                        color: "#111",
                        fontFamily: '"Funnel Display", system-ui, sans-serif',
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "24px",
                      }}
                      className="mb-1.5"
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        color: "#111",
                        fontFamily: "Aspekta, system-ui, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "20px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Chat UI Box with Drop Shadow */}
          <div className="relative w-full max-w-[460px] h-[460px] md:h-full md:aspect-[4/4.2] mx-auto lg:mx-0">
            {/* Offset border/shadow element */}
            <div className="absolute inset-0 bg-[#E4E4E4] translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 rounded-sm" />

            {/* Chat Container */}
            <motion.div
              variants={chatContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="relative w-full h-full bg-[#0D0D0D] rounded-sm p-5 md:p-8 flex flex-col gap-4 border border-neutral-800 text-white justify-between overflow-hidden"
            >
              {/* Message 1 (Robot) */}
              <motion.div variants={robotMessageVariants} className="flex items-start gap-3">
                <div
                  style={{
                    width: "33px",
                    height: "34px",
                    flexShrink: 0,
                    aspectRatio: "33/34",
                  }}
                  className="rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src="/images/robot.png"
                    width={22}
                    height={22}
                    alt="robot avatar"
                    className="object-contain"
                  />
                </div>
                <motion.div
                  className="flex-1 rounded-sm p-4 text-[13px] font-normal cursor-default border"
                  style={{
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    lineHeight: "21.13px",
                    color: "var(--color-neutral-0, #FFF)",
                    borderColor: "var(--color-neutral-600, #525252)",
                    background: "var(--color-neutral-700, #404040)",
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.015,
                    borderColor: "var(--color-neutral-400, #A3A3A3)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Analyzing 12,847 transactions... Q3 revenue was $2.4M (+18% YoY). 3 churn risks identified.
                </motion.div>
              </motion.div>

              {/* Message 2 (User) */}
              <motion.div variants={userMessageVariants} className="flex items-start gap-3 justify-end">
                <motion.div
                  className="bg-[#1E1E1E] border border-neutral-800 rounded-sm p-4 text-[13px] font-normal max-w-[80%] cursor-default"
                  style={{
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    lineHeight: "21.13px",
                    color: "var(--color-neutral-0, #FFF)",
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.015,
                    borderColor: "var(--color-neutral-600, #525252)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Identify specific factors driving churn in enterprise segment.
                </motion.div>
                <div
                  className="shrink-0 w-8 h-8 rounded-full bg-[#2B2B2B] flex items-center justify-center text-[9px] font-bold text-white tracking-wider select-none"
                  style={{ fontFamily: "Aspekta, system-ui, sans-serif" }}
                >
                  YOU
                </div>
              </motion.div>

              {/* Message 3 (Robot) */}
              <motion.div variants={robotMessageVariants} className="flex items-start gap-3">
                <div
                  style={{
                    width: "33px",
                    height: "34px",
                    flexShrink: 0,
                    aspectRatio: "33/34",
                  }}
                  className="rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src="/images/robot.png"
                    width={22}
                    height={22}
                    alt="robot avatar"
                    className="object-contain"
                  />
                </div>
                <motion.div
                  className="flex-1 rounded-sm p-4 text-[13px] font-normal cursor-default border"
                  style={{
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    lineHeight: "21.13px",
                    color: "var(--color-neutral-0, #FFF)",
                    borderColor: "var(--color-neutral-600, #525252)",
                    background: "var(--color-neutral-700, #404040)",
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.015,
                    borderColor: "var(--color-neutral-400, #A3A3A3)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-[#8B8B8B]">Processing...</span>
                  <br />
                  Primary factor: Integration latency in EMEA region accounts for 65% of negative sentiment scores.
                </motion.div>
              </motion.div>

              {/* Message 4 (Typing indicator) */}
              <motion.div variants={robotMessageVariants} className="flex items-start gap-3">
                <div
                  style={{
                    width: "33px",
                    height: "34px",
                    flexShrink: 0,
                    aspectRatio: "33/34",
                  }}
                  className="rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src="/images/robot.png"
                    width={22}
                    height={22}
                    alt="robot avatar"
                    className="object-contain"
                  />
                </div>
                <motion.div
                  className="rounded-sm py-3 px-4 flex gap-1.5 items-center justify-center w-14 h-9 cursor-default border"
                  style={{
                    borderColor: "var(--color-neutral-600, #525252)",
                    background: "var(--color-neutral-700, #404040)",
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.015,
                    borderColor: "var(--color-neutral-400, #A3A3A3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#A3A3A3] animate-bounce"
                    style={{ animationDelay: "0ms", animationDuration: "1s" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#A3A3A3] animate-bounce"
                    style={{ animationDelay: "150ms", animationDuration: "1s" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#A3A3A3] animate-bounce"
                    style={{ animationDelay: "300ms", animationDuration: "1s" }}
                  />
                </motion.div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
