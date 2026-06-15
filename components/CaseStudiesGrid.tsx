"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionImage from "./ui/SectionImage";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/lib/case-studies";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudiesGridProps = {
  caseStudies: CaseStudy[];
};

export default function CaseStudiesGrid({ caseStudies }: CaseStudiesGridProps) {
  return (
    <div className="relative min-h-[400px] w-full pb-12">
      <AnimatePresence mode="popLayout">
        {caseStudies.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 w-full"
          >
            {caseStudies.map((study, index) => (
              <motion.article
                layout
                key={study.id}
                className="flex flex-col gap-6 sm:gap-8"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: easeOut, delay: index * 0.05 }}
              >
                <Link href={`/case-studies/${study.id}`} className="group flex flex-col gap-6 sm:gap-8">
                  <SectionImage
                    src={study.image}
                    alt={study.title}
                    className="aspect-[572/267] w-full sm:h-64 md:h-auto lg:h-64 object-cover"
                    sizes="(max-width: 1024px) 100vw, 572px"
                  />
                  <div className="flex items-end justify-between gap-4 sm:gap-6">
                    <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">
                      <h3 className="font-dm-sans text-[20px] font-medium leading-[130%] text-[#000] group-hover:opacity-70 transition-opacity">
                        {study.title}
                      </h3>
                      <p className="font-dm-sans text-[20px] font-normal leading-[170%] text-[#525252]">
                        {study.description}
                      </p>
                    </div>
                    <div
                      className="mb-1 shrink-0 transition-opacity opacity-50 group-hover:opacity-100"
                      aria-label={`View ${study.title}`}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="14" 
                        height="14" 
                        viewBox="0 0 15 15" 
                        fill="none"
                        className="h-[14px] w-[14px]"
                        aria-hidden
                      >
                        <path 
                          d="M0.400391 7.3999H14.4004M7.40039 14.3999L14.4004 7.3999L7.40039 0.399902" 
                          stroke="#737373" 
                          strokeWidth="0.8" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col justify-center items-center text-center gap-2.5 py-24"
          >
            <p className="font-dm-sans text-lg font-medium text-neutral-600">
              No case studies found for the selected filters.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
