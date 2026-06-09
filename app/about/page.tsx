"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

const REVIEWS = [
  {
    quote: "Tectra Technologies delivered exactly what we needed. Their team was responsive, professional, and focused on building a solution that matched our business goals.",
    author: "Monish",
    role: "Operations Head",
    avatar: "/images/image 116.png",
    platform: "google"
  },
  {
    quote: "Great experience working with Tectra. The project was completed on time with impressive attention to detail.",
    author: "Shivasanthosh",
    role: "Startup Founder",
    avatar: "/images/image 117.png",
    platform: "linkedin"
  },
  {
    quote: "The design is clean, the performance is super fast, and our conversion rate has improved significantly since launch.",
    author: "Monish",
    role: "Operations Head",
    avatar: "/images/image 118.png",
    platform: "google"
  },
  {
    quote: "Outstanding support and communication throughout the entire project lifecycle. Extremely satisfied with Tectra's delivery.",
    author: "Shivasanthosh",
    role: "Startup Founder",
    avatar: "/images/image 117.png",
    platform: "linkedin"
  }
];

export default function AboutPage() {
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const maxScroll = target.scrollWidth - target.clientWidth;
    if (maxScroll <= 0) return;
    const scrollPercent = target.scrollLeft / maxScroll;
    setProgress(scrollPercent);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-White overflow-x-hidden">

      {/* ── Black Hero Banner ─────────────────────── */}
      <div className="w-full bg-[#000] text-White flex flex-col items-center">
        <div className="w-full max-w-[1440px] px-6 lg:px-[120px] py-10 lg:py-[40px] flex flex-col items-start min-h-[500px] lg:h-[500px] gap-16 lg:gap-[128px]">
          {/* Navbar */}
          <Navbar tone="light" className="w-full" />

          {/* Centered Text */}
          <div className="w-full flex flex-col items-center justify-center text-center max-w-[1000px] mx-auto gap-4">
            <motion.h1
              className="font-dm-sans text-[32px] sm:text-[40px] md:text-[48px] font-light leading-[1.2] tracking-tight text-[#D6D6D6]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: easeOut }}
            >
              Building <span className="font-medium text-White">Digital</span> Solutions that <span className="font-semibold text-White">Grow.</span>
            </motion.h1>
            <motion.p
              className="font-dm-sans text-[16px] font-normal leading-[1.3] text-[#ADADAD] max-w-[800px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: easeOut, delay: 0.15 }}
            >
              We <span className="font-medium">Design</span> innovative experiences, <span className="font-medium">Develop</span> powerful solutions, and help businesses <span className="font-medium">Grow.</span>
            </motion.p>
          </div>
        </div>
      </div>





      {/* ── Driven By Outcomes Section ──────────────────────────────── */}
      <section className="w-full bg-[#FAFAFA] text-Black">
        <div className="py-10 md:py-[100px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto flex flex-col gap-[56px]">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[120px] items-start">
            {/* Left content */}
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="border-t-[1px] border-[#A3A3A3] pt-1 mb-5 w-fit pr-8">
                <span className="font-dm-mono text-[14px] font-normal tracking-[3px] text-[#525252] uppercase">
                  About us
                </span>
              </div>
              <h2 className="self-stretch font-dm-sans text-[36px] md:text-[48px] font-light leading-normal text-[#171717] mb-6">
                A team driven by outcomes, not outputs.
              </h2>
              <p className="font-dm-sans text-[20px] font-normal leading-[36px] text-[#525252] max-w-[715px]">
                Tectra was built on the belief that design, technology, and growth work best together. For over a decade, we&apos;ve helped businesses turn ideas into digital products that deliver real results.
              </p>
            </motion.div>

            {/* Right content - Values list */}
            <div className="w-full lg:w-[40%] flex flex-col gap-8 lg:mt-4 ml-auto">
              {[
                { title: "Long-term thinking", desc: "Built to last, not just to launch." },
                { title: "Clarity over complexity", desc: "We simplify, not complicate." },
                { title: "Honest partnership", desc: "We tell you what we think, not what you want to hear." },
                { title: "Craft at every layer", desc: "Attention to detail is non-negotiable." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: easeOut }}
                  viewport={{ once: true, amount: "some", margin: "-20px 0px" }}
                  className="flex items-start gap-6"
                >
                  <div className="w-[1px] h-[48px] bg-[#525252] shrink-0 mt-1" />
                  <div className="flex flex-col flex-1">
                    <h3 className="font-dm-sans text-[18px] font-medium text-[#171717] mb-1">{item.title}</h3>
                    <p className="font-dm-sans text-[14px] font-normal leading-[1.4] text-[#525252]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div 
            className="w-full max-w-[1200px] mx-auto shrink-0 aspect-[16/9] relative overflow-hidden bg-[#D3D3D3]"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/images/image 126.png"
              alt="Our Team"
              fill
              className="object-cover"
              style={{
                objectPosition: "50% 30%"
              }}
            />
          </motion.div>
          
        </div>
      </section>
      {/* ── What We Do Section ──────────────────────────────── */}
      <section className="w-full bg-White text-Black">
        <div className="py-10 md:py-[100px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[120px] items-start">
            
            {/* Left Content */}
            <motion.div 
              className="w-full lg:w-[40%] flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="border-t-[1px] border-[#A3A3A3] pt-1 mb-6 w-fit pr-8">
                <span className="font-dm-mono text-[14px] font-normal tracking-[3px] text-[#525252] uppercase">
                  What we do
                </span>
              </div>
              <h2 className="self-stretch font-dm-sans text-[36px] md:text-[48px] font-light leading-normal text-[#171717] mb-6">
                Built different.<br />Proven by results.
              </h2>
              <p className="self-stretch font-dm-sans text-[20px] font-normal leading-[36px] text-[#525252]">
                Delivering digital solutions with a focus on strategy, scalability, and long-term success. We don&apos;t just ship projects — we invest in outcomes.
              </p>
            </motion.div>

            {/* Right Content */}
            <div className="w-full lg:w-[60%] flex flex-col gap-8 md:gap-12 lg:mt-4">
              {[
                {
                  num: "01",
                  title: "Business-First\nPerformance",
                  desc: "We measure our work by your outcomes, not our deliverables. Every decision — from architecture to design — is made with your business goals as the primary filter."
                },
                {
                  num: "02",
                  title: "Unified\nExpertise",
                  desc: "Design, technology, and growth aren't separate departments here — they work together from day one. That integration is what produces coherent, high-performing products."
                },
                {
                  num: "03",
                  title: "Built for\nScale",
                  desc: "The solutions we build are engineered for where your business is going, not just where it is today. Scalable systems, modular design, and future-proof foundations."
                },
                {
                  num: "04",
                  title: "Reliable\nPartnership",
                  desc: "We stay engaged beyond launch. Our clients know they have a team in their corner — responsive, accountable, and committed to the long game."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: idx * 0.1, ease: easeOut }}
                  viewport={{ once: true, amount: "some", margin: "-20px 0px" }}
                  className="flex flex-col md:flex-row gap-4 md:gap-8 items-start"
                >
                  <div className="w-full md:w-[200px] shrink-0 flex flex-col gap-2">
                    <span className="font-urbanist text-[16px] font-medium leading-normal text-[#525252]">{item.num}</span>
                    <h3 className="font-dm-sans text-[24px] font-normal text-[#171717] whitespace-pre-line leading-[1.5]">{item.title}</h3>
                  </div>
                  <p className="flex-1 font-dm-sans text-[16px] font-normal leading-[1.6] text-[#525252] md:mt-8">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Purpose Section ──────────────────────────────── */}
      <section className="w-full bg-[#EBEBEB] text-Black">
        <div className="py-10 md:py-[100px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">

          <motion.div 
            className="flex flex-col mb-10 lg:mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="border-t-[1px] border-[#A3A3A3] pt-1 mb-6 w-fit pr-8">
              <span className="font-dm-mono text-[14px] font-normal tracking-[3px] text-[#525252] uppercase">
                Our purpose
              </span>
            </div>
            <h2 className="self-stretch font-dm-sans text-[36px] md:text-[48px] font-light leading-normal text-[#171717]">
              Built different.<br />Proven by results.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[32px]">

            {/* Column 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0, ease: easeOut }}
              viewport={{ once: true, amount: "some", margin: "-20px 0px" }}
              className="flex flex-col gap-6 lg:gap-[32px]"
            >
              {/* Vision Card */}
              <div className="flex flex-col justify-center bg-White p-8 lg:p-10 lg:h-[240px] w-full shadow-md">
                <h3 className="font-dm-sans text-[24px] font-normal leading-[1.3] text-[#1A1A1A] mb-4">
                  Our Vision
                </h3>
                <p className="font-dm-sans text-[16px] font-normal leading-[1.6] text-[#525252]">
                  Our vision is to build innovative, scalable, and user-focused digital solutions that help businesses grow and stay future-ready.
                </p>
              </div>
              {/* Meeting Image */}
              <div className="relative w-full lg:h-[240px] aspect-[380/240] overflow-hidden bg-color-neutral-100 shadow-md">
                <Image
                  src="/images/image 126.png"
                  alt="Office Meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Column 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
              viewport={{ once: true, amount: "some", margin: "-20px 0px" }}
              className="relative w-full lg:h-[512px] aspect-[380/512] overflow-hidden bg-color-neutral-100 shadow-md"
            >
              <Image
                src="/images/image 127.png"
                alt="Whiteboard Session"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Column 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              viewport={{ once: true, amount: "some", margin: "-20px 0px" }}
              className="flex flex-col gap-6 lg:gap-[32px]"
            >
              {/* Collab Image */}
              <div className="relative w-full lg:h-[240px] aspect-[380/240] overflow-hidden bg-color-neutral-100 shadow-md">
                <Image
                  src="/images/image 128.png"
                  alt="Team Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Mission Card */}
              <div className="flex flex-col justify-center bg-White p-8 lg:p-10 lg:h-[240px] w-full shadow-md">
                <h3 className="font-dm-sans text-[24px] font-normal leading-[1.3] text-[#1A1A1A] mb-4">
                  Our Mission
                </h3>
                <p className="font-dm-sans text-[16px] font-normal leading-[1.6] text-[#525252]">
                  Our mission is to create fast, scalable, and user-focused web experiences that help businesses grow and stay future-ready.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Our Client Reviews Section ────────────────────────── */}
      <section className="w-full bg-[#FFF] text-Black">
        <div className="py-10 md:py-[100px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[120px] items-start mb-12 lg:mb-20 w-full">
            {/* Left Content */}
            <motion.div
              className="w-full lg:w-[45%] flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="border-t-[1px] border-[#A3A3A3] pt-1 mb-6 w-fit pr-8">
                <span className="font-dm-mono text-[14px] font-normal tracking-[3px] text-[#525252] uppercase">
                  Client voices
                </span>
              </div>
              <h2 className="font-dm-sans text-[36px] md:text-[48px] font-light leading-[1.2] text-[#171717]">
                Trusted by<br />businesses that grow
              </h2>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="w-full lg:w-[55%] flex flex-col lg:pt-[42px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="font-dm-sans text-[18px] font-normal leading-[1.6] text-[#525252] max-w-[500px]">
                Recognized for our commitment to quality, innovation, and delivering impactful digital solutions that drive meaningful business results.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-start w-full">

            {/* Left Block */}
            <motion.div
              className="w-full lg:w-[320px] lg:shrink-0 flex flex-col items-start"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative w-[128px] h-[128px] aspect-square mb-2 select-none">
                <Image
                  src="/images/close 1.png"
                  alt="Quote Icon"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <h3 className="font-dm-sans text-[28px] md:text-[32px] font-normal leading-[1.3] text-Black mt-4">
                What our <br className="hidden lg:block" /> customers are <br className="hidden lg:block" /> Saying
              </h3>

              {/* Navigation Controls */}
              <div className="flex items-center gap-8 mt-10">
                <button
                  onClick={scrollLeft}
                  className="text-[#737373] hover:text-Black transition-colors duration-200 cursor-pointer p-1"
                  aria-label="Previous review"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none stroke-linecap-round stroke-linejoin-round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>

                {/* Scroll Progress Bar */}
                <div className="relative w-[50px] h-[6px] bg-neutral-200 rounded-full">
                  <div
                    className="absolute top-0 left-0 w-[20px] h-full bg-[#525252] rounded-full transition-transform duration-100 ease-out"
                    style={{
                      transform: `translateX(${progress * 30}px)`
                    }}
                  />
                </div>

                <button
                  onClick={scrollRight}
                  className="text-[#737373] hover:text-Black transition-colors duration-200 cursor-pointer p-1"
                  aria-label="Next review"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none stroke-linecap-round stroke-linejoin-round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Right Block (Testimonial Cards Slider) */}
            <div className="w-full flex-1 overflow-hidden relative">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto scroll-smooth w-full py-4 no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
              >
                {REVIEWS.map((review, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#F5F5F5] p-8 md:p-10 flex flex-col justify-between w-[300px] sm:w-[350px] md:w-[396px] h-[340px] shrink-0 snap-start"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
                  >
                    {/* Top Row: Quote Icon & Platform Logo */}
                    <div className="flex justify-between items-start w-full">
                      <div className="relative w-9 h-6 select-none">
                        <Image
                          src="/images/close 1.png"
                          alt="Quote Icon"
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                        {review.platform === "google" ? (
                          <svg viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0A66C2]">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Review Body */}
                    <p className="font-dm-sans text-[15px] md:text-[16px] font-normal leading-[1.6] text-[#262626] my-4">
                      {review.quote}
                    </p>

                    {/* Author Footer */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full overflow-hidden relative shrink-0 bg-neutral-100">
                        <Image
                          src={review.avatar}
                          alt={review.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-dm-sans text-[15px] font-medium text-Black leading-none mb-1">
                          {review.author}
                        </span>
                        <span className="font-dm-sans text-[13px] font-normal text-[#737373] leading-none">
                          {review.role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Our Clients Section ────────────────────────────────── */}
      <ClientLogos />

      {/* ── Let's Build Together CTA Section ───────────────────── */}
      <section className="w-full bg-White text-Black py-16 md:py-[100px]">
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[120px] items-start w-full">
            {/* Left Content */}
            <motion.div
              className="w-full lg:w-[45%] flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-center py-1 pr-4 border-t-[0.5px] border-[#525252] w-fit gap-[19.2px] mb-8">
                <span className="font-dm-mono text-[14px] font-normal tracking-[3px] text-[#525252] uppercase">
                  Let's build together
                </span>
              </div>
              <h2 className="font-dm-sans text-[48px] md:text-[64px] font-light leading-normal">
                <span className="text-[#171717]">Build</span><br />
                <span className="text-[#737373]">Beyond</span><br />
                <span className="text-[#171717]">Ordinary</span>
              </h2>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="w-full lg:w-[55%] flex flex-col items-start lg:pt-[56px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="self-stretch font-dm-sans text-[24px] md:text-[32px] font-normal leading-[1.3] text-[#525252] mb-20">
                Digital solutions designed to solve business challenges and support sustainable growth.
              </p>
              <Link href="/contact" className="bg-Black text-White px-8 py-4 font-dm-sans text-[16px] font-medium flex items-center gap-3 hover:bg-neutral-800 transition-colors">
                Start Your Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
