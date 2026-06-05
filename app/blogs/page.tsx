"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, X, SlidersHorizontal, ArrowUpDown, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionImage from "@/components/ui/SectionImage";
import { icons, images } from "@/lib/images";

const CATEGORIES = ["ALL", "APP DEVELOPMENT", "AI & AUTOMATION", "BUSINESS & WEB"] as const;

type Category = typeof CATEGORIES[number];

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Title A-Z", value: "title-asc" },
  { label: "Title Z-A", value: "title-desc" },
] as const;

type SortValue = typeof SORT_OPTIONS[number]["value"];

const ALL_BLOGS = [
  {
    id: 1,
    category: "APP DEVELOPMENT" as Category,
    title: "Five Tasks your Business is Doing manually that AI can handle Better, Faster and Cheaper",
    date: "Sep 17, 2025",
    timestamp: new Date("2025-09-17").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[0],
  },
  {
    id: 2,
    category: "AI & AUTOMATION" as Category,
    title: "Five Tasks your Business is Doing manually that AI can handle Better, Faster and Cheaper",
    date: "Oct 10, 2025",
    timestamp: new Date("2025-10-10").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[1],
  },
  {
    id: 3,
    category: "BUSINESS & WEB" as Category,
    title: "How much does a Business Website actually cost in Chennai in 2026? An Honest breakdown",
    date: "Nov 05, 2025",
    timestamp: new Date("2025-11-05").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[2],
  },
  {
    id: 4,
    category: "APP DEVELOPMENT" as Category,
    title: "Things You Should Consider Automating In Your Business",
    date: "Aug 20, 2025",
    timestamp: new Date("2025-08-20").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[0],
  },
  {
    id: 5,
    category: "AI & AUTOMATION" as Category,
    title: "AI Agents: The Future of Workflow Optimization",
    date: "Dec 01, 2025",
    timestamp: new Date("2025-12-01").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[1],
  },
  {
    id: 6,
    category: "APP DEVELOPMENT" as Category,
    title: "Five Tasks your Business is Doing manually that AI can handle Better, Faster and Cheaper",
    date: "Jan 15, 2026",
    timestamp: new Date("2026-01-15").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[2],
  },
  {
    id: 7,
    category: "APP DEVELOPMENT" as Category,
    title: "How Chennai Business are using WhatsApp Automation to Generate more Enquiries without Increasing Headcount",
    date: "Sep 17, 2025",
    timestamp: new Date("2025-09-17").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[0],
  },
  {
    id: 8,
    category: "AI & AUTOMATION" as Category,
    title: "Five Tasks your Business is Doing manually that AI can handle Better, Faster and Cheaper",
    date: "Oct 10, 2025",
    timestamp: new Date("2025-10-10").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[1],
  },
  {
    id: 9,
    category: "BUSINESS & WEB" as Category,
    title: "How much does a Business Website actually cost in Chennai in 2026? An Honest breakdown",
    date: "Nov 05, 2025",
    timestamp: new Date("2025-11-05").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[2],
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");
  const [sortBy, setSortBy] = useState<SortValue>("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Filter and sort logic
  const filteredAndSortedBlogs = useMemo(() => {
    let result = [...ALL_BLOGS];

    // Search query matching
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.category.toLowerCase().includes(query)
      );
    }

    // Category matching
    if (selectedCategory !== "ALL") {
      result = result.filter((blog) => blog.category === selectedCategory);
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

    // To simulate pagination for 10 pages, we can dynamically modify the results if page > 1:
    if (currentPage > 1) {
      return result.map((blog) => ({
        ...blog,
        id: blog.id + currentPage * 10,
        title: `${blog.title} (Part ${currentPage})`,
        date: new Date(blog.timestamp - currentPage * 24 * 60 * 60 * 1000 * 15)
          .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      }));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy, currentPage]);

  return (
    <div className="relative min-h-screen w-full bg-[#FAF9F9] text-Black flex flex-col overflow-x-hidden">
      
      {/* ── Navbar ─────────────────────────────────────────── */}
      <div className="w-full px-6 py-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">
        <Navbar tone="dark" className="w-full" />
      </div>

      {/* ── Main Content Section ───────────────────────────── */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 pt-8 sm:pt-12 pb-[40px] flex flex-col gap-10">
        
        {/* Header and Controls Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full">
          <h1 className="font-dm-sans text-[40px] md:text-[56px] font-normal leading-[40px] text-Black tracking-tight">
            Blogs
          </h1>

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
                aria-label="Search blogs"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
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
                className={`flex h-[38px] w-[38px] items-center justify-center border border-neutral-200 bg-White transition-colors hover:bg-neutral-50 ${
                  isFilterOpen ? "border-Black bg-neutral-50" : ""
                }`}
                aria-label="Filter by category"
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
                      Filter by Category
                    </div>
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category);
                          setCurrentPage(1);
                          setIsFilterOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2 text-xs sm:text-sm text-left hover:bg-neutral-50 transition-colors ${
                          selectedCategory === category ? "font-semibold text-Black" : "text-neutral-600"
                        }`}
                      >
                        <span>{category}</span>
                        {selectedCategory === category && <Check className="h-4 w-4 text-Black" />}
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
                className={`flex h-[38px] w-[38px] items-center justify-center border border-neutral-200 bg-White transition-colors hover:bg-neutral-50 ${
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
                      Sort Blogs
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

        {/* Blog Cards Grid */}
        <div className="relative min-h-[400px] w-full">
          <AnimatePresence mode="popLayout">
            {filteredAndSortedBlogs.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 w-full"
              >
                {filteredAndSortedBlogs.map((blog, index) => (
                  <motion.article
                    layout
                    key={blog.id}
                    className="flex flex-col h-full overflow-hidden bg-White border border-neutral-200/60 shadow-sm"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: easeOut, delay: index * 0.05 }}
                  >
                    <SectionImage
                      src={blog.image}
                      alt={blog.title}
                      className="w-full aspect-[359/188] shrink-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 380px"
                    />
                    <div className="flex flex-col flex-1 gap-4 px-4 py-4 sm:px-6 pt-6 bg-White">
                      <div className="flex flex-col gap-4">
                        <span className="font-dm-sans text-xs font-semibold leading-5 text-color-neutral-400 tracking-wider">
                          {blog.category}
                        </span>
                        <div className="flex items-start justify-between gap-2.5">
                          <Link href="#" className="min-w-0 flex-1 group">
                            <h3 className="font-dm-sans text-base font-medium leading-6 text-Black hover:text-neutral-600 transition-colors">
                              {blog.title}
                            </h3>
                          </Link>
                          <Image
                            src={icons.arrowUpRight}
                            alt=""
                            width={24}
                            height={24}
                            unoptimized
                            className="mt-1 h-6 w-6 shrink-0"
                            aria-hidden
                          />
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-4 mt-auto">
                        <time className="font-dm-sans text-xs font-medium leading-4 text-color-neutral-400">
                          {blog.date}
                        </time>
                        <div className="h-px w-full bg-color-neutral-200" />
                        <p className="font-dm-sans text-sm font-medium leading-5">
                          <span className="text-color-neutral-400">By | </span>
                          <span className="text-color-neutral-900">{blog.author}</span>
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col justify-center items-center text-center gap-2.5 py-12"
              >
                <p className="font-dm-sans text-lg font-medium text-neutral-600">
                  No blogs match your search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("ALL");
                  }}
                  className="font-dm-sans text-sm font-medium text-Black underline hover:text-neutral-600"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 w-full">
          
          {/* Prev Button */}
          <button
            type="button"
            onClick={() => {
              setCurrentPage(prev => Math.max(prev - 1, 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-3 sm:px-4 h-10 border rounded-[8px] font-dm-sans text-sm font-medium transition-all ${
              currentPage === 1
                ? "border-neutral-200 bg-White text-[#D4D4D8] cursor-not-allowed"
                : "border-neutral-200 bg-White text-Black hover:bg-neutral-50 active:scale-95 cursor-pointer"
            }`}
          >
            <span className="text-xs">{"<<"}</span>
            <span>Prev</span>
          </button>

          {/* Page Numbers (Hidden on Mobile) */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Page 1 */}
            <button
              type="button"
              onClick={() => {
                setCurrentPage(1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-[8px] font-dm-sans text-sm font-medium transition-all cursor-pointer ${
                currentPage === 1
                  ? "bg-Black text-White font-semibold"
                  : "border border-neutral-200 bg-White text-Black hover:bg-neutral-50"
              }`}
            >
              1
            </button>

            {/* Page 2 */}
            <button
              type="button"
              onClick={() => {
                setCurrentPage(2);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-[8px] font-dm-sans text-sm font-medium transition-all cursor-pointer ${
                currentPage === 2
                  ? "bg-Black text-White font-semibold"
                  : "border border-neutral-200 bg-White text-Black hover:bg-neutral-50"
              }`}
            >
              2
            </button>

            {/* Page 3 */}
            <button
              type="button"
              onClick={() => {
                setCurrentPage(3);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-[8px] font-dm-sans text-sm font-medium transition-all cursor-pointer ${
                currentPage === 3
                  ? "bg-Black text-White font-semibold"
                  : "border border-neutral-200 bg-White text-Black hover:bg-neutral-50"
              }`}
            >
              3
            </button>

            {/* Separator - */}
            <span className="text-neutral-400 font-medium px-1.5">—</span>

            {/* Page 10 */}
            <button
              type="button"
              onClick={() => {
                setCurrentPage(10);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-[8px] font-dm-sans text-sm font-medium transition-all cursor-pointer ${
                currentPage === 10
                  ? "bg-Black text-White font-semibold"
                  : "border border-neutral-200 bg-White text-Black hover:bg-neutral-50"
              }`}
            >
              10
            </button>

          </div>

          {/* Mobile Page Indicator (Visible on Mobile only) */}
          <span className="sm:hidden font-dm-sans text-sm font-medium text-Black px-2 whitespace-nowrap">
            Page {currentPage} of 10
          </span>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => {
              setCurrentPage(prev => Math.min(prev + 1, 10));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={currentPage === 10}
            className={`flex items-center gap-2 px-3 sm:px-4 h-10 border rounded-[8px] font-dm-sans text-sm font-medium transition-all cursor-pointer ${
              currentPage === 10
                ? "border-neutral-200 bg-White text-[#D4D4D8] cursor-not-allowed"
                : "bg-Black text-White border-Black hover:bg-neutral-900 active:scale-95"
            }`}
          >
            <span>Next</span>
            <span className="text-xs">{">>"}</span>
          </button>

        </div>

      </main>

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
