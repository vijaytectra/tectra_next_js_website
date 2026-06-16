"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ALL_CASE_STUDIES } from "@/lib/case-studies";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function CaseStudyDetailsPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "vmls-website";

  const data = ALL_CASE_STUDIES.find(c => c.id === slug) || ALL_CASE_STUDIES.find(c => c.id === "vmls-website") || ALL_CASE_STUDIES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  const [activeSectionId, setActiveSectionId] = useState<string>("client-overview");

  useEffect(() => {
    const sectionIds = [
      "client-overview",
      "the-brief",
      "our-strategy",
      "achievements",
      "impacts",
      "rankings",
      "visibility"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const offset = 120;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSectionId(id);
    }
  };

  // Use specific background and title logic based on image
  const isVMLS = slug === "vmls-website";
  const title = isVMLS ? "How did we build visibility for a Law School from scratch?" : data.title;
  const label = isVMLS ? "EDUCATION" : data.industry.toUpperCase();
  const bgImage = isVMLS ? "/images/vmls.png" : data.image;

  return (
    <div className="relative min-h-screen w-full bg-[#111] overflow-x-clip">

      {/* ── Hero Section ─────────────────────────────────────────── */}
      <header className="relative w-full h-screen min-h-[600px] max-h-[900px] flex flex-col justify-between items-start self-stretch">

        {/* Background Image — scale in on load */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: easeOut }}
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('${bgImage}') lightgray 50% / cover no-repeat`
          }}
        />

        {/* Navbar — fade in */}
        <motion.div
          className="relative z-10 w-full px-6 py-6 sm:px-12 md:px-16 lg:px-20 xl:px-28"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.25 }}
        >
          <Navbar className="shrink-0 w-full" tone="light" />
        </motion.div>

        {/* Bottom Content: Back Button + Title Block */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-12 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 pb-16 md:pb-24 mt-auto">

          {/* Left: Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: easeOut, delay: 0.4 }}
            className="shrink-0"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-3 bg-White px-6 py-4 font-dm-sans text-[15px] font-medium text-Black transition-colors duration-200 hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5 shrink-0" strokeWidth={2.5} />
              View All Case Studies
            </Link>
          </motion.div>

          {/* Right: Label and Title */}
          <motion.div
            className="w-full md:max-w-[700px] flex flex-col items-start gap-4 md:pl-16 lg:pl-24"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, ease: easeOut, delay: 0.55 }}
          >
            <span className="font-dm-mono text-[14px] sm:text-[16px] font-normal tracking-[4px] text-White/90 uppercase">
              {label}
            </span>
            <h1 className="font-dm-sans text-[36px] sm:text-[48px] lg:text-[56px] font-normal leading-[1.2] text-White">
              {title}
            </h1>
          </motion.div>

        </div>


      </header>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <main className="w-full flex flex-col items-start bg-[#FFF]">
        <section className="w-full pt-[100px] pb-[100px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-[120px] flex flex-col items-start">
          <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-8">

          <h2 className="font-dm-sans text-[36px] sm:text-[42px] font-normal text-[#171717]">
            Overview
          </h2>

          <p className="font-dm-sans text-[16px] sm:text-[18px] font-normal leading-[1.6] text-[#525252] max-w-[950px]">
            The case study showcases the development of a digital platform for VMLS, focusing on improving the institution&apos;s online presence, student engagement, and admissions experience. The solution appears to be designed for the education sector, emphasizing accessibility, information delivery, and lead generation. Easy access to key institutional information
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 mt-2">
            <div className="font-dm-sans text-[15px] sm:text-[16px]">
              <span className="text-[#8B8B8B]">Industry / </span>
              <span className="text-[#171717] font-medium">Education</span>
            </div>
            <div className="font-dm-sans text-[15px] sm:text-[16px]">
              <span className="text-[#8B8B8B]">Year / </span>
              <span className="text-[#171717] font-medium">2026</span>
            </div>
            <div className="font-dm-sans text-[15px] sm:text-[16px]">
              <span className="text-[#8B8B8B]">Time Scale / </span>
              <span className="text-[#171717] font-medium">12 Weeks</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 mt-6">
            <h3 className="font-dm-sans text-[17px] sm:text-[18px] font-semibold text-[#171717]">
              Services Included
            </h3>
            <div className="flex flex-wrap gap-3">
              {["SEO", "Social Media Marketing", "Meta Ads", "Google Ads"].map((service) => (
                <div key={service} className="px-5 py-2.5 border border-[#E5E5E5] font-dm-sans text-[14px] text-[#525252] bg-transparent">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* ── Two Column Layout (Sidebar + Content) ────────────────── */}
        <section className="w-full bg-[#F5F5F5] pt-[100px] pb-[100px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-[120px] flex flex-col items-start">
          <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

            {/* Left Sidebar */}
            <aside className="w-full lg:w-[220px] shrink-0 lg:sticky lg:top-32 self-start">
              <div className="flex flex-col items-start gap-6">
                <h4 className="font-dm-sans text-[14px] font-bold text-[#171717]">On this Page</h4>
                <nav className="flex flex-col border-l-2 border-[#E5E5E5] w-full">
                  {[
                    { id: "client-overview", label: "Client Overview" },
                    { id: "the-brief", label: "The Brief" },
                    { id: "our-strategy", label: "Our Strategy" },
                    { id: "achievements", label: "Achievements" },
                    { id: "impacts", label: "Impacts" },
                    { id: "rankings", label: "Rankings" },
                    { id: "visibility", label: "Visibility" }
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className={`border-l-2 -ml-[2px] pl-5 py-2.5 font-dm-sans text-[15px] transition-all duration-200 ${
                        activeSectionId === item.id
                          ? "border-[#171717] text-[#171717] font-semibold"
                          : "border-transparent text-[#A3A3A3] hover:text-[#525252]"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Content */}
            <div className="flex-1 min-w-0 w-full max-w-[1050px] flex flex-col gap-[56px] pb-0">

              {/* 1. About VMLS */}
              <section id="client-overview" className="w-full flex flex-col md:flex-row items-start gap-10 xl:gap-14">
                <div className="flex-1 flex flex-col gap-6 pt-1">
                  <h2 className="self-stretch font-dm-sans text-[32px] font-normal leading-[40px] text-[#262626]">About VMLS</h2>
                  <p className="font-dm-sans text-[16px] leading-[1.7] text-[#525252]">
                    Vinayaka Mission&apos;s Law School (VMLS) is a premier institution in Chennai offering advanced UG and PG law programs. Despite a world-class faculty and campus, their digital footprint was non-existent in a highly competitive educational landscape dominated by legacy institutions.
                  </p>
                </div>
                <div
                  className="w-full md:w-[45%] lg:w-[50%] h-[220px] sm:h-[280px] md:h-[344px] flex flex-col items-start max-w-full rounded-sm overflow-hidden"
                  style={{
                    gap: '12.231px',
                    background: `url('/images/Frame%201984080896.png') lightgray 0.34px -48.664px / 100% 128.293% no-repeat`
                  }}
                />
              </section>

              {/* 2. How We Executed */}
              <section id="how-we-executed" className="w-full flex flex-col gap-8 border-t border-[#E5E5E5] pt-12">
                <div className="flex flex-col gap-3">
                  <span className="font-dm-mono text-[16px] font-normal leading-[130%] tracking-[3.2px] text-[#525252] uppercase inline-block border-t border-[#A3A3A3] pt-1 w-fit">OUR ACTIONS</span>
                  <h2 className="font-dm-sans text-[32px] sm:text-[40px] font-normal text-[#171717]">How We Executed</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-6">
                  {/* Step 1 */}
                  <div className="flex flex-col gap-4">
                    <span className="font-dm-sans text-[48px] text-[#A3A3A3] leading-none">01</span>
                    <h4 className="font-dm-sans text-[20px] font-medium text-[#171717]">Initial Audit and Strategy</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">A full SEO audit exposed the gaps — no dedicated programme pages, broken header structure, and keywords Google had never indexed. The site, as it stood, had no realistic path to organic visibility.</p>
                  </div>
                  {/* Step 2 */}
                  <div className="flex flex-col gap-4">
                    <span className="font-dm-sans text-[48px] text-[#A3A3A3] leading-none">02</span>
                    <h4 className="font-dm-sans text-[20px] font-medium text-[#171717]">Business-First Performance</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">Each undergraduate and postgraduate programme received a dedicated page — unique URL, structured content, optimized headers, and meta tags aligned to student search behavior. Google could finally match the site to the queries that mattered.</p>
                  </div>
                  {/* Step 3 */}
                  <div className="flex flex-col gap-4">
                    <span className="font-dm-sans text-[48px] text-[#A3A3A3] leading-none">03</span>
                    <h4 className="font-dm-sans text-[20px] font-medium text-[#171717]">Comprehensive On-Site Optimization</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">The homepage was restructured to surface core programmes and guide visitors forward. Faculty profiles were deepened for long-tail reach. A clear header hierarchy and internal linking structure were built across all pages to improve indexing.</p>
                  </div>
                  {/* Step 4 */}
                  <div className="flex flex-col gap-4">
                    <span className="font-dm-sans text-[48px] text-[#A3A3A3] leading-none">04</span>
                    <h4 className="font-dm-sans text-[20px] font-medium text-[#171717]">Blog Launch and Content Marketing</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">Regular blog articles addressed questions students were already asking — law careers, entrance exams, and specialisation insights. This drew research-stage audiences while positioning the college as a credible voice, building trust before an enquiry.</p>
                  </div>
                  {/* Step 5 */}
                  <div className="flex flex-col gap-4">
                    <span className="font-dm-sans text-[48px] text-[#A3A3A3] leading-none">05</span>
                    <h4 className="font-dm-sans text-[20px] font-medium text-[#171717]">Business-First Performance</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">Keyword rankings and traffic were monitored continuously, with insights used to refine strategy and optimise pages. This iterative approach maintained consistent search visibility. The result was steady growth in enquiries, registrations, and campus visits.</p>
                  </div>
                </div>
              </section>

              {/* 3. The Brief (Challenges and Goals) */}
              <section id="the-brief" className="w-full flex flex-col gap-8 border-t border-[#E5E5E5] pt-12">
                <div className="flex flex-col gap-3">
                  <span className="font-dm-mono text-[16px] font-normal leading-[130%] tracking-[3.2px] text-[#525252] uppercase inline-block border-t border-[#A3A3A3] pt-1 w-fit">THE BRIEF</span>
                  <h2 className="font-dm-sans text-[32px] sm:text-[40px] font-normal text-[#171717]">Challenges and Goals</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {/* Problem Card */}
                  <div className="bg-[#FFF] p-8 flex flex-col gap-4">
                    <Image src="/logo/Path%2056.svg" alt="The problem icon" width={24} height={24} className="w-6 h-6 object-contain" />
                    <h4 className="font-dm-sans text-[18px] font-semibold text-[#171717]">The problem</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">The brand was invisible for intent-driven keywords like &quot;law schools in Chennai&quot; or &quot;CLAT preparation.&quot; Zero technical SEO foundation led to poor indexing.</p>
                  </div>
                  {/* Goal Card */}
                  <div className="bg-[#FFF] p-8 flex flex-col gap-4">
                    <Image src="/logo/Group%205.svg" alt="The goal icon" width={24} height={24} className="w-6 h-6 object-contain" />
                    <h4 className="font-dm-sans text-[18px] font-semibold text-[#171717]">The goal</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">Achieve top-10 rankings for high-volume admission keywords and establish authority via a comprehensive content hub for law aspirants.</p>
                  </div>
                </div>
              </section>

              {/* 4. Four Phase Strategy */}
              <section id="our-strategy" className="w-full flex flex-col gap-8 border-t border-[#E5E5E5] pt-12">
                <div className="flex flex-col gap-3">
                  <span className="font-dm-mono text-[16px] font-normal leading-[130%] tracking-[3.2px] text-[#525252] uppercase inline-block border-t border-[#A3A3A3] pt-1 w-fit">OUR STRATEGY</span>
                  <h2 className="font-dm-sans text-[32px] sm:text-[40px] font-normal text-[#171717]">Four Phase Strategy</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {/* Phase 1 */}
                  <div className="bg-[#FFF] p-6 flex flex-col gap-3">
                    <span className="font-dm-sans text-[24px] text-[#A3A3A3] leading-none mb-1">01</span>
                    <h4 className="font-dm-sans text-[15px] font-semibold text-[#171717]">Initial SEO audit</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">Comprehensive crawl of the domain to identify 404s and schema gaps.</p>
                  </div>
                  {/* Phase 2 */}
                  <div className="bg-[#FFF] p-6 flex flex-col gap-3">
                    <span className="font-dm-sans text-[24px] text-[#A3A3A3] leading-none mb-1">02</span>
                    <h4 className="font-dm-sans text-[15px] font-semibold text-[#171717]">Page architecture</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">Restructuring the silo to support landing pages for specific programs.</p>
                  </div>
                  {/* Phase 3 */}
                  <div className="bg-[#FFF] p-6 flex flex-col gap-3">
                    <span className="font-dm-sans text-[24px] text-[#A3A3A3] leading-none mb-1">03</span>
                    <h4 className="font-dm-sans text-[15px] font-semibold text-[#171717]">On-site optimization</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">Mapping H1/H2 tags and meta descriptions across 40+ dynamic URLs.</p>
                  </div>
                  {/* Phase 4 */}
                  <div className="bg-[#FFF] p-6 flex flex-col gap-3">
                    <span className="font-dm-sans text-[24px] text-[#A3A3A3] leading-none mb-1">04</span>
                    <h4 className="font-dm-sans text-[15px] font-semibold text-[#171717]">Blog strategy</h4>
                    <p className="font-dm-sans text-[16px] font-normal leading-[130%] text-[#525252]">Deploying 12 high-authority guides for CLAT and AILET aspirants.</p>
                  </div>
                </div>
              </section>

              {/* 5. Achievements */}
              <section id="achievements" className="w-full flex flex-col gap-8 border-t border-[#E5E5E5] pt-12">
                <div className="flex flex-col gap-3">
                  <span className="font-dm-mono text-[16px] font-normal leading-[130%] tracking-[3.2px] text-[#525252] uppercase inline-block border-t border-[#A3A3A3] pt-1 w-fit">ACHIEVEMENTS</span>
                  <h2 className="font-dm-sans text-[32px] sm:text-[40px] font-normal text-[#171717]">The Growth Outcomes</h2>
                  <p className="font-dm-sans text-[20px] font-normal leading-[36px] text-[#737373]">Results were achieved faster than expected, just months after SEO changes.</p>
                </div>

                <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 mt-2 w-full">
                  {/* Card 1 */}
                  <div className="flex flex-col justify-between items-start w-full md:w-[190px] h-[190px] p-4 border-[0.5px] border-[#D6D6D6] bg-[#FFF]">
                    <span className="font-urbanist text-[32px] font-bold leading-[40px] text-[#000]">317%</span>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center gap-1.5 font-dm-sans text-[16px] font-normal leading-[130%] text-[#000]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                        Total Users Grew
                      </div>
                      <p className="self-stretch font-dm-sans text-[12px] font-normal leading-[130%] text-[#525252]">with new users up by 326.5%</p>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="flex flex-col justify-between items-start w-full md:w-[190px] h-[190px] p-4 border-[0.5px] border-[#D6D6D6] bg-[#FFF]">
                    <span className="font-urbanist text-[32px] font-bold leading-[40px] text-[#000]">429%</span>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center gap-1.5 font-dm-sans text-[16px] font-normal leading-[130%] text-[#000]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                        Total Users Grew
                      </div>
                      <p className="self-stretch font-dm-sans text-[12px] font-normal leading-[130%] text-[#525252]">Total session vs Prior Period stats</p>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="flex flex-col justify-between items-start w-full md:w-[190px] h-[190px] p-4 border-[0.5px] border-[#D6D6D6] bg-[#FFF]">
                    <span className="font-urbanist text-[32px] font-bold leading-[40px] text-[#000]">164%</span>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center gap-1.5 font-dm-sans text-[16px] font-normal leading-[130%] text-[#000]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                        Total Users Grew
                      </div>
                      <p className="self-stretch font-dm-sans text-[12px] font-normal leading-[130%] text-[#525252]">with new users up by 326.5%</p>
                    </div>
                  </div>
                  {/* Card 4 */}
                  <div className="flex flex-col justify-between items-start w-full md:w-[190px] h-[190px] p-4 border-[0.5px] border-[#D6D6D6] bg-[#FFF]">
                    <span className="font-urbanist text-[32px] font-bold leading-[40px] text-[#000]">174%</span>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center gap-1.5 font-dm-sans text-[16px] font-normal leading-[130%] text-[#000]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                        Click Growth
                      </div>
                      <p className="self-stretch font-dm-sans text-[12px] font-normal leading-[130%] text-[#525252]">Google Search Console Clicks</p>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-10">
                  <img
                    src="/images/image%20129.png"
                    alt="Growth outcome graph"
                    className="w-full h-auto rounded-sm"
                  />
                </div>

                <div className="flex items-center justify-between mt-[15px] font-dm-sans text-[13px]">
                  <div className="flex items-center gap-2 text-[#737373]">
                    <span className="font-semibold text-[#171717]">Source :</span> GSC Actual Data
                    <span className="text-[#E5E5E5] mx-1">•</span>
                    <span className="font-semibold text-[#171717]">Range :</span> Aug 2024 - Aug 2025
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981] font-medium">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg> Verified Performance: Stable Q3 2025
                  </div>
                </div>
              </section>

              {/* 6. Impacts (AI Performance) */}
              <section id="impacts" className="w-full flex flex-col gap-8 border-t border-[#E5E5E5] pt-12">
                <div className="flex flex-col gap-3">
                  <span className="font-dm-mono text-[16px] font-normal leading-[130%] tracking-[3.2px] text-[#525252] uppercase inline-block border-t border-[#A3A3A3] pt-1 w-fit">IMPACTS</span>
                  <h2 className="font-dm-sans text-[32px] sm:text-[40px] font-normal text-[#171717]">AI Performance</h2>
                  <p className="self-stretch font-dm-sans text-[20px] font-normal leading-[150%] text-[#737373]">
                    With <strong className="font-medium text-[#171717]">3.06 million</strong> impressions but a <strong className="font-medium text-[#171717]">0.7% CTR</strong>, the gap points to one key factor: AI search. Tools like <strong className="font-medium text-[#171717]">Google AI Overviews (27 mentions), AI Mode (9), ChatGPT (3), and Gemini (1)</strong> are citing our pages directly in their responses — meaning users get answers without visiting our site. Our AI Visibility score of <strong className="font-medium text-[#171717]">20</strong> and <strong className="font-medium text-[#171717]">77</strong> cited pages confirm we&apos;re present in this new layer of search.
                  </p>
                </div>

                <div className="w-full mt-2">
                  <img
                    src="/images/image%20131.png"
                    alt="AI dashboard performance"
                    className="w-full h-auto rounded-sm"
                  />
                </div>

                <div className="flex items-center justify-between mt-[-6px] font-dm-sans text-[13px]">
                  <div className="flex items-center gap-2 text-[#737373]">
                    <span className="font-semibold text-[#171717]">Source :</span> GSC Actual Data
                    <span className="text-[#E5E5E5] mx-1">•</span>
                    <span className="font-semibold text-[#171717]">Range :</span> Aug 2024 - Aug 2025
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981] font-medium">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg> Verified Performance: Stable Q3 2025
                  </div>
                </div>
              </section>

              {/* 7. Strategy Impact & Execution Box */}
              <div className="bg-[#EBEBEB] border-[1.768px] border-[#E5E5E5] p-10 rounded-sm flex flex-col items-start gap-8 mt-[-16px] w-full">
                <h4 className="font-dm-sans text-[24px] font-medium leading-[140%] text-[#404040]">Strategy Impact &amp; Execution</h4>
                <ul className="flex flex-col gap-4">
                  {[
                    "Results were achieved faster than expected, just months after SEO changes.",
                    "Informative blog articles enhanced the website's authority and expanded its keyword reach.",
                    "Each page was aligned with specific search intents, boosting relevance for prospective students.",
                    "As a result, more keywords entered Google's index and rankings improved across multiple queries.",
                    "The law college began attracting higher volumes of qualified traffic, leading to more student inquiries."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A3A3A3] shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                      <span className="font-dm-sans text-[15px] leading-[1.5] text-[#525252]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 7. CTA Box */}
              <div className="bg-[#111111] p-10 md:p-12 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-6 w-full">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-dm-sans text-[20px] font-medium leading-[26px] text-[#FAFAFA]">Core Business Goals Achieved</h3>
                    <p className="font-dm-sans text-[15px] text-White/70">SEO improvements increased inquiries, registrations, and campus visits.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <div className="flex items-center gap-2 font-dm-sans text-[14px] text-White/90">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                      Higher organic rankings
                    </div>
                    <div className="flex items-center gap-2 font-dm-sans text-[14px] text-White/90">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                      Intent-aligned pages
                    </div>
                    <div className="flex items-center gap-2 font-dm-sans text-[14px] text-White/90">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                      More qualified traffic
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="shrink-0 inline-flex items-center gap-3 bg-White px-8 py-4 font-dm-sans text-[15px] font-medium text-[#111] hover:bg-gray-100 transition-colors">
                  Talk to Us
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>

              {/* 8. Rankings Section */}
              <section id="rankings" className="w-full flex flex-col gap-8 border-t border-[#E5E5E5] pt-12">
                <div className="flex flex-col gap-3">
                  <span className="font-dm-mono text-[16px] font-normal leading-[130%] tracking-[3.2px] text-[#525252] uppercase inline-block border-t border-[#A3A3A3] pt-1 w-fit">RANKINGS</span>
                  <h2 className="font-dm-sans text-[32px] sm:text-[40px] font-normal text-[#171717]">Keyword Mastery &amp; SERP Ownership</h2>
                </div>

                {/* Two-Column Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  {/* Left Card */}
                  <div className="bg-[#FFF] border border-[#E5E5E5] p-8 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#171717]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                      </div>
                      <h4 className="font-dm-sans text-[18px] font-medium text-[#171717]">Position 1 Ranking</h4>
                    </div>
                    <div className="flex gap-3 items-start text-[#525252]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                      <p className="font-dm-sans text-[15px] leading-[1.6]">
                        High-intent keywords like &quot;law courses after 12th,&quot; &quot;LLB after 12th,&quot; and &quot;law career options&quot; secured Position 1 on Google — showing up in featured snippets, FAQs, and People Also Ask to maximize visibility. By aligning strategy with student search intent, we reached prospective applicants at the exact moment they were ready to choose — turning search traffic into real inquiries and admissions interest.
                      </p>
                    </div>
                  </div>

                  {/* Right Card */}
                  <div className="bg-[#FFF] border border-[#E5E5E5] p-8 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#171717]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 3 3-3 3M14 3h7v7M21 3 14 10M3 14h18M3 20h18"/></svg>
                      </div>
                      <h4 className="font-dm-sans text-[18px] font-medium text-[#171717]">SERP Feature Domination</h4>
                    </div>
                    <div className="flex gap-3 items-start text-[#525252]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                      <p className="font-dm-sans text-[15px] leading-[1.6]">
                        Keywords like &quot;CLAT exam syllabus,&quot; &quot;CLAT exam eligibility,&quot; and &quot;best law university in India&quot; consistently appear across featured snippets, People Also Ask, knowledge panels, and FAQs — capturing greater search real estate and driving higher click-through rates. By owning these SERP features, the college is positioned as an authoritative, trusted source — attracting the right students at the right moment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Table: Keyword Performance */}
                <div className="flex flex-col gap-6 mt-4">
                  <h4 className="font-dm-sans text-[24px] font-medium leading-[140%] text-[#404040]">Acquisition Channel Performance</h4>
                  <div className="w-full overflow-x-auto">
                    <table className="w-full text-left font-dm-sans border-collapse border border-[#E5E5E5] min-w-[900px]">
                      <thead>
                        <tr className="bg-[#F9F9F9] border-b border-[#E5E5E5]">
                          <th className="p-4 font-semibold text-[13px] text-[#171717] border-r border-[#E5E5E5]">Keyword</th>
                          <th className="p-4 font-semibold text-[13px] text-[#171717] border-r border-[#E5E5E5] text-center">Intent</th>
                          <th className="p-4 font-semibold text-[13px] text-[#171717] border-r border-[#E5E5E5] text-center">Pos.</th>
                          <th className="p-4 font-semibold text-[13px] text-[#171717] border-r border-[#E5E5E5] text-center">SERP Features</th>
                          <th className="p-4 font-semibold text-[13px] text-[#171717] border-r border-[#E5E5E5] text-center">Traffic</th>
                          <th className="p-4 font-semibold text-[13px] text-[#171717] border-r border-[#E5E5E5] text-center">Traffic %</th>
                          <th className="p-4 font-semibold text-[13px] text-[#171717] border-r border-[#E5E5E5] text-center">Volume</th>
                          <th className="p-4 font-semibold text-[13px] text-[#171717] border-r border-[#E5E5E5] text-center">KD %</th>
                          <th className="p-4 font-semibold text-[13px] text-[#171717]">Target URL</th>
                        </tr>
                      </thead>
                      <tbody className="text-[14px] text-[#525252]">
                        {[
                          {
                            kw: "clat exam syllabus",
                            intent: { type: "I", bg: "bg-[#DBEAFE]", text: "text-[#1D4ED8]" },
                            pos: "1",
                            traffic: "135",
                            trafficPct: "0.55%",
                            volume: "8.1K",
                            kd: 26,
                            url: "vmls.edu.in/blog"
                          },
                          {
                            kw: "best law university in india",
                            intent: { type: "C", bg: "bg-[#FEE2E2]", text: "text-[#B91C1C]" },
                            pos: "1",
                            traffic: "126",
                            trafficPct: "0.51%",
                            volume: "3.6K",
                            kd: 31,
                            url: "vmls.edu.in/blog"
                          },
                          {
                            kw: "clat exam eligibility",
                            intent: { type: "I", bg: "bg-[#DBEAFE]", text: "text-[#1D4ED8]" },
                            pos: "1",
                            traffic: "325",
                            trafficPct: "1.32%",
                            volume: "2.9K",
                            kd: 24,
                            url: "vmls.edu.in/vmls.e"
                          },
                          {
                            kw: "law subjects",
                            intent: { type: "I", bg: "bg-[#DBEAFE]", text: "text-[#1D4ED8]" },
                            pos: "1",
                            traffic: "66",
                            trafficPct: "0.26%",
                            volume: "2.9K",
                            kd: 12,
                            url: "vmls.edu.in/blog"
                          },
                          {
                            kw: "what is llb",
                            intent: { type: "I", bg: "bg-[#DBEAFE]", text: "text-[#1D4ED8]" },
                            pos: "1",
                            traffic: "4",
                            trafficPct: "0.01%",
                            volume: "2.4K",
                            kd: 30,
                            url: "vmls.edu.in/blog"
                          }
                        ].map((row, idx, arr) => (
                          <tr key={idx} className={`bg-[#FFF] ${idx !== arr.length - 1 ? 'border-b border-[#E5E5E5]' : ''}`}>
                            <td className="p-4 font-medium text-[#171717] border-r border-[#E5E5E5]">{row.kw}</td>
                            <td className="p-4 text-center border-r border-[#E5E5E5]">
                              <span className={`inline-flex items-center justify-center w-6 h-6 rounded text-[12px] font-bold ${row.intent.bg} ${row.intent.text}`}>
                                {row.intent.type}
                              </span>
                            </td>
                            <td className="p-4 text-center border-r border-[#E5E5E5] font-medium text-[#171717]">{row.pos}</td>
                            <td className="p-4 text-center border-r border-[#E5E5E5]">
                              <div className="flex items-center justify-center gap-1.5 text-[#737373]">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.08-3.08a2 2 0 0 0-2.83 0L9 21"/></svg>
                              </div>
                            </td>
                            <td className="p-4 text-center border-r border-[#E5E5E5]">{row.traffic}</td>
                            <td className="p-4 text-center border-r border-[#E5E5E5]">{row.trafficPct}</td>
                            <td className="p-4 text-center border-r border-[#E5E5E5]">{row.volume}</td>
                            <td className="p-4 text-center border-r border-[#E5E5E5]">
                              <div className="flex items-center justify-center gap-1.5">
                                <span className="text-[#171717] font-medium">{row.kd}</span>
                                {row.kd < 30 ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                                    <circle cx="8" cy="8" r="8" fill="#16A34A"/>
                                  </svg>
                                ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                                    <circle cx="8" cy="8" r="8" fill="#F59E0B"/>
                                  </svg>
                                )}
                              </div>
                            </td>
                            <td className="p-4 text-[#2563EB] hover:underline font-medium">
                              <a href={`https://${row.url}`} target="_blank" rel="noopener noreferrer">{row.url}</a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center justify-between mt-2 font-dm-sans text-[13px]">
                    <div className="flex items-center gap-2 text-[#737373]">
                      <span className="font-semibold text-[#171717]">Source :</span> SEMrush Organic Research Dashboard
                    </div>
                    <div className="flex items-center gap-2 text-[#10B981] font-medium">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg> Verified Performance: Stable Q3 2025
                    </div>
                  </div>
                </div>
              </section>

              {/* 9. Visibility Section */}
              <section id="visibility" className="w-full flex flex-col gap-8 border-t border-[#E5E5E5] pt-12">
                <div className="flex flex-col gap-3">
                  <span className="font-dm-mono text-[16px] font-normal leading-[130%] tracking-[3.2px] text-[#525252] uppercase inline-block border-t border-[#A3A3A3] pt-1 w-fit">VISIBILITY</span>
                  <h2 className="font-dm-sans text-[32px] sm:text-[40px] font-normal text-[#171717]">Local SEO Effects</h2>
                  <div className="flex flex-col gap-6 font-dm-sans text-[20px] font-normal leading-[36px] text-[#525252] self-stretch mt-2">
                    <p>
                      We could describe our SEO process for hours, but the best way to show its impact is through real results. Below, you&apos;ll find the outcome of our SEO strategy for Vinayaka Mission&apos;s Law School (VMLS) – vmls.edu.in.
                    </p>
                    <p>
                      After implementing a complete SEO architecture, content optimization, and keyword-focused blog strategy, the results came faster than expected. In just a few months, the law school&apos;s website reached 5.09 million impressions and 53.4K clicks, with an average position of 9.9 in Google search results.
                    </p>
                    <p>
                      This dramatic growth in visibility translated into a steady rise in inquiries, registrations, and campus visits, firmly positioning VMLS among the top-ranked law schools actively searched by students across India.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mt-4">
                  <h4 className="font-dm-sans text-[20px] font-semibold text-[#171717]">Localized Search Impact</h4>
                  
                  {/* Google Business Profile Performance Dashboard Card */}
                  <div className="bg-[#FFF] border border-[#E5E5E5] rounded-sm p-6 sm:p-8 flex flex-col gap-6 w-full">
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0F0F0] pb-4">
                      <span className="font-dm-sans text-[16px] font-semibold text-[#171717]">Performance</span>
                      
                      {/* Date Selector Dropdown Mock */}
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFF] border border-[#D6D6D6] rounded text-[13px] text-[#525252] font-medium cursor-pointer hover:bg-gray-50 select-none">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                        <span>Mar 2025 - Aug 2025</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>

                    {/* Tabs navigation */}
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-[#F0F0F0] pb-2 text-[14px] w-full">
                      {[
                        { label: "Overview", active: true, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg> },
                        { label: "Calls", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
                        { label: "Chat Clicks", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
                        { label: "Bookings", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg> },
                        { label: "Directions", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg> },
                        { label: "Website Clicks", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> }
                      ].map((tab, i) => (
                        <button key={i} className={`flex items-center gap-3 pb-2.5 font-medium transition-colors border-b-2 -mb-[10px] ${tab.active ? 'text-[#2563EB] border-[#2563EB]' : 'text-[#737373] border-transparent hover:text-[#262626]'}`}>
                          {tab.icon}
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Metric Value */}
                    <div className="flex flex-col gap-0.5 mt-2">
                      <span className="font-dm-sans text-[44px] font-bold text-[#171717] leading-none">4,913</span>
                      <span className="font-dm-sans text-[14px] text-[#737373]">Business Profile interactions</span>
                    </div>

                    {/* SVG Chart area */}
                    <div className="relative w-full h-[220px] mt-2 flex items-end">
                      {/* Grid Y-Axis Lines & Labels */}
                      <div className="absolute inset-0 flex flex-col justify-between text-[11px] text-[#A3A3A3] font-mono select-none pointer-events-none">
                        {[360, 270, 180, 90, 0].map((val, i) => (
                          <div key={i} className="w-full flex items-center justify-between border-b border-dashed border-[#E5E5E5] pb-0.5 h-0">
                            <span className="bg-[#FFF] pr-2 z-10">{val}</span>
                          </div>
                        ))}
                      </div>

                      {/* SVG Line Graph */}
                      <svg className="w-full h-[180px] z-10 overflow-visible" viewBox="0 0 600 180" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Area path */}
                        <path
                          d="M 20 180 L 20 170 L 132 140 L 244 130 L 356 80 L 468 70 L 580 50 L 580 180 Z"
                          fill="url(#chart-grad)"
                        />

                        {/* Line path */}
                        <path
                          d="M 20 170 L 132 140 L 244 130 L 356 80 L 468 70 L 580 50"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Data Points */}
                        {[
                          { x: 20, y: 170, label: "Feb 2026" },
                          { x: 132, y: 140, label: "Mar 2026" },
                          { x: 244, y: 130, label: "Apr 2026" },
                          { x: 356, y: 80, label: "May 2026" },
                          { x: 468, y: 70, label: "Jun 2026" },
                          { x: 580, y: 50, label: "Jul 2026" }
                        ].map((pt, i) => (
                          <circle
                            key={i}
                            cx={pt.x}
                            cy={pt.y}
                            r="5"
                            fill="#FFF"
                            stroke="#3B82F6"
                            strokeWidth="2.5"
                            className="cursor-pointer hover:r-7 transition-all"
                          />
                        ))}
                      </svg>
                    </div>

                    {/* Chart X-Axis Labels */}
                    <div className="flex justify-between items-center px-[15px] text-[12px] text-[#737373] font-medium -mt-2">
                      <span>Feb 2026</span>
                      <span>Mar 2026</span>
                      <span>Apr 2026</span>
                      <span>May 2026</span>
                      <span>Jun 2026</span>
                      <span>Jul 2026</span>
                    </div>

                    {/* Footer note */}
                    <div className="flex items-center gap-1.5 text-[#10B981] font-medium text-[12.5px] border-t border-[#F0F0F0] pt-4 mt-2">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                      <span>Based on actual Google Business Profile Performance Data</span>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </section>

        {/* 10. Conclusion / Quote Section */}
        <section className="w-full bg-[#FFF] py-20 px-6 border-b border-[#E5E5E5] flex flex-col items-center justify-center">
          <div className="max-w-[960px] mx-auto flex flex-col items-center gap-8 text-center">
            <p className="font-dm-sans text-[20px] font-normal leading-[36px] text-[#525252]">
              The results clearly demonstrate how a structured SEO strategy can transform the digital visibility of an educational institution. Within just 8 months, VMLS Law School went from limited online presence to consistently appearing on Page 1 of Google for high-value keywords like &quot;CLAT exam syllabus,&quot; &quot;CLAT exam eligibility,&quot; and &quot;best law university in India.&quot;
            </p>
            <p className="font-dm-sans text-[20px] font-normal leading-[36px] text-[#525252]">
              With 5M+ impressions, 53K+ clicks, and an average position of 9.9, the law school has established a strong foundation for organic growth and student acquisition. The combination of technical SEO, content optimization, and SERP feature targeting not only improved rankings but also built long-term authority in the legal education niche.
            </p>
            <blockquote className="font-dm-sans text-[24px] font-medium italic text-[#262626] leading-[36px] mt-4 w-[954px] max-w-full mx-auto">
              &ldquo;This case study proves that with the right SEO approach, even highly competitive industries like education can achieve measurable and scalable results.&rdquo;
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
