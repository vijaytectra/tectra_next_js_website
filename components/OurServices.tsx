"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OutlineButton from "./ui/OutlineButton";
import SectionLabel from "./ui/SectionLabel";
import { serviceIcons } from "@/lib/images";

const SERVICES = [
  {
    title: "Software Solutions",
    description: "Software solutions built for scalability and growth.",
    uppercaseOnHover: true,
    icon: serviceIcons.software,
    href: "/services/software-solutions",
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Growth-focused marketing strategies built for reach and engagement.",
    uppercaseOnHover: false,
    icon: serviceIcons.marketing,
    href: "/services/digital-marketing",
  },
  {
    title: "BRANDING",
    description:
      "Distinct brand identities crafted for recognition and trust.",
    uppercaseOnHover: false,
    icon: serviceIcons.branding,
    href: "/services/branding",
  },
  {
    title: "EXPERIENCE DESIGNING",
    description:
      "Intuitive digital experiences designed for usability and impact.",
    uppercaseOnHover: false,
    icon: serviceIcons.experience,
    href: "/services/experience-designing",
  },
] as const;

export default function OurServices() {
  return (
    <section
      id="services"
      className="section-light-surface w-full overflow-hidden py-16 sm:py-24"
      aria-labelledby="services-heading"
    >
      <div className="section-shell flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex max-w-[607px] flex-col gap-3">
            <SectionLabel theme="light">OUR SERVICES</SectionLabel>
            <h2
              id="services-heading"
              className="font-dm-sans text-2xl font-normal leading-10 text-color-neutral-900 sm:text-3xl"
            >
              We create digital solutions that drive growth.
            </h2>
          </div>
          <div className="hidden lg:block">
            <OutlineButton
              href="/services"
              variant="light"
              circleOffset={{ left: "-30px", top: "55px" }}
            >
              Explore All Services
            </OutlineButton>
          </div>
        </div>

        <div className="grid grid-cols-1 border-color-neutral-300 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              className="group flex flex-col gap-8 border border-color-neutral-300 bg-color-neutral-0 p-6 transition-colors duration-700 hover:bg-color-primary-main sm:gap-10 sm:p-8 lg:gap-12 lg:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Image
                src={service.icon}
                alt=""
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10 object-contain transition-[filter] duration-700 group-hover:brightness-0 group-hover:invert"
                aria-hidden
              />
              <div className="flex flex-col gap-3">
                <h3
                  className={`font-dm-mono text-lg font-medium leading-6 text-color-neutral-900 transition-colors duration-700 group-hover:text-color-neutral-50 sm:text-xl ${
                    service.uppercaseOnHover ? "group-hover:uppercase" : ""
                  }`}
                >
                  {service.title}
                </h3>
                <p className="font-dm-sans text-sm font-normal leading-5 text-color-neutral-500 transition-colors duration-700 group-hover:text-color-neutral-400 sm:text-base">
                  {service.description}
                </p>
              </div>
              <div className="relative h-12 w-full sm:w-auto">
                <OutlineButton
                  href={service.href}
                  variant="light"
                  className="absolute inset-0 w-full transition-opacity duration-700 group-hover:pointer-events-none group-hover:opacity-0 sm:w-auto"
                  circleOffset={{ left: "-43px", top: "55px" }}
                >
                  Explore Services
                </OutlineButton>
                <OutlineButton
                  href={service.href}
                  variant="dark"
                  className="absolute inset-0 w-full opacity-0 transition-opacity duration-700 group-hover:opacity-100 sm:w-auto"
                  circleOffset={{ left: "-43px", top: "55px" }}
                >
                  Explore Services
                </OutlineButton>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile-only bottom button */}
        <div className="flex justify-start lg:hidden">
          <OutlineButton
            href="/services"
            variant="light"
            circleOffset={{ left: "-30px", top: "55px" }}
          >
            Explore All Services
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
