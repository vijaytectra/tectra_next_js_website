"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { EXPERTISE_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/case-studies";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudiesHeaderProps = {
  selectedExpertise: string;
  setSelectedExpertise: (val: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (val: string) => void;
};

export default function CaseStudiesHeader({
  selectedExpertise,
  setSelectedExpertise,
  selectedIndustry,
  setSelectedIndustry,
}: CaseStudiesHeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<"expertise" | "industry" | null>(null);

  const toggleDropdown = (dropdown: "expertise" | "industry") => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full pt-0 md:pt-[40px] pb-[56px]">
      <h1 className="font-dm-sans text-[48px] font-light leading-normal text-[#000]">
        Case Studies
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        {/* Expertise Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            type="button"
            onClick={() => toggleDropdown("expertise")}
            className="flex w-full sm:w-[151px] p-4 justify-between items-center self-stretch border border-[#D6D6D6] bg-White text-sm font-medium text-Black hover:bg-neutral-50 transition-colors"
          >
            <span className="truncate">
              {selectedExpertise === "All Expertise" ? "Expertise" : selectedExpertise}
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === "expertise" ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {openDropdown === "expertise" && (
              <>
                <div className="fixed inset-0 z-20" onClick={() => setOpenDropdown(null)} />
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="absolute left-0 right-0 mt-2 bg-White border border-neutral-200 shadow-xl z-30 py-1"
                >
                  {EXPERTISE_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedExpertise(option);
                        setOpenDropdown(null);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-sm text-left hover:bg-neutral-50 transition-colors ${
                        selectedExpertise === option ? "font-semibold text-Black" : "text-neutral-600"
                      }`}
                    >
                      <span>{option}</span>
                      {selectedExpertise === option && <Check className="h-4 w-4 text-Black" />}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Industry Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            type="button"
            onClick={() => toggleDropdown("industry")}
            className="flex w-full sm:w-[151px] p-4 justify-between items-center self-stretch border border-[#D6D6D6] bg-White text-sm font-medium text-Black hover:bg-neutral-50 transition-colors"
          >
            <span className="truncate">
              {selectedIndustry === "All Industries" ? "Industries" : selectedIndustry}
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === "industry" ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {openDropdown === "industry" && (
              <>
                <div className="fixed inset-0 z-20" onClick={() => setOpenDropdown(null)} />
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="absolute left-0 right-0 mt-2 bg-White border border-neutral-200 shadow-xl z-30 py-1"
                >
                  {INDUSTRY_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedIndustry(option);
                        setOpenDropdown(null);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-sm text-left hover:bg-neutral-50 transition-colors ${
                        selectedIndustry === option ? "font-semibold text-Black" : "text-neutral-600"
                      }`}
                    >
                      <span>{option}</span>
                      {selectedIndustry === option && <Check className="h-4 w-4 text-Black" />}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
