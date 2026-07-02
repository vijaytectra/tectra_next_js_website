"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
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

export default function ImpactCreated() {
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
            06 &nbsp; IMPACT WE CREATED
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
            Results we have delivered
          </h2>
        </motion.div>

        {/* Portfolio Layout Grid */}
        <div className="w-full flex flex-col gap-6">
          
          {/* Top Card: Blockchain Technology (Horizontal on desktop) */}
          <motion.div
            variants={fadeInUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 border border-[#E5E5E5] bg-white overflow-hidden"
          >
            {/* Left Content Column */}
            <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between order-2 lg:order-1">
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {["Tech", "USA"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3.5 py-1 border border-[#E5E5E5] bg-[#F9F9F9] rounded-full text-[11px] font-medium text-[#525252] uppercase tracking-wider font-dm-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-dm-sans text-[24px] sm:text-[28px] font-normal leading-snug text-[#171717] mb-4">
                  Blockchain Technology
                </h3>

                {/* Description */}
                <p className="font-dm-sans text-[14px] sm:text-[15px] text-[#525252] leading-relaxed mb-8 max-w-[450px]">
                  Delivered blockchain-based platforms with smart contracts, Web3 integrations, secure digital transactions, and decentralized ecosystems for growing businesses.
                </p>

                {/* Statistics Row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { val: "120+", label: "Projects Delivered" },
                    { val: "17+", label: "Blockchain Supported" },
                    { val: "30+", label: "Clients served" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-dm-sans text-[28px] sm:text-[34px] font-light text-[#171717] leading-none tracking-tight">
                        {stat.val}
                      </span>
                      <span className="font-dm-sans text-[11px] text-[#8B8B8B] mt-2 leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-4">
                <Link
                  href="#"
                  className="font-dm-sans text-[14px] font-semibold text-[#171717] hover:opacity-70 transition-opacity inline-flex items-center gap-1.5"
                >
                  Discover case
                  <span className="text-[16px]">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative w-full h-[280px] lg:h-auto min-h-[320px] lg:min-h-full order-1 lg:order-2">
              <Image
                src="/images/laptop.jpg"
                alt="Blockchain Technology case preview"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Bottom Row: 2-Column Grid of Vertical Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Mobile App Development */}
            <motion.div
              variants={fadeInUp}
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="border border-[#E5E5E5] bg-white flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full aspect-[572/267] bg-[#F5F5F5]">
                <Image
                  src="/images/child.png"
                  alt="Mobile App Development case preview"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5 mb-4">
                    {["Healthcare", "Tech"].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3.5 py-1 border border-[#E5E5E5] bg-[#F9F9F9] rounded-full text-[11px] font-medium text-[#525252] uppercase tracking-wider font-dm-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-dm-sans text-[20px] font-semibold text-[#171717] mb-3">
                    Mobile App Development + UI/UX Design
                  </h3>

                  {/* Description */}
                  <p className="font-dm-sans text-[13.5px] sm:text-[14px] text-[#525252] leading-relaxed mb-6">
                    We have built reliable apps, including <strong>Mothrly</strong> (connects mothers with medical professionals), <strong>First Break</strong> (connects talent with recruiters), and <strong>Red Alert</strong> (simplifies medical claims management).
                  </p>
                </div>

                {/* Action Link */}
                <div className="mt-auto pt-4">
                  <Link
                    href="#"
                    className="font-dm-sans text-[14px] font-semibold text-[#171717] hover:opacity-70 transition-opacity inline-flex items-center gap-1.5"
                  >
                    Discover case
                    <span className="text-[16px]">&rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Web App Development */}
            <motion.div
              variants={fadeInUp}
              custom={0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="border border-[#E5E5E5] bg-white flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full aspect-[572/267] bg-[#F5F5F5]">
                <Image
                  src="/images/university.png"
                  alt="Web App Development case preview"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5 mb-4">
                    {["Tech", "INDIA"].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3.5 py-1 border border-[#E5E5E5] bg-[#F9F9F9] rounded-full text-[11px] font-medium text-[#525252] uppercase tracking-wider font-dm-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-dm-sans text-[20px] font-semibold text-[#171717] mb-3">
                    Web App Development + Cloud Computing + DevOps
                  </h3>

                  {/* Description */}
                  <p className="font-dm-sans text-[13.5px] sm:text-[14px] text-[#525252] leading-relaxed mb-6">
                    Built by Tectra, Carpenter&apos;s Finance offers loans, vehicle financing, credit cards, and travel advances with 3&times; faster approvals and 60% lower costs.
                  </p>
                </div>

                {/* Action Link */}
                <div className="mt-auto pt-4">
                  <Link
                    href="#"
                    className="font-dm-sans text-[14px] font-semibold text-[#171717] hover:opacity-70 transition-opacity inline-flex items-center gap-1.5"
                  >
                    Discover case
                    <span className="text-[16px]">&rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
