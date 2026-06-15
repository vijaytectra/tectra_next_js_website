import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";

export const metadata = {
  title: "Industries | Tectra Technologies",
  description: "Designing intuitive digital experiences tailored to the unique needs of every industry.",
};

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#FFF] text-Black overflow-x-hidden">
      
      {/* ── Hero Section (Dark) ─────────────────────────── */}
      <div 
        className="w-full flex justify-center"
        style={{
          background: `linear-gradient(90deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.60) 50%, rgba(0, 0, 0, 0.60) 100%), url('/images/Frame%201984080690.png') center / cover no-repeat`
        }}
      >
        <section 
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1440px",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
          className="relative overflow-hidden px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 xl:px-[120px] py-10 lg:py-[40px] min-h-[400px] h-[400px] sm:h-[500px]"
        >
          {/* Navbar */}
          <div className="w-full z-20 relative">
            <Navbar tone="light" className="w-full" />
          </div>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row w-full items-start lg:items-center justify-between mt-auto relative z-10 gap-6">
            <div className="hidden lg:block w-full max-w-[240px] shrink-0"></div>
            <div className="w-full max-w-[559px] relative">
              <h1 className="font-dm-sans text-[36px] sm:text-[48px] font-light leading-normal text-left text-White">
                Industries we serve
              </h1>
            </div>
          </div>
        </section>
      </div>

      {/* ── What We Do Section ───────────────────────────── */}
      <div className="w-full bg-[#FFF] flex justify-center">
        <section 
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1440px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            alignSelf: "stretch"
          }}
          className="relative px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 xl:px-[120px] py-10 lg:py-[60px]"
        >
          <div className="flex flex-col lg:flex-row w-full items-start justify-between gap-6">
            {/* Left side label */}
            <div className="w-full lg:max-w-[240px] shrink-0 mt-2">
              <div className="border-t border-[#D6D6D6] pt-1 w-fit pr-4">
                <span className="font-dm-mono text-[14px] sm:text-[16px] font-normal tracking-[3.2px] text-[#ADADAD] uppercase leading-[1.3] block">
                  WHAT WE DO
                </span>
              </div>
            </div>

            {/* Right side text */}
            <div className="w-full lg:max-w-[559px] relative">
              <h2 className="font-dm-sans text-[24px] sm:text-[32px] font-normal leading-[1.3] text-[#000]">
                Designing intuitive digital experiences tailored to the unique needs of every industry.
              </h2>
            </div>
          </div>

        </section>
      </div>

      {/* ── Industries Grid Section ──────────────────────── */}
      <div className="w-full bg-[#FFF] flex justify-center">
        <section 
          className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 xl:px-[120px] pt-0 pb-[40px] flex flex-col"
        >
          <h2 className="font-dm-sans text-[28px] sm:text-[32px] font-normal leading-[1.3] text-[#000] mb-[32px] sm:mb-[56px]">
            Industries
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[32px] sm:gap-y-[56px] w-full">
            {[
              { name: "Healthcare", img: "/images/Healthcare.png", href: "/industries/healthcare" },
              { name: "Education", img: "/images/EDUCATION.png" },
              { name: "Finance", img: "/images/finance.png" },
              { name: "E-Commerce", img: "/images/E-COMMERCE.png" },
              { name: "Retail", img: "/images/RETAIL.png" },
              { name: "Hospitality", img: "/images/HOSPITALITY.png" },
              { name: "Manufacturing", img: "/images/MANUFACTURING.png" },
              { name: "Technology", img: "/images/TECHNOLOGY.png" },
              { name: "Travel", img: "/images/Travel.png" },
            ].map((industry, index) => {
              const content = (
                <div className="flex flex-col w-full">
                  {/* Image Container */}
                  <div className="w-full aspect-square relative flex items-center justify-center overflow-hidden mb-[16px]">
                    <Image 
                      src={industry.img}
                      alt={industry.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );

              return industry.href ? (
                <Link href={industry.href} key={index} className="block w-full">
                  {content}
                </Link>
              ) : (
                <div key={index} className="w-full">
                  {content}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── Related Case Studies ──────────────────────────── */}
      <RelatedCaseStudies 
        hideBorder 
        className="md:pt-[0px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 xl:px-[120px]" 
        contentClassName="max-w-[1200px]" 
      />

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
