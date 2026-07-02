"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const LOCATIONS = [
  {
    title: "Chennai, India (HQ)",
    desc: "80+ engineers working with a 4–6-hour overlap with US time.",
  },
  {
    title: "The United States",
    desc: "Business development and client success operations across the country, ensuring smooth local coordination and support.",
  },
  {
    title: "Kuala Lumpur, Malaysia",
    desc: "Supports APAC clients with local project and support teams.",
  },
];

const ACCREDITATIONS = [
  "ISO 27001:2013",
  "ISO 9001:2015",
  "IAF ACCREDITED",
  "CLUTCH TOP AGENCY",
];

export default function OurGlobalImpact() {
  return (
    <section
      id="global-impact"
      className="w-full bg-white pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">

        {/* Main Content: Left Image Map, Right Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Dark Map Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="lg:col-span-6 flex justify-center lg:justify-start"
          >
            <div
              className="relative w-full max-w-[506px] h-[300px] sm:h-[400px] lg:h-[474px] overflow-hidden"
              style={{
                maxWidth: "100%",
                border: "1px solid #E6E6E4",
                background: "#181818",
                borderRadius: "8px",
              }}
            >
              <Image
                src="/images/image_130.png"
                alt="Our Global Impact map"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 506px"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Section Header & Locations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Section Label */}
            <span
              className="mb-8 block"
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
            >
              18 &nbsp; OUR GLOBAL IMPACT
            </span>

            {/* Location Items */}
            <div className="flex flex-col gap-8">
              {LOCATIONS.map((loc, index) => (
                <div key={index} className="flex flex-col items-start text-left">
                  {/* Small Solid Square Bullet */}
                  <div className="w-3.5 h-3.5 bg-[#111113] mb-3.5" />

                  {/* Location Title */}
                  <h3
                    style={{
                      color: "#111",
                      fontFamily: '"Funnel Display", system-ui, sans-serif',
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "28px",
                    }}
                    className="mb-2"
                  >
                    {loc.title}
                  </h3>

                  {/* Location Description */}
                  <p
                    className="w-full max-w-[420px]"
                    style={{
                      maxWidth: "100%",
                      color: "#111",
                      fontFamily: "Aspekta, system-ui, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "20px",
                    }}
                  >
                    {loc.desc}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* Bottom Accreditation Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 flex flex-col items-center text-center"
        >
          <span
            className="mb-6 block text-center"
            style={{
              width: "280px",
              maxWidth: "100%",
              color: "#7A7A82",
              textAlign: "center",
              fontFamily: "Aspekta, system-ui, sans-serif",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "15px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            TRUST EARNED. NOT JUST CLAIMED
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl justify-center">
            {ACCREDITATIONS.map((acc, idx) => (
              <div
                key={idx}
                className="border border-[#E4E4E4] bg-white py-4 px-4 md:px-6 flex items-center justify-center text-center hover:border-neutral-400 transition-colors duration-200"
                style={{
                  color: "#171717",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16.5px",
                  letterSpacing: "1.1px",
                  textTransform: "uppercase",
                }}
              >
                {acc}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
