"use client";

import { motion } from "framer-motion";
import OutlineButton from "./ui/OutlineButton";
import SectionImage from "./ui/SectionImage";
import { images } from "@/lib/images";

const ROLES = [
  "Full Stack Developer",
  "UI/UX Designer",
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
          <div className="flex flex-col justify-start gap-8 sm:min-h-[380px] sm:justify-between sm:gap-10 lg:min-h-[600px]">
            <div className="flex flex-col gap-6 sm:gap-8">
              <h2
                id="careers-heading"
                className="font-dm-sans text-3xl font-normal leading-tight text-color-neutral-900 sm:text-4xl sm:leading-tight lg:text-6xl"
              >
                Join Our
                <br />
                Team Today
              </h2>
              <p className="flex w-full max-w-[478px] flex-col justify-center font-dm-sans text-lg font-normal leading-relaxed text-color-neutral-500 sm:text-[24px] sm:leading-[36px] lg:h-[101px] lg:w-[478px]">
                At Tectra Technologies, we build digital solutions that help
                businesses scale, innovate, and grow faster.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="hidden lg:block">
                <OutlineButton
                  href="#careers"
                  variant="solid-black"
                  className="h-14 max-w-full"
                  circleOffset={{ left: "-48px", top: "-157px" }}
                >
                  Explore Opportunities
                </OutlineButton>
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {ROLES.map((role, index) => (
                  <span key={role} className="flex items-center gap-2">
                    <span className="whitespace-nowrap font-dm-mono text-xs font-normal leading-4 tracking-wide text-color-neutral-500">
                      {role}
                    </span>
                    {index < ROLES.length - 1 ? (
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-color-neutral-300"
                        aria-hidden
                      />
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="relative min-h-[260px] w-full sm:min-h-[400px] lg:min-h-[600px]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionImage
              src={images.joinOurTeam}
              alt="Tectra team collaborating in the office"
              className="h-full min-h-[260px] w-full sm:min-h-[400px] lg:min-h-[600px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Mobile-only bottom button */}
        <div className="mt-8 flex justify-start lg:hidden">
          <OutlineButton
            href="#careers"
            variant="solid-black"
            className="h-14 w-full"
            circleOffset={{ left: "-48px", top: "-157px" }}
          >
            Explore Opportunities
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
