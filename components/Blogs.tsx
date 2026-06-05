"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OutlineButton from "./ui/OutlineButton";
import SectionImage from "./ui/SectionImage";
import SectionLabel from "./ui/SectionLabel";
import { icons, images } from "@/lib/images";

const BLOGS = [
  {
    category: "APP DEVELOPMENT",
    title:
      "Five Tasks Your Business is Doing Manually that AI can Handle Better, Faster and cheaper in 2026",
    date: "Sep 17, 2025",
    author: "Santhosh Kumar",
    image: images.blog[0],
  },
  {
    category: "APP DEVELOPMENT",
    title: "Things You Should Consider Automating In Your Business",
    date: "Sep 17, 2025",
    author: "Santhosh Kumar",
    image: images.blog[1],
  },
  {
    category: "APP DEVELOPMENT",
    title:
      "How much does a Business Website Actually Cost in 2026? An Honest Breakdown",
    date: "Sep 17, 2025",
    author: "Santhosh Kumar",
    image: images.blog[2],
  },
] as const;

export default function Blogs({ 
  bgClass = "section-light-surface",
  paddingClass = "py-16 sm:py-24"
}: { 
  bgClass?: string;
  paddingClass?: string;
}) {
  return (
    <section
      id="blogs"
      className={`${bgClass} w-full overflow-hidden ${paddingClass}`}
      aria-labelledby="blogs-heading"
    >
      <div className="section-shell flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-3">
            <SectionLabel theme="light">BLOGS</SectionLabel>
            <h2
              id="blogs-heading"
              className="font-dm-sans text-2xl font-normal leading-10 text-color-neutral-900 sm:text-3xl"
            >
              Tech Perspective
            </h2>
          </div>
          <div className="hidden sm:flex">
            <OutlineButton
              href="/blogs"
              variant="light"
              circleOffset={{ left: "-53px", top: "55px" }}
            >
              View all Blogs
            </OutlineButton>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {BLOGS.map((blog, index) => (
            <motion.article
              key={blog.title}
              className="flex flex-col h-full overflow-hidden bg-color-neutral-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <SectionImage
                src={blog.image}
                alt={blog.title}
                className="h-44 w-full sm:h-48 shrink-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 380px"
              />
              <div className="flex flex-col flex-1 gap-4 px-4 py-4 sm:px-6 pt-6">
                <div className="flex flex-col gap-4">
                  <span className="font-dm-sans text-sm font-medium leading-5 text-color-neutral-400">
                    {blog.category}
                  </span>
                  <div className="flex items-start justify-between gap-2.5">
                    <Link href="#" className="min-w-0 flex-1">
                      <h3 className="font-dm-sans text-base font-medium leading-6 text-Black">
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
        </div>

        {/* Mobile-only View all Blogs button */}
        <div className="flex sm:hidden w-full mt-2">
          <OutlineButton
            href="/blogs"
            variant="light"
            className="w-full"
            circleOffset={{ left: "-53px", top: "55px" }}
          >
            View all Blogs
          </OutlineButton>
        </div>

      </div>
    </section>
  );
}
