"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "./ui/SectionLabel";
import { images } from "@/lib/images";

const CLIENT_LOGO_COUNT = 11;

export default function ClientLogos() {
  return (
    <section
      id="clients"
      className="section-dark-surface w-full overflow-hidden py-16 sm:py-24"
      aria-labelledby="clients-heading"
    >
      <div className="section-shell flex flex-col gap-12 lg:gap-16">
        <div className="flex max-w-[607px] flex-col gap-3">
          <SectionLabel>OUR CLIENTS</SectionLabel>
          <h2
            id="clients-heading"
            className="font-dm-sans text-2xl font-normal leading-10 text-color-neutral-50 sm:text-3xl"
          >
            We Value Our Clients
          </h2>
        </div>

        <div className="grid grid-cols-2 border-white/5 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: CLIENT_LOGO_COUNT }, (_, index) => {
            const logoIndex = index + 1;
            return (
              <motion.div
                key={logoIndex}
                className="flex h-36 items-center justify-center border border-white/5 p-4 sm:h-48"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Image
                  src={images.clientLogo(logoIndex)}
                  alt={`Client logo ${logoIndex}`}
                  width={224}
                  height={80}
                  className="max-h-14 w-auto max-w-[85%] object-contain sm:max-h-16"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
