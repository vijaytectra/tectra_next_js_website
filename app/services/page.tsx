"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import OutlineButton from "@/components/ui/OutlineButton";

const SUB_SERVICES = [
  {
    title: "Web Development",
    description: "Scalable web solutions engineered for performance, usability, and long-term business growth."
  },
  {
    title: "Mobile App Development",
    description: "Native performance with fluid cross-platform efficiency for iOS and Android ecosystems."
  },
  {
    title: "Cloud Computing",
    description: "Scalable AWS and Azure migrations designed for 99.9% uptime and global latency optimization."
  },
  {
    title: "Blockchain",
    description: "Decentralized protocols and smart contract audits for immutable transaction security."
  },
  {
    title: "DevOps",
    description: "Automated CI/CD pipelines and Kubernetes orchestration to accelerate release velocity."
  },
  {
    title: "QA Automation",
    description: "End-to-end testing frameworks ensuring zero-defect production deployments."
  }
] as const;

const DIGITAL_MARKETING_SUB_SERVICES = [
  {
    title: "Search Engine Optimization",
    description: "Data-driven SEO strategies focused on improving organic visibility, search rankings, and long-term customer reach."
  },
  {
    title: "Social Media Marketing",
    description: "Strategic social media marketing designed to boost brand awareness, audience engagement, and online growth."
  },
  {
    title: "Email Marketing and Automation",
    description: "Automated email marketing solutions designed to improve customer engagement, lead nurturing, and conversion growth."
  },
  {
    title: "E-commerce Marketing",
    description: "Data-driven e-commerce marketing strategies focused on increasing sales, customer retention, and brand growth."
  },
  {
    title: "Content Writing",
    description: "Content writing services focused on stronger engagement, clarity, and brand visibility."
  },
  {
    title: "PPC",
    description: "Performance-driven PPC campaigns designed to maximize reach, traffic, and conversion results."
  },
  {
    title: "Google Ads Specialist",
    description: "Google Ads solutions focused on targeted reach, lead generation, and measurable campaign growth."
  },
  {
    title: "Meta Ads",
    description: "Strategic Meta ad campaigns designed to increase visibility, engagement, and customer conversions."
  },
  {
    title: "LinkedIn Ads",
    description: "LinkedIn advertising strategies built to generate quality leads, brand authority, and business growth."
  },
  {
    title: "Penalty Recovery Services",
    description: "SEO penalty recovery services focused on restoring rankings, traffic, and search visibility."
  },
  {
    title: "ASO Service",
    description: "ASO services focused on improving app visibility, downloads, and store rankings."
  },
  {
    title: "Local SEO",
    description: "Local SEO strategies designed to improve local visibility, traffic, and customer reach."
  },
  {
    title: "CRM",
    description: "CRM solutions designed to streamline customer management, engagement, and business operations."
  },
  {
    title: "ERP",
    description: "ERP solutions built to optimize operations, workflow management, and business efficiency."
  }
] as const;

const BRANDING_SUB_SERVICES = [
  {
    title: "Logo Design",
    description: "Creative logo design services focused on building strong and memorable brand identities."
  },
  {
    title: "Brand Collateral",
    description: "Brand collateral design services focused on creating consistent and impactful brand communication assets."
  },
  {
    title: "Graphic Design",
    description: "Graphic design services focused on creating visually consistent and impactful brand communication assets."
  },
  {
    title: "2D / 3D Visualisation",
    description: "Immersive 2D and 3D visualization solutions crafted for realistic, interactive, and engaging digital experiences."
  },
  {
    title: "Brand Identity",
    description: "Strategic brand identity solutions crafted to build recognition, consistency, and lasting brand impact."
  },
  {
    title: "Industrial Product Design",
    description: "Industrial product design solutions focused on functionality, innovation, and scalable manufacturing."
  }
] as const;

const EXPERIENCE_SUB_SERVICES = [
  {
    title: "UI/UX Designing",
    description: "User-focused UI/UX designs crafted for seamless experiences, usability, and digital engagement."
  },
  {
    title: "Web Experience Designing",
    description: "User-focused web experiences designed for seamless interaction, engagement, and digital growth."
  },
  {
    title: "Mobile Experience Designing",
    description: "User-centered mobile experience design focused on usability, engagement, and seamless interactions."
  }
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeOut } },
};

export default function ServicesPage() {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const [activeMarketingAccordion, setActiveMarketingAccordion] = useState<number>(-1);
  const [activeBrandingAccordion, setActiveBrandingAccordion] = useState<number>(-1);
  const [activeExperienceAccordion, setActiveExperienceAccordion] = useState<number>(-1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-White text-[#171717] overflow-x-hidden">
      
      {/* ── Navbar ─────────────────────────────────────────── */}
      <div className="w-full px-6 py-6 sm:px-12 md:px-[120px]">
        <Navbar tone="dark" className="w-full" />
      </div>

      {/* ── Page Hero Header ───────────────────────────────── */}
      <main className="w-full flex flex-col pt-12 sm:pt-[64px]">
        <div className="section-shell pb-10 md:pb-[40px]">
          <motion.div 
            className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[240px_1fr] lg:gap-16 w-full"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: easeOut }}
          >
            {/* Left Label */}
            <motion.div 
              className="inline-flex items-center self-start"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: easeOut, delay: 0.1 }}
            >
              <SectionLabel theme="light">OUR SERVICES</SectionLabel>
            </motion.div>

            {/* Right Heading */}
            <div className="relative w-full flex flex-col items-end">
              <motion.h1 
                className="w-full max-w-[559px] font-dm-sans text-2xl sm:text-[32px] font-normal leading-[1.3] text-[#000] text-left"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease: easeOut, delay: 0.2 }}
              >
                Scalable, user-focused solutions designed to help businesses grow through technology, marketing, branding, and digital innovation.
              </motion.h1>
            </div>
          </motion.div>
        </div>

        {/* ── Services Sections Group ───────────────────────── */}
        <section className="w-full bg-[#F5F5F5] border-t border-[#EBEBEB] flex flex-col items-center justify-center">
          <div className="w-full flex flex-col justify-center items-start gap-[80px] self-stretch py-[100px] px-6 sm:px-12 lg:px-[120px]">
            
            {/* ── Software Solutions Main Interactive Section ────── */}
            <div id="software-solutions" className="w-full flex flex-col">
              {/* Section Breadcrumbs */}
              <motion.nav 
                className="font-dm-sans text-[20px] font-medium leading-[1.3] text-color-neutral-400 mb-6 flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOut }}
              >
                <Link href="/" className="hover:text-color-neutral-900 transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-color-neutral-900 font-medium">Services</span>
              </motion.nav>

              {/* Title and Top Row Description */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full mb-14"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.15 } }
                }}
              >
                <motion.h2 
                  className="font-dm-sans text-3xl sm:text-[40px] font-medium leading-[1.3] text-[#000] tracking-tight"
                  variants={fadeUp}
                >
                  Software Solutions
                </motion.h2>
                
                <motion.div 
                  className="flex items-center gap-6 w-full lg:pl-[16px]"
                  variants={fadeUp}
                >
                  <p className="font-dm-sans text-lg sm:text-[24px] font-normal leading-[1.3] text-[#737373] w-full max-w-[559px] shrink-0">
                    Scalable web solutions engineered for performance, usability, and long-term business growth.
                  </p>
                  
                  {/* Premium Glow Sparkle Box Icon */}
                  <div className="h-14 w-14 rounded-2xl bg-black flex items-center justify-center shrink-0 relative overflow-hidden shadow-lg shadow-black/10 border-[0.179px] border-[#ffffff]/50">
                    <Image
                      src="/logo/bg_chatbot.svg"
                      alt=""
                      width={56}
                      height={56}
                      unoptimized
                      className="absolute inset-0 h-14 w-14 rounded-2xl"
                      aria-hidden
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      <Image
                        src="/logo/chatbot_sparkle.svg"
                        alt=""
                        width={28}
                        height={28}
                        unoptimized
                        className="h-7 w-7 animate-pulse"
                        aria-hidden
                    />
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image and Accordion Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full">
                
                {/* Left Mockup Image */}
                <motion.div
                  className="relative w-full lg:w-[572px] lg:h-[572px] aspect-square overflow-hidden bg-color-neutral-900 rounded-none shadow-sm"
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: easeOut }}
                >
                  <Image
                    src="/images/ChatGPT Image May 25, 2026, 07_28_13 PM 1.png"
                    alt="Software solutions dashboard preview"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </motion.div>

                {/* Right Accordion List */}
                <motion.div
                  className="flex flex-col w-full h-full justify-between gap-10"
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: easeOut }}
                >
                  <div className="flex flex-col w-full">
                    {SUB_SERVICES.map((item, i) => {
                      const isActive = activeAccordion === i;

                      return (
                        <div
                          key={item.title}
                          className={`flex flex-col items-start gap-[10px] self-stretch px-[16px] py-[32px] border-b border-[#ADADAD] transition-all duration-300 w-full rounded-none ${
                            isActive ? "bg-[#EBEBEB] shadow-sm" : "bg-transparent"
                          }`}
                        >
                          <button
                            onClick={() => setActiveAccordion(isActive ? -1 : i)}
                            className="w-full flex items-center justify-between gap-4 text-left group"
                          >
                            <span className={`font-dm-sans text-lg font-medium transition-colors duration-200 ${
                              isActive ? "text-color-neutral-900" : "text-color-neutral-800 hover:text-color-neutral-900"
                            }`}>
                              {item.title}
                            </span>
                            
                            <motion.span
                              animate={{ rotate: isActive ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: easeOut }}
                              className="shrink-0 text-color-neutral-500 group-hover:text-color-neutral-800"
                            >
                              <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: easeOut }}
                                className="overflow-hidden w-full"
                              >
                                <p className="font-dm-sans text-[15px] sm:text-base leading-relaxed text-color-neutral-500 max-w-[92%]">
                                  {item.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Explore Technology Button */}
                  <div className="mt-4 self-start">
                    <OutlineButton
                      href="/services/software-solutions"
                      variant="light"
                      circleOffset={{ left: "-42px", top: "55px" }}
                    >
                      Explore Technology
                    </OutlineButton>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* ── Digital Marketing Section ── */}
            <div id="digital-marketing" className="w-full flex flex-col">
              {/* Title and Top Row Description */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full mb-14"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.15 } }
                }}
              >
                <motion.h2 
                  className="font-dm-sans text-3xl sm:text-[40px] font-medium leading-[1.3] text-[#000] tracking-tight"
                  variants={fadeUp}
                >
                  Digital Marketing
                </motion.h2>
                
                <motion.div 
                  className="flex items-center gap-6 w-full lg:pl-[16px]"
                  variants={fadeUp}
                >
                  <p className="font-dm-sans text-lg sm:text-[24px] font-normal leading-[1.3] text-[#737373] w-full max-w-[559px] shrink-0">
                    Performance-driven digital marketing built to increase reach, engagement, and sustainable business growth.
                  </p>
                </motion.div>
              </motion.div>

              {/* Image and Accordion Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full">
                
                {/* Left Mockup Image */}
                <motion.div
                  className="relative w-full lg:w-[572px] lg:h-[572px] aspect-square overflow-hidden bg-color-neutral-900 rounded-none shadow-sm"
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: easeOut }}
                >
                  <Image
                    src="/images/Frame 1984080238.png"
                    alt="Digital marketing dashboard preview"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </motion.div>

                {/* Right Accordion List */}
                <motion.div
                  className="flex flex-col w-full h-full justify-between gap-10"
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: easeOut }}
                >
                  <div className="flex flex-col w-full">
                    {DIGITAL_MARKETING_SUB_SERVICES.map((item, i) => {
                      const isActive = activeMarketingAccordion === i;

                      return (
                        <div
                          key={item.title}
                          className={`flex flex-col items-start gap-[10px] self-stretch px-[16px] py-[32px] border-b border-[#ADADAD] transition-all duration-300 w-full rounded-none ${
                            isActive ? "bg-[#EBEBEB] shadow-sm" : "bg-transparent"
                          }`}
                        >
                          <button
                            onClick={() => setActiveMarketingAccordion(isActive ? -1 : i)}
                            className="w-full flex items-center justify-between gap-4 text-left group"
                          >
                            <span className={`font-dm-sans text-lg font-medium transition-colors duration-200 ${
                              isActive ? "text-color-neutral-900" : "text-color-neutral-800 hover:text-color-neutral-900"
                            }`}>
                              {item.title}
                            </span>
                            
                            <motion.span
                              animate={{ rotate: isActive ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: easeOut }}
                              className="shrink-0 text-color-neutral-500 group-hover:text-color-neutral-800"
                            >
                              <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: easeOut }}
                                className="overflow-hidden w-full"
                              >
                                <p className="font-dm-sans text-[15px] sm:text-base leading-relaxed text-color-neutral-500 max-w-[92%]">
                                  {item.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Explore Digital Marketing Button */}
                  <div className="mt-4 self-start">
                    <OutlineButton
                      href="/services/digital-marketing"
                      variant="light"
                      circleOffset={{ left: "-42px", top: "55px" }}
                    >
                      Explore Digital Marketing
                    </OutlineButton>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* ── Branding Section ── */}
            <div id="branding" className="w-full flex flex-col">
              {/* Title and Top Row Description */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full mb-14"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.15 } }
                }}
              >
                <motion.h2 
                  className="font-dm-sans text-3xl sm:text-[40px] font-medium leading-[1.3] text-[#000] tracking-tight"
                  variants={fadeUp}
                >
                  Branding
                </motion.h2>
                
                <motion.div 
                  className="flex items-center gap-6 w-full lg:pl-[16px]"
                  variants={fadeUp}
                >
                  <p className="font-dm-sans text-lg sm:text-[24px] font-normal leading-[1.3] text-[#737373] w-full max-w-[559px] shrink-0">
                    Strategic branding solutions built to strengthen identity and drive business growth.
                  </p>
                </motion.div>
              </motion.div>

              {/* Image and Accordion Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full">
                
                {/* Left Mockup Image */}
                <motion.div
                  className="relative w-full lg:w-[572px] lg:h-[572px] aspect-square overflow-hidden bg-color-neutral-900 rounded-none shadow-sm"
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: easeOut }}
                >
                  <Image
                    src="/images/Frame 1984080238 (1).png"
                    alt="Branding mockups preview"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </motion.div>

                {/* Right Accordion List */}
                <motion.div
                  className="flex flex-col w-full h-full justify-between gap-10"
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: easeOut }}
                >
                  <div className="flex flex-col w-full">
                    {BRANDING_SUB_SERVICES.map((item, i) => {
                      const isActive = activeBrandingAccordion === i;

                      return (
                        <div
                          key={item.title}
                          className={`flex flex-col items-start gap-[10px] self-stretch px-[16px] py-[32px] border-b border-[#ADADAD] transition-all duration-300 w-full rounded-none ${
                            isActive ? "bg-[#EBEBEB] shadow-sm" : "bg-transparent"
                          }`}
                        >
                          <button
                            onClick={() => setActiveBrandingAccordion(isActive ? -1 : i)}
                            className="w-full flex items-center justify-between gap-4 text-left group"
                          >
                            <span className={`font-dm-sans text-lg font-medium transition-colors duration-200 ${
                              isActive ? "text-color-neutral-900" : "text-color-neutral-800 hover:text-color-neutral-900"
                            }`}>
                              {item.title}
                            </span>
                            
                            <motion.span
                              animate={{ rotate: isActive ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: easeOut }}
                              className="shrink-0 text-color-neutral-500 group-hover:text-color-neutral-800"
                            >
                              <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: easeOut }}
                                className="overflow-hidden w-full"
                              >
                                <p className="font-dm-sans text-[15px] sm:text-base leading-relaxed text-color-neutral-500 max-w-[92%]">
                                  {item.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Explore Branding Button */}
                  <div className="mt-4 self-start">
                    <OutlineButton
                      href="/services/branding"
                      variant="light"
                      circleOffset={{ left: "-42px", top: "55px" }}
                    >
                      Explore Branding
                    </OutlineButton>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* ── Experience Designing Section ── */}
            <div id="experience-designing" className="w-full flex flex-col">
              {/* Title and Top Row Description */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full mb-14"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.15 } }
                }}
              >
                <motion.h2 
                  className="font-dm-sans text-3xl sm:text-[40px] font-medium leading-[1.3] text-[#000] tracking-tight"
                  variants={fadeUp}
                >
                  Experience Designing
                </motion.h2>
                
                <motion.div 
                  className="flex items-center gap-6 w-full lg:pl-[16px]"
                  variants={fadeUp}
                >
                  <p className="font-dm-sans text-lg sm:text-[24px] font-normal leading-[1.3] text-[#737373] w-full max-w-[559px] shrink-0">
                    User-focused experience design built for usability, engagement and seamless interactions.
                  </p>
                </motion.div>
              </motion.div>

              {/* Image and Accordion Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full">
                
                {/* Left Mockup Image */}
                <motion.div
                  className="relative w-full lg:w-[572px] lg:h-[572px] aspect-square overflow-hidden bg-color-neutral-900 rounded-none shadow-sm"
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: easeOut }}
                >
                  <Image
                    src="/images/ChatGPT Image May 25, 2026, 07_28_13 PM 1 (1).png"
                    alt="Experience designing mockups preview"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </motion.div>

                {/* Right Accordion List */}
                <motion.div
                  className="flex flex-col w-full h-full justify-between gap-10"
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: easeOut }}
                >
                  <div className="flex flex-col w-full">
                    {EXPERIENCE_SUB_SERVICES.map((item, i) => {
                      const isActive = activeExperienceAccordion === i;

                      return (
                        <div
                          key={item.title}
                          className={`flex flex-col items-start gap-[10px] self-stretch px-[16px] py-[32px] border-b border-[#ADADAD] transition-all duration-300 w-full rounded-none ${
                            isActive ? "bg-[#EBEBEB] shadow-sm" : "bg-transparent"
                          }`}
                        >
                          <button
                            onClick={() => setActiveExperienceAccordion(isActive ? -1 : i)}
                            className="w-full flex items-center justify-between gap-4 text-left group"
                          >
                            <span className={`font-dm-sans text-lg font-medium transition-colors duration-200 ${
                              isActive ? "text-color-neutral-900" : "text-color-neutral-800 hover:text-color-neutral-900"
                            }`}>
                              {item.title}
                            </span>
                            
                            <motion.span
                              animate={{ rotate: isActive ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: easeOut }}
                              className="shrink-0 text-color-neutral-500 group-hover:text-color-neutral-800"
                            >
                              <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: easeOut }}
                                className="overflow-hidden w-full"
                              >
                                <p className="font-dm-sans text-[15px] sm:text-base leading-relaxed text-color-neutral-500 max-w-[92%]">
                                  {item.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Explore Experience Designing Button */}
                  <div className="mt-4 self-start">
                    <OutlineButton
                      href="/services/experience-designing"
                      variant="light"
                      circleOffset={{ left: "-42px", top: "55px" }}
                    >
                      Explore Experience Designing
                    </OutlineButton>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </section>
      </main>

      {/* ── Sparkling Chatbot Floating Button ─────────────── */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 pointer-events-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="h-16 w-16 rounded-2xl bg-black flex items-center justify-center relative overflow-hidden shadow-2xl border-[0.179px] border-[#ffffff]/50 cursor-pointer"
        >
          <Image
            src="/logo/bg_chatbot.svg"
            alt=""
            width={64}
            height={64}
            unoptimized
            className="absolute inset-0 h-16 w-16 rounded-2xl"
            aria-hidden
          />
          <span className="relative z-10 flex items-center justify-center">
            <Image
              src="/logo/chatbot_sparkle.svg"
              alt=""
              width={32}
              height={32}
              unoptimized
              className="h-8 w-8 animate-pulse"
              aria-hidden
            />
          </span>
        </motion.div>
      </motion.div>

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
