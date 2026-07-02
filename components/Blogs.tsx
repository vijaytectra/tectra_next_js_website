"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const BLOGS = [
  {
    id: 1,
    category: "AI & AUTOMATION",
    date: "June 5, 2026",
    title: "Five Tasks AI Can Handle Better in 2026",
    desc: "From code review to customer triage — here are the workflows where AI has proven its ROI this year.",
    link: "/blogs/five-tasks-ai-can-handle-better-in-2026",
  },
  {
    id: 2,
    category: "STRATEGY",
    date: "May 22, 2026",
    title: "What a Business Website Actually Costs in 2026",
    desc: "A frank breakdown of design, development, and maintenance costs — without the agency spin.",
    link: "/blogs/what-a-business-website-actually-costs-in-2026",
  },
  {
    id: 3,
    category: "DIGITAL MARKETING",
    date: "May 10, 2026",
    title: "Top Digital Marketing Agencies in Chennai 2026",
    desc: "Our curated list of Chennai's most effective digital marketing firms — ranked by client outcomes.",
    link: "/blogs/top-digital-marketing-agencies-in-chennai-2026",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Blogs({
  bgClass = "bg-white",
  paddingClass = "pt-16 pb-16 md:pt-20 md:pb-20",
}: {
  bgClass?: string;
  paddingClass?: string;
}) {
  return (
    <section
      id="blogs"
      className={`w-full ${bgClass} ${paddingClass} relative z-10`}
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="mb-[50px]"
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
            16 &nbsp; BLOGS
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] leading-tight lg:leading-[52.8px]"
            style={{
              width: "100%",
              maxWidth: "800px",
              color: "#111113",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontStyle: "normal",
              fontWeight: 300,
              letterSpacing: "-1.1px",
            }}
          >
            Perspectives from Our Team
          </h2>
        </motion.div>

        {/* 3 Cards Grid - Contiguous with no gaps, scrolling horizontally on mobile */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-0 border border-[#E4E4E4] divide-x divide-[#E4E4E4] mb-12 bg-white snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {BLOGS.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: easeOut }}
              className="bg-white flex flex-col justify-between overflow-hidden transition-all duration-300 w-[290px] shrink-0 snap-start md:w-full md:shrink"
            >
              <Link href={blog.link} className="flex flex-col h-full justify-between group cursor-pointer">
                {/* Dark Banner Top Section */}
                <div className="relative h-[260px] w-full bg-[#0D0D0E] overflow-hidden p-6 md:p-8 flex flex-col justify-between shrink-0">
                  
                  {/* Background Dark Curtain Texture */}
                  <div className="absolute inset-0 pointer-events-none opacity-80 mix-blend-luminosity">
                    <svg className="w-full h-full object-cover" viewBox="0 0 400 260" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="260" fill="#0A0A0C" />
                      <path d="M0 0C60 45 80 195 140 260H0V0Z" fill="url(#curtain1)" opacity="0.6" />
                      <path d="M100 0C170 55 180 205 260 260H120C180 195 150 55 100 0Z" fill="url(#curtain2)" opacity="0.8" />
                      <path d="M220 0C290 45 310 215 400 260H200C290 205 260 45 220 0Z" fill="url(#curtain1)" opacity="0.7" />
                      <path d="M300 0C350 65 370 185 400 240V0H300Z" fill="url(#curtain2)" opacity="0.5" />
                      <defs>
                        <linearGradient id="curtain1" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2A2A30" />
                          <stop offset="1" stopColor="#08080A" />
                        </linearGradient>
                        <linearGradient id="curtain2" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1A1A1E" />
                          <stop offset="1" stopColor="#030304" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Subtle sheen gradient overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.4) 100%)"
                    }}
                  />

                  {/* Top Left Logo Icon */}
                  <div className="relative z-10">
                    <div className="w-8 h-7 relative flex items-center justify-start">
                      <Image
                        src="/images/Tectra Logo 2.png"
                        alt="Tectra logo mark"
                        width={32}
                        height={26}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Bottom Overlay Title in Banner */}
                  <div className="relative z-10 mt-auto">
                    <h3
                      style={{
                        color: "#FFFFFF",
                        fontFamily: '"Funnel Display", system-ui, sans-serif',
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      {blog.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6 bg-white">
                  <div className="flex flex-col gap-3">
                    {/* Category and Date */}
                    <div 
                      className="flex items-center gap-1.5"
                      style={{
                        color: "#7A7A82",
                        fontFamily: "Aspekta, system-ui, sans-serif",
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "15px",
                        textTransform: "uppercase",
                      }}
                    >
                      <span style={{ letterSpacing: "1.5px" }}>{blog.category}</span>
                      <span>·</span>
                      <span style={{ letterSpacing: "normal" }}>{blog.date.toUpperCase()}</span>
                    </div>

                    {/* Body Title */}
                    <h4
                      style={{
                        color: "#0F0F12",
                        fontFamily: '"Funnel Display", system-ui, sans-serif',
                        fontSize: "16.8px",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "21.84px",
                        letterSpacing: "-0.168px",
                      }}
                      className="group-hover:text-neutral-600 transition-colors duration-200"
                    >
                      {blog.title}
                    </h4>

                    {/* Description Excerpt */}
                    <p
                      style={{
                        maxWidth: "346px",
                        width: "100%",
                        color: "#7A7A82",
                        fontFamily: "Aspekta, system-ui, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "23.1px",
                      }}
                    >
                      {blog.desc}
                    </p>
                  </div>

                  {/* Read Article Link */}
                  <div className="pt-2">
                    <div
                      className="inline-flex items-center gap-2 transition-colors duration-200 group-hover:opacity-70"
                      style={{
                        color: "#0F0F12",
                        fontFamily: "Aspekta, system-ui, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "20px",
                      }}
                    >
                      <span>Read article</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Centered "View All Articles" Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center mt-12"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center text-center bg-white transition-all duration-200 hover:bg-neutral-50"
            style={{
              display: "inline-flex",
              width: "174.338px",
              height: "49.6px",
              padding: "15.4px 33.537px 14.2px 32.8px",
              justifyContent: "center",
              alignItems: "center",
              border: "0.8px solid rgba(0, 0, 0, 0.20)",
              color: "#0F0F12",
              textAlign: "center",
              fontFamily: "Aspekta, system-ui, sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            View All Articles
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
