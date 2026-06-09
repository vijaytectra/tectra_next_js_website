"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import SectionImage from "@/components/ui/SectionImage";
import OutlineButton from "@/components/ui/OutlineButton";
import { images, icons } from "@/lib/images";
import { ALL_BLOGS, slugify, type Blog } from "@/lib/blogs";

interface Section {
  id: string;
  title: string;
  content: string;
}

interface FullBlogPost {
  category: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  intro: string;
  sections: Section[];
  conclusion: string;
}

// Full content for the specific "Five Tasks..." blog post requested by the user
const FIVE_TASKS_BLOG_CONTENT: FullBlogPost = {
  category: "APP DEVELOPMENT",
  title: "Five Tasks Your Business Is Doing Manually That AI Can Handle Better, Faster, and Cheaper in 2026",
  date: "Jan 15, 2026",
  author: "Santhosh Kumar",
  readTime: "8 min read",
  image: images.blog[2], // Using the philosopher statue at laptop banner image
  intro: "As a business owner, you are constantly looking for ways to optimize your operations, reduce costs, and improve efficiency. In 2026, there are five key tasks that businesses are still performing manually, which AI can automate to give them a permanent operational advantage.",
  sections: [
    {
      id: "first-response",
      title: "First response to every incoming enquiry",
      content: "An AI receptionist or online chatbot that can instantly draft personalized, context-aware responses to every incoming email, contact form submission, or message in seconds, ensuring no lead is left waiting. By addressing questions immediately with precise information, you convert prospects faster and satisfy customers before they look elsewhere.",
    },
    {
      id: "content-creation",
      title: "Content creation for social media and blogs",
      content: "Not the strategy — the production. Drafting posts, generating variations for testing, writing first drafts of blog articles from outlines. A team that spent 10 hours per week on content production can reduce that to 3 hours of editing and oversight with the right AI workflows in place.",
    },
    {
      id: "customer-responses",
      title: "Customer review responses",
      content: "Responding to every Google and social media review with a thoughtful, personalised response is good for SEO and customer relationships. Most businesses do not do it consistently because it takes time. AI can draft appropriate responses for every review in seconds, requiring only a quick review and approval before posting.",
    },
    {
      id: "invoice-reminders",
      title: "Invoice follow-up and payment reminders",
      content: "Automated, personalised payment reminder sequences that escalate appropriately and maintain the relationship. No awkward conversations, no forgotten follow-ups, no cash flow surprises from invoices that sat unpaid because nobody followed up.",
    },
    {
      id: "appointment-scheduling",
      title: "Appointment scheduling and rescheduling",
      content: "An AI scheduling assistant that handles the back-and-forth of finding a suitable time, sends confirmations, and manages reschedule requests. For businesses with high appointment volume, this alone can free up several hours of administrative time every week.",
    },
  ],
  conclusion: "None of these implementations require a technical team or a large budget. They require the right setup and the right guidance. The businesses that implement them gain a permanent operational advantage over competitors that do not.",
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [activeSectionId, setActiveSectionId] = useState<string>("");

  // Determine if this is the "Five Tasks..." blog based on the slug
  const isFiveTasks = useMemo(() => {
    return slug.startsWith("five-tasks") || slug.includes("five-tasks-your-business");
  }, [slug]);

  // Find blog from ALL_BLOGS metadata list
  const blogMeta = useMemo(() => {
    return ALL_BLOGS.find(b => slugify(b.title) === slug) || ALL_BLOGS[0];
  }, [slug]);

  // Merge metadata list with full content if it is the "Five Tasks..." post, otherwise fallback to generic mockup
  const blog: FullBlogPost = useMemo(() => {
    if (isFiveTasks) {
      return {
        ...FIVE_TASKS_BLOG_CONTENT,
        category: blogMeta.category,
        date: blogMeta.date,
        author: blogMeta.author,
        readTime: blogMeta.readTime || "5 min read",
        image: images.blog[2], // Ensure the philosopher statue laptop banner is loaded
      };
    }

    // Dynamic placeholder content for other blogs to ensure all links function perfectly
    return {
      category: blogMeta.category,
      title: blogMeta.title,
      date: blogMeta.date,
      author: blogMeta.author,
      readTime: blogMeta.readTime || "6 min read",
      image: blogMeta.image,
      intro: `Welcome to our latest insights on ${blogMeta.category.toLowerCase()}. In this article, we cover the essential aspects of ${blogMeta.title} and explore how it affects digital growth in 2026.`,
      sections: [
        {
          id: "overview",
          title: "Strategic Overview",
          content: "Businesses that adapt to technological shifts early capture the largest market share. Optimizing workflow and focusing on user experience are two pillars of digital success in modern platforms.",
        },
        {
          id: "key-takeaways",
          title: "Key Takeaways",
          content: "Integrating seamless cloud APIs and automating routine user inquiries can reduce operational overhead by up to 40% while maintaining customer satisfaction at historic highs.",
        },
        {
          id: "implementation",
          title: "Next Steps for Implementation",
          content: "Review your current digital infrastructure, identify bottleneck tasks, and reach out to our development experts to build an implementation plan customized for your growth targets.",
        },
      ],
      conclusion: "Taking proactive steps to refine your digital footprint is no longer optional. Establish a strategy today to achieve long-term operational excellence.",
    };
  }, [isFiveTasks, blogMeta]);

  // Get featured blogs (excluding the current one) to display in the right sidebar
  const featuredBlogs = useMemo(() => {
    return ALL_BLOGS.filter(b => slugify(b.title) !== slug).slice(0, 5);
  }, [slug]);

  // Scroll spy to highlight active section in the Table of Contents
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // High-accuracy zone near top-center of viewport
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all section elements and the intro/conclusion anchors
    blog.sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    const introEl = document.getElementById("intro-section");
    if (introEl) observer.observe(introEl);

    const concEl = document.getElementById("conclusion-section");
    if (concEl) observer.observe(concEl);

    return () => {
      observer.disconnect();
    };
  }, [blog]);

  // Scroll to section helper
  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const offset = 32; // Offset for sticky top padding
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSectionId(id);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-White text-Black flex flex-col">

      {/* ── Navbar ─────────────────────────────────────────── */}
      <div className="w-full px-6 pt-6 pb-0 md:px-12 lg:px-16 xl:px-[120px] max-w-[1440px] mx-auto">
        <Navbar tone="dark" className="w-full" />
      </div>

      {/* ── Main Layout Grid ───────────────────────────────── */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-[120px] pt-8 pb-16 bg-White">

        {/* Layout Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start w-full">

          {/* Main Content Area */}
          <div className="xl:col-span-8 flex flex-col gap-6 md:gap-8 w-full min-w-0">

            {/* Header Content */}
            <div className="flex flex-col gap-2.5 w-full">
              <h1 className="font-dm-sans text-[28px] sm:text-[32px] font-semibold leading-tight text-color-primary-main self-stretch whitespace-pre-wrap">
                {blog.title}
              </h1>
              <div className="flex flex-row flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 text-[14px] sm:text-[15px] font-medium mt-2">
                <p className="flex items-center gap-1.5">
                  <span className="text-neutral-500">By</span>
                  <span className="text-neutral-300">|</span>
                  <span className="text-Black font-semibold">{blog.author}</span>
                </p>
                <p className="flex items-center gap-1.5 text-neutral-500">
                  <span>{blog.readTime || "8 min read"}</span>
                  <span className="text-neutral-400">•</span>
                  <span>{blog.date}</span>
                </p>
              </div>
            </div>

            {/* Main Banner Image Container */}
            <div
              className="relative w-full max-w-[800px] overflow-hidden"
              style={{ aspectRatio: "80/43" }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                style={{
                  objectFit: "cover",
                  objectPosition: "0px -51.667px",
                }}
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
            {/* Split layout below the image: Table of Contents & Paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-9 gap-8 items-start mt-4">

              {/* Left Column: Table of Contents (sticky within this grid block) */}
              <aside className="hidden md:block md:col-span-3 sticky top-8 self-start pt-4 border-r border-neutral-200/50 pr-4">
                <h2 className="font-dm-sans text-xs font-bold leading-5 text-neutral-400 uppercase tracking-widest mb-6">
                  Table of Contents
                </h2>
                <nav className="flex flex-col gap-4">
                  <a
                    href="#intro-section"
                    onClick={(e) => handleTocClick(e, "intro-section")}
                    className={`font-dm-sans text-sm font-medium leading-relaxed transition-all duration-200 hover:text-Black border-l-2 pl-3 ${activeSectionId === "intro-section"
                      ? "border-Black text-Black font-semibold"
                      : "border-transparent text-neutral-500"
                      }`}
                  >
                    Introduction
                  </a>
                  {blog.sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={(e) => handleTocClick(e, sec.id)}
                      className={`font-dm-sans text-sm font-medium leading-snug transition-all duration-200 hover:text-Black border-l-2 pl-3 ${activeSectionId === sec.id
                        ? "border-Black text-Black font-semibold animate-pulse-subtle"
                        : "border-transparent text-neutral-500"
                        }`}
                    >
                      {sec.title}
                    </a>
                  ))}
                  <a
                    href="#conclusion-section"
                    onClick={(e) => handleTocClick(e, "conclusion-section")}
                    className={`font-dm-sans text-sm font-medium leading-relaxed transition-all duration-200 hover:text-Black border-l-2 pl-3 ${activeSectionId === "conclusion-section"
                      ? "border-Black text-Black font-semibold"
                      : "border-transparent text-neutral-500"
                      }`}
                  >
                    Conclusion
                  </a>
                </nav>
              </aside>

              {/* Right Column: Main Body Paragraphs */}
              <div className="col-span-1 md:col-span-6 flex flex-col gap-6 md:gap-8">

                {/* Intro Paragraph */}
                <div id="intro-section" className="scroll-mt-8">
                  <p className="font-dm-sans text-[16px] sm:text-[19px] leading-relaxed text-neutral-700 font-normal">
                    {blog.intro}
                  </p>
                </div>

                <div className="w-full h-px bg-neutral-200 my-2" />

                {/* Sections Content */}
                <div className="flex flex-col gap-8 md:gap-10">
                  {blog.sections.map((sec, i) => (
                    <section key={sec.id} id={sec.id} className="scroll-mt-8 flex flex-col gap-3">
                      <h3 className="font-dm-sans text-xl sm:text-2xl font-medium text-neutral-900 leading-snug">
                        {sec.title}
                      </h3>
                      <p className="font-dm-sans text-[15px] sm:text-[17px] leading-relaxed text-neutral-600 font-normal">
                        {sec.content}
                      </p>
                    </section>
                  ))}
                </div>

                <div className="w-full h-px bg-neutral-200 my-2" />

                {/* Conclusion Section */}
                <section id="conclusion-section" className="scroll-mt-8 flex flex-col gap-3">
                  <h3 className="font-dm-sans text-xl sm:text-2xl font-medium text-neutral-900 leading-snug">
                    Conclusion
                  </h3>
                  <p className="font-dm-sans text-[15px] sm:text-[17px] leading-relaxed text-neutral-600 font-normal italic">
                    {blog.conclusion}
                  </p>
                </section>

              </div>

            </div>

          </div>

          {/* 3. Right Sidebar: Featured Blogs & CTA */}
          <aside className="xl:col-span-4 w-full min-w-0 self-stretch mt-8 xl:mt-0">
            <div className="flex flex-col gap-10 sticky top-8">

              {/* Related Blogs Widget */}
              <div className="flex flex-col gap-5">
                <h2 className="font-dm-sans text-[20px] sm:text-[24px] font-medium leading-tight text-neutral-900">
                  Related Blogs
                </h2>
                <div className="flex flex-col gap-4">
                  {featuredBlogs.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blogs/${slugify(item.title)}`}
                      className="flex gap-4 items-center p-3 bg-White border border-neutral-200 hover:shadow-sm transition-all duration-300 group"
                    >
                      <div className="relative w-[96px] h-[72px] shrink-0 overflow-hidden bg-neutral-100 rounded-md">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-right group-hover:scale-102 transition-transform duration-300"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1 justify-center gap-1.5 py-0">
                        <h4 className="font-dm-sans text-[15px] sm:text-base font-medium leading-[1.35] text-neutral-800 group-hover:text-neutral-600 transition-colors line-clamp-3">
                          {item.title}
                        </h4>
                        <p className="font-dm-sans text-[13px] font-normal leading-snug text-neutral-500 mt-0.5">
                          {item.author} <span className="mx-1.5">&bull;</span> {item.readTime || "12 mins read"}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </aside>



        </div>
      </main>

      {/* ── More Blogs Section ────────────────────────────── */}
      <Blogs bgClass="bg-[#FAF9F9]" paddingClass="py-16 sm:py-20" />

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
