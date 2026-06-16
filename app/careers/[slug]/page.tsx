"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { ALL_JOBS, slugify } from "@/lib/jobs";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function CareerRoleDetailsPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "uiux-designer";

  // Find job from ALL_JOBS list using slugified title
  const job = ALL_JOBS.find(j => slugify(j.title) === slug) || ALL_JOBS.find(j => slugify(j.title) === "uiux-designer") || ALL_JOBS[0];

  return (
    <div className="relative min-h-screen w-full bg-[#FFF] text-Black flex flex-col overflow-x-clip">
      
      {/* ── Navbar ─────────────────────────────────────────── */}
      <div className="w-full px-6 py-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto border-b border-[#F0F0F0]">
        <Navbar tone="dark" className="w-full" />
      </div>

      {/* ── Back to Careers navigation row ────────────────── */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto pt-[30px]">
        <Link 
          href="/careers" 
          className="inline-flex items-center gap-2 font-dm-sans text-[14px] text-[#737373] hover:text-[#171717] transition-colors group"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-transform group-hover:-translate-x-0.5"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Careers
        </Link>
      </div>

      {/* ── Main Layout (Content + Sidebar) ────────────────── */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 pt-[30px] pb-[100px] flex flex-col gap-12">
        
        {/* 1. Job Header & Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[100px] items-start lg:items-stretch relative w-full">
          
          {/* Left Column: Job Details */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="flex-1 w-full flex flex-col items-start"
          >
            <h1 className="font-dm-sans text-[36px] sm:text-[44px] md:text-[56px] font-normal leading-[1.1] text-[#171717] tracking-tight mb-6">
              {job.title}
            </h1>
            
            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-dm-sans text-[15px] text-[#525252] mb-8 font-normal">
              <span>{job.type}</span>
              <span className="text-[#E5E5E5]" aria-hidden>|</span>
              <span>{job.level}</span>
              {job.location.split(" | ").map((locPart, idx) => (
                <span key={idx} className="inline-flex items-center gap-x-4">
                  <span className="text-[#E5E5E5]" aria-hidden>|</span>
                  <span>{locPart}</span>
                </span>
              ))}
            </div>

            <p className="font-dm-sans text-[17px] sm:text-[18px] leading-[1.65] text-[#525252] max-w-[680px]">
              {job.longDescription}
            </p>
            <motion.div
              className="mt-10 lg:mt-auto inline-block w-full sm:w-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/careers"
                className="group relative overflow-hidden border border-[#E5E5E5] bg-[#FFF] py-4 px-8 flex items-center justify-center gap-4 w-full sm:w-auto select-none transition-colors duration-1000 ease-out"
              >
                <span className="absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 bg-[#000]"></span>
                <span className="relative z-10 flex items-center transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[5px] text-[#171717] group-hover:text-[#FFF]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </span>
                <span className="relative z-10 font-dm-sans text-[15px] font-medium transition-colors duration-1000 ease-out text-[#171717] group-hover:text-[#FFF]">
                  View All Open Roles
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Sidebar application card */}
          <motion.aside 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            className="w-full lg:w-[350px] xl:w-[380px] shrink-0"
          >
            <div className="bg-[#FFF] border border-[#E5E5E5] p-6 sm:p-8 flex flex-col gap-6 w-full shadow-sm">
              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button className="w-full bg-[#000] text-[#FFF] py-4 font-dm-sans text-[16px] font-medium transition-colors hover:bg-neutral-800 text-center select-none cursor-pointer">
                  Apply Now
                </button>
                

                <button className="w-full border border-[#E5E5E5] bg-[#FFF] text-[#171717] py-3.5 font-dm-sans text-[15px] font-medium transition-colors hover:bg-neutral-50 flex items-center justify-center gap-2 select-none cursor-pointer">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-[#737373]"
                  >
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
                  </svg>
                  Share Job
                </button>
              </div>



              {/* Sidebar Details list */}
              <div className="flex flex-col gap-5 text-left font-dm-sans">
                <div className="flex flex-col gap-1">
                  <span className="font-dm-mono text-[11px] font-medium tracking-[2.5px] text-[#A3A3A3] uppercase">DEPARTMENT</span>
                  <span className="text-[15px] font-medium text-[#171717]">{job.department}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-dm-mono text-[11px] font-medium tracking-[2.5px] text-[#A3A3A3] uppercase">EXPERIENCE</span>
                  <span className="text-[15px] font-medium text-[#171717]">{job.experience}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-dm-mono text-[11px] font-medium tracking-[2.5px] text-[#A3A3A3] uppercase">SALARY RANGE</span>
                  <span className="text-[15px] font-medium text-[#171717]">{job.salaryRange}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-dm-mono text-[11px] font-medium tracking-[2.5px] text-[#A3A3A3] uppercase">POSTED</span>
                  <span className="text-[15px] font-medium text-[#171717]">{job.posted}</span>
                </div>
              </div>
            </div>
          </motion.aside>
          
        </div>

        {/* 2. About The Role Section */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="w-full pt-0 flex flex-col md:flex-row gap-8 md:gap-16 items-start"
        >
          <h2 className="font-dm-sans text-[28px] sm:text-[32px] font-normal leading-[1.2] text-[#171717] md:w-[240px] shrink-0">
            About The Role
          </h2>
          <div className="flex-grow flex flex-col gap-6 text-[#525252] font-dm-sans text-[16px] sm:text-[17px] leading-[1.65] max-w-[900px]">
            {job.aboutRole.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </motion.div>

        {/* 3. Responsibilities Section */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="w-full pt-0 flex flex-col gap-8 items-start"
        >
          <h2 className="font-dm-sans text-[28px] sm:text-[32px] font-normal leading-[1.2] text-[#171717]">
            Responsibilities
          </h2>
          <div className="w-full flex flex-col mt-2">
            {job.responsibilities.map((resp, idx) => (
              <div 
                key={idx} 
                className="w-full border-t border-[#F0F0F0] py-6 grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-8 items-start text-left font-dm-sans"
              >
                <div className="col-span-1 text-[14px] text-[#A3A3A3] font-medium font-mono">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="col-span-1 md:col-span-3 text-[16px] font-semibold text-[#171717]">
                  {resp.title}
                </div>
                <div className="col-span-1 md:col-span-8 text-[15px] sm:text-[16px] leading-[1.6] text-[#525252]">
                  {resp.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. Requirements Section */}
        {job.requirements && (
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="w-full pt-0 flex flex-col gap-[56px] items-start"
          >
            <h2 className="font-dm-sans text-[28px] sm:text-[32px] font-normal leading-[1.2] text-[#171717]">
              Requirements
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Must Have */}
              <div className="flex flex-col items-start gap-6 w-full">
                <h3 className="font-dm-sans text-[24px] font-medium text-[#000] leading-[36px] tracking-[-0.6px]">
                  Must Have
                </h3>
                <div className="flex flex-wrap gap-3 max-w-[500px]">
                  {job.requirements.mustHave.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="border border-[#F0F0F0] bg-[#FFF] text-[#525252] px-4 py-2.5 font-dm-sans text-[13px] sm:text-[14px] whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nice to Have */}
              <div className="flex flex-col items-start gap-6 w-full">
                <h3 className="font-dm-sans text-[24px] font-medium text-[#000] leading-[36px] tracking-[-0.6px]">
                  Nice to Have
                </h3>
                <div className="flex flex-wrap gap-3 max-w-[500px]">
                  {job.requirements.niceToHave.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="border border-[#F0F0F0] bg-[#FFF] text-[#525252] px-4 py-2.5 font-dm-sans text-[13px] sm:text-[14px] whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}



      </main>

      {/* ── Studio Not Factory Section ────────────────────── */}
      <section className="w-full bg-[#000] text-White py-[80px]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
          
          <h2 className="font-dm-sans text-[36px] sm:text-[44px] md:text-[56px] font-light tracking-tight mb-16 text-[#FFF]">
            A studio, not a factory
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-neutral-800 md:divide-y-0 md:divide-x md:divide-neutral-800">
            {/* Column 1: GROWTH */}
            <div className="flex flex-col gap-8 pb-8 md:pb-0 md:pr-12">
              <span className="font-dm-mono text-[12px] font-medium tracking-[2.5px] text-[#A3A3A3] uppercase">
                GROWTH
              </span>
              <div className="flex justify-between items-center w-full">
                <ul className="flex flex-col gap-4 text-[#A3A3A3] font-dm-sans text-[15px] sm:text-[16px]">
                  {["Annual learning budget", "Conference attendance", "Mentorship program", "Design critique sessions", "Cross-functional projects"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#525252] mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="font-dm-mono text-[14px] text-[#525252] pr-4 select-none">01</span>
              </div>
            </div>

            {/* Column 2: CULTURE */}
            <div className="flex flex-col gap-8 py-8 md:py-0 md:px-12">
              <span className="font-dm-mono text-[12px] font-medium tracking-[2.5px] text-[#A3A3A3] uppercase">
                CULTURE
              </span>
              <div className="flex justify-between items-center w-full">
                <ul className="flex flex-col gap-4 text-[#A3A3A3] font-dm-sans text-[15px] sm:text-[16px]">
                  {["Flexible work hours", "Hybrid work model", "Open feedback culture", "Flat hierarchy", "Creative autonomy"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#525252] mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="font-dm-mono text-[14px] text-[#525252] pr-4 select-none">02</span>
              </div>
            </div>

            {/* Column 3: REWARDS */}
            <div className="flex flex-col gap-8 pt-8 md:pt-0 md:pl-12">
              <span className="font-dm-mono text-[12px] font-medium tracking-[2.5px] text-[#A3A3A3] uppercase">
                REWARDS
              </span>
              <div className="flex justify-between items-center w-full">
                <ul className="flex flex-col gap-4 text-[#A3A3A3] font-dm-sans text-[15px] sm:text-[16px]">
                  {["Competitive salary", "Health insurance", "Performance bonuses", "Stock options", "Wellness programs"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#525252] mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="font-dm-mono text-[14px] text-[#525252] pr-4 select-none">03</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Similar Open Roles Section ──────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 w-full py-[80px]">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="w-full flex flex-col gap-10"
        >
          {/* Header Row */}
          <div className="flex justify-between items-end w-full">
            <h2 className="font-dm-sans text-[28px] sm:text-[32px] font-normal leading-[1.2] text-[#171717]">
              Similar Open Roles
            </h2>
            <Link 
              href="/careers" 
              className="font-dm-sans text-[12px] font-semibold tracking-wider text-[#171717] hover:underline flex items-center gap-2 group/all"
            >
              VIEW ALL
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform group-hover/all:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {ALL_JOBS.filter(j => j.id !== job.id)
              .slice(0, 3)
              .map((simJob) => {
                const getDisplayLocation = (loc: string) => {
                  const parts = loc.split(" | ");
                  if (parts.length > 1) {
                    const city = parts[0].trim();
                    const mode = parts[1].trim();
                    if (city === "Madurai") return "Madurai";
                    return mode;
                  }
                  return loc;
                };

                return (
                  <div 
                    key={simJob.id}
                    className="border border-[#E5E5E5] bg-[#FFF] p-8 sm:p-10 flex flex-col justify-between items-start min-h-[260px] group transition-all hover:shadow-md"
                  >
                    <div className="flex flex-col items-start w-full">
                      <h3 className="font-dm-sans text-[20px] font-semibold text-[#171717] mb-6">
                        {simJob.title}
                      </h3>
                      
                      <div className="flex flex-col font-dm-sans text-[14px] text-[#737373] gap-1">
                        <span>{simJob.type}</span>
                        <span>{getDisplayLocation(simJob.location)}</span>
                      </div>
                    </div>

                    <Link 
                      href={`/careers/${slugify(simJob.title)}`}
                      className="font-dm-sans text-[12px] font-semibold tracking-wider text-[#171717] mt-8 flex items-center gap-2 group-hover:text-black transition-colors"
                    >
                      VIEW POSITION
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                );
              })}
          </div>
        </motion.div>
      </section>

      {/* ── Closing CTA Section ────────────────────────────── */}
      <section className="w-full bg-[#FFF] border-t border-[#F0F0F0] relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-[120px] w-full py-16 xl:py-0 xl:pt-[74px] xl:pb-[73px] flex flex-col lg:flex-row items-center justify-between relative xl:min-h-[672px] gap-12 lg:gap-8">
          {/* Left Column: Content */}
          <div className="flex-1 flex flex-col items-start z-10">
            <h2 
              className="font-dm-sans text-[36px] sm:text-[48px] md:text-[64px] font-light leading-normal text-[#000] mb-6 w-full xl:w-[529px]"
              style={{ letterSpacing: "-2.16px" }}
            >
              Ready to build meaningful digital experiences?
            </h2>
            <p className="font-dm-sans text-[16px] sm:text-[18px] leading-[1.6] text-[#525252] mb-10">
              Join a team that values curiosity, craft, and impact.
            </p>
            <Link 
              href="/careers" 
              className="bg-[#000] text-[#FFF] px-8 py-4 font-dm-sans text-[15px] font-medium tracking-wide hover:bg-neutral-800 transition-colors select-none inline-block text-center cursor-pointer"
            >
              APPLY NOW
            </Link>
          </div>

          {/* Right Column: Grayscale Image */}
          <div className="w-full max-w-[515px] xl:max-w-none xl:absolute xl:right-[120px] xl:bottom-[73px] xl:w-[515px] xl:h-[525px] aspect-[103/105] shrink-0 overflow-hidden z-0">
            <div className="relative w-full h-full">
              <Image 
                src="/images/image 161.png" 
                alt="Tectra team member smiling" 
                fill 
                className="object-cover grayscale"
                sizes="(max-width: 1280px) 100vw, 515px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
