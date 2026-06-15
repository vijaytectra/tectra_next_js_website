"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { ALL_JOBS, JOB_LEVELS, slugify, type JobLevel } from "@/lib/jobs";

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Title A-Z", value: "title-asc" },
  { label: "Title Z-A", value: "title-desc" },
] as const;

type SortValue = typeof SORT_OPTIONS[number]["value"];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function OpenRoles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<JobLevel | "ALL">("ALL");
  const [sortBy, setSortBy] = useState<SortValue>("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filter and sort logic
  const filteredAndSortedJobs = useMemo(() => {
    let result = [...ALL_JOBS];

    // Search query matching
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.description.toLowerCase().includes(query) ||
          job.level.toLowerCase().includes(query)
      );
    }

    // Level matching
    if (selectedLevel !== "ALL") {
      result = result.filter((job) => job.level === selectedLevel);
    }

    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return a.timestamp - b.timestamp;
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "newest":
        default:
          return b.timestamp - a.timestamp;
      }
    });

    return result;
  }, [searchQuery, selectedLevel, sortBy]);

  return (
    <section id="open-roles" className="w-full bg-[#FFF] py-[100px]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 flex flex-col gap-10">
        
        {/* Header and Controls Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full">
          <h2 className="font-dm-sans text-[32px] md:text-[48px] font-light text-[#171717] tracking-tight">
            Open Roles
          </h2>

          {/* Search, Filter, Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto self-stretch md:self-auto">
            
            {/* Search Input Box */}
            <div className="relative flex items-center border border-neutral-200 bg-White px-4 py-2 w-full md:w-[320px] min-w-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2.5 shrink-0">
                <path d="M21 21L16.7 16.7M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#525252" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none text-[20px] font-normal leading-[26px] text-Black w-full placeholder-[#525252] font-dm-sans min-w-0"
                aria-label="Search jobs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="hover:opacity-75 transition-opacity p-0.5 shrink-0"
                  aria-label="Clear search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path d="M19 5L5 19M5.00003 5L19 19" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>

            {/* Filter Dropdown Toggle */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => {
                  setIsFilterOpen(!isFilterOpen);
                  setIsSortOpen(false);
                }}
                className={`flex h-[42px] w-[42px] items-center justify-center border border-neutral-200 bg-White transition-colors hover:bg-neutral-50 ${
                  isFilterOpen ? "border-Black bg-neutral-50" : ""
                }`}
                aria-label="Filter by level"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#525252" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {isFilterOpen && (
                <>
                  <div className="fixed inset-0 z-20" onClick={() => setIsFilterOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="absolute right-0 mt-2 w-56 bg-White border border-neutral-200 shadow-xl z-30 py-1"
                  >
                    <div className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 border-b border-neutral-100">
                      Filter by Level
                    </div>
                    {JOB_LEVELS.map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(level);
                          setIsFilterOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2 text-xs sm:text-sm text-left hover:bg-neutral-50 transition-colors ${
                          selectedLevel === level ? "font-semibold text-Black" : "text-neutral-600"
                        }`}
                      >
                        <span>{level}</span>
                        {selectedLevel === level && <Check className="h-4 w-4 text-Black" />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </div>

            {/* Sort Dropdown Toggle */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => {
                  setIsSortOpen(!isSortOpen);
                  setIsFilterOpen(false);
                }}
                className={`flex h-[42px] w-[42px] items-center justify-center border border-neutral-200 bg-White transition-colors hover:bg-neutral-50 ${
                  isSortOpen ? "border-Black bg-neutral-50" : ""
                }`}
                aria-label="Sort options"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="shrink-0">
                  <path d="M8.5625 12.5625L4.5625 16.5625L0.5625 12.5625M4.5625 16.5625V0.5625M8.5625 0.5625H18.5625M8.5625 4.5625H15.5625M8.5625 8.5625H12.5625" stroke="#525252" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {isSortOpen && (
                <>
                  <div className="fixed inset-0 z-20" onClick={() => setIsSortOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="absolute right-0 mt-2 w-48 bg-White border border-neutral-200 shadow-xl z-30 py-1"
                  >
                    <div className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 border-b border-neutral-100">
                      Sort Roles
                    </div>
                    {SORT_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setSortBy(option.value);
                          setIsSortOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2 text-xs sm:text-sm text-left hover:bg-neutral-50 transition-colors ${
                          sortBy === option.value ? "font-semibold text-Black" : "text-neutral-600"
                        }`}
                      >
                        <span>{option.label}</span>
                        {sortBy === option.value && <Check className="h-4 w-4 text-Black" />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </div>

          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="relative min-h-[400px] w-full">
          <AnimatePresence mode="popLayout">
            {filteredAndSortedJobs.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              >
                {filteredAndSortedJobs.map((job, index) => (
                  <motion.article
                    layout
                    key={job.id}
                    className="flex flex-col bg-White border border-[#E5E5E5] p-6 lg:p-8 h-full transition-shadow hover:shadow-lg"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: easeOut, delay: index * 0.05 }}
                  >
                    <h3 className="font-dm-sans text-[24px] font-medium text-[#171717] mb-4">
                      {job.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className="px-3 py-1.5 border border-[#E5E5E5] text-[#404040] text-[12px] font-dm-sans font-normal leading-[130%]">
                        {job.type}
                      </span>
                      <span className="px-3 py-1.5 border border-[#E5E5E5] text-[#404040] text-[12px] font-dm-sans font-normal leading-[130%]">
                        {job.level}
                      </span>
                    </div>

                    <p className="font-dm-sans text-[16px] text-[#737373] leading-relaxed mb-8 flex-1">
                      {job.description}
                    </p>

                    <div className="flex justify-end mt-auto">
                      <Link
                        href={`/careers/${slugify(job.title)}`}
                        className="bg-Black text-White px-6 py-3 font-dm-sans text-[14px] font-medium transition-transform hover:scale-105"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col justify-center items-center text-center gap-2.5 py-12"
              >
                <p className="font-dm-sans text-lg font-medium text-neutral-600">
                  No roles match your search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedLevel("ALL");
                  }}
                  className="font-dm-sans text-sm font-medium text-Black underline hover:text-neutral-600"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
