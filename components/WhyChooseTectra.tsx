"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

const CARDS = [
  {
    title: "360-degree Growth Partner",
    desc: "You get software, design, marketing, and automation from one single expert team",
  },
  {
    title: "Built to Fit Your Market Reality",
    desc: "We create solutions that are fully personalised to your industry and specific business needs, ensuring outstanding growth.",
  },
  {
    title: "End-to-End Execution",
    desc: "We handle everything from idea to execution with consistency while maintaining your industry standards.",
  },
  {
    title: "Chennai roots \u21c4 Global standards",
    desc: "Software development company in Chennai with global-quality thinking, delivering solutions that meet international standards and expectations",
  },
  {
    title: "Industry-Specific Expertise",
    desc: "Experience across industries allows us to understand and solve domain-specific business challenges with clear execution.",
  },
  {
    title: "Built for Diverse Business Models",
    desc: "We work with startups, SMEs, and enterprises, adapting to different scales, goals, and business structures",
  },
];

const getCellClasses = (i: number) => {
  let classes = "flex flex-col items-start p-8 sm:p-10 border-[#E4E4E4] transition-colors duration-300 hover:bg-[#FDFDFD]";

  // Base mobile borders (stacked)
  if (i !== 5) {
    classes += " border-b";
  }

  // Tablet layout (2 columns)
  if (i === 4) {
    classes += " md:border-b-0";
  }
  if (i % 2 === 0) {
    classes += " md:border-r";
  } else {
    classes += " md:border-r-0";
  }

  // Desktop layout (3 columns)
  if (i >= 3) {
    classes += " lg:border-b-0";
  } else {
    classes += " lg:border-b";
  }
  if (i % 3 === 2) {
    classes += " lg:border-r-0";
  } else {
    classes += " lg:border-r";
  }

  return classes;
};

export default function WhyChooseTectra() {
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
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div className="flex flex-col">
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
              07 &nbsp; THIS IS WHAT SETS US APART FROM EVERYONE ELSE
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
              Why Choose Tectra Technologies
            </h2>
          </div>

          <Link
            href="/contact"
            className="border border-[#D6D6D6] hover:border-black hover:bg-black hover:text-white px-8 py-3.5 font-dm-sans text-[13px] font-medium text-[#111] transition-all duration-300 shrink-0 inline-block text-center whitespace-nowrap"
          >
            Start your project
          </Link>
        </motion.div>

        {/* 3x2 Grid */}
        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full border border-[#E4E4E4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS.map((card, i) => (
            <div key={i} className={getCellClasses(i)}>
              <h3
                className="mb-3 w-full lg:max-w-[182px]"
                style={{
                  color: "#111",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "36px",
                  letterSpacing: "-0.48px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  alignSelf: "stretch",
                  color: "#555",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
