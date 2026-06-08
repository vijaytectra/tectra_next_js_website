"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#0A0A0A] flex flex-col justify-center items-start self-stretch px-6 pt-8 pb-10 sm:px-12 md:px-16 lg:px-20 xl:px-28 md:pt-[40px] md:pb-[100px] text-White">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-12">
        {/* Header */}
        <motion.div
          className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          <h2 className="font-dm-sans text-[32px] font-normal leading-[40px] text-White">
            Why Choose us ?
          </h2>
          <p className="font-dm-sans text-[16px] font-normal leading-relaxed text-[#A3A3A3] md:max-w-[500px]">
            Tectra builds scalable, high-performance websites focused on seamless user experiences and business growth.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* White Card (Left) */}
          <motion.div
            className="lg:col-span-1 bg-White flex flex-col justify-between p-8 md:p-10 min-h-[320px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-dm-sans text-[22px] font-medium text-[#171717]">
                Your Trusted Partner
              </h3>
              <p className="font-dm-sans text-[15px] font-normal leading-relaxed text-[#737373]">
                We work closely with businesses to design and develop digital solutions that strengthen brands, improve efficiency, and drive growth.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-12">
              <h4 className="font-dm-sans text-[15px] font-bold text-[#171717]">
                Trusted by 16+ Businesses
              </h4>
              <p className="font-dm-sans text-[14px] font-normal italic leading-relaxed text-[#A3A3A3]">
                &quot;Tectra delivers scalable digital experiences built for growth and performance.&quot;
              </p>
            </div>
          </motion.div>

          {/* Dark Cards (Right 2x2 Grid) */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {[
              { value: "16+", label: "Active Clients" },
              { value: "10+", label: "Years of Experience" },
              { value: "100 %", label: "Success Rate" },
              { value: "50+", label: "Projects" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-[#141414] border border-[#222] flex flex-col justify-between p-5 sm:p-8 min-h-[140px] sm:min-h-[160px]"
                variants={cardVariant}
              >
                <h3 className="font-dm-sans text-[28px] sm:text-[36px] font-normal text-White mb-4 sm:mb-6">
                  {stat.value}
                </h3>
                <p className="font-dm-sans text-[13px] sm:text-[14px] font-normal text-[#A3A3A3]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Button */}
        <motion.div
          className="w-full flex justify-end mt-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-[12px] rounded-none bg-White px-[32px] py-[16px] font-dm-sans text-[16px] font-medium leading-[1.3] text-[#000] overflow-hidden transition-colors duration-[400ms] ease-out hover:bg-[#E5E5E5]"
            >
              <span className="relative z-10">Talk to Us</span>
              <span className="relative z-10 inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[5px] group-hover:-rotate-45">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
