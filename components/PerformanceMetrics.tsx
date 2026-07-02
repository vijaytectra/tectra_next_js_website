"use client";

import { motion } from "framer-motion";
import React from "react";
import CountUp from "./ui/CountUp";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

const METRICS = [
  {
    num: "10+",
    title: "Years of Experience",
    desc: "Building software since 2015",
  },
  {
    num: "50+",
    title: "Projects Delivered",
    desc: "End-to-end execution with 100% client satisfaction",
  },
  {
    num: "15+",
    title: "Countries Served",
    desc: "From USA to Malaysia and beyond",
  },
  {
    num: "80+",
    title: "Expert members",
    desc: "Industry-specific expertise",
  },
];

const getCellClasses = (i: number) => {
  let classes = "flex flex-col items-start p-5 sm:p-10 border-[#E4E4E4] bg-white transition-colors duration-300 hover:bg-[#FDFDFD]";
  
  // 2-column borders (mobile and tablet)
  if (i % 2 === 0) {
    classes += " border-r";
  } else {
    classes += " border-r-0";
  }

  if (i < 2) {
    classes += " border-b";
  } else {
    classes += " border-b-0";
  }

  // Desktop layout (4 columns)
  classes += " lg:border-b-0";
  if (i === 3) {
    classes += " lg:border-r-0";
  } else {
    classes += " lg:border-r";
  }

  return classes;
};

export default function PerformanceMetrics() {
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
            08 &nbsp; PERFORMANCE METRICS
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
            Numbers that reflect the standard we have built
          </h2>
        </motion.div>

        {/* 4-Column Grid */}
        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full border border-[#E4E4E4] grid grid-cols-2 lg:grid-cols-4"
        >
          {METRICS.map((metric, i) => (
            <div key={i} className={getCellClasses(i)}>
              
              {/* Animated Count-Up Number */}
              <div 
                className="mb-4"
                style={{
                  color: "#111",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontSize: "64px",
                  fontWeight: 300,
                  lineHeight: "1.0",
                }}
              >
                <CountUp value={metric.num} duration={1.8} />
              </div>

              {/* Title */}
              <h3 
                className="mb-1"
                style={{
                  color: "#111",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "22px",
                }}
              >
                {metric.title}
              </h3>

              {/* Short Horizontal Line */}
              <div className="w-[80px] h-[0.8px] bg-[#E4E4E4] my-6" />

              {/* Caption */}
              <p 
                style={{
                  color: "#2B2B2B",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontSize: "9.92px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "14.88px",
                  letterSpacing: "0.992px",
                  textTransform: "uppercase",
                }}
              >
                {metric.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
