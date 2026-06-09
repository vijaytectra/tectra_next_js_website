"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OutlineButton from "./ui/OutlineButton";
import SectionLabel from "./ui/SectionLabel";
import ArrowRight from "./ui/ArrowRight";
import { serviceIcons } from "@/lib/images";

const SERVICES = [
  {
    title: "SOFTWARE SOLUTIONS",
    description: "Software solutions built for scalability and growth.",
    uppercaseOnHover: false,
    icon: serviceIcons.software,
    href: "/services/software-solutions",
    tags: [
      "Web Development",
      "Mobile App Development",
      "Blockchain",
      "Cloud Computing",
      "Cloud Computing",
      "+2",
    ],
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Growth-focused marketing strategies built for reach and engagement.",
    uppercaseOnHover: false,
    icon: serviceIcons.marketing,
    href: "/services/digital-marketing",
    tags: [
      "SEO",
      "Social Media Marketing",
      "Email Marketing and automation",
      "Google Ads",
      "Meta Ads",
      "CRM",
      "+8",
    ],
  },
  {
    title: "BRANDING",
    description:
      "Distinct brand identities crafted for recognition and trust.",
    uppercaseOnHover: false,
    icon: serviceIcons.branding,
    href: "/services/branding",
    tags: [
      "Logo Design",
      "2D/3D Visualisation",
      "Industrial Product Design",
      "Brand Collateral",
      "Graphic Design",
      "Brand Identity",
    ],
  },
  {
    title: "EXPERIENCE DESIGNING",
    description:
      "Intuitive digital experiences designed for usability and impact.",
    uppercaseOnHover: false,
    icon: serviceIcons.experience,
    href: "/services/experience-designing",
    tags: [
      "UI/UX Designing",
      "Mobile Experience Designing",
      "Web Experience Designing",
    ],
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

        <div className="grid grid-cols-1 border-l border-t border-color-neutral-300 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              className="group flex flex-col justify-between border-b border-r border-color-neutral-300 p-10 transition-colors duration-500 bg-color-neutral-0 hover:bg-Black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex flex-col items-start h-full w-full gap-10">
                {/* Header row with icon and Explore link */}
                <div className="flex items-start justify-between w-full">
                  <Image
                    src={service.icon}
                    alt=""
                    width={40}
                    height={40}
                    unoptimized
                    className="h-10 w-10 object-contain transition-[filter] duration-500 group-hover:brightness-0 group-hover:invert"
                    aria-hidden
                  />
                  
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 font-dm-sans text-[14px] font-normal leading-[1.3] transition-colors text-Black group-hover:text-white"
                  >
                    Explore Services 
                    <ArrowRight 
                      tone="light"
                      size={16} 
                      className="h-4 w-4 transition-[filter] duration-500 group-hover:brightness-0 group-hover:invert" 
                    />
                  </Link>
                </div>

                {/* Title and description */}
                <div className="flex flex-col items-start gap-3 w-full">
                  <h3
                    className="font-dm-mono text-lg font-medium leading-6 sm:text-xl text-color-neutral-900 group-hover:text-color-neutral-50 transition-colors duration-500"
                  >
                    {service.title}
                  </h3>
                  <p className="font-dm-sans text-[16px] font-normal leading-[1.3] text-color-neutral-500 group-hover:text-color-neutral-400 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Tags/Pills */}
                <div className="flex flex-wrap items-start gap-2.5 mt-auto w-full">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center justify-center rounded-full px-4 py-2 font-dm-sans text-[13px] sm:text-[14px] font-medium transition-colors bg-transparent text-color-neutral-600 border border-neutral-200 group-hover:text-color-neutral-400 group-hover:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
