"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FloatingAction from "@/components/FloatingAction";
import Footer from "@/components/Footer";
import { images } from "@/lib/images";

const SERVICES_DATA: Record<
  string,
  {
    title: string;
    label: string;
    description: string;
    bgImage?: string;
    faq?: ReadonlyArray<{ question: string; answer: string }>;
  }
> = {
  "software-solutions": {
    title: "Software Solutions",
    label: "WHAT WE DO",
    description:
      "Scalable web solutions engineered for performance, usability, and long-term business growth.",
    bgImage: "/logo/Frame 1984080405.png",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    label: "WHAT WE DO",
    description:
      "Performance-driven digital marketing built to increase reach, engagement, and sustainable business growth.",
    bgImage: "/images/Frame 1984080675.png",
    faq: [
      {
        question: "What digital marketing services does Tectra provide?",
        answer:
          "We offer a full suite of growth-driven services including Search Engine Optimization (SEO), Social Media Marketing (SMM), Search Engine Marketing (PPC), Content Strategy, Email Automation, and CRM/ERP integrations tailored to align your sales and marketing operations.",
      },
      {
        question: "How do you measure campaign performance and ROI?",
        answer:
          "We integrate advanced tracking and analytics tools like Google Analytics, Hubspot, and custom dashboards. We measure success through key performance indicators (KPIs) such as conversion rate, customer acquisition cost (CAC), lifetime value (LTV), and return on ad spend (ROAS).",
      },
      {
        question: "Do you offer long-term marketing support and optimization?",
        answer:
          "Yes. Growth marketing is an iterative process. We provide ongoing management, monthly performance reviews, continuous A/B testing, and strategy refinement to ensure your marketing efforts scale with market trends and business objectives.",
      },
      {
        question: "How does Tectra create data-driven marketing strategies?",
        answer:
          "We start with deep market research, competitive analysis, and an audit of your existing audience data. Every campaign layout, content angle, and ad placement is backed by real user behavior data and industry benchmarks to minimize risk and maximize conversion.",
      },
      {
        question: "Can you manage multi-platform advertising campaigns?",
        answer:
          "Absolutely. We design and manage unified multi-channel campaigns across Google Ads, Meta (Facebook & Instagram), LinkedIn, and other programmatic platforms, ensuring consistent messaging and attribution tracking across the entire funnel.",
      },
      {
        question: "How do you improve brand visibility and lead generation?",
        answer:
          "By combining top-of-funnel content marketing and targeted social strategies with high-converting landing pages and lead magnets. We focus on attracting high-intent traffic and nurturing prospects through automated email sequences.",
      },
      {
        question: "Do you provide ongoing campaign optimization and reporting?",
        answer:
          "Yes, we provide transparent weekly or monthly reports detailing campaign spend, conversions, and actionable insights. Our team performs continuous bid adjustments, keyword optimization, and creative refreshes to keep your ads performing at their peak.",
      },
      {
        question: "How does Tectra help businesses scale through digital marketing?",
        answer:
          "We build sustainable growth engines. By aligning paid acquisition with organic SEO, robust branding, and automated customer relationship systems (CRM), we help you acquire and retain customers predictably and efficiently at scale.",
      },
    ],
  },
  "branding": {
    title: "Branding",
    label: "WHAT WE DO",
    description:
      "Strategic branding solutions built to strengthen identity and drive business growth.",
    bgImage: "/images/Frame 1984080675 (1).png",
    faq: [
      {
        question: "How does Tectra help businesses build a strong brand identity?",
        answer: "We start by deeply understanding your core values, target audience, and market positioning. Our team then designs a cohesive visual identity, tone of voice, and messaging framework that authentically represents your business and resonates with your customers.",
      },
      {
        question: "Do you provide complete branding and rebranding services?",
        answer: "Yes, we offer both end-to-end branding for new companies and strategic rebranding for established businesses looking to modernize their image, enter new markets, or realign with their evolving vision.",
      },
      {
        question: "How do you ensure brand consistency across platforms?",
        answer: "We create comprehensive brand guidelines that dictate logo usage, typography, color palettes, and tone of voice. This ensures that every touchpoint—from your website and social media to print materials—maintains a unified and professional look.",
      },
      {
        question: "Can Tectra create brand guidelines and visual systems?",
        answer: "Absolutely. We deliver detailed brand books and visual systems that serve as a roadmap for your internal teams and external partners, ensuring your brand is always applied correctly and effectively.",
      },
      {
        question: "How does branding help improve customer trust and recognition?",
        answer: "A strong, consistent brand communicates professionalism and reliability. It helps you stand out in a crowded market, fosters emotional connections with your audience, and ultimately builds the trust needed to turn prospects into loyal customers.",
      },
    ],
  },
  "experience-designing": {
    title: "Experience Designing",
    label: "WHAT WE DO",
    description:
      "User-focused experience design built for usability, engagement and seamless interactions.",
    bgImage: "/images/Frame 1984080405 (1).png",
    faq: [
      {
        question: "How does Tectra approach user experience design?",
        answer: "We start with deep user research and journey mapping to understand your audience's needs. This is followed by wireframing, prototyping, and rigorous usability testing to ensure the final product is intuitive, engaging, and aligned with your business goals.",
      },
      {
        question: "Do you provide both UI and UX design services?",
        answer: "Yes, we provide end-to-end UI/UX services. Our UX team focuses on the structural logic, user flow, and usability, while our UI team crafts the visual elements, typography, and interactive components to create a seamless and beautiful interface.",
      },
      {
        question: "How do you ensure designs are user-friendly and accessible?",
        answer: "We strictly adhere to WCAG (Web Content Accessibility Guidelines) and industry best practices. By incorporating inclusive design principles, responsive layouts, and continuous user testing, we ensure our designs are usable for people of all abilities and on any device.",
      },
      {
        question: "Can Tectra redesign existing digital products or platforms?",
        answer: "Absolutely. We often conduct UX audits on existing platforms to identify friction points and drop-off areas. Based on these insights, we restructure and visually refresh the product to significantly improve user satisfaction and conversion rates.",
      },
      {
        question: "What tools and processes do you use for experience design?",
        answer: "We utilize industry-standard tools like Figma, Adobe XD, and Sketch for design and prototyping. Our process is highly collaborative and iterative, involving regular feedback loops with stakeholders to ensure the design perfectly matches the project's vision.",
      },
    ],
  },
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
      title: "Web Development",
      description:
        "High-performance React and Next.js applications tailored for complex data environments.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Mobile App Development",
      description:
        "Native performance with fluid cross platform efficiency for iOS and Android ecosystems.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Cloud Computing",
      description:
        "Scalable AWS and Azure migrations designed for 99.9% uptime and global latency optimization.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Blockchain",
      description:
        "Decentralized protocols and smart contract audits for immutable transaction security.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "DevOps",
      description:
        "Automated CI/CD pipelines and Kubernetes orchestration to accelerate release velocity.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "QA Automation",
      description:
        "End-to-end testing frameworks ensuring zero-defect production deployments.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
  ],
  "digital-marketing": [
    {
      title: "Search Engine Optimization",
      description:
        "End-to-end testing frameworks ensuring zero-defect production deployments.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Social Media Marketing",
      description:
        "Strategic social media marketing designed to boost brand awareness, audience engagement, and online growth",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Email Marketing and Automation",
      description:
        "Automated email marketing solutions designed to improve customer engagement, lead nurturing, and conversion growth.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "E-commerce Marketing",
      description:
        "Data-driven e-commerce marketing strategies focused on increasing sales, customer retention, and brand growth.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Content Writing",
      description:
        "Content writing services focused on stronger engagement, clarity, and brand visibility.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "PPC",
      description:
        "Performance-driven PPC campaigns designed to maximize reach, traffic, and conversion results.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Google Ads Specialist",
      description:
        "Google Ads solutions focused on targeted reach, lead generation, and measurable campaign growth.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Meta Ads",
      description:
        "Strategic Meta ad campaigns designed to increase visibility, engagement, and customer conversions.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "LinkedIn Ads",
      description:
        "LinkedIn advertising strategies built to generate quality leads, brand authority, and business growth.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Penalty Recovery Services",
      description:
        "SEO penalty recovery services focused on restoring rankings, traffic, and search visibility.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "ASO Service",
      description:
        "ASO services focused on improving app visibility, downloads, and store rankings.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Local SEO",
      description:
        "Local SEO strategies designed to improve local visibility, traffic, and customer reach.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "CRM",
      description:
        "CRM solutions designed to streamline customer management, engagement, and business operations.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "ERP",
      description:
        "ERP solutions built to optimize operations, workflow management, and business efficiency.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
  ],
  "branding": [
    {
      title: "Logo Design",
      description:
        "Creative logo design services focused on building strong and memorable brand identities.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Brand Collateral",
      description:
        "Brand collateral design services focused on creating consistent and impactful brand communication assets.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Graphic Design",
      description:
        "Graphic design services focused on creating visually consistent and impactful brand communication assets.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "2D / 3D Visualisation",
      description:
        "Immersive 2D and 3D visualization solutions crafted for realistic, interactive, and engaging digital experiences.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Brand Identity",
      description:
        "Strategic brand identity solutions crafted to build recognition, consistency, and lasting brand impact.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Industrial Product Design",
      description:
        "Industrial product design solutions focused on functionality, innovation, and scalable manufacturing.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
  ],
  "experience-designing": [
    {
      title: "UI/UX Designing",
      description:
        "User-focused UI/UX designs crafted for seamless experiences, usability, and digital engagement.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Mobile Experience Designing",
      description:
        "User-centered mobile experience design focused on usability, engagement, and seamless interactions.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
    {
      title: "Web Experience Designing",
      description:
        "User-focused web experiences designed for seamless interaction, engagement, and digital growth.",
      image: "/logo/Frame 1984080496.png",
      active: true,
    },
  ],
};

// ─── Animation Variants ────────────────────────────────────────────────────
const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0 },
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

const caseStudyVariant = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
};

// ──────────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    question: "What is Tectra's deployment methodology?",
    answer:
      "We follow a structured CI/CD-driven deployment process using Docker containers and Kubernetes orchestration. Every release passes automated test gates, staged rollouts, and zero-downtime blue-green deployments before reaching production.",
  },
  {
    question: "How do you handle legacy system migration?",
    answer:
      "We begin with a full audit of your existing architecture, identifying dependencies and risks. We then apply a phased strangler-fig pattern — gradually replacing legacy components without disrupting live operations — ensuring business continuity throughout.",
  },
  {
    question: "Do you provide long-term infrastructure support?",
    answer:
      "Yes. We offer tiered SLA-backed support plans covering 24/7 monitoring, incident response, performance tuning, and quarterly architecture reviews to ensure your systems evolve with your business needs.",
  },
];

function FAQSection({ items }: { items: ReadonlyArray<{ question: string; answer: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-[#F5F5F5] flex flex-col items-start self-stretch px-6 py-8 sm:px-12 md:px-[120px] md:pt-[40px] md:pb-[80px] border-t border-color-neutral-200">
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
              className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            >
              <span className="font-dm-sans text-[20px] font-medium not-italic leading-[1.3] text-[#1B1C1C] transition-colors duration-200">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 text-[#737373]"
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
                  <p className="font-dm-sans text-[14px] font-normal leading-[1.6] text-[#737373] pb-5 pr-8">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default function ServiceDetailsPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "software-solutions";

  const data = SERVICES_DATA[slug] || SERVICES_DATA["software-solutions"];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  return (
    <div className="relative min-h-screen w-full bg-Black overflow-x-hidden">

      {/* ── Hero Section ─────────────────────────────────────────── */}
      <header className="relative w-full h-[400px] sm:h-[500px] bg-Black flex flex-col justify-between items-start self-stretch px-6 py-10 sm:px-12 md:px-[120px] md:py-10">

        {/* Background Image — scale in on load */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: easeOut }}
        >
          <Image
            src={data.bgImage || "/logo/Frame 1984080405.png"}
            alt="Service background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Navbar — fade in */}
        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.25 }}
        >
          <Navbar className="shrink-0 w-full" />
        </motion.div>

        {/* Back Button + Title — slide up */}
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] lg:gap-16 w-full items-end relative z-10"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: easeOut, delay: 0.4 }}
        >
          {/* Back Button */}
          <div className="shrink-0 self-start lg:self-auto">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center gap-2 bg-White px-6 py-3 font-dm-sans text-base font-semibold leading-5 text-Black transition-colors duration-200 hover:bg-color-neutral-100"
              >
                <ChevronLeft className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                View All Services
              </Link>
            </motion.div>
          </div>

          {/* Title — character-level feel via delay */}
          <motion.div
            className="w-full flex flex-col items-end"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, ease: easeOut, delay: 0.55 }}
          >
            <h1 className="w-full max-w-[559px] font-dm-sans text-4xl font-medium not-italic leading-[1.3] text-White sm:text-[56px] sm:whitespace-nowrap text-left">
              {data.title}
            </h1>
          </motion.div>
        </motion.div>
      </header>

      {/* ── White Description Section ─────────────────────────── */}
      <main className="w-full bg-White flex flex-col justify-center items-start self-stretch px-6 py-16 sm:px-12 md:px-[120px] md:pt-[64px] md:pb-[80px] gap-14">
        <motion.div
          className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[240px_1fr] lg:gap-16 w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.95, ease: easeOut, delay: 0.15 }}
        >
          {/* Left Label — slide from left */}
          <motion.div
            className="inline-flex items-center self-start"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: easeOut, delay: 0.3 }}
          >
            <span className="inline-block font-dm-mono text-[16px] font-normal not-italic leading-[1.3] tracking-[3.2px] text-[#ADADAD] border-t border-[#ADADAD] pt-1 pl-0 pr-[24px]">
              {data.label}
            </span>
          </motion.div>

          {/* Right Column */}
          <div className="relative w-full flex flex-col items-end min-h-[160px]">
            <motion.p
              className="w-full max-w-[559px] font-dm-sans text-2xl sm:text-[32px] font-normal not-italic leading-[1.3] text-[#000000] pt-[5px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.95, ease: easeOut, delay: 0.45 }}
            >
              {data.description}
            </motion.p>

            <div className="lg:absolute lg:-right-16 lg:-bottom-4 self-end mt-8 lg:mt-0 shrink-0">
              <FloatingAction disableFloat />
            </div>
          </div>
        </motion.div>
      </main>

      {/* ── Our Services Grid ─────────────────────────────────── */}
      <section className="w-full bg-[#FAF9F9] flex flex-col justify-center items-start self-stretch px-6 py-8 sm:px-12 md:px-[120px] md:pt-[40px] md:pb-[100px] border-t border-color-neutral-200">
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
                className="flex flex-col bg-White overflow-hidden border border-color-neutral-200 w-full max-w-[380px] h-fit shrink-0 cursor-pointer"
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
                  <h3 className="absolute bottom-4 left-6 z-10 font-dm-sans text-xl font-medium text-White">
                    {subService.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="flex flex-col items-start gap-4 px-6 py-6 flex-grow overflow-hidden">
                  <p className="self-stretch text-[#737373] font-dm-sans text-[16px] not-italic font-normal leading-[1.3]">
                    {subService.description}
                  </p>
                  <div className="shrink-0">
                    {subService.active ? (
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 font-dm-sans text-[16px] font-medium leading-[1.3] text-[#ADADAD] transition-colors duration-200 hover:text-[#2563EB]"
                      >
                        View Details
                        <span className="text-lg">→</span>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 font-dm-sans text-[16px] font-medium leading-[1.3] text-[#ADADAD] cursor-not-allowed">
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

      {/* ── Related Case Studies ──────────────────────────────── */}
      <section className="w-full bg-White flex flex-col justify-center items-start self-stretch px-6 py-8 sm:px-12 md:px-[120px] md:pt-[40px] md:pb-[100px] border-t border-color-neutral-200">
        <div className="w-full flex flex-col items-start">

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
              Related Case Studies
            </h2>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/portfolio"
                className="group relative inline-flex justify-center items-center gap-[12px] rounded-none border-[1.5px] border-[#222] bg-transparent px-[32px] py-[16px] font-dm-sans text-[16px] font-medium leading-[1.3] text-[#000] overflow-hidden transition-colors duration-[400ms] ease-out hover:border-[#111] hover:text-[#fff] shrink-0 w-full sm:w-auto sm:mr-8"
              >
                <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#111] transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"></span>
                <span className="relative z-10">View All Projects</span>
                <span className="relative z-10 inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[5px] group-hover:-rotate-45">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Case Study Cards — staggered */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {/* Case Study 1 */}
            <motion.div
              className="flex flex-col gap-6 group cursor-pointer w-full max-w-[572px]"
              variants={caseStudyVariant}
            >
              <div className="relative w-full h-[267px] overflow-hidden bg-color-neutral-100">
                <Image
                  src="/logo/Frame 1984080205.png"
                  alt="AVMC Website"
                  fill
                  sizes="(max-width: 768px) 100vw, 572px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-2 relative pr-10">
                <h3 className="font-dm-sans text-xl font-medium text-color-neutral-900 transition-colors group-hover:text-color-primary-main">
                  AVMC Website
                </h3>
                <p className="font-dm-sans text-[15px] font-normal leading-relaxed text-color-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur justo.
                </p>
                <motion.div
                  className="absolute bottom-1 right-0 text-color-neutral-400 group-hover:text-color-neutral-900 transition-all duration-200 text-xl"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              className="flex flex-col gap-6 group cursor-pointer w-full max-w-[572px]"
              variants={caseStudyVariant}
            >
              <div className="relative w-full h-[267px] overflow-hidden bg-color-neutral-100">
                <Image
                  src="/logo/Frame 1984080271.png"
                  alt="Lead 101"
                  fill
                  sizes="(max-width: 768px) 100vw, 572px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-2 relative pr-10">
                <h3 className="font-dm-sans text-xl font-medium text-color-neutral-900 transition-colors group-hover:text-color-primary-main">
                  Lead 101
                </h3>
                <p className="font-dm-sans text-[15px] font-normal leading-relaxed text-color-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur justo.
                </p>
                <motion.div
                  className="absolute bottom-1 right-0 text-color-neutral-400 group-hover:text-color-neutral-900 transition-all duration-200 text-xl"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Section ────────────────────────────────────── */}
      <FAQSection items={data.faq || FAQ_ITEMS} />

      {/* ── Footer ──────────────────────────────────────────── */}
      <Footer />

    </div>
  );
}
