"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, CheckCircle2, Clock, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Custom Sub-Services Data Dictionary ──────────────────────────────────
const SUB_SERVICES_DETAILS: Record<
  string,
  Record<
    string,
    {
      label: string;
      title: string;
      heading: string;
      image: string;
      stats: Array<{ iconName: "grid" | "check" | "clock"; value: string; label: string }>;
    }
  >
> = {
  "software-solutions": {
    "web-development": {
      label: "WEB DEVELOPMENT",
      title: "Web Development",
      heading: "Custom web development solutions\nbuilt for performance, usability, and\nscalable business growth.",
      image: "/images/ChatGPT Image May 29, 2026, 06_49_57 PM_upscayl_4x_ultrasharp-4x 1.png",
      stats: [
        { iconName: "grid", value: "50 +", label: "Projects Delivered" },
        { iconName: "check", value: "10 +", label: "Years of Experience" },
        { iconName: "clock", value: "100%", label: "Client Satisfaction" },
      ],
    },
  },
};

// ─── Animation Variables ──────────────────────────────────────────────────
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SubServiceDetailsPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "software-solutions";
  const subSlug = (params?.subSlug as string) || "web-development";

  const categoryDetails = SUB_SERVICES_DETAILS[slug];
  const data = categoryDetails?.[subSlug] || {
    label: subSlug.replace(/-/g, " ").toUpperCase(),
    title: subSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    heading: `Custom ${subSlug.replace(/-/g, " ")} solutions designed for performance, usability, and scalable growth.`,
    image: "/images/ChatGPT Image May 29, 2026, 06_49_57 PM_upscayl_4x_ultrasharp-4x 1.png",
    stats: [
      { iconName: "grid" as const, value: "50 +", label: "Projects Delivered" },
      { iconName: "check" as const, value: "10 +", label: "Years of Experience" },
      { iconName: "clock" as const, value: "100%", label: "Client Satisfaction" },
    ],
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [subSlug]);

  return (
    <div className="relative min-h-screen w-full bg-White text-[#171717] overflow-x-hidden">

      {/* ── Navbar ─────────────────────────────────────────── */}
      <div className="w-full px-6 py-6 sm:px-12 md:px-[120px]">
        <Navbar tone="dark" className="w-full" />
      </div>

      {/* ── Page Hero Main Grid Content ───────────────────── */}
      <main className="w-full flex flex-col pt-12 pb-24 sm:pt-[64px] px-6 sm:px-12 lg:px-[120px]">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-16 lg:gap-16 items-center">

          {/* Left Column Text details */}
          <motion.div
            className="flex flex-col items-start w-full"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            {/* Label Category with Line */}
            <div className="flex flex-col items-start gap-1 w-full mb-8">
              <div className="w-[210px] max-w-full border-t border-[#737373]" />
              <span className="font-dm-mono text-[16px] font-normal leading-[1.3] tracking-[3.2px] text-[#737373]">
                {data.label}
              </span>
            </div>

            {/* Custom Heading Description */}
            <h1 className="font-dm-sans text-3xl lg:text-[36px] xl:text-[40px] font-normal leading-normal text-[#171717] tracking-[-1.6px] self-stretch mb-14 max-w-[650px] whitespace-pre-line">
              {data.heading}
            </h1>

            {/* Key Statistics Row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-[650px] mb-16 border-b border-color-neutral-200 py-8">
              {data.stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start gap-3">
                  {/* Circle Icon Container - all three use consistent inline SVG with #ADADAD circle */}
                  {stat.iconName === "grid" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ width: "56px", height: "56px", aspectRatio: "1/1", flexShrink: 0 }}>
                      <rect width="56" height="56" rx="28" fill="#ADADAD" />
                      <path d="M16.7998 26.5993H26.5998V16.7993H16.7998V26.5993ZM16.7998 39.1993H26.5998V29.3993H16.7998V39.1993ZM39.1998 16.7993H29.3998V26.5993H39.1998V16.7993ZM27.9998 29.3993L34.9998 40.5993L41.9998 29.3993H27.9998Z" fill="white" />
                    </svg>
                  )}
                  {stat.iconName === "check" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ width: "56px", height: "56px", aspectRatio: "1/1", flexShrink: 0 }}>
                      <rect width="56" height="56" rx="28" fill="#ADADAD" />
                      <path d="M28 14C35.732 14 42 20.268 42 28C42 35.732 35.732 42 28 42C20.268 42 14 35.732 14 28C14 20.268 20.268 14 28 14ZM25 30.8789L21.0605 26.9395L18.9395 29.0605L23.9395 34.0605C24.5252 34.6463 25.4748 34.6463 26.0605 34.0605L37.0605 23.0605L34.9395 20.9395L25 30.8789Z" fill="white" />
                    </svg>
                  )}
                  {stat.iconName === "clock" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ width: "56px", height: "56px", aspectRatio: "1/1", flexShrink: 0 }}>
                      <rect width="56" height="56" rx="28" fill="#ADADAD" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M28 42C35.732 42 42 35.732 42 28C42 20.268 35.732 14 28 14C20.268 14 14 20.268 14 28C14 35.732 20.268 42 28 42ZM26.25 19.25V28.7249L32.0126 34.4874L34.4874 32.0126L29.75 27.2751V19.25H26.25Z" fill="white" />
                    </svg>
                  )}
                  {/* Stat value */}
                  <span className="font-dm-sans text-xl sm:text-2xl font-bold text-color-neutral-900 leading-none">
                    {stat.value}
                  </span>
                  {/* Stat description */}
                  <span className="font-dm-sans text-[12px] sm:text-[14px] text-color-neutral-500 font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions Buttons Row */}
            <div className="flex flex-wrap gap-4 items-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center gap-3 bg-Black px-8 py-4 font-dm-sans text-base font-semibold leading-5 text-White transition-colors duration-200 hover:bg-color-neutral-800 rounded-none shadow-sm"
                >
                  Get a Quote
                  <span className="text-xl">→</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/portfolio"
                  className="inline-flex h-14 items-center justify-center border-[1.5px] border-color-neutral-900 px-8 py-4 font-dm-sans text-base font-semibold leading-5 text-color-neutral-900 transition-colors duration-200 hover:bg-color-neutral-50 rounded-none"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column Custom Mockup Image preview */}
          <motion.div
            className="relative w-full aspect-square max-w-[572px] mx-auto overflow-hidden bg-color-neutral-900 rounded-none shadow-xl border border-color-neutral-200"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: easeOut, delay: 0.15 }}
          >
            <Image
              src={data.image}
              alt={`${data.title} Mockup Preview`}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 572px"
            />
          </motion.div>

        </div>
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
