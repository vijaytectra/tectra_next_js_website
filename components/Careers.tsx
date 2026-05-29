"use client";

import { motion } from "framer-motion";
import OutlineButton from "./ui/OutlineButton";
import SectionImage from "./ui/SectionImage";
import { images } from "@/lib/images";

const ROLES = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Cloud Engineer",
  "Business Analyst",
  "Business Development",
  "Flutter Developer",
] as const;

export default function Careers() {
  return (
    <section
      id="careers"
      className="section-light-surface w-full overflow-hidden py-16 sm:py-24"
      aria-labelledby="careers-heading"
    >
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-h-[400px] flex-col justify-between gap-10 lg:min-h-[600px]">
            <div className="flex flex-col gap-6 sm:gap-8">
              <h2
                id="careers-heading"
                className="font-dm-sans text-4xl font-normal leading-tight text-color-neutral-900 sm:text-5xl lg:text-6xl"
              >
                Join Our
                <br />
                Team Today
              </h2>
              <p className="max-w-[478px] font-dm-sans text-lg font-normal leading-9 text-color-neutral-500 sm:text-xl sm:leading-9 lg:text-2xl">
                At Tectra Technologies, we build digital solutions that help
                businesses scale, innovate, and grow faster.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <OutlineButton
                href="#careers"
                variant="solid-black"
                className="h-14 max-w-full"
                circleOffset={{ left: "-48px", top: "-157px" }}
              >
                Explore Opportunities
              </OutlineButton>

              <div className="relative overflow-hidden">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {ROLES.map((role, index) => (
                    <span key={role} className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-dm-mono text-xs font-normal leading-4 tracking-wide text-color-neutral-500">
                        {role}
                      </span>
                      {index < ROLES.length - 1 ? (
                        <span
                          className="h-2 w-2 shrink-0 rounded-full bg-color-neutral-300"
                          aria-hidden
                        />
                      ) : null}
                    </span>
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-color-neutral-50 sm:w-24"
                  aria-hidden
                />
              </div>
            </div>
          </div>

          <motion.div
            className="relative min-h-[320px] w-full sm:min-h-[400px] lg:min-h-[600px]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionImage
              src={images.joinOurTeam}
              alt="Tectra team collaborating in the office"
              className="h-full min-h-[320px] w-full sm:min-h-[400px] lg:min-h-[600px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
