"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import ServicesMegaMenu from "@/components/ServicesMegaMenu";
import MobileMenu from "@/components/MobileMenu";
import RevenueLeaks from "@/components/RevenueLeaks";
import GrowthEngine from "@/components/GrowthEngine";
import WhatWeDo from "@/components/WhatWeDo";
import OurWorkflow from "@/components/OurWorkflow";
import Footer from "@/components/Footer";
import ShinyText from "@/components/ShinyText";
import GlareHover from "@/components/GlareHover";
import ClientLogos from "@/components/ClientLogos";
import SectorExpertise from "@/components/SectorExpertise";
import ImpactCreated from "@/components/ImpactCreated";
import WhyChooseTectra from "@/components/WhyChooseTectra";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import GrowthFunnel from "@/components/GrowthFunnel";
import Outcomes from "@/components/Outcomes";
import TechnologyStack from "@/components/TechnologyStack";
import AIInnovation from "@/components/AIInnovation";
import OurProducts from "@/components/OurProducts";
import Testimonials from "@/components/Testimonials";
import TheTeam from "@/components/TheTeam";
import Blogs from "@/components/Blogs";
import GrowthAuditSection from "@/components/GrowthAuditSection";
import OurGlobalImpact from "@/components/OurGlobalImpact";
import MainFAQSection from "@/components/MainFAQSection";






const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

export default function HomePage() {
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [cardVisible, setCardVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesHovered(false);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-200 overflow-x-hidden">
      {/* Full Width Layout */}
      <div className="w-full bg-white relative px-6 md:px-12 lg:px-20 pt-20">


        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="fixed top-0 left-0 w-full h-20 bg-white z-40 flex items-center border-b border-neutral-100"
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 lg:px-0">
            {/* Logo */}
            <Logo tone="dark" className="shrink-0" />

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {["Services", "Industries", "Products", "Case Studies", "Pricing", "Blogs", "About", "Careers"].map((link) => {
                if (link === "Services") {
                  return (
                    <div
                      key={link}
                      onMouseEnter={handleMouseEnter}
                      className="py-2 flex items-center cursor-pointer"
                    >
                      <button
                        type="button"
                        className="hover:opacity-75 transition-opacity flex items-center gap-1 cursor-pointer"
                        style={{
                          color: "#111113",
                          fontFamily: "Aspekta, system-ui, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 350,
                          lineHeight: "21px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span>Services</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                          className={`inline-block ml-0.5 opacity-70 transition-transform duration-200 ${
                            servicesHovered ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M1 1.5L4 4.5L7 1.5"
                            stroke="#111113"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:opacity-75 transition-opacity flex items-center gap-1"
                    onMouseEnter={() => setServicesHovered(false)}
                    style={{
                      color: "#111113",
                      fontFamily: "Aspekta, system-ui, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 350,
                      lineHeight: "21px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link}
                  </Link>
                );
              })}
            </nav>

            {/* Book Strategy Call Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="hidden sm:inline-block bg-neutral-950 text-white px-5 py-2.5 text-[13px] font-medium hover:bg-neutral-800 transition-colors duration-200 whitespace-nowrap"
              >
                Book a Strategy Call
              </Link>
              
              <button
                type="button"
                className="flex items-center gap-2 md:hidden text-neutral-900 hover:opacity-70 transition-opacity cursor-pointer"
                onClick={() => setMobileOpen(true)}
                aria-expanded={mobileOpen}
                aria-label="Open menu"
              >
                <div className="flex flex-col items-end gap-[5px]" aria-hidden>
                  <div className="h-[2px] w-3.5 bg-neutral-900 rounded-full"></div>
                  <div className="h-[2px] w-6 bg-neutral-900 rounded-full"></div>
                </div>
                <span className="font-dm-sans text-[13px] font-bold tracking-[0.1em] uppercase mt-[1px]">
                  Menu
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {servicesHovered && (
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ServicesMegaMenu />
              </div>
            )}
          </AnimatePresence>

          <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        </motion.header>

        {/* Main Hero Section */}
        <main className="flex flex-col items-center pt-16 md:pt-24 pb-12 md:pb-20 max-w-6xl mx-auto text-center relative z-10">

          {/* Top Label */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="flex items-center gap-2 mb-6"
            style={{
              color: "#000",
              fontFamily: "Aspekta, system-ui, sans-serif",
              fontSize: "11.52px",
              fontStyle: "normal",
              fontWeight: 250,
              lineHeight: "17.28px",
              letterSpacing: "2.995px",
              textTransform: "uppercase",
            }}
          >
            <span>—</span> 360-degree Growth Partner <span>—</span>
          </motion.div>

          {/* Main Title Heading */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="w-full text-center relative px-4 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[42px] sm:leading-[52px] md:leading-[64px] lg:leading-[72px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-2.5px]"
            style={{
              color: "#111",
              fontFamily: '"Funnel Display", system-ui, sans-serif',
              fontStyle: "normal",
              fontWeight: 300,
              maxWidth: "1170px",
              margin: "0 auto",
              marginBottom: "28px",
              textAlign: "center",
            }}
          >
            <ShinyText speed={3.0} color="#111111" shineColor="#ffffff" className="block w-full">
              We Build It Like It's Our Own.<br className="hidden lg:inline" />
              Software development, design,<br className="hidden lg:inline" />
              <span className="sm:whitespace-nowrap">marketing, & automation all in one place</span>
            </ShinyText>
          </motion.h1>

          {/* Subtext description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mb-10 mx-auto w-full max-w-[777px] text-base md:text-lg lg:text-[19.2px] leading-relaxed md:leading-[31.2px] px-4"
            style={{
              color: "#2B2B2B",
              textAlign: "center",
              fontFamily: "Aspekta, system-ui, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            We are a leading software development company born in Chennai and building for the world, serving companies of all sizes
          </motion.p>

          {/* Actions, Buttons and Consultant Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="w-full flex flex-col items-center justify-center mt-4 relative"
          >
            {/* Centered Buttons and Note */}
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 relative">
                {/* Primary CTA */}
                <GlareHover
                  width="295px"
                  height="auto"
                  background="#111"
                  borderRadius="0px"
                  borderColor="#111"
                  glareColor="#ffffff"
                  glareOpacity={0.25}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  style={{ display: 'inline-block', borderWidth: '0.8px' }}
                >
                  <Link
                    href="/contact"
                    className="text-white text-[12px] font-semibold tracking-wider uppercase transition-colors duration-200 hover:opacity-90"
                    style={{
                      display: "flex",
                      width: "100%",
                      padding: "16px 28px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    GET YOUR FREE GROWTH AUDIT →
                  </Link>
                </GlareHover>

                {/* Secondary CTA */}
                <div className="relative">
                  <GlareHover
                    width="295px"
                    height="auto"
                    background="#FFF"
                    borderRadius="0px"
                    borderColor="#111"
                    glareColor="#ffffff"
                    glareOpacity={0.15}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    style={{ display: 'inline-block', borderWidth: '0.8px' }}
                  >
                    <Link
                      href="/services"
                      className="transition-colors duration-200 hover:bg-neutral-50"
                      style={{
                        display: "flex",
                        width: "100%",
                        padding: "16px 28px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
                        color: "#111",
                        fontFamily: '"Funnel Display", system-ui, sans-serif',
                        fontSize: "11.84px",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "17.76px",
                        letterSpacing: "1.421px",
                        textTransform: "uppercase",
                      }}
                    >
                      SEE HOW IT WORKS
                    </Link>
                  </GlareHover>
                </div>
              </div>

              {/* Note under buttons */}
              <p
                className="mt-4"
                style={{
                  color: "#2B2B2B",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "12.48px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "18.72px",
                }}
              >
                A senior strategist replies in 24 hours — with a solution, not a pitch
              </p>
            </div>

            {/* Desktop: Project Consultant Card */}
            {cardVisible && !isMobile && (
              <div className="absolute bottom-0 right-[-112px] w-[320px] z-10 shrink-0">
                <div
                  className="bg-white border border-neutral-200 p-3.5 flex gap-3.5 items-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative w-full"
                >
                  {/* Close Button */}
                  <button 
                    className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-neutral-600 text-sm font-light select-none cursor-pointer"
                    onClick={() => setCardVisible(false)}
                    style={{
                      border: 'none',
                      background: 'none',
                      lineHeight: '1',
                    }}
                  >
                    ×
                  </button>

                  {/* Grayscale photo */}
                  <div className="relative w-16 h-20 bg-neutral-100 overflow-hidden shrink-0 border border-neutral-200">
                    <Image
                      src="/images/arjun_menon.png"
                      alt="Arjun Menon"
                      fill
                      className="object-cover grayscale contrast-125 brightness-95"
                      sizes="64px"
                      priority
                    />
                  </div>

                  {/* Consultant Details */}
                  <div className="flex-1 flex flex-col items-start text-left">
                    <span
                      style={{
                        color: "var(--color-neutral-500, #737373)",
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: "11px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "16.5px",
                        letterSpacing: "0.88px",
                        textTransform: "uppercase",
                      }}
                    >
                      Project Consultant
                    </span>
                    <span className="text-[9px] text-neutral-400 mt-0.5">
                      at Tectra®
                    </span>
                    <span className="text-[14px] font-bold text-neutral-900 mt-1 mb-2">
                      Arjun Menon
                    </span>

                    {/* Let's talk CTA button */}
                    <Link
                      href="/contact"
                      className="bg-neutral-950 hover:bg-neutral-800 text-white text-[10px] font-semibold tracking-wider px-3.5 py-1.5 transition-colors duration-200 flex items-center gap-1.5"
                    >
                      Let's talk
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

        </main>


        {/* Divider Line */}
        <div 
          className="w-[calc(100%+48px)] md:w-[calc(100%+96px)] lg:w-[calc(100%+160px)] -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 relative"
          style={{ borderBottom: "0.8px solid #E4E4E4" }}
        />

      </div>

      <RevenueLeaks />
      <GrowthEngine />
      <WhatWeDo />
      <ClientLogos />
      <OurWorkflow />
      <SectorExpertise />
      <ImpactCreated />
      <WhyChooseTectra />
      <PerformanceMetrics />
      <GrowthFunnel />
      <Outcomes />
      <TechnologyStack />
      <AIInnovation />
      <OurProducts />
      <Testimonials />
      <TheTeam />
      <Blogs />
      <GrowthAuditSection />
      <OurGlobalImpact />
      <MainFAQSection />
      <Footer />
      {/* Mobile Floating Popup Card */}
      {cardVisible && isMobile && (
        <div className="fixed bottom-6 right-6 max-w-[calc(100%-48px)] w-[320px] z-50 shrink-0">
          <div
            className="bg-white border border-neutral-200 p-3.5 flex gap-3.5 items-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] relative w-full animate-bounce-subtle"
          >
            {/* Close Button */}
            <button 
              className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-neutral-600 text-sm font-light select-none cursor-pointer"
              onClick={() => setCardVisible(false)}
              style={{
                border: 'none',
                background: 'none',
                lineHeight: '1',
              }}
            >
              ×
            </button>

            {/* Grayscale photo */}
            <div className="relative w-16 h-20 bg-neutral-100 overflow-hidden shrink-0 border border-neutral-200">
              <Image
                src="/images/arjun_menon.png"
                alt="Arjun Menon"
                fill
                className="object-cover grayscale contrast-125 brightness-95"
                sizes="64px"
                priority
              />
            </div>

            {/* Consultant Details */}
            <div className="flex-1 flex flex-col items-start text-left">
              <span
                style={{
                  color: "var(--color-neutral-500, #737373)",
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16.5px",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                }}
              >
                Project Consultant
              </span>
              <span className="text-[9px] text-neutral-400 mt-0.5">
                at Tectra®
              </span>
              <span className="text-[14px] font-bold text-neutral-900 mt-1 mb-2">
                Arjun Menon
              </span>

              {/* Let's talk CTA button */}
              <Link
                href="/contact"
                className="bg-neutral-950 hover:bg-neutral-800 text-white text-[10px] font-semibold tracking-wider px-3.5 py-1.5 transition-colors duration-200 flex items-center gap-1.5"
              >
                Let's talk
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
