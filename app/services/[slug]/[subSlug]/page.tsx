"use client";
// Force Next.js to re-detect this route

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, CheckCircle2, Clock, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";

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
      heading: "Custom web development solutions built for performance, usability, and scalable business growth.",
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

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const SUB_SERVICES: Record<
  string,
  ReadonlyArray<{
    title: string;
    description: string;
    image: string;
    active: boolean;
  }>
> = {
  "software-solutions": [
    {
      title: "Web App Development",
      description:
        "High-performance React and Next.js applications tailored for complex data environments.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "E-Commerce",
      description:
        "Native performance with fluid cross platform efficiency for iOS and Android ecosystems.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Corporate Website",
      description:
        "Scalable AWS and Azure migrations designed for 99.9% uptime and global latency optimization.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Customer Relationship\nManagement (CRM)",
      description:
        "Scalable AWS and Azure migrations designed for 99.9% uptime and global latency optimization.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Content Management System\n(CMS)",
      description:
        "Automated CI/CD pipelines and Kubernetes orchestration to accelerate release velocity.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "SaaS",
      description:
        "End-to-end testing frameworks ensuring zero-defect production deployments.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
  ]
};

const OUR_PROCESS = [
  {
    step: "Step 1",
    title: "Discover",
    description: "In-depth research and strategic planning to understand user needs, business goals, and market opportunities before development begins.",
    image: "/images/image 116.png",
    isActive: true,
  },
  {
    step: "Step 2",
    title: "Design",
    description: "In-depth research and strategic planning to understand user needs, business goals, and market opportunities before development begins.",
    image: "/images/ChatGPT Image Jun 1, 2026, 12_17_16 PM 1.png",
    isActive: false,
  },
  {
    step: "Step 3",
    title: "Development",
    description: "In-depth research and strategic planning to understand user needs, business goals, and market opportunities before development begins.",
    image: "/images/image 117.png",
    isActive: false,
  },
  {
    step: "Step 4",
    title: "Launch",
    description: "In-depth research and strategic planning to understand user needs, business goals, and market opportunities before development begins.",
    image: "/images/image 118.png",
    isActive: false,
  },
];

const TECH_STACKS: Record<string, { name: string; icon?: string; rawSvg?: string; label: string }[]> = {
  Frontend: [
    { 
      name: "Angular", 
      label: "Frontend",
      rawSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 72 72" fill="none"><g clip-path="url(#clip0_276_6857)"><path d="M36.0005 7.5L62.5205 16.95L58.5005 52.05L36.0005 64.5L13.5005 52.05L9.48047 16.95L36.0005 7.5ZM36.0005 13.8L19.4105 51H25.5905L28.9205 42.66H43.0205L46.3505 51H52.5005L36.0005 13.8ZM40.8605 37.5H31.1705L36.0005 25.89L40.8605 37.5Z" fill="#171717"/></g><defs><clipPath id="clip0_276_6857"><rect width="72" height="72" fill="white"/></clipPath></defs></svg>`
    },
    { 
      name: "Vue", 
      label: "Frontend",
      rawSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 72 72" fill="none"><path d="M57.3429 6H45L36 20.7L28.2857 6H0L36 69L72 6H57.3429ZM9 11.25H17.7429L36 43.8L54.2571 11.25H63L36 58.5L9 11.25Z" fill="#171717"/></svg>`
    },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/171717", label: "Frontend" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/171717", label: "Frontend" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/171717", label: "Frontend" },
    { 
      name: "HTML5", 
      label: "Frontend",
      rawSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 72 72" fill="none"><path d="M27.202 36.7054H29.7059H44.7995L43.8844 47.0264L36.0007 49.0317L28.117 47.0264L27.5715 40.8801H19.5273L20.6363 53.3929L36.0007 57.2998L51.3657 53.3929L53.4949 29.3608H26.5509L25.8392 21.3303H54.207L54.9176 13.3167H17.084L19.1572 36.7054H27.202Z" fill="#171717"/><path d="M2.86426 0L3.00263 1.49442L8.89229 65.1077L36.0003 72L63.1081 65.1077L69.1363 0H2.86426ZM56.6026 59.5493L36.0003 64.7878L15.398 59.5493L10.5314 6.99061H61.469L56.6026 59.5493Z" fill="#171717"/></svg>`
    },
  ],
  Backend: [
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/171717", label: "Backend" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/171717", label: "Backend" },
    { name: "Go", icon: "https://cdn.simpleicons.org/go/171717", label: "Backend" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/171717", label: "Backend" },
    { name: "Ruby", icon: "https://cdn.simpleicons.org/ruby/171717", label: "Backend" },
    { name: "Django", icon: "https://cdn.simpleicons.org/django/171717", label: "Backend" },
  ],
  Database: [
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/171717", label: "Database" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/171717", label: "Database" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/171717", label: "Database" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/171717", label: "Database" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/171717", label: "Database" },
    { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite/171717", label: "Database" },
  ],
};

const INDUSTRIES_DATA = [
  {
    title: "Education",
    description: "End-to-end testing frameworks ensuring zero-defect production deployments.",
    image: "/images/ChatGPT Image May 29, 2026, 06_49_57 PM_upscayl_4x_ultrasharp-4x 1.png",
  },
  {
    title: "Retail",
    description: "High-performance React and Next.js applications tailored for complex data environments.",
    image: "/images/ChatGPT Image May 29, 2026, 06_49_57 PM_upscayl_4x_ultrasharp-4x 1.png",
  },
  {
    title: "Information Technology",
    description: "Native performance with fluid cross platform efficiency for iOS and Android ecosystems.",
    image: "/images/ChatGPT Image May 29, 2026, 06_49_57 PM_upscayl_4x_ultrasharp-4x 1.png",
  },
  {
    title: "Fashion",
    description: "Scalable AWS and Azure migrations designed for 99.9% uptime and global latency optimization.",
    image: "/images/ChatGPT Image May 29, 2026, 06_49_57 PM_upscayl_4x_ultrasharp-4x 1.png",
  },
];


const RELATED_SERVICES_DATA = [
  {
    title: "UI/UX Designing",
    description: "User-focused UI/UX designs crafted for seamless experiences, usability, and digital engagement.",
    active: true,
  },
  {
    title: "Mobile Experience Designing",
    description: "User-centered mobile experience design focused on usability, engagement, and seamless interactions.",
    active: true,
  },
  {
    title: "Web Experience Designing",
    description: "User-focused web experiences designed for seamless interaction, engagement, and digital growth.",
    active: true,
  },
];

const FAQ_ITEMS = [
  {
    question: "What digital marketing services does Tectra provide?",
    answer: "The timeline depends on the project's size and complexity. Most websites take between 4 to 12 weeks to design, develop, test, and launch.",
  },
  {
    question: "How long does it take to develop a website?",
    answer: "The timeline depends on the project's size and complexity. Most websites take between 4 to 12 weeks to design, develop, test, and launch.",
  },
  {
    question: "Will the website be mobile responsive?",
    answer: "Yes. We ensure that all our websites are fully responsive, providing an optimal viewing and interaction experience across all devices.",
  },
  {
    question: "Will the website be SEO-friendly?",
    answer: "Absolutely. We follow SEO best practices during development, ensuring your site is fully optimized for search engines right from launch.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer: "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performs at its best.",
  },
  {
    question: "Can third-party tools and APIs be integrated?",
    answer: "Yes, we can seamlessly integrate a wide range of third-party tools, CRMs, payment gateways, and custom APIs into your web platform.",
  },
];

function FAQSection({ items }: { items: ReadonlyArray<{ question: string; answer: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-[#F7F7F7] flex flex-col items-start self-stretch px-6 pt-8 pb-16 sm:px-12 md:px-16 lg:px-20 xl:px-28 md:pt-10 md:pb-[100px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start">
        <motion.h2
          className="font-dm-sans text-[28px] sm:text-[32px] font-normal not-italic leading-[1.3] text-[#171717] mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Have Any Questions ?
        </motion.h2>

        <motion.div
          className="w-full flex flex-col"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="border-t border-[#DEDEDE] last:border-b"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left group"
              >
                <span className="font-dm-sans text-[16px] sm:text-[18px] font-medium not-italic leading-[1.3] text-[#1B1C1C] transition-colors duration-200">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 text-[#1B1C1C]"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 6.5L9 11.5L14 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-dm-sans text-[15px] font-normal leading-[1.6] text-[#737373] pb-6 pr-8">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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

  const [activeTechTab, setActiveTechTab] = useState<string>("Frontend");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [subSlug]);

  return (
    <div className="relative min-h-screen w-full bg-White text-[#171717] overflow-x-hidden">

      {/* ── Navbar ─────────────────────────────────────────── */}
      <div className="w-full px-6 py-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
        <Navbar tone="dark" className="w-full" />
      </div>

      {/* ── Page Hero Main Grid Content ───────────────────── */}
      <main className="w-full flex flex-col pt-12 pb-12 sm:pb-24 sm:pt-[64px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 sm:gap-16 lg:gap-16 items-stretch">

          {/* Left Column Text details */}
          <motion.div
            className="flex flex-col items-start w-full h-full"
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

            {/* Mobile Only Mockup Image preview (Hidden on lg) */}
            <motion.div
              className="relative w-full aspect-square max-w-[572px] mx-auto overflow-hidden bg-color-neutral-900 rounded-none shadow-xl border border-color-neutral-200 block lg:hidden mb-8"
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

            {/* Custom Heading Description */}
            <h1 className="font-dm-sans text-3xl lg:text-[36px] xl:text-[40px] font-normal leading-normal text-[#171717] tracking-[-1.6px] self-stretch mb-6 max-w-[650px] whitespace-normal">
              {data.heading}
            </h1>

            {/* Key Statistics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 w-full max-w-[750px] mb-8 sm:mb-16 pt-2 pb-4 sm:pb-8">
              {data.stats.map((stat, index) => (
                <div key={index} className="flex flex-row items-center gap-4">
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
                  {/* Stat text container */}
                  <div className="flex flex-col items-start gap-1">
                    {/* Stat value */}
                    <span className="font-dm-sans text-[22px] sm:text-[26px] font-bold text-color-neutral-900 leading-none whitespace-nowrap">
                      {stat.value}
                    </span>
                    {/* Stat description */}
                    <span className="font-dm-sans text-[13px] sm:text-[14px] text-color-neutral-500 font-medium leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions Buttons Row */}
            <div className="flex flex-wrap gap-4 items-center mt-auto w-full">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-3 bg-Black px-8 py-4 font-dm-sans text-base font-semibold leading-5 text-White transition-colors duration-200 hover:bg-color-neutral-800 rounded-none shadow-sm"
                >
                  Get a Quote
                  <span className="text-xl">→</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/#casestudies"
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center border-[0.8px] border-[var(--color-neutral-300,#D6D6D6)] px-8 py-4 font-dm-sans text-base font-semibold leading-5 text-color-neutral-900 transition-colors duration-200 hover:bg-color-neutral-50 rounded-none"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column Custom Mockup Image preview */}
          <motion.div
            className="relative w-full aspect-square max-w-[572px] mx-auto overflow-hidden bg-color-neutral-900 rounded-none shadow-xl border border-color-neutral-200 hidden lg:block"
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

      {/* ── Our Services Grid ─────────────────────────────────── */}
      <section className="w-full bg-[#FAF9F9] flex flex-col justify-center items-start self-stretch px-6 py-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 md:pt-[40px] md:pb-[100px] border-t border-color-neutral-200">
        <div className="w-full flex flex-col items-start">
          {/* Breadcrumbs — fade in */}
          <motion.nav
            className="font-dm-sans text-[17px] font-medium not-italic leading-[1.3] text-[#ADADAD] flex items-center gap-2 flex-wrap"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <Link href="/" className="hover:text-color-neutral-900 transition-colors text-[#ADADAD]">
              Home
            </Link>
            <span className="text-[#ADADAD]">/</span>
            <Link href="/#services" className="hover:text-color-neutral-900 transition-colors text-[#ADADAD]">
              Services
            </Link>
            <span className="text-[#ADADAD]">/</span>
            <Link href={`/services/${slug}`} className="hover:text-color-neutral-900 transition-colors text-[#ADADAD]">
              {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
            <span className="text-[#ADADAD]">/</span>
            <span className="text-color-neutral-900 font-medium">{data.title}</span>
          </motion.nav>

          {/* Section Heading */}
          <motion.h2
            className="font-dm-sans text-[28px] sm:text-[32px] font-normal not-italic leading-[1.3] text-[#171717] mt-4 mb-10 sm:mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: easeOut, delay: 0.15 }}
          >
            Our Services
          </motion.h2>

          {/* Staggered Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {(SUB_SERVICES[slug] || SUB_SERVICES["software-solutions"]).map((subService) => (
              <motion.div
                key={subService.title}
                variants={cardVariant}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex flex-col bg-White overflow-hidden border border-color-neutral-200 w-full max-w-[380px] h-full cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[132px] w-full overflow-hidden shrink-0 flex flex-col items-start gap-[10px] bg-lightgray">
                  <Image
                    src={subService.image}
                    alt={subService.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #FFF 0%, #999 100%)',
                      mixBlendMode: 'multiply'
                    }}
                  />
                  <h3 className="absolute bottom-4 left-6 z-10 font-dm-sans text-xl font-medium text-White whitespace-pre-line">
                    {subService.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="flex flex-col items-start gap-4 px-6 py-6 flex-grow overflow-hidden">
                  <p className="self-stretch text-[#737373] font-dm-sans text-[16px] not-italic font-normal leading-[1.3]">
                    {subService.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Our Process ───────────────────────────────────────── */}
      <section className="w-full bg-White flex flex-col justify-center items-center self-stretch px-6 pt-8 pb-4 sm:pb-16 md:px-16 lg:px-20 xl:px-28 md:pt-[40px] md:pb-[100px] border-t border-color-neutral-200">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-4 sm:gap-[56px]">
          {/* Section Heading */}
          <motion.h2
            className="font-dm-sans text-[28px] sm:text-[32px] font-normal not-italic leading-[1.3] text-[#171717]"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            Our Process
          </motion.h2>

          {/* Process Steps Grid */}
          <motion.div
            className="flex flex-col lg:flex-row w-full lg:w-[calc(100%+32px)] lg:-ml-4 justify-start items-stretch gap-8 lg:gap-[30px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {OUR_PROCESS.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`group flex flex-col justify-start items-start gap-6 p-4 flex-1 cursor-default ${
                  index !== OUR_PROCESS.length - 1 ? "border-b border-[#E5E5E5] lg:border-b-0 lg:border-r" : ""
                }`}
              >
                {/* Step Label */}
                <div
                  className="px-4 py-2 text-[14px] font-dm-sans font-medium border transition-colors duration-300 bg-transparent text-[#171717] border-[#E5E5E5] group-hover:bg-[#171717] group-hover:text-white group-hover:border-[#171717]"
                >
                  {item.step}
                </div>

                {/* Step Title */}
                <h3 className="font-dm-sans text-[22px] font-medium text-[#171717]">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="self-stretch w-full max-w-[223px] text-[#737373] font-dm-sans text-[14px] not-italic font-normal leading-[1.3]">
                  {item.description}
                </p>

                {/* Step Image */}
                <div className="relative w-full max-w-[223px] aspect-[223/100] rounded-xl overflow-hidden mt-auto bg-[#1A1A1A]">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 223px" className="object-contain object-left" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stacks Used ────────────────────────────────── */}
      <section className="w-full bg-[#F7F7F7] flex flex-col items-center justify-center self-stretch px-6 pt-6 pb-4 sm:pb-16 sm:px-12 md:px-16 lg:px-20 xl:px-28 md:pt-[40px] md:pb-[100px]">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-8">
          <h2 className="font-dm-sans text-[28px] sm:text-[32px] font-normal not-italic leading-[1.3] text-[#171717]">
            Tech Stacks Used
          </h2>

          {/* Tabs */}
          <div className="flex flex-row items-center gap-4 sm:gap-8 w-full mt-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {Object.keys(TECH_STACKS).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTechTab(tab)}
                className={`pb-2 font-dm-sans text-[16px] sm:text-[18px] font-medium transition-colors duration-200 relative whitespace-nowrap shrink-0 ${
                  activeTechTab === tab ? "text-[#171717]" : "text-[#737373] hover:text-[#171717]"
                }`}
              >
                {tab}
                {activeTechTab === tab && (
                  <motion.div
                    layoutId="activeTechTabIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#171717]"
                    initial={false}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Icons Grid */}
          <motion.div
            key={activeTechTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-row flex-wrap items-center gap-12 sm:gap-16 mt-6"
          >
            {TECH_STACKS[activeTechTab].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-4">
                <div className="h-[56px] w-[56px] relative flex items-center justify-center">
                  {tech.rawSvg ? (
                    <div dangerouslySetInnerHTML={{ __html: tech.rawSvg }} className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full" />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={tech.icon} alt={tech.name} className="object-contain max-h-full max-w-full" />
                  )}
                </div>
                <span className="font-dm-sans text-[14px] text-[#171717]">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stacks Used ────────────────────────────────── */}
      <section className="w-full bg-[#F7F7F7] flex flex-col items-center justify-center self-stretch px-6 pt-6 pb-4 sm:pb-16 sm:px-12 md:px-16 lg:px-20 xl:px-28 md:pt-[40px] md:pb-[100px]">
        {/* Tech stacks content is unmodified in this replacement block, but we replace the entire block below it */}
      </section>

      {/* ── Related Case Studies ──────────────────────────────── */}
      <RelatedCaseStudies />

      {/* ── Serving Industries ──────────────────────────────── */}
      <section className="w-full bg-[#F7F7F7] flex flex-col justify-center items-start self-stretch px-6 pt-8 pb-4 sm:pb-16 sm:px-12 md:px-[120px] md:pt-[40px] md:pb-[100px]">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start">
          {/* Heading Row */}
          <motion.div
            className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 sm:mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <h2 className="font-dm-sans text-[28px] sm:text-[32px] font-normal not-italic leading-[1.3] text-[#171717]">
              Serving Industries
            </h2>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="hidden sm:block w-full sm:w-auto">
              <Link
                href="/industries"
                className="group relative inline-flex justify-center items-center gap-[12px] rounded-none border-[0.8px] border-[var(--color-neutral-300,#D6D6D6)] bg-transparent px-[32px] py-[16px] font-dm-sans text-[16px] font-medium leading-[1.3] text-[#000] overflow-hidden transition-colors duration-[400ms] ease-out hover:border-[#111] hover:text-[#fff] shrink-0 w-full sm:w-auto sm:mr-8"
              >
                <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#111] transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"></span>
                <span className="relative z-10">View All Industries</span>
                <span className="relative z-10 inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[5px] group-hover:-rotate-45">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Industries Grid */}
          <motion.div
            className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-6 w-full pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {INDUSTRIES_DATA.map((industry, index) => (
              <motion.div
                key={index}
                className="flex flex-col group cursor-pointer bg-White overflow-hidden shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] snap-start"
                variants={cardVariant}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-4 p-6 flex-grow">
                  <h3 className="font-dm-sans text-xl font-medium text-[#171717] transition-colors group-hover:text-[#2563EB]">
                    {industry.title}
                  </h3>
                  <p className="font-dm-sans text-[14px] font-normal leading-relaxed text-[#737373] line-clamp-3">
                    {industry.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <motion.div
                      className="inline-flex items-center gap-2 font-dm-sans text-[14px] font-medium leading-[1.3] text-[#ADADAD] group-hover:text-[#171717] transition-colors duration-200"
                      whileHover={{ x: 4 }}
                    >
                      View Details
                      <span className="text-lg">→</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile-only View All Industries Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full sm:hidden mt-4">
            <Link
              href="/industries"
              className="group relative flex justify-center items-center gap-[12px] rounded-none border-[0.8px] border-[var(--color-neutral-300,#D6D6D6)] bg-transparent px-[32px] py-[16px] font-dm-sans text-[16px] font-medium leading-[1.3] text-[#000] overflow-hidden transition-colors duration-[400ms] ease-out hover:border-[#111] hover:text-[#fff] shrink-0 w-full"
            >
              <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#111] transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"></span>
              <span className="relative z-10">View All Industries</span>
              <span className="relative z-10 inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[5px] group-hover:-rotate-45">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Related Services ────────────────────────────────── */}
      <section className="w-full bg-White flex flex-col justify-center items-start self-stretch px-6 pt-8 sm:pt-16 pb-16 sm:px-12 md:px-[120px] md:pt-[40px] md:pb-[100px]">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start">
          {/* Heading Row */}
          <motion.div
            className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 sm:mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <h2 className="font-dm-sans text-[28px] sm:text-[32px] font-normal not-italic leading-[1.3] text-[#171717]">
              Related Services
            </h2>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="hidden sm:block w-full sm:w-auto">
              <Link
                href="/services"
                className="group relative inline-flex justify-center items-center gap-[12px] rounded-none border-[0.8px] border-[var(--color-neutral-300,#D6D6D6)] bg-transparent px-[32px] py-[16px] font-dm-sans text-[16px] font-medium leading-[1.3] text-[#000] overflow-hidden transition-colors duration-[400ms] ease-out hover:border-[#111] hover:text-[#fff] shrink-0 w-full sm:w-auto sm:mr-8"
              >
                <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#111] transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"></span>
                <span className="relative z-10">View All Services</span>
                <span className="relative z-10 inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[5px] group-hover:-rotate-45">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {RELATED_SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariant}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex flex-col bg-White overflow-hidden border border-[#E5E5E5] w-full max-w-[380px] h-full cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[132px] w-full overflow-hidden shrink-0 flex flex-col items-start gap-[10px] bg-black">
                  <h3 className="absolute bottom-4 left-6 z-10 font-dm-sans text-[18px] sm:text-[20px] font-medium text-White">
                    {service.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="flex flex-col items-start gap-4 px-6 py-6 flex-grow overflow-hidden bg-White">
                  <p className="self-stretch text-[#737373] font-dm-sans text-[14px] sm:text-[15px] not-italic font-normal leading-[1.6]">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-4 shrink-0">
                    {service.active ? (
                      <Link
                        href={`/services/${slug}/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center gap-2 font-dm-sans text-[14px] font-medium leading-[1.3] text-[#2563EB] transition-colors duration-200"
                      >
                        View Details
                        <span className="text-lg">→</span>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 font-dm-sans text-[14px] font-medium leading-[1.3] text-[#D4D4D4] cursor-not-allowed">
                        View Details
                        <span className="text-lg">→</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section className="w-full bg-[#0A0A0A] flex flex-col justify-center items-start self-stretch px-6 pt-8 pb-8 sm:px-12 md:px-[120px] md:pt-[40px] md:pb-10">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-12">
          {/* Header */}
          <motion.div
            className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <h2 className="font-dm-sans text-[28px] sm:text-[36px] font-normal not-italic leading-[1.3] text-White">
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
                  &quot;Tectra delivers scalable digital experiences built for growth and performance.&quot;
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

      {/* ── Blogs ────────────────────────────────────────────── */}
      <Blogs bgClass="bg-White" paddingClass="pt-8 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10" />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <FAQSection items={FAQ_ITEMS} />

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
