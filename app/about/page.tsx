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
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
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
    <div className="relative min-h-screen w-full bg-Black overflow-x-hidden">

      {/* ── Hero Section (810px Height) ─────────────────────── */}
      <main className="relative flex flex-col justify-between items-center self-stretch w-full min-h-[810px] md:h-[810px] py-10 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">

        {/* Navbar */}
        <Navbar tone="light" className="w-full shrink-0" />

        {/* Content Block */}
        <div className="w-full flex flex-col justify-end flex-1 gap-6 md:gap-[56px] mt-8 md:mt-12">

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 w-full">
            <motion.h1
              className="font-dm-sans text-[48px] font-semibold leading-[1.5] text-White w-full lg:w-1/2 tracking-tight text-center lg:text-left"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              About us
            </motion.h1>

            <motion.div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pt-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <p className="font-dm-sans text-[20px] sm:text-[24px] font-normal leading-[1.4] text-[#ADADAD] text-center lg:text-right lg:max-w-[480px]">
                Helping businesses scale with modern digital solutions, innovative technology, and user-focused experiences.
              </p>
            </motion.div>
          </div>

          {/* Grid Row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 lg:gap-8 w-full max-w-[1200px] mx-auto"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >

            {/* Left Column */}
            <div className="relative w-full max-w-[380px] aspect-square bg-color-neutral-900 overflow-hidden">
              <Image
                src="/images/ChatGPT Image Jun 2, 2026, 11_39_48 AM_upscayl_4x_ultrasharp-4x 1 (1).png"
                alt="Tectra Technologies Founder"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Middle Column */}
            <div className="relative w-full max-w-[380px] aspect-square bg-Black flex flex-col justify-end overflow-hidden">
              {/* White Box Overlay */}
              <div className="absolute bottom-0 left-0 w-[48%] aspect-square bg-White z-20 flex flex-col justify-center items-start px-6 py-6 lg:px-8 lg:py-8">
                <span className="font-dm-sans text-[64px] font-normal leading-[1.3] text-Black mb-1">
                  10+
                </span>
                <span className="font-dm-sans text-[14px] font-normal text-Black leading-[1.3]">
                  Years of <br /> Experience
                </span>
              </div>

              {/* Image */}
              <Image
                src="/images/Subtract.png"
                alt="Tectra Technologies Office"
                fill
                priority
                className="object-cover z-10"
              />
            </div>

            {/* Right Column */}
            <div className="relative w-full max-w-[380px] aspect-square bg-color-neutral-900 overflow-hidden">
              <Image
                src="/images/image 101.png"
                alt="Tectra Technologies Team Meeting"
                fill
                priority
                className="object-cover"
              />
            </div>

          </motion.div>
        </div>
      </main>

      {/* ── Who We Are Section ──────────────────────────────── */}
      <section className="w-full bg-[#F5F5F5] text-Black">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start self-stretch py-10 md:py-[100px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto gap-12 lg:gap-[100px]">

          {/* Team Photo */}
          <div className="relative w-full lg:max-w-[800px] h-[405px] overflow-hidden bg-color-neutral-100 shadow-lg lg:flex-1">
            <Image
              src="/images/about_team_photo.png"
              alt="Tectra Technologies Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Details Column */}
          <div className="flex flex-col items-start w-full lg:w-[414px] lg:h-[405px] lg:shrink-0 lg:mt-0">
            <h2 className="font-dm-sans text-[32px] font-normal leading-[40px] text-Black mb-6">
              Who we are ?
            </h2>
            <p className="font-dm-sans text-[20px] font-normal leading-[36px] text-[#525252] mb-8">
              Tectra Technologies helps businesses transform and grow through modern digital solutions, scalable user experiences, and innovative technology tailored to evolving business needs.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-10 lg:mt-auto">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-opacity hover:opacity-70"
              >
                <Image
                  src="/logo/insta_logo.svg"
                  alt=""
                  width={28}
                  height={28}
                  unoptimized
                  className="h-7 w-7"
                  style={{ filter: "brightness(0) saturate(100%) invert(24%) sepia(8%) saturate(352%) hue-rotate(201deg) brightness(96%) contrast(87%)" }}
                />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="transition-opacity hover:opacity-70"
              >
                <Image
                  src="/logo/x_logo.svg"
                  alt=""
                  width={28}
                  height={28}
                  unoptimized
                  className="h-7 w-7"
                  style={{ filter: "brightness(0) saturate(100%) invert(24%) sepia(8%) saturate(352%) hue-rotate(201deg) brightness(96%) contrast(87%)" }}
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-opacity hover:opacity-70"
              >
                <Image
                  src="/logo/facebook.svg"
                  alt=""
                  width={28}
                  height={28}
                  unoptimized
                  className="h-7 w-7"
                  style={{ filter: "brightness(0) saturate(100%) invert(24%) sepia(8%) saturate(352%) hue-rotate(201deg) brightness(96%) contrast(87%)" }}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-opacity hover:opacity-70"
              >
                <Image
                  src="/logo/linkedin-round-svgrepo-com%201.svg"
                  alt=""
                  width={28}
                  height={28}
                  unoptimized
                  className="h-7 w-7"
                  style={{ filter: "brightness(0) saturate(100%) invert(24%) sepia(8%) saturate(352%) hue-rotate(201deg) brightness(96%) contrast(87%)" }}
                />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Our Purpose Section ──────────────────────────────── */}
      <section className="w-full bg-White text-Black">
        <div className="py-10 md:py-[100px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">
          
          <h2 className="font-dm-sans text-[32px] font-normal leading-[40px] text-Black mb-10 lg:mb-14">
            Our Purpose
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[32px]">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6 lg:gap-[32px]">
              {/* Vision Card */}
              <div className="flex flex-col justify-center bg-Black p-8 lg:p-10 lg:h-[240px] w-full">
                <h3 className="font-dm-sans text-[24px] font-normal leading-[1.3] text-White mb-4">
                  Our Vision
                </h3>
                <p className="font-dm-sans text-[16px] font-normal leading-[1.6] text-[#A3A3A3]">
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
            </div>

            {/* Column 2 */}
            <div className="relative w-full lg:h-[512px] aspect-[380/512] overflow-hidden bg-color-neutral-100 shadow-md">
              <Image
                src="/images/image 127.png"
                alt="Whiteboard Session"
                fill
                className="object-cover"
              />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 lg:gap-[32px]">
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
              <div className="flex flex-col justify-center bg-Black p-8 lg:p-10 lg:h-[240px] w-full">
                <h3 className="font-dm-sans text-[24px] font-normal leading-[1.3] text-White mb-4">
                  Our Mission
                </h3>
                <p className="font-dm-sans text-[16px] font-normal leading-[1.6] text-[#A3A3A3]">
                  Our mission is to create fast, scalable, and user-focused web experiences that help businesses grow and stay future-ready.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section className="w-full bg-[#0A0A0A] flex flex-col justify-center items-start self-stretch px-6 py-10 sm:px-12 md:px-16 lg:px-20 xl:px-28 md:py-[100px] text-White">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-12">
          {/* Header */}
          <motion.div
            className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            <h2 className="font-dm-sans text-[32px] font-normal leading-[40px] text-White">
              Why Choose us ?
            </h2>
            <p className="font-dm-sans text-[16px] font-normal leading-relaxed text-[#A3A3A3] md:max-w-[500px]">
              Tectra builds scalable, high-performance websites focused on seamless user experiences and business growth.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* White Card (Left) */}
            <motion.div
              className="lg:col-span-1 bg-White flex flex-col justify-between p-8 md:p-10 min-h-[320px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-dm-sans text-[22px] font-medium text-[#171717]">
                  Your Trusted Partner
                </h3>
                <p className="font-dm-sans text-[15px] font-normal leading-relaxed text-[#737373]">
                  We work closely with businesses to design and develop digital solutions that strengthen brands, improve efficiency, and drive growth.
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-12">
                <h4 className="font-dm-sans text-[15px] font-bold text-[#171717]">
                  Trusted by 16+ Businesses
                </h4>
                <p className="font-dm-sans text-[14px] font-normal italic leading-relaxed text-[#A3A3A3]">
                  "Tectra delivers scalable digital experiences built for growth and performance."
                </p>
              </div>
            </motion.div>

            {/* Dark Cards (Right 2x2 Grid) */}
            <motion.div
              className="lg:col-span-2 grid grid-cols-2 gap-4 sm:gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              {[
                { value: "16+", label: "Active Clients" },
                { value: "10+", label: "Years of Experience" },
                { value: "100 %", label: "Success Rate" },
                { value: "50+", label: "Projects" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-[#141414] border border-[#222] flex flex-col justify-between p-5 sm:p-8 min-h-[140px] sm:min-h-[160px]"
                  variants={cardVariant}
                >
                  <h3 className="font-dm-sans text-[28px] sm:text-[36px] font-normal text-White mb-4 sm:mb-6">
                    {stat.value}
                  </h3>
                  <p className="font-dm-sans text-[13px] sm:text-[14px] font-normal text-[#A3A3A3]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Button */}
          <motion.div
            className="w-full flex justify-end mt-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-[12px] rounded-none bg-White px-[32px] py-[16px] font-dm-sans text-[16px] font-medium leading-[1.3] text-[#000] overflow-hidden transition-colors duration-[400ms] ease-out hover:bg-[#E5E5E5]"
              >
                <span className="relative z-10">Talk to Us</span>
                <span className="relative z-10 inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[5px] group-hover:-rotate-45">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Accreditations & Awards Section ────────────────────── */}
      <section className="w-full bg-White text-Black">
        <div className="py-10 md:py-[100px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">
          <motion.h2
            className="font-dm-sans text-[32px] font-normal leading-[40px] text-Black mb-10 lg:mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            Accreditations & Awards
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {/* Row 1, Col 1: Snowflake */}
            <motion.div
              className="flex items-center justify-center bg-White p-8 h-[180px] border-t border-x border-b border-color-neutral-200 md:col-start-1 md:row-start-1 md:border-l md:border-t md:border-b md:border-r-0"
              variants={cardVariant}
            >
              <div className="relative w-full h-[80px] max-w-[160px]">
                <Image
                  src="/logo/image 93.png"
                  alt="Snowflake Accreditation"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Row 1, Col 2: C Logo */}
            <motion.div
              className="flex items-center justify-center bg-White p-8 h-[180px] border-x border-b border-color-neutral-200 md:col-start-2 md:row-start-1 md:border-l md:border-t md:border-b md:border-r-0"
              variants={cardVariant}
            >
              <div className="relative w-full h-[80px] max-w-[160px]">
                <Image
                  src="/logo/image 99.png"
                  alt="C Logo Accreditation"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Row 1, Col 3: ISO 27001 */}
            <motion.div
              className="flex items-center justify-center bg-White p-8 h-[180px] border-x border-b border-color-neutral-200 md:col-start-3 md:row-start-1 md:border-l md:border-t md:border-b md:border-r"
              variants={cardVariant}
            >
              <div className="relative w-full h-[80px] max-w-[160px]">
                <Image
                  src="/logo/image 87.png"
                  alt="ISO 27001 Certified"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Row 2, Col 1: Top Web Dev */}
            <motion.div
              className="flex items-center justify-center bg-White p-8 h-[180px] border-x border-b border-color-neutral-200 md:col-start-1 md:row-start-2 md:border-l md:border-b md:border-t-0 md:border-r-0"
              variants={cardVariant}
            >
              <div className="relative w-full h-[80px] max-w-[160px]">
                <Image
                  src="/logo/image 95.png"
                  alt="Top Web Developers Award"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Row 2, Col 2: IAF */}
            <motion.div
              className="flex items-center justify-center bg-White p-8 h-[180px] border-x border-b border-color-neutral-200 md:col-start-2 md:row-start-2 md:border-l md:border-b md:border-t-0 md:border-r-0"
              variants={cardVariant}
            >
              <div className="relative w-full h-[80px] max-w-[160px]">
                <Image
                  src="/logo/image 91.png"
                  alt="IAF Accreditation"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Row 2, Col 3: Top Mobile App */}
            <motion.div
              className="flex items-center justify-center bg-White p-8 h-[180px] border-x border-b border-color-neutral-200 md:col-start-3 md:row-start-2 md:border-l md:border-b md:border-t-0 md:border-r"
              variants={cardVariant}
            >
              <div className="relative w-full h-[80px] max-w-[160px]">
                <Image
                  src="/logo/image 97.png"
                  alt="Top Mobile App Developers Award"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Row 3, Col 2: ISO 9001 */}
            <motion.div
              className="flex items-center justify-center bg-White p-8 h-[180px] border-x border-b border-color-neutral-200 md:col-start-2 md:row-start-3 md:border-l md:border-b md:border-t-0 md:border-r"
              variants={cardVariant}
            >
              <div className="relative w-full h-[80px] max-w-[160px]">
                <Image
                  src="/logo/image 89.png"
                  alt="ISO 9001 Company"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Clients Section ────────────────────────────────── */}
      <ClientLogos />

      {/* ── Our Client Reviews Section ────────────────────────── */}
      <section className="w-full bg-[#FAF9F9] text-Black">
        <div className="py-10 md:py-[100px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">
          
          <motion.h2
            className="font-dm-sans text-[32px] font-normal leading-[40px] text-Black mb-10 lg:mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            Our Client Reviews
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-start w-full">
            
            {/* Left Block */}
            <motion.div
              className="w-full lg:w-[320px] lg:shrink-0 flex flex-col items-start"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="relative w-[75px] h-[50px] mb-2 select-none">
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
                    className="bg-White p-8 md:p-10 flex flex-col justify-between w-[300px] sm:w-[350px] md:w-[380px] h-[340px] shrink-0 border border-color-neutral-200 snap-start"
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
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0A66C2]">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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

      <Footer />
    </div>
  );
}
