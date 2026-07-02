"use client";

import { motion } from "framer-motion";
import React from "react";

const LOGOS = [
  "MERIDIAN GROUP",
  "AXIOM CAPITAL",
  "VERTEX HOLDINGS",
  "NORDANT CORP",
  "STRATIQ PARTNERS",
  "ELARA GLOBAL"
];

const BADGES = [
  "ISO 27001",
  "ISO 9001",
  "CLUTCH TOP AGENCY",
  "G2 LEADER"
];

const easeOut = [0.22, 1, 0.36, 1] as const;
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

export default function ClientLogos() {
  return (
    <section 
      className="w-full bg-white pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        
        {/* Top Header Row with Divider */}
        <motion.div 
          className="flex items-center gap-6 mb-10 w-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <span 
            style={{
              color: "#737373",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontSize: "11.52px",
              fontWeight: 300,
              letterSpacing: "2.995px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            TRUSTED BY
          </span>
          <div className="flex-1 h-[0.8px] bg-[#E4E4E4]" />
        </motion.div>

        {/* Logos Row */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 items-center justify-between mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          {LOGOS.map((logo, idx) => (
            <div 
              key={idx}
              style={{
                color: "#2B2B2B",
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontSize: "14.08px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "21.12px",
                letterSpacing: "0.845px",
                textTransform: "uppercase",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 select-none cursor-default"
            >
              {logo}
            </div>
          ))}
        </motion.div>

        {/* Middle Divider Line */}
        <motion.div 
          className="w-full h-[0.8px] bg-[#E4E4E4] mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        />

        {/* Badges Row */}
        <motion.div 
          className="flex flex-wrap gap-4 items-center justify-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          {BADGES.map((badge, idx) => (
            <div 
              key={idx}
              className="border border-[#E4E4E4] px-4 py-2.5 text-neutral-800 transition-colors duration-300 hover:border-neutral-950 select-none cursor-default"
              style={{
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontSize: "10.56px",
                fontWeight: 300,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
              }}
            >
              {badge}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
