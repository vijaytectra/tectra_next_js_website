"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import ContactBanner from "@/components/ContactBanner";
import LocationsSection from "@/components/LocationsSection";
import ClientReviewsSection from "@/components/ClientReviewsSection";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#0A0A0A] text-White">
      <div className="w-full px-6 py-4 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">
        <Navbar tone="light" className="w-full" />
      </div>

      <section className="flex flex-col px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto w-full pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3 mb-4"
            >
              <div className="h-[1px] w-[140px] bg-[#525252]"></div>
              <span className="font-dm-mono text-[16px] font-normal tracking-[3.2px] leading-[1.3] text-[#D6D6D6] uppercase">
                LET&apos;S BUILD
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="self-stretch font-dm-sans text-[48px] font-light leading-normal text-[#FAFAFA] mb-8"
            >
              Need a Reliable<br />Technology Partner ?
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-dm-sans text-[20px] font-normal leading-[36px] text-[#ADADAD] max-w-[459px] mb-10 lg:mb-20"
            >
              Get a Free Consultation and Discover how we can accelerate your web, mobile, cloud and digital transformation innovatives
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex w-full items-start justify-between sm:justify-start sm:gap-12 max-w-[459px]"
            >
              <div className="flex flex-col gap-2 sm:gap-4">
                <span className="font-dm-sans text-[32px] sm:text-[40px] font-light leading-none text-White whitespace-nowrap">50 +</span>
                <span className="font-dm-sans text-[12px] sm:text-[13px] font-normal text-[#A3A3A3] max-w-[70px] sm:max-w-none">Projects Delivered</span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-4">
                <span className="font-dm-sans text-[32px] sm:text-[40px] font-light leading-none text-White whitespace-nowrap">10 +</span>
                <span className="font-dm-sans text-[12px] sm:text-[13px] font-normal text-[#A3A3A3] max-w-[70px] sm:max-w-none">Years of Experience</span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-4">
                <span className="font-dm-sans text-[32px] sm:text-[40px] font-light leading-none text-White whitespace-nowrap">24h</span>
                <span className="font-dm-sans text-[12px] sm:text-[13px] font-normal text-[#A3A3A3] max-w-[80px] sm:max-w-none">Avg. Response Time</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative flex justify-end"
          >
            <div className="relative w-full max-w-[446px] aspect-[109/120] bg-[#1A1A1A]">
              <Image
                src="/images/ChatGPT Image May 28, 2026, 11_38_35 AM 2.png"
                alt="Contact Support"
                fill
                className="object-cover"
                unoptimized
              />

            </div>
          </motion.div>

        </div>
      </section>

      <ContactFormSection />

      <ContactBanner />

      <LocationsSection />

      <ClientReviewsSection />

      <Footer />
    </main>
  );
}
