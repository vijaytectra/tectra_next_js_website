"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import CardSwap, { Card } from "./CardSwap";

const STAGES = [
  {
    num: "01",
    title: "TRAFFIC",
    problem: "You're paying for clicks that never convert.",
    problemDesc: "Visitors land on your site but leave before becoming leads or customers.",
    solution: "Conversion-focused websites & landing pages",
    solutionDesc: "Strategic UX and clear user navigation designed to turn visitors → customers",
    tags: ["UI/UX", "WEB DEV"],
  },
  {
    num: "02",
    title: "LEADS",
    problem: "Leads slip through the cracks.",
    problemDesc: "No follow-up system, so interest goes cold.",
    solution: "Automated lead capture & nurture.",
    solutionDesc: "CRM and flows that respond instantly and follow up for you.",
    tags: ["AUTOMATION", "MARKETING"],
  },
  {
    num: "03",
    title: "EXPERIENCE",
    problem: "Poor UX kills the sale.",
    problemDesc: "Confusing journeys and slow pages break trust.",
    solution: "Fast, intuitive product experiences.",
    solutionDesc: "Research-led design that removes friction at every step.",
    tags: ["UI/UX", "PRODUCT"],
  },
  {
    num: "04",
    title: "OPERATIONS",
    problem: "Manual work caps your margins.",
    problemDesc: "Teams burn hours on tasks software should handle.",
    solution: "Custom software & automation.",
    solutionDesc: "Systems that remove manual drag and scale with you.",
    tags: ["SOFTWARE", "CLOUD"],
  },
  {
    num: "05",
    title: "BRAND",
    problem: "Weak branding means price competition.",
    problemDesc: "You blend in, so the cheapest option wins.",
    solution: "Brand, design & video that differentiate.",
    solutionDesc: "A presence that makes buyers trust and choose you.",
    tags: ["BRANDING", "VIDEO"],
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

export default function RevenueLeaks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      className="w-full bg-white pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        
        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
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
            01 &nbsp; WHAT&apos;S HOLDING YOUR BUSINESS BACK
          </span>
          <h2 
            className="mb-8 text-3xl sm:text-4xl lg:text-[49.6px] leading-[38px] sm:leading-[46px] lg:leading-[52.576px]"
            style={{
              width: "100%",
              maxWidth: "808px",
              color: "#111",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontStyle: "normal",
              fontWeight: 300,
              letterSpacing: "-0.992px",
            }}
          >
            Growth Isn&apos;t Magic. It&apos;s a System
          </h2>
          <p 
            className="w-full max-w-[808px] text-base sm:text-lg lg:text-[19.2px] leading-relaxed lg:leading-[31.2px]"
            style={{
              color: "#2B2B2B",
              fontFamily: "Aspekta, system-ui, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            Every stage of your business journey presents an opportunity to gain or lose revenue. Here&apos;s how Tectra helps you capture more of it
          </p>
        </motion.div>

        {/* 3D Card Swap Interactive Showcase */}
        <motion.div
          variants={fadeInUp}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16 p-8 md:p-12 bg-[#111113] border border-neutral-800 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden"
        >
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase mb-3 block">
              INTERACTIVE PIPELINE SHOWCASE
            </span>
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 font-['Funnel_Display'] leading-tight">
              See How Tectra Plugs Every Revenue Leak
            </h3>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
              Watch our solutions dynamically swap across all stages of your business growth. Hover over the cards to pause and inspect our strategic capabilities.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>5 Strategic Solution Modules Active</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center items-center h-[320px] md:h-[380px] relative w-full max-w-full">
            <CardSwap
              width={isMobile ? "90%" : 340}
              height={isMobile ? 240 : 260}
              cardDistance={isMobile ? 12 : 35}
              verticalDistance={isMobile ? 12 : 35}
              delay={3500}
              pauseOnHover={true}
              skewAmount={isMobile ? 2 : 4}
            >
              {STAGES.map((stage) => (
                <Card
                  key={stage.num}
                  className="p-5 md:p-6 bg-white border border-neutral-200 text-[#111] flex flex-col justify-between shadow-xl text-left"
                >
                  <div className="overflow-hidden">
                    <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-[#2B2B2B] uppercase block mb-1.5 md:mb-2">
                      STAGE {stage.num} — {stage.title}
                    </span>
                    <h4 className="text-[15px] md:text-[17px] font-light text-[#111] mb-1.5 md:mb-2 font-['Funnel_Display'] leading-snug">
                      {stage.solution}
                    </h4>
                    <p className="text-[11.5px] md:text-[12.5px] text-[#404040] font-sans leading-relaxed mb-2 md:mb-3">
                      {stage.solutionDesc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2.5 md:pt-3 border-t border-neutral-200/60">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-neutral-50 border border-neutral-200 text-[8px] md:text-[9px] uppercase font-mono tracking-wider text-[#111]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full border-t border-[#E4E4E4] overflow-x-auto"
        >
          <div className="min-w-[700px] w-full">
            {/* Table Header */}
          <div className="grid grid-cols-2 border-b border-neutral-200">
            {/* Left Header */}
            <div 
              className="flex bg-white"
              style={{
                width: "100%",
                height: "52.8px",
                padding: isMobile ? "18.199px 16px" : "18.199px 32px",
                alignItems: "center",
                borderRight: "0.8px solid #E4E4E4",
                borderBottom: "0.8px solid #E4E4E4",
              }}
            >
              <span
                style={{
                  color: "#2B2B2B",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontSize: "10.88px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "16.32px",
                  letterSpacing: "1.958px",
                  textTransform: "uppercase",
                }}
              >
                THE LEAK — WHERE YOU LOSE MONEY
              </span>
            </div>
            
            {/* Right Header */}
            <div 
              className="flex"
              style={{
                width: "100%",
                height: "52.8px",
                padding: isMobile ? "18.199px 16px" : "18.199px 32px",
                alignItems: "center",
                borderRight: "0.8px solid #E4E4E4",
                borderBottom: "0.8px solid #E4E4E4",
                background: "#111",
              }}
            >
              <span
                style={{
                  color: "#FFF",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontSize: "10.88px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "16.32px",
                  letterSpacing: "1.958px",
                  textTransform: "uppercase",
                }}
              >
                HOW TECTRA CLOSES IT
              </span>
            </div>
          </div>

          {/* Table Rows */}
          {STAGES.map((stage, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-neutral-200 last:border-b-0">
              
              {/* Left Column (The Leak) */}
              <div className="bg-white flex flex-col justify-start items-start w-full min-h-[136.088px] p-4 sm:p-[24px_32px] border-r-[0.8px] border-b-[0.8px] border-[#E4E4E4]">
                <span
                  style={{
                    color: "#2B2B2B",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "10.08px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "15.12px",
                    letterSpacing: "1.411px",
                    textTransform: "uppercase",
                  }}
                  className="mb-3 block"
                >
                  STAGE {stage.num} — {stage.title}
                </span>
                <h3 
                  className="mb-1.5" 
                  style={{ 
                    color: "#111",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "16.32px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "22.44px",
                  }}
                >
                  {stage.problem}
                </h3>
                <p 
                  className="max-w-[95%]"
                  style={{
                    color: "#2B2B2B",
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    fontSize: "13.76px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "22.36px",
                  }}
                >
                  {stage.problemDesc}
                </p>
              </div>

              {/* Right Column (The Solution) */}
              <div className="bg-[#F3FDF1] flex flex-col justify-start items-start w-full min-h-[136.088px] p-4 sm:p-[24px_32px] border-r-[0.8px] border-b-[0.8px] border-[#E4E4E4]">
                <h3 
                  className="mb-1.5"
                  style={{
                    color: "#111",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "16.32px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "22.44px",
                  }}
                >
                  {stage.solution}
                </h3>
                <p 
                  className="mb-5 max-w-[95%]"
                  style={{
                    color: "#2B2B2B",
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    fontSize: "13.76px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "22.36px",
                  }}
                >
                  {stage.solutionDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {stage.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border border-neutral-300 bg-white/50"
                      style={{
                        color: "#111",
                        fontFamily: '"Funnel Display", system-ui, sans-serif',
                        fontSize: "9.92px",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "14.88px",
                        letterSpacing: "1.389px",
                        textTransform: "uppercase",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
          </div>
        </motion.div>

        {/* Footer Text */}


      </div>
    </section>
  );
}
