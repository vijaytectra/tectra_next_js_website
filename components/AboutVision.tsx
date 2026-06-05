"use client";

import { motion } from "framer-motion";
import CountUp from "./ui/CountUp";
import OutlineButton from "./ui/OutlineButton";
import SectionImage from "./ui/SectionImage";
import SectionLabel from "./ui/SectionLabel";
import { images } from "@/lib/images";

const STATS = [
  { value: "16+", label: "Clients" },
  { value: "50+", label: "Projects" },
  { value: "100%", label: "Success Rate" },
] as const;

export default function AboutVision() {
  return (
    <section
      id="about"
      className="section-dark-surface w-full overflow-hidden py-16 sm:py-20"
      aria-labelledby="about-vision-heading"
    >
      <div className="section-shell flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
            <div className="flex max-w-[607px] flex-col gap-3">
              <SectionLabel>ABOUT US</SectionLabel>
              <h2
                id="about-vision-heading"
                className="font-dm-sans text-2xl font-normal leading-10 text-color-neutral-50 sm:text-3xl"
              >
                Our Vision
              </h2>
            </div>
          <div className="hidden lg:block">
            <OutlineButton
              href="/about"
              variant="dark-muted"
              circleOffset={{ left: "-69px", top: "55px" }}
            >
              About us
            </OutlineButton>
          </div>
          </div>
          <p className="flex-1 font-dm-sans text-lg font-normal leading-[1.6] text-color-neutral-400 sm:text-xl sm:leading-[1.7] lg:text-[24px] lg:leading-[36px]">
             Tectra began with a vision to turn possibilities into meaningful digital experiences through innovation, precision, and purpose.
          </p>
        </div>

        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionImage
            src={images.ourVision}
            alt="Tectra team and workspace representing our vision"
            className="h-[280px] w-full max-w-[1200px] mx-auto sm:h-[380px] lg:h-[530px]"
            sizes="(max-width: 1440px) 100vw, 1200px"
          />
        </motion.div>

        <div className="flex flex-nowrap items-center justify-between w-full gap-2 sm:justify-center sm:gap-10 lg:gap-16">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-2 sm:gap-10 lg:gap-16 flex-1 sm:flex-none">
              {index > 0 ? (
                <div
                  aria-hidden
                  className="hidden w-px h-12 bg-color-neutral-300 sm:block sm:h-20"
                />
              ) : null}
              <div className="flex flex-col items-center gap-1 sm:gap-2 flex-1 sm:flex-none">
                <CountUp
                  value={stat.value}
                  className="text-center font-urbanist text-[28px] font-semibold leading-tight text-color-neutral-200 sm:text-4xl sm:leading-[62.4px] lg:text-5xl"
                />
                <span className="text-center font-dm-sans text-xs font-normal leading-tight text-color-neutral-500 sm:text-lg lg:text-xl whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only bottom button */}
        <div className="flex justify-center lg:hidden">
          <OutlineButton
            href="/about"
            variant="dark-muted"
            circleOffset={{ left: "-69px", top: "55px" }}
          >
            About us
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
