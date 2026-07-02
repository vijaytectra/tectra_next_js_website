"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TEAM = [
  {
    role: "CEO & CO-FOUNDER — AT TECTRA®",
    name: "Karthik Rajan",
    bio: "10+ years in enterprise software and digital transformation.",
    image: "/images/team_karthik.png",
  },
  {
    role: "CTO — AT TECTRA®",
    name: "Priya Sundar",
    bio: "Cloud-native architecture across healthcare and fintech.",
    image: "/images/team_priya.png",
  },
  {
    role: "HEAD OF DESIGN — AT TECTRA®",
    name: "Vikram Nair",
    bio: "Design systems and product UX for global enterprise clients.",
    image: "/images/team_vikram.png",
  },
  {
    role: "HEAD OF DELIVERY — AT TECTRA®",
    name: "Lakshmi Prasad",
    bio: "Agile delivery across 8 time zones and distributed teams.",
    image: "/images/team_lakshmi.png",
  },
];

export default function TheTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollButtons);
      checkScrollButtons();
      window.addEventListener("resize", checkScrollButtons);
      const timer = setTimeout(checkScrollButtons, 500);
      return () => {
        el.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
        clearTimeout(timer);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section
      id="team"
      className="w-full bg-white pt-16 pb-14 md:pt-20 md:pb-[90px] relative z-10 overflow-hidden"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      {/* Bottom full-width gray banner decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[56px] md:h-[90px] bg-[#F5F5F5] z-0" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0 relative z-10">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex-1">
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
              className="block mb-6"
            >
              15 &nbsp; THE TEAM
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] leading-[38px] sm:leading-[46px] lg:leading-[52.8px]"
              style={{
                color: "#111",
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontStyle: "normal",
                fontWeight: 300,
                letterSpacing: "-1.1px",
              }}
            >
              The faces behind the projects.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="hidden md:flex items-center gap-2 select-none shrink-0 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              className={`w-10 h-10 border hover:bg-neutral-50 flex items-center justify-center transition-all cursor-pointer active:scale-[0.97] ${
                canScrollLeft ? "border-neutral-900 text-neutral-900" : "border-neutral-200 text-neutral-300 pointer-events-none opacity-40"
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft size={16} strokeWidth={1.5} className={canScrollLeft ? "text-[#111113]" : "text-[#A3A3A3]"} />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`w-10 h-10 border hover:bg-neutral-50 flex items-center justify-center transition-all cursor-pointer active:scale-[0.97] ${
                canScrollRight ? "border-neutral-900 text-neutral-900" : "border-neutral-200 text-neutral-300 pointer-events-none opacity-40"
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight size={16} strokeWidth={1.5} className={canScrollRight ? "text-[#111113]" : "text-[#A3A3A3]"} />
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
        >
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="w-[280px] shrink-0 snap-start flex flex-col justify-between"
            >
              {/* Text Information (Top) */}
              <div className="flex flex-col text-left mb-6 min-h-[110px] justify-start">
                <span
                  style={{
                    color: "#A3A3A3",
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    fontSize: "10.5px",
                    fontWeight: 400,
                    letterSpacing: "0.84px",
                    textTransform: "uppercase",
                  }}
                  className="block mb-2"
                >
                  {member.role}
                </span>
                <h3
                  style={{
                    color: "#111",
                    fontFamily: '"Funnel Display", system-ui, sans-serif',
                    fontSize: "22px",
                    fontWeight: 300,
                    lineHeight: "28px",
                  }}
                  className="mb-3"
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    color: "#6F6F76",
                    fontFamily: "Aspekta, system-ui, sans-serif",
                    fontSize: "13.5px",
                    fontWeight: 400,
                    lineHeight: "20.25px",
                  }}
                >
                  {member.bio}
                </p>
              </div>

              {/* Photo Area (Bottom, aligned with bottom banner) */}
              <div className="relative w-full h-[320px] bg-neutral-100 overflow-hidden border border-neutral-200/40 rounded-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="280px"
                  className="object-cover grayscale contrast-125 brightness-95 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls (Bottom) */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-8 select-none relative z-10">
          <button
            onClick={() => scroll("left")}
            className={`w-12 h-12 border bg-white hover:bg-neutral-50 flex items-center justify-center transition-all cursor-pointer active:scale-[0.97] ${
              canScrollLeft ? "border-neutral-900 text-neutral-900" : "border-neutral-200 text-neutral-300 pointer-events-none opacity-40"
            }`}
            aria-label="Scroll left"
          >
            <ArrowLeft size={18} strokeWidth={1.5} className={canScrollLeft ? "text-[#111113]" : "text-[#A3A3A3]"} />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`w-12 h-12 border bg-white hover:bg-neutral-50 flex items-center justify-center transition-all cursor-pointer active:scale-[0.97] ${
              canScrollRight ? "border-neutral-900 text-neutral-900" : "border-neutral-200 text-neutral-300 pointer-events-none opacity-40"
            }`}
            aria-label="Scroll right"
          >
            <ArrowRight size={18} strokeWidth={1.5} className={canScrollRight ? "text-[#111113]" : "text-[#A3A3A3]"} />
          </button>
        </div>

      </div>
    </section>
  );
}
