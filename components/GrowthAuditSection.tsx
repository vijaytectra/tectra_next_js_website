"use client";

import { motion } from "framer-motion";
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

const BULLETS = [
  "A visual breakdown of your current growth opportunities",
  "A stage-by-stage assessment of your sales and marketing funnel",
  "The top 3 priorities that can create the biggest business impact",
  "A growth estimate based on your current numbers",
  "Practical recommendations from experienced strategists, focused on solutions, not sales",
];

export default function GrowthAuditSection() {
  return (
    <section className="w-full bg-[#0D0D0E] py-[80px] md:py-[100px] px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 lg:p-14 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column - Content & List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              {/* Section Label */}
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
                17 &nbsp; YOUR SAFE & STRATEGIC STEP
              </span>

              {/* Main Heading */}
              <h2
                className="mb-6 text-3xl sm:text-4xl lg:text-[44px] leading-tight lg:leading-[52.8px]"
                style={{
                  color: "#111113",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontStyle: "normal",
                  fontWeight: 300,
                  letterSpacing: "-1.1px",
                }}
              >
                FREE 30-MINUTE<br />
                GROWTH AUDIT
              </h2>

              {/* Descriptions */}
              <p
                className="mb-4 w-full max-w-[542px]"
                style={{
                  maxWidth: "100%",
                  color: "#2B2B2B",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                In this, a senior strategist from Tectra Technologies reviews your business, identifies the gaps limiting your growth, and provides the highest-impact opportunities available to you, backed by real data, not assumptions.
              </p>

              <p
                className="mb-8 w-full max-w-[542px]"
                style={{
                  maxWidth: "100%",
                  color: "#2B2B2B",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                There is no commitment required. You keep the data and action plan regardless of what you decide next
              </p>

              {/* Bullet List */}
              <div className="flex flex-col">
                {BULLETS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 py-3.5 border-b border-[#E4E4E4] first:border-t first:border-[#E4E4E4]"
                  >
                    <span className="text-[#A3A3A3] text-sm shrink-0">→</span>
                    <span
                      style={{
                        color: "#111113",
                        fontFamily: '"Funnel Display", system-ui, sans-serif',
                        fontSize: "15px",
                        fontWeight: 300,
                        lineHeight: "22px",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Metric Card & Action Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-0"
          >
            {/* Top Stat Box */}
            <div className="border border-[#E4E4E4] p-6 md:p-7 bg-white">
              {/* Stat Numbers */}
              <div className="grid grid-cols-3 gap-2 text-center pb-6 border-b border-[#E4E4E4]">
                <div className="flex flex-col items-center">
                  <div className="flex items-baseline" style={{ fontFamily: '"Funnel Display", system-ui, sans-serif', color: "#111113" }}>
                    <span className="text-3xl md:text-4xl font-light">30</span>
                    <span className="text-xs font-normal ml-0.5">min</span>
                  </div>
                  <span 
                    className="text-[10px] uppercase tracking-wider text-[#A3A3A3] mt-2 block"
                    style={{ fontFamily: "Aspekta, system-ui, sans-serif" }}
                  >
                    SESSION
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-baseline" style={{ fontFamily: '"Funnel Display", system-ui, sans-serif', color: "#111113" }}>
                    <span className="text-3xl md:text-4xl font-light">24</span>
                    <span className="text-xs font-normal">h</span>
                  </div>
                  <span 
                    className="text-[10px] uppercase tracking-wider text-[#A3A3A3] mt-2 block"
                    style={{ fontFamily: "Aspekta, system-ui, sans-serif" }}
                  >
                    REPLY TIME
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-baseline" style={{ fontFamily: '"Funnel Display", system-ui, sans-serif', color: "#111113" }}>
                    <span className="text-3xl md:text-4xl font-light">Free</span>
                  </div>
                  <span 
                    className="text-[10px] uppercase tracking-wider text-[#A3A3A3] mt-2 block"
                    style={{ fontFamily: "Aspekta, system-ui, sans-serif" }}
                  >
                    NO COST
                  </span>
                </div>
              </div>

              {/* Subtext info */}
              <div 
                className="pt-6 flex flex-col gap-1"
                style={{
                  width: "312px",
                  maxWidth: "100%",
                  color: "#2B2B2B",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "12.48px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "20.28px",
                }}
              >
                <p>Free · No obligation · NDA on request</p>
                <p>A senior strategist replies within 24 hours.</p>
              </div>
            </div>

            <div className="mt-8 lg:mt-auto flex justify-end w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto transition-colors duration-200 hover:bg-neutral-900 inline-flex items-center justify-center gap-3 text-center py-4 px-6 sm:px-20"
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "0.8px solid #111",
                  background: "#111",
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontSize: "11.84px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "17.76px",
                  letterSpacing: "1.421px",
                  textTransform: "uppercase",
                }}
              >
                <span className="whitespace-nowrap">BOOK MY GROWTH AUDIT</span>
                <span>→</span>
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
