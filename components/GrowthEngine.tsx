"use client";

import { motion } from "framer-motion";
import React from "react";

const STAGES = [
  {
    num: "01",
    goalTitle: "Business Goals",
    goalDesc: "Define the revenue target and the path to it.",
    arrow: "↓",
    powerLabel: "POWERED BY",
    capTitle: "Strategy & Growth Planning",
    capDesc: "Diagnose, prioritize, project impact.",
  },
  {
    num: "02",
    goalTitle: "Lead Generation",
    goalDesc: "Bring qualified buyers, not vanity traffic.",
    arrow: "↓",
    powerLabel: "POWERED BY",
    capTitle: "Digital Marketing — SEO, Paid, Social",
    capDesc: "Lower cost per qualified lead.",
  },
  {
    num: "03",
    goalTitle: "Website & Product Experience",
    goalDesc: "Convert that attention into action.",
    arrow: "↓",
    powerLabel: "POWERED BY",
    capTitle: "UI/UX Design + Web & App Development",
    capDesc: "More conversions from the same traffic.",
  },
  {
    num: "04",
    goalTitle: "Software & Automation",
    goalDesc: "Scale operations without scaling cost.",
    arrow: "↓",
    powerLabel: "POWERED BY",
    capTitle: "Custom Software & Cloud",
    capDesc: "Reclaim manual hours, run faster.",
  },
  {
    num: "05",
    goalTitle: "Customer Retention",
    goalDesc: "Keep and grow the customers you win.",
    arrow: "↓",
    powerLabel: "POWERED BY",
    capTitle: "CRM, Lifecycle & Automation",
    capDesc: "Higher lifetime value, less churn.",
  },
  {
    num: "06",
    goalTitle: "Revenue Growth",
    goalDesc: "The compounding result of the system above.",
    arrow: "★",
    powerLabel: "OUTCOME",
    capTitle: "Predictable, Measurable Revenue",
    capDesc: "One system, accountable for the number that matters.",
    isOutcome: true,
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

export default function GrowthEngine() {
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
            02 &nbsp; THE GROWTH PIPELINE
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
            Every business goal needs the right strategic solution. We have them all.
          </h2>
          <p 
            className="w-full max-w-[920px] text-base sm:text-lg lg:text-[19.2px] leading-relaxed lg:leading-[31.2px]"
            style={{
              color: "#2B2B2B",
              fontFamily: "Aspekta, system-ui, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            Tectra Technologies doesn't just solve tech problems; it delivers complete solutions across{" "}
            <br className="hidden lg:inline" />
            every stage of the growth pipeline, giving businesses the flexibility to choose exactly what they need.
          </p>
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
            {STAGES.map((stage, i) => {
            const isOutcome = stage.isOutcome;
            return (
              <div 
                key={i} 
                className="flex flex-row border-b border-[#E4E4E4]"
                style={{
                  background: isOutcome ? "#111" : "#FFF",
                }}
              >
                
                {/* Left Column (Business Stage) */}
                <div 
                  className="flex flex-col justify-start items-start flex-1 max-w-[488px] p-4 sm:p-[24px_32px]"
                >
                  <div className="flex gap-4 items-start">
                    <span 
                      style={{
                        color: isOutcome ? "#A3A3A3" : "#2B2B2B",
                        fontFamily: '"Funnel Display", system-ui, sans-serif',
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "18px",
                        letterSpacing: "1.2px",
                        marginTop: "6px",
                      }}
                    >
                      {stage.num}
                    </span>
                    <div>
                      <h3 
                        className="mb-1.5"
                        style={{
                          color: isOutcome ? "#FFF" : "#111",
                          fontFamily: '"Funnel Display", system-ui, sans-serif',
                          fontSize: "22.4px",
                          fontStyle: "normal",
                          fontWeight: 300,
                          lineHeight: "30.8px",
                        }}
                      >
                        {stage.goalTitle}
                      </h3>
                      <p 
                        style={{
                          color: isOutcome ? "#A3A3A3" : "#2B2B2B",
                          fontFamily: "Aspekta, system-ui, sans-serif",
                          fontSize: "14.08px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "22.88px",
                        }}
                      >
                        {stage.goalDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Middle Column (Divider with Flow Indicator) */}
                <div 
                  className="flex items-center justify-center w-[48px] shrink-0 border-l border-r border-[#E4E4E4]"
                  style={{
                    color: isOutcome ? "#FFF" : "#737373",
                    borderColor: isOutcome ? "#2A2A2A" : "#E4E4E4",
                  }}
                >
                  {isOutcome ? (
                    <img 
                      src="/images/★.png" 
                      alt="star" 
                      style={{ width: "12px", height: "auto" }} 
                    />
                  ) : (
                    <img 
                      src="/images/↓.png" 
                      alt="down arrow" 
                      style={{ width: "12px", height: "auto" }} 
                    />
                  )}
                </div>

                {/* Mobile Flow Indicator (shows only on mobile between left and right column) */}
                <div 
                  className="hidden"
                  style={{
                    color: isOutcome ? "#FFF" : "#737373",
                    borderColor: isOutcome ? "#2A2A2A" : "#E4E4E4",
                    background: isOutcome ? "#1C1C1C" : "#FAFAFA",
                  }}
                >
                  {isOutcome ? (
                    <img 
                      src="/images/★.png" 
                      alt="star" 
                      style={{ width: "12px", height: "auto" }} 
                    />
                  ) : (
                    <img 
                      src="/images/↓.png" 
                      alt="down arrow" 
                      style={{ width: "12px", height: "auto" }} 
                    />
                  )}
                </div>

                {/* Right Column (Tectra Capability) */}
                <div 
                  className="flex flex-col justify-start items-start flex-1 max-w-[488px] p-4 sm:p-[24px_32px]"
                >
                  <span 
                    className="mb-1.5 block"
                    style={{
                      color: isOutcome ? "#A3A3A3" : "#2B2B2B",
                      fontFamily: '"Funnel Display", system-ui, sans-serif',
                      fontSize: "9.92px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "14.88px",
                      letterSpacing: "1.389px",
                      textTransform: "uppercase",
                    }}
                  >
                    {stage.powerLabel}
                  </span>
                  <h3 
                    className="mb-1.5"
                    style={{
                      color: isOutcome ? "#FFF" : "#111",
                      fontFamily: '"Funnel Display", system-ui, sans-serif',
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "22px",
                    }}
                  >
                    {stage.capTitle}
                  </h3>
                  <p 
                    style={{
                      color: isOutcome ? "#A3A3A3" : "#2B2B2B",
                      fontFamily: "Aspekta, system-ui, sans-serif",
                      fontSize: "13.44px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "20.16px",
                    }}
                  >
                    {stage.capDesc}
                  </p>
                </div>

              </div>
            );
          })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
