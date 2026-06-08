"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingComparison from "@/components/PricingComparison";
import WhyChooseUs from "@/components/WhyChooseUs";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";
import FAQSection, { FAQItem } from "@/components/FAQSection";

// Billing cycle types
type BillingCycle = "monthly" | "quarterly" | "halfyearly" | "annual";

const PRICING_FAQ_ITEMS: FAQItem[] = [
  {
    question: "What's included in Tectra's SEO plans?",
    answer: "SEO plans include keyword research, on-page optimization, performance tracking, and regular reports.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "Typically, it takes about 3 to 6 months to start seeing significant results from SEO efforts as search engines index and rank the optimized content.",
  },
  {
    question: "Can I upgrade my SEO plan later?",
    answer: "Yes, you can upgrade your SEO plan at any time to include more keywords, advanced analytics, and additional content creation.",
  },
  {
    question: "Do you provide monthly SEO reports?",
    answer: "Yes, all our SEO plans include detailed monthly reports covering traffic, rankings, and key performance metrics.",
  },
  {
    question: "Is there a long-term contract required?",
    answer: "No, our SEO plans are available on a month-to-month basis with no long-term commitments required.",
  },
];

interface Plan {
  tagline: string;
  title: string;
  description: string;
  prices: Record<BillingCycle, number>;
  popular: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    tagline: "Best for Startups",
    title: "Starter",
    description: "Perfect for startups and small businesses getting online.",
    prices: {
      monthly: 25000,
      quarterly: 20000,
      halfyearly: 17500,
      annual: 15000,
    },
    popular: false,
    features: [
      "Dedicated Digital Marketing Executive and Shared Digital Marketing",
      "Initial Setup and Analysis offered",
      "Basic SEO Services",
      "Basic Strategy Planning and Monthly Reporting",
      "1 hour Monthly Consultation and PRP",
    ],
  },
  {
    tagline: "Best for Growing Brands",
    title: "Pro",
    description: "Perfect for startups and small businesses getting online.",
    prices: {
      monthly: 50000,
      quarterly: 40000,
      halfyearly: 35000,
      annual: 30000,
    },
    popular: true,
    features: [
      "Dedicated Digital Marketing Executive and Shared Digital Marketing",
      "Initial Setup and Analysis offered",
      "Basic SEO Services",
      "Basic Strategy Planning and Monthly Reporting",
      "1 hour Monthly Consultation and PRP",
    ],
  },
  {
    tagline: "Best for Scaling Businesses",
    title: "Advanced",
    description: "Perfect for startups and small businesses getting online.",
    prices: {
      monthly: 75000,
      quarterly: 60000,
      halfyearly: 52500,
      annual: 45000,
    },
    popular: false,
    features: [
      "Dedicated Digital Marketing Executive and Shared Digital Marketing",
      "Initial Setup and Analysis offered",
      "Basic SEO Services",
      "Basic Strategy Planning and Monthly Reporting",
      "1 hour Monthly Consultation and PRP",
    ],
  },
  {
    tagline: "Best for large-organization",
    title: "Enterprise",
    description: "Perfect for startups and small businesses getting online.",
    prices: {
      monthly: 100000,
      quarterly: 80000,
      halfyearly: 70000,
      annual: 60000,
    },
    popular: false,
    features: [
      "Dedicated Digital Marketing Executive and Shared Digital Marketing",
      "Initial Setup and Analysis offered",
      "Basic SEO Services",
      "Basic Strategy Planning and Monthly Reporting",
      "1 hour Monthly Consultation and PRP",
    ],
  },
];

export default function PricingsPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  // Helper to format the total billing description
  const getBillingText = (plan: Plan) => {
    const pricePerMonth = plan.prices[billingCycle];
    switch (billingCycle) {
      case "quarterly":
        return `Billed ₹ ${(pricePerMonth * 3).toLocaleString("en-IN")} quarterly`;
      case "halfyearly":
        return `Billed ₹ ${(pricePerMonth * 6).toLocaleString("en-IN")} half-yearly`;
      case "annual":
        return `Billed ₹ ${(pricePerMonth * 12).toLocaleString("en-IN")} annually`;
      case "monthly":
      default:
        return "Billed monthly";
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FAF9F9] text-Black flex flex-col overflow-x-hidden">

      {/* ── Dark Header Section (Navbar & Title Banner) ───── */}
      <div className="w-full bg-Black flex justify-center">
        <div className="flex flex-col w-full max-w-[1440px] px-6 py-8 xl:px-[120px] xl:py-[40px] gap-16 xl:gap-[108px]">
          <Navbar tone="light" className="w-full shrink-0" />
          <div className="w-full text-center">
            <h1 className="font-dm-sans text-[36px] sm:text-[44px] md:text-[56px] font-medium leading-[1.3] text-White">
              Pricing Plan for SEO
            </h1>
          </div>
        </div>
      </div>

      {/* ── Main Layout (Pricing Toggle & Plan Cards) ────────── */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 pt-12 pb-4 sm:pt-16 sm:pb-6 md:pt-20 md:pb-8 flex flex-col items-center gap-12 md:gap-16">

        {/* Dynamic Billing Cycle Toggle Selector */}
        <div className="w-full max-w-[640px] bg-[#EDEDED] p-1 grid grid-cols-2 gap-1 sm:flex sm:gap-0 sm:items-center sm:justify-between border border-[#E0E0E0] select-none rounded-[6px]">
          {[
            { id: "monthly", label: "Monthly", discount: "" },
            { id: "quarterly", label: "Quarterly", discount: "Save 20%" },
            { id: "halfyearly", label: "Half Yearly", discount: "Save 30%" },
            { id: "annual", label: "Annual", discount: "Save 40%" },
          ].map((tab) => {
            const isActive = billingCycle === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setBillingCycle(tab.id as BillingCycle)}
                className={`flex-1 flex flex-col items-center justify-center py-2.5 px-2.5 transition-all duration-300 cursor-pointer select-none rounded-[4px] min-h-[52px] ${isActive
                  ? "bg-Black text-White shadow-sm"
                  : "text-neutral-600 hover:text-Black"
                  }`}
              >
                <span className="font-dm-sans text-[16px] font-normal leading-[1.3]">
                  {tab.label}
                </span>
                {tab.discount && (
                  <span
                    className={`font-dm-sans text-[10px] mt-1.5 leading-none transition-colors ${isActive ? "text-neutral-300" : "text-neutral-400"
                      }`}
                  >
                    ({tab.discount})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch max-w-[1240px] mx-auto pt-6">
          {PLANS.map((plan) => {
            const currentPrice = plan.prices[billingCycle];
            return (
              <article
                key={plan.title}
                className={`relative flex flex-col bg-White py-6 px-4 items-start gap-8 border transition-all duration-300 rounded-none h-full ${plan.popular
                  ? "border-[2px] border-Black shadow-md"
                  : "border-neutral-200/80 shadow-sm"
                  }`}
              >
                {/* "Most Popular" Tag Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-Black text-White text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-5 py-1.5 leading-none whitespace-nowrap z-10 border border-Black">
                    Most Popular
                  </div>
                )}

                {/* Card Header Info */}
                <div className="flex flex-col w-full">
                  <span className="font-dm-sans text-[12px] font-normal leading-[1.3] text-[#737373] mb-2.5 uppercase">
                    {plan.tagline}
                  </span>
                  <h2 className="flex flex-col justify-center h-[24px] font-dm-sans text-[20px] font-semibold leading-[1.3] text-Black mb-2">
                    {plan.title}
                  </h2>
                  <p className="w-full font-dm-sans text-[14px] font-normal leading-[1.3] text-[#737373]">
                    {plan.description}
                  </p>
                </div>

                {/* Price block */}
                <div className="flex flex-col w-full">
                  <div className="flex items-baseline gap-1 whitespace-nowrap">
                    <span className="font-dm-sans text-3xl sm:text-[34px] font-bold text-neutral-900 leading-none">
                      ₹ {currentPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="font-dm-sans text-sm font-normal text-neutral-400">
                      /Month
                    </span>
                  </div>
                  <span className="font-dm-sans text-[11px] font-medium text-neutral-400 mt-2 tracking-wide">
                    {getBillingText(plan)}
                  </span>
                </div>


                {/* Features Section */}
                <div className="flex flex-col flex-1 w-full">
                  <h3 className="font-dm-sans text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                    What is included
                  </h3>
                  <ul className="flex flex-col gap-4 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {/* Green Circle Checkmark Icon */}
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E] mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="9"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="flex flex-col justify-center flex-1 min-h-[30px] font-dm-sans text-[12px] font-normal leading-[1.3] text-[#737373]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                <div className="mt-auto w-full">
                  <Link
                    href="/#contact"
                    className={`group flex w-full items-center justify-center gap-[10px] h-[40px] px-4 font-dm-sans text-[15px] font-normal transition-all duration-300 rounded-none border border-Black ${plan.popular
                      ? "bg-Black text-White hover:bg-neutral-800"
                      : "bg-White text-Black hover:bg-Black hover:text-White"
                      }`}
                  >
                    Get a Quote
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </main>

      <PricingComparison />

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── Related Case Studies ──────────────────────────────── */}
      <RelatedCaseStudies />

      {/* ── FAQ Section ──────────────────────────────────────── */}
      <FAQSection items={PRICING_FAQ_ITEMS} />

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
