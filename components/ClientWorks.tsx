"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OutlineButton from "./ui/OutlineButton";
import SectionImage from "./ui/SectionImage";
import SectionLabel from "./ui/SectionLabel";
import { icons, images } from "@/lib/images";

const PROJECTS = [
  {
    title: "AVMC Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur justo.",
    image: images.clientWork(1),
  },
  {
    title: "Lead 101",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur justo.",
    image: images.clientWork(2),
  },
  {
    title: "Ocean Life",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur justo.",
    image: images.clientWork(3),
  },
  {
    title: "VMLS Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur justo.",
    image: images.clientWork(4),
  },
] as const;

export default function ClientWorks() {
  return (
    <section
      id="casestudies"
      className="section-light-surface w-full overflow-hidden py-16 sm:py-20"
      aria-labelledby="client-works-heading"
    >
      <div className="section-shell flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex max-w-[607px] flex-col gap-3">
            <SectionLabel theme="light">CLIENT WORKS</SectionLabel>
            <h2
              id="client-works-heading"
              className="font-dm-sans text-2xl font-normal leading-10 text-color-neutral-900 sm:text-3xl"
            >
              We create digital solutions that drive growth.
            </h2>
          </div>
          <div className="hidden lg:block">
            <OutlineButton
              href="#casestudies"
              variant="light"
              circleOffset={{ left: "-41px", top: "55px" }}
            >
              View All Case Studies
            </OutlineButton>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-14">
          {[PROJECTS.slice(0, 2), PROJECTS.slice(2, 4)].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14"
            >
              {row.map((project, index) => (
                <motion.article
                  key={project.title}
                  className="flex flex-col gap-6 sm:gap-8"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <SectionImage
                    src={project.image}
                    alt={project.title}
                    className="aspect-[572/267] w-full sm:h-64 md:h-auto lg:h-64"
                    sizes="(max-width: 1024px) 100vw, 572px"
                  />
                  <div className="flex items-end justify-between gap-4 sm:gap-6">
                    <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">
                      <h3 className="font-dm-sans text-lg font-medium leading-6 text-Black sm:text-xl">
                        {project.title}
                      </h3>
                      <p className="font-dm-sans text-base font-normal leading-7 text-color-neutral-500 sm:text-xl sm:leading-9">
                        {project.description}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="mb-1 shrink-0 transition-opacity hover:opacity-70"
                      aria-label={`View ${project.title}`}
                    >
                      <Image
                        src={icons.arrowUpRight}
                        alt=""
                        width={14}
                        height={14}
                        unoptimized
                        className="h-3.5 w-3.5"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile-only bottom button */}
        <div className="flex justify-start lg:hidden">
          <OutlineButton
            href="#casestudies"
            variant="light"
            circleOffset={{ left: "-41px", top: "55px" }}
          >
            View All Case Studies
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
