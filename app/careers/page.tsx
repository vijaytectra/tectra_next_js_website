"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import OpenRoles from "@/components/OpenRoles";

export default function CareersPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#FFF] text-Black flex flex-col overflow-x-hidden">
      
      {/* ── Navbar ─────────────────────────────────────────── */}
      <div className="w-full px-6 py-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">
        <Navbar tone="dark" className="w-full" />
      </div>

      {/* ── Main Content Section ───────────────────────────── */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 pb-[100px] pt-[26px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-[60px] xl:gap-[120px]">
          {/* Left Column (Copy) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[45%] xl:w-1/2 flex flex-col"
          >
            {/* Overline */}
            <div className="border-t-[1px] border-[#A3A3A3] pt-[4px] mb-6 w-fit pr-4 mt-4 lg:mt-0">
              <span className="font-dm-mono text-[14px] font-normal tracking-[3px] text-[#525252] uppercase leading-none block">
                CAREERS
              </span>
            </div>

            <h1 className="font-dm-sans text-[40px] font-normal leading-normal text-[#171717] self-stretch mb-3 lg:mb-4">
              Build Things that actually matters
            </h1>

            <p className="font-dm-sans text-[20px] font-normal leading-[36px] text-color-neutral-600 mb-6 w-[472px] max-w-full">
              A small, focused team shipping real products for global clients. No politics — just craft, ownership and meaningful work.
            </p>

            <ul className="flex flex-col gap-5 mb-12">
              <li className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-color-neutral-600 shrink-0">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="font-dm-sans text-[18px] font-normal text-color-neutral-600">
                  Remote-friendly across India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-color-neutral-600 shrink-0">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="font-dm-sans text-[18px] font-normal text-color-neutral-600">
                  Full-time & contract roles
                </span>
              </li>
              <li className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-color-neutral-600 shrink-0">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="font-dm-sans text-[18px] font-normal text-color-neutral-600">
                  A global team, a single culture
                </span>
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-6">
              <Link 
                href="/careers" 
                className="flex items-center justify-center h-[48px] px-[24px] py-[12px] gap-[24px] border-[0.375px] border-[#000] bg-[#000] text-White font-dm-sans text-[16px] font-medium hover:bg-neutral-800 transition-colors"
              >
                View Open Roles
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link 
                href="/case-studies" 
                className="flex items-center justify-center h-[48px] px-[24px] py-[12px] gap-[24px] border-[0.375px] border-[#D6D6D6] bg-White text-Black font-dm-sans text-[16px] font-medium hover:bg-neutral-50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>

          {/* Right Column (Image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full max-w-[471px] relative aspect-[50/57] overflow-hidden mx-auto lg:mx-0"
          >
            <Image 
              src="/images/image 189.png" 
              alt="Team working together" 
              fill 
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </main>

      {/* ── Life at Tectra Section ─────────────────────────── */}
      <section className="w-full bg-Black pt-[100px] pb-0">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12 mb-10 md:mb-16">
            <h2 className="font-dm-sans text-[32px] md:text-[48px] font-light leading-normal text-color-neutral-0 shrink-0">
              Life at Tectra
            </h2>
            <p className="font-dm-sans text-[20px] font-normal leading-[36px] text-color-neutral-300 w-[629px] max-w-full translate-x-2 md:translate-x-3 lg:translate-x-4">
              Join a culture that values innovation, growth, and teamwork while empowering you to do your best work every day.
            </p>
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative"
          >
            <Image 
              src="/images/lifeattectra.png" 
              alt="Life at Tectra" 
              width={1440}
              height={810}
              className="w-full h-auto"
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Studio Not Factory Section ────────────────────── */}
      <section className="w-full bg-Black pt-[80px] pb-[80px] text-White">
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

      {/* ── Candidate's Journey Section ────────────────────── */}
      <section className="w-full bg-[#F4F4F5] py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 md:mb-20">
            <h2 className="font-dm-sans text-[32px] md:text-[40px] lg:text-[48px] font-light text-[#171717]">
              Candidate&apos;s Journey
            </h2>
            <Link 
              href="/careers" 
              className="flex items-center justify-center h-[48px] px-[24px] py-[12px] gap-[12px] bg-[#000] text-White font-dm-sans text-[16px] font-medium hover:bg-neutral-800 transition-colors"
            >
              View Open Roles
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* Journey Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-x-12 md:gap-y-12 lg:gap-x-[56px] lg:gap-y-0">
            {/* Card 01 */}
            <div className="relative group cursor-pointer h-full">
              <div className="bg-transparent group-hover:bg-[#000] text-[#171717] group-hover:text-White p-4 flex flex-col justify-between items-start flex-1 self-stretch h-[317px] transition-colors duration-300">
                <div className="font-dm-sans text-[64px] lg:text-[80px] font-light leading-none tracking-tight transition-colors duration-300">01</div>
                <div className="mt-16">
                  <h3 className="font-dm-sans text-[20px] font-medium leading-[130%] mb-3 transition-colors duration-300">Apply</h3>
                  <p className="font-dm-sans text-[14px] font-normal leading-[130%] text-[#525252] group-hover:text-[#A3A3A3] transition-colors duration-300">
                    Apply for your dream job at Tectra Technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 02 */}
            <div className="relative group cursor-pointer h-full">
              <div className="block md:hidden absolute -top-4 left-0 w-full h-[1px] bg-[#D6D6D6]"></div>
              <div className="hidden md:block absolute -left-6 lg:-left-[28px] top-1/2 -translate-y-1/2 w-[1px] h-[317px] bg-[#D6D6D6]"></div>
              <div className="bg-transparent group-hover:bg-[#000] text-[#171717] group-hover:text-White p-4 flex flex-col justify-between items-start flex-1 self-stretch h-[317px] transition-colors duration-300">
                <div className="font-dm-sans text-[64px] lg:text-[80px] font-light leading-none tracking-tight transition-colors duration-300">02</div>
                <div className="mt-16">
                  <h3 className="font-dm-sans text-[20px] font-medium leading-[130%] mb-3 transition-colors duration-300">Interview with Us</h3>
                  <p className="font-dm-sans text-[14px] font-normal leading-[130%] text-[#525252] group-hover:text-[#A3A3A3] transition-colors duration-300">
                    Participate in an online technical interview and general interview.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 03 */}
            <div className="relative group cursor-pointer h-full">
              <div className="block md:hidden absolute -top-4 left-0 w-full h-[1px] bg-[#D6D6D6]"></div>
              <div className="hidden md:block lg:hidden absolute -top-6 left-0 w-full h-[1px] bg-[#D6D6D6]"></div>
              <div className="hidden lg:block absolute -left-[28px] top-1/2 -translate-y-1/2 w-[1px] h-[317px] bg-[#D6D6D6]"></div>
              <div className="bg-transparent group-hover:bg-[#000] text-[#171717] group-hover:text-White p-4 flex flex-col justify-between items-start flex-1 self-stretch h-[317px] transition-colors duration-300">
                <div className="font-dm-sans text-[64px] lg:text-[80px] font-light leading-none tracking-tight transition-colors duration-300">03</div>
                <div className="mt-16">
                  <h3 className="font-dm-sans text-[20px] font-medium leading-[130%] mb-3 transition-colors duration-300">Receive an Offer Letter</h3>
                  <p className="font-dm-sans text-[14px] font-normal leading-[130%] text-[#525252] group-hover:text-[#A3A3A3] transition-colors duration-300">
                    If you pass the interviews receive an offer
                  </p>
                </div>
              </div>
            </div>

            {/* Card 04 */}
            <div className="relative group cursor-pointer h-full">
              <div className="block md:hidden absolute -top-4 left-0 w-full h-[1px] bg-[#D6D6D6]"></div>
              <div className="hidden md:block lg:hidden absolute -top-6 left-0 w-full h-[1px] bg-[#D6D6D6]"></div>
              <div className="hidden md:block absolute -left-6 lg:-left-[28px] top-1/2 -translate-y-1/2 w-[1px] h-[317px] bg-[#D6D6D6]"></div>
              <div className="bg-transparent group-hover:bg-[#000] text-[#171717] group-hover:text-White p-4 flex flex-col justify-between items-start flex-1 self-stretch h-[317px] transition-colors duration-300">
                <div className="font-dm-sans text-[64px] lg:text-[80px] font-light leading-none tracking-tight transition-colors duration-300">04</div>
                <div className="mt-16">
                  <h3 className="font-dm-sans text-[20px] font-medium leading-[130%] mb-3 transition-colors duration-300">Welcome Aboard</h3>
                  <p className="font-dm-sans text-[14px] font-normal leading-[130%] text-[#525252] group-hover:text-[#A3A3A3] transition-colors duration-300">
                    Accept our offer and join our team, welcome aboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Roles ────────────────────────────────────────────── */}
      <OpenRoles />

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
              href="#open-roles" 
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
