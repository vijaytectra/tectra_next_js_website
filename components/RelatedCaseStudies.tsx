"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
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

export default function RelatedCaseStudies() {
  return (
    <section className="w-full bg-White flex flex-col justify-center items-start self-stretch px-6 py-8 sm:py-16 sm:px-12 md:px-16 lg:px-20 xl:px-28 md:pt-[40px] md:pb-[100px] border-t border-color-neutral-200">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start">
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
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="hidden sm:block w-full sm:w-auto">
            <Link
              href="/#casestudies"
              className="group relative inline-flex justify-center items-center gap-[12px] rounded-none border-[0.8px] border-[var(--color-neutral-300,#D6D6D6)] bg-transparent px-[32px] py-[16px] font-dm-sans text-[16px] font-medium leading-[1.3] text-[#000] overflow-hidden transition-colors duration-[400ms] ease-out hover:border-[#111] hover:text-[#fff] shrink-0 w-full sm:w-auto sm:mr-8"
            >
              <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#111] transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"></span>
              <span className="relative z-10">View All Case Studies</span>
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
            className="flex flex-col gap-6 group cursor-pointer w-full"
            variants={cardVariant}
          >
            <div className="relative w-full aspect-[572/267] overflow-hidden bg-color-neutral-100">
              <Image
                src="/logo/Frame 1984080205.png"
                alt="AVMC Website"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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
            className="flex flex-col gap-6 group cursor-pointer w-full"
            variants={cardVariant}
          >
            <div className="relative w-full aspect-[572/267] overflow-hidden bg-color-neutral-100">
              <Image
                src="/logo/Frame 1984080271.png"
                alt="Lead 101"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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

        {/* Mobile-only View All Case Studies Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full sm:hidden mt-8">
          <Link
            href="/#casestudies"
            className="group relative flex justify-center items-center gap-[12px] rounded-none border-[0.8px] border-[var(--color-neutral-300,#D6D6D6)] bg-transparent px-[32px] py-[16px] font-dm-sans text-[16px] font-medium leading-[1.3] text-[#000] overflow-hidden transition-colors duration-[400ms] ease-out hover:border-[#111] hover:text-[#fff] shrink-0 w-full"
          >
            <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-[#111] transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"></span>
            <span className="relative z-10">View All Case Studies</span>
            <span className="relative z-10 inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[5px] group-hover:-rotate-45">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
