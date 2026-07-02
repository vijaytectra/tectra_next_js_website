"use client";

import { motion } from "framer-motion";
import React from "react";

const SECTORS = [
  {
    title: "Healthcare",
    desc: "HIPAA-compliant platforms, EMR systems, telehealth solutions",
  },
  {
    title: "Real Estate",
    desc: "Property management systems and MLS integrations",
  },
  {
    title: "Finance",
    desc: "Fintech apps, payment gateways, risk analytics.",
  },
  {
    title: "Education",
    desc: "LMS platforms and EdTech assessment tools.",
  },
  {
    title: "Manufacturing",
    desc: "ERP systems and IoT supply chain integration.",
  },
  {
    title: "Logistics",
    desc: "Fleet tracking and route optimization systems",
  },
  {
    title: "E-Commerce",
    desc: "Marketplaces and E-commerce platforms",
  },
  {
    title: "Technology",
    desc: "Scalable SaaS platforms and digital products",
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

const getCellClasses = (i: number) => {
  let borderClasses = "";
  
  // Bottom border:
  if (i === 7) {
    borderClasses += " border-b-0"; // No bottom border on the last card
  } else if (i === 6) {
    borderClasses += " border-b sm:border-b-0"; // No bottom border on last row on tablet
  } else if (i >= 4) {
    borderClasses += " border-b lg:border-b-0"; // No bottom border on last row on desktop
  } else {
    borderClasses += " border-b";
  }

  // Right border:
  if (i % 2 === 0) {
    borderClasses += " border-r-0 sm:border-r"; // Right border on odd columns on tablet/desktop
  } else if (i === 1 || i === 5) {
    borderClasses += " border-r-0 lg:border-r"; // Right border on even column 2 on desktop
  } else {
    borderClasses += " border-r-0"; // No right border on rightmost columns
  }

  return `flex flex-col items-start p-8 lg:p-[40px_32px] border-[#E4E4E4] transition-colors duration-300 hover:bg-[#FDFDFD] ${borderClasses}`;
};

export default function SectorExpertise() {
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
            05 &nbsp; SECTOR EXPERTISE
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
            Industry-specific expertise
          </h2>
        </motion.div>

        {/* 4-Column Responsive Grid */}
        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full border-t border-l border-r border-b border-[#E4E4E4] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SECTORS.map((sector, i) => (
            <div key={i} className={getCellClasses(i)}>
              {/* Sector Title */}
              <h3 
                className="mb-3"
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
                {sector.title}
              </h3>
              
              {/* Sector Description */}
              <p 
                style={{
                  color: "#555",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                {sector.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
