"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "What sets them apart is not just the quality of their product; it is the way they think about your business first. They did not just build what we asked for. They built what we actually needed. Six months later, our platform is faster, our team is more productive, and our revenue has grown by 40%. If you are looking for the best software development company in the USA, look no further than Tectra.",
    name: "James Carter",
    title: "Chief Technology Officer, Meridian Group — Austin, Texas",
    avatar: "/images/james_carter.png",
    platform: "google",
  },
  {
    quote: "Tectra delivered a seamless mobile experience for our clients. They brought a deep understanding of fintech and compliance, and delivered the first version ahead of schedule. Their attention to design details and rigorous QA made a massive difference to our launch.",
    name: "Sarah Jenkins",
    title: "Head of Digital Products, Axiom Capital — San Francisco, California",
    avatar: "/images/sarah_jenkins.png",
    platform: "linkedin",
  },
  {
    quote: "Tectra Technologies delivered exactly what we needed. Their team was responsive, professional, and focused on building a solution that matched our business goals. The post-launch support and optimization services have been second to none.",
    name: "Monish",
    title: "Operations Head, VMLS — Chennai, India",
    avatar: "/images/monish_vmls.png",
    platform: "google",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 30 : -30,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = page;
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < TESTIMONIALS.length - 1;

  const paginate = (newDirection: number) => {
    const nextIndex = currentIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < TESTIMONIALS.length) {
      setPage([nextIndex, newDirection]);
    }
  };

  const current = TESTIMONIALS[currentIndex];

  const renderPlatformLogo = (platform: string) => {
    if (platform === "google") {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="select-none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      );
    }
    if (platform === "linkedin") {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg" className="select-none">
          <path d="M20.447 20.452H16.89V14.881C16.89 13.553 16.865 11.848 15.044 11.848C13.201 11.848 12.918 13.288 12.918 14.786V20.452H9.362V9H12.778V10.565H12.825C13.301 9.664 14.464 8.718 16.182 8.718C19.774 8.718 20.447 11.08 20.447 14.166V20.452ZM5.337 7.433C4.195 7.433 3.273 6.505 3.273 5.367C3.273 4.227 4.195 3.3 5.337 3.3C6.476 3.3 7.403 4.227 7.403 5.367C7.403 6.505 6.476 7.433 5.337 7.433ZM7.118 20.452H3.553V9H7.118V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.225 0Z" />
        </svg>
      );
    }
    return null;
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-white pt-16 pb-16 md:pt-20 md:pb-20 relative z-10 overflow-hidden"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_120px] gap-8 items-start">
          
          {/* Left Column: Label */}
          <div>
            <span
              style={{
                color: "#2B2B2B",
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontSize: "11.52px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "17.28px",
                letterSpacing: "2.995px",
                textTransform: "uppercase",
              }}
              className="block"
            >
              14 &nbsp; TESTIMONIALS
            </span>
          </div>

          {/* Middle Column: Slide Content */}
          <div className="relative min-h-[300px] md:min-h-[250px] lg:min-h-[200px] flex flex-col justify-start items-start w-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full flex flex-col gap-6"
              >
                {/* Platform Logo */}
                <div>
                  {renderPlatformLogo(current.platform)}
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    width: "692px",
                    maxWidth: "100%",
                    color: "#0F0F12",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "27px",
                    letterSpacing: "-0.768px",
                  }}
                >
                  {current.quote}
                </p>

                {/* Reviewer Bio */}
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-[54px] h-[54px] rounded-sm relative overflow-hidden bg-neutral-100 border border-neutral-200 shrink-0 select-none">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      sizes="54px"
                      className="object-cover grayscale contrast-125 brightness-95"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span
                      style={{
                        color: "#111113",
                        fontFamily: "Aspekta, system-ui, sans-serif",
                        fontSize: "15px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "22px",
                      }}
                    >
                      {current.name}
                    </span>
                    <span
                      style={{
                        color: "#6F6F76",
                        fontFamily: "Aspekta, system-ui, sans-serif",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "19.5px",
                      }}
                    >
                      {current.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Controls */}
          <div className="flex flex-col items-center lg:items-end gap-4 lg:self-start lg:justify-self-end w-full lg:w-auto">
            <div className="flex flex-col items-center gap-3.5">
              {/* Progress Lines */}
              <div className="flex items-center gap-1.5 select-none">
                {TESTIMONIALS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[1.5px] w-6 transition-all duration-300 ${
                      currentIndex === i ? "bg-[#525252]" : "bg-[#EAEAEA]"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(-1)}
                  className={`w-10 h-10 border hover:bg-neutral-50 flex items-center justify-center transition-all cursor-pointer active:scale-[0.97] ${
                    canScrollLeft ? "border-neutral-900 text-neutral-900" : "border-neutral-200 text-neutral-300 pointer-events-none opacity-40"
                  }`}
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={16} strokeWidth={1.5} className={canScrollLeft ? "text-[#111113]" : "text-[#A3A3A3]"} />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className={`w-10 h-10 border hover:bg-neutral-50 flex items-center justify-center transition-all cursor-pointer active:scale-[0.97] ${
                    canScrollRight ? "border-neutral-900 text-neutral-900" : "border-neutral-200 text-neutral-300 pointer-events-none opacity-40"
                  }`}
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={16} strokeWidth={1.5} className={canScrollRight ? "text-[#111113]" : "text-[#A3A3A3]"} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
