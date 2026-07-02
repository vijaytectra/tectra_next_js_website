"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface ServiceSubItem {
  name: string;
  href: string;
}

interface ServiceItem {
  name: string;
  href: string;
  subItems?: ServiceSubItem[];
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const MEGA_MENU_DATA: ServiceCategory[] = [
  {
    title: "SOFTWARE DEVELOPMENT",
    items: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "SaaS Development", href: "/services/saas-development" },
      { name: "API Development & Integration", href: "/services/api-development-integration" },
      { name: "Blockchain Technology", href: "/services/blockchain-technology" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "DevOps Services", href: "/services/devops-services" },
      { name: "Quality Assurance & Testing", href: "/services/quality-assurance-testing" },
    ],
  },
  {
    title: "BRAND & IDENTITY",
    items: [
      { name: "Brand Strategy", href: "/services/brand-strategy" },
      { name: "Brand Identity Design", href: "/services/brand-identity-design" },
      { name: "Marketing Collateral Design", href: "/services/marketing-collateral-design" },
      { name: "Video Production", href: "/services/video-production" },
    ],
  },
  {
    title: "DIGITAL MARKETING",
    items: [
      {
        name: "SEO",
        href: "/services/seo",
        subItems: [
          { name: "International SEO", href: "/services/international-seo" },
          { name: "SaaS SEO", href: "/services/saas-seo" },
          { name: "Real Estate SEO", href: "/services/real-estate-seo" },
          { name: "EdTech SEO", href: "/services/edtech-seo" },
        ],
      },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Social Media Marketing", href: "/services/social-media-marketing" },
      { name: "Pay Per Click (PPC)", href: "/services/pay-per-click-ppc" },
      { name: "Email Marketing & Automation", href: "/services/email-marketing-automation" },
    ],
  },
  {
    title: "UI / UX DESIGN",
    items: [
      { name: "Product Design", href: "/services/product-design" },
      { name: "Mobile UX Design", href: "/services/mobile-ux-design" },
      { name: "Web UX Design", href: "/services/web-ux-design" },
      { name: "Conversion Optimisation (CRO)", href: "/services/conversion-optimisation-cro" },
    ],
  },
];

export default function ServicesMegaMenu() {
  const [seoOpen, setSeoOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-0 w-full bg-white border-t border-b border-[#E4E4E4] shadow-2xl z-50 pt-10 pb-8 text-left cursor-default"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-6 md:px-8 lg:px-0 mb-10">
        {MEGA_MENU_DATA.map((cat, idx) => (
          <div key={idx} className="flex flex-col">
            {/* Category Header */}
            <h3
              style={{
                color: "#171717",
                fontFamily: "Aspekta, system-ui, sans-serif",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 450,
                lineHeight: "21px",
                textTransform: "uppercase",
              }}
              className="pb-3 mb-4 border-b border-[#E4E4E4]"
            >
              {cat.title}
            </h3>

            {/* Category Links */}
            <ul className="flex flex-col gap-1">
              {cat.items.map((item, i) => (
                <li key={i} className="flex flex-col">
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setSeoOpen(!seoOpen);
                        }}
                        className="flex items-center gap-2 hover:opacity-75 transition-opacity py-1 group cursor-pointer text-left"
                        style={{
                          color: "#404040",
                          fontFamily: "Aspekta, system-ui, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 350,
                          lineHeight: "21px",
                        }}
                      >
                        <span className="text-[#D1D1D6] font-light">—</span>
                        <span className="inline-flex items-center gap-1.5">
                          <span>{item.name}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="5"
                            viewBox="0 0 8 6"
                            fill="none"
                            className={`inline-block transition-transform duration-200 opacity-70 ${
                              seoOpen ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M1 1.5L4 4.5L7 1.5"
                              stroke="#111113"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      {seoOpen && (
                        <ul className="flex flex-col gap-1 border-l border-[#E4E4E4] ml-2.5 pl-3.5 py-1">
                          {item.subItems.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link
                                href={sub.href}
                                className="flex items-center gap-2 hover:opacity-75 hover:translate-x-1 transition-all duration-150 py-1"
                                style={{
                                  color: "#404040",
                                  fontFamily: "Aspekta, system-ui, sans-serif",
                                  fontSize: "13px",
                                  fontStyle: "normal",
                                  fontWeight: 350,
                                  lineHeight: "20px",
                                }}
                              >
                                <span className="text-[#D1D1D6] font-light">—</span>
                                <span>{sub.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 hover:opacity-75 hover:translate-x-1 transition-all duration-150 py-1"
                      style={{
                        color: "#404040",
                        fontFamily: "Aspekta, system-ui, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 350,
                        lineHeight: "21px",
                      }}
                    >
                      <span className="text-[#D1D1D6] font-light">—</span>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Gray Banner / Padding */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        <div className="w-full h-16 md:h-20 bg-[#D6D6D6]" />
      </div>
    </motion.div>
  );
}
