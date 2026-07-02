"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const CAPABILITIES = [
  {
    title: "Software Development",
    subtext: "Smart software for growing businesses",
    bullets: ["Web Development", "Mobile App Development", "API Development and Integration", "Cloud Solutions"],
    iconName: "software",
  },
  {
    title: "Digital Marketing",
    subtext: "Turn visibility into revenue",
    bullets: ["SEO & Content", "Pay Per Click", "Email Marketing", "Social Media"],
    iconName: "marketing",
  },
  {
    title: "Brand & Identity",
    subtext: "Build a brand people remember",
    bullets: ["Brand Strategy", "Brand Identity Design", "Marketing Collateral Design", "Video Production"],
    iconName: "brand",
  },
  {
    title: "UI / UX Design",
    subtext: "Good design is not how it looks, it is how it works",
    bullets: ["Product Design", "Mobile UX Design", "Web UX Design", "Conversion Optimization (CRO)"],
    iconName: "uiux",
  },
];

// ── SVG Icons ─────────────────────────────────────────────────────────────
const softwareIcon = (
  <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5833 25.6667H6.41667C5.91041 25.6667 5.5 26.0771 5.5 26.5833V33.9167C5.5 34.4229 5.91041 34.8333 6.41667 34.8333H37.5833C38.0896 34.8333 38.5 34.4229 38.5 33.9167V26.5833C38.5 26.0771 38.0896 25.6667 37.5833 25.6667Z" fill="url(#paint0_linear_797_2579)" stroke="#AAAAAA" strokeWidth="0.458333"/>
    <path d="M37.5833 17.4167H6.41667C5.91041 17.4167 5.5 17.8271 5.5 18.3333V25.6667C5.5 26.1729 5.91041 26.5833 6.41667 26.5833H37.5833C38.0896 26.5833 38.5 26.1729 38.5 25.6667V18.3333C38.5 17.8271 38.0896 17.4167 37.5833 17.4167Z" fill="url(#paint1_linear_797_2579)" stroke="#BBBBBB" strokeWidth="0.458333"/>
    <path d="M37.5833 9.16666H6.41667C5.91041 9.16666 5.5 9.57706 5.5 10.0833V17.4167C5.5 17.9229 5.91041 18.3333 6.41667 18.3333H37.5833C38.0896 18.3333 38.5 17.9229 38.5 17.4167V10.0833C38.5 9.57706 38.0896 9.16666 37.5833 9.16666Z" fill="#111111"/>
    <path d="M10.0834 13.75H14.6667" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
    <path d="M17.4166 13.75H23.8333" stroke="white" strokeOpacity="0.5" strokeWidth="1.375" strokeLinecap="round"/>
    <path d="M10.0834 22H18.3334" stroke="#555555" strokeOpacity="0.5" strokeWidth="1.375" strokeLinecap="round"/>
    <path d="M21.0834 22H27.5" stroke="#AAAAAA" strokeWidth="1.375" strokeLinecap="round"/>
    <path d="M10.0834 30.25H16.5" stroke="#888888" strokeOpacity="0.44" strokeWidth="1.375" strokeLinecap="round"/>
    <defs>
      <linearGradient id="paint0_linear_797_2579" x1="1.3113e-06" y1="-1.21117e-05" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E8E8E8"/>
        <stop offset="1" stopColor="#B0B0B0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_797_2579" x1="1.3113e-06" y1="-1.16289e-05" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F4F4F4"/>
        <stop offset="1" stopColor="#CCCCCC"/>
      </linearGradient>
    </defs>
  </svg>
);

const marketingIcon = (
  <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 9.16666V34.8333" stroke="#DDDDDD" strokeWidth="0.641667"/>
    <path d="M5.5 34.8333H38.5" stroke="#DDDDDD" strokeWidth="0.641667"/>
    <path d="M5.5 26.5833H38.5" stroke="#EBEBEB" strokeWidth="0.458333" strokeDasharray="2.75 2.75"/>
    <path d="M5.5 18.3333H38.5" stroke="#EBEBEB" strokeWidth="0.458333" strokeDasharray="2.75 2.75"/>
    <path opacity="0.6" d="M5.5 31.1667L12.8333 25.6667L20.1667 20.1667L27.5 14.6667L34.8333 9.16668L38.5 7.33334V34.8333H5.5V31.1667Z" fill="url(#paint0_linear_797_2607)"/>
    <path d="M5.5 31.1667L12.8333 25.6667L20.1667 20.1667L27.5 14.6667L34.8333 9.16668L38.5 7.33334" stroke="#111111" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.8333 27.9583C14.0989 27.9583 15.125 26.9323 15.125 25.6667C15.125 24.401 14.0989 23.375 12.8333 23.375C11.5676 23.375 10.5416 24.401 10.5416 25.6667C10.5416 26.9323 11.5676 27.9583 12.8333 27.9583Z" fill="white" stroke="#111111" strokeWidth="1.375"/>
    <path d="M20.1667 22.4583C21.4323 22.4583 22.4583 21.4323 22.4583 20.1667C22.4583 18.901 21.4323 17.875 20.1667 17.875C18.901 17.875 17.875 18.901 17.875 20.1667C17.875 21.4323 18.901 22.4583 20.1667 22.4583Z" fill="white" stroke="#111111" strokeWidth="1.375"/>
    <path d="M27.5 16.9583C28.7657 16.9583 29.7917 15.9323 29.7917 14.6667C29.7917 13.401 28.7657 12.375 27.5 12.375C26.2344 12.375 25.2084 13.401 25.2084 14.6667C25.2084 15.9323 26.2344 16.9583 27.5 16.9583Z" fill="white" stroke="#111111" strokeWidth="1.375"/>
    <path d="M34.8334 11.9167C36.3522 11.9167 37.5834 10.6854 37.5834 9.16666C37.5834 7.64787 36.3522 6.41666 34.8334 6.41666C33.3146 6.41666 32.0834 7.64787 32.0834 9.16666C32.0834 10.6854 33.3146 11.9167 34.8334 11.9167Z" fill="#111111"/>
    <defs>
      <linearGradient id="paint0_linear_797_2607" x1="3.66667" y1="36.6667" x2="40.3333" y2="9.16668" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4E4E4"/>
        <stop offset="1" stopColor="#F8F8F8"/>
      </linearGradient>
    </defs>
  </svg>
);

const uiuxIcon = (
  <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5834 4.58334H6.41671C5.40419 4.58334 4.58337 5.40415 4.58337 6.41668V37.5833C4.58337 38.5959 5.40419 39.4167 6.41671 39.4167H37.5834C38.5959 39.4167 39.4167 38.5959 39.4167 37.5833V6.41668C39.4167 5.40415 38.5959 4.58334 37.5834 4.58334Z" fill="url(#paint0_linear_797_2638)" stroke="#CCCCCC" strokeWidth="0.733333"/>
    <path d="M20.1667 7.33334H8.25004C7.74378 7.33334 7.33337 7.74375 7.33337 8.25001V20.1667C7.33337 20.6729 7.74378 21.0833 8.25004 21.0833H20.1667C20.673 21.0833 21.0834 20.6729 21.0834 20.1667V8.25001C21.0834 7.74375 20.673 7.33334 20.1667 7.33334Z" fill="#111111"/>
    <path d="M35.75 7.33334H23.8333C23.327 7.33334 22.9166 7.74375 22.9166 8.25001V12.8333C22.9166 13.3396 23.327 13.75 23.8333 13.75H35.75C36.2562 13.75 36.6666 13.3396 36.6666 12.8333V8.25001C36.6666 7.74375 36.2562 7.33334 35.75 7.33334Z" fill="#DDDDDD"/>
    <path d="M28.4166 15.5833H23.8333C23.327 15.5833 22.9166 15.9937 22.9166 16.5V20.1667C22.9166 20.6729 23.327 21.0833 23.8333 21.0833H28.4166C28.9229 21.0833 29.3333 20.6729 29.3333 20.1667V16.5C29.3333 15.9937 28.9229 15.5833 28.4166 15.5833Z" fill="#BBBBBB"/>
    <path d="M35.75 15.5833H32.0833C31.577 15.5833 31.1666 15.9937 31.1666 16.5V20.1667C31.1666 20.6729 31.577 21.0833 32.0833 21.0833H35.75C36.2562 21.0833 36.6666 20.6729 36.6666 20.1667V16.5C36.6666 15.9937 36.2562 15.5833 35.75 15.5833Z" fill="#E8E8E8"/>
    <path d="M12.8334 22.9167H8.25004C7.74378 22.9167 7.33337 23.3271 7.33337 23.8333V35.75C7.33337 36.2563 7.74378 36.6667 8.25004 36.6667H12.8334C13.3396 36.6667 13.75 36.2563 13.75 35.75V23.8333C13.75 23.3271 13.3396 22.9167 12.8334 22.9167Z" fill="#E4E4E4"/>
    <path d="M34.8334 22.9167H16.5C15.9938 22.9167 15.5834 23.3271 15.5834 23.8333V28.4167C15.5834 28.9229 15.9938 29.3333 16.5 29.3333H34.8334C35.3396 29.3333 35.75 28.9229 35.75 28.4167V23.8333C35.75 23.3271 35.3396 22.9167 34.8334 22.9167Z" fill="#CCCCCC"/>
    <path d="M23.8334 31.1667H16.5C15.9938 31.1667 15.5834 31.5771 15.5834 32.0833V35.75C15.5834 36.2563 15.9938 36.6667 16.5 36.6667H23.8334C24.3396 36.6667 24.75 36.2563 24.75 35.75V32.0833C24.75 31.5771 24.3396 31.1667 23.8334 31.1667Z" fill="#BBBBBB"/>
    <path d="M34.8334 31.1667H27.5C26.9938 31.1667 26.5834 31.5771 26.5834 32.0833V35.75C26.5834 36.2563 26.9938 36.6667 27.5 36.6667H34.8334C35.3396 36.6667 35.75 36.2563 35.75 35.75V32.0833C35.75 31.5771 35.3396 31.1667 34.8334 31.1667Z" fill="#888888"/>
    <path d="M14.2084 7.33334V21.0833" stroke="white" strokeOpacity={0.19} strokeWidth="0.641667"/>
    <path d="M7.33337 14.2083H21.0834" stroke="white" strokeOpacity={0.19} strokeWidth="0.641667"/>
    <defs>
      <linearGradient id="paint0_linear_797_2638" x1="4.05798e-05" y1="1.00622e-05" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5F5F5"/>
        <stop offset="1" stopColor="#E0E0E0"/>
      </linearGradient>
    </defs>
  </svg>
);

const brandIcon = (
  <svg width="40" height="40" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.0334 0.400208L29.7 6.81687V19.6502C29.7 26.9835 22.3667 33.4002 15.0334 36.1502C7.70003 33.4002 0.366699 26.9835 0.366699 19.6502V6.81687L15.0334 0.400208Z" fill="url(#paint0_linear_797_2670)" stroke="#CCCCCC" strokeWidth="0.733333"/>
    <path d="M15.0334 4.5L25.8 9.2V19.65C25.8 25.5 20.3 30.5 15.0334 32.7C9.7 30.5 4.2 25.5 4.2 19.65V9.2L15.0334 4.5Z" fill="#111111" stroke="#111111" strokeWidth="0.733333"/>
    <text x="15.0334" y="21.5" fill="white" fontFamily="'Funnel Display', system-ui, sans-serif" fontSize="12" fontWeight="300" textAnchor="middle">T</text>
    <defs>
      <linearGradient id="paint0_linear_797_2670" x1="-3.29997" y1="-0.516459" x2="33.3667" y2="36.1502" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F8F8F8"/>
        <stop offset="1" stopColor="#D8D8D8"/>
      </linearGradient>
    </defs>
  </svg>
);

const automationIcon = (
  <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 22L9.16663 9.16666" stroke="#CCCCCC" strokeWidth="0.916667"/>
    <path d="M22 22L34.8333 9.16666" stroke="#CCCCCC" strokeWidth="0.916667"/>
    <path d="M22 22L9.16663 34.8333" stroke="#CCCCCC" strokeWidth="0.916667"/>
    <path d="M22 22L34.8333 34.8333" stroke="#CCCCCC" strokeWidth="0.916667"/>
    <path d="M22 22V6.41666" stroke="#CCCCCC" strokeWidth="0.916667"/>
    <path d="M22 22V37.5833" stroke="#CCCCCC" strokeWidth="0.916667"/>
    <path d="M9.16667 12.8333C11.1917 12.8333 12.8333 11.1917 12.8333 9.16667C12.8333 7.14162 11.1917 5.5 9.16667 5.5C7.14162 5.5 5.5 7.14162 5.5 9.16667C5.5 11.1917 7.14162 12.8333 9.16667 12.8333Z" fill="url(#paint0_radial_797_2693)" stroke="#BBBBBB" strokeWidth="0.733333"/>
    <path d="M34.8334 12.8333C36.8585 12.8333 38.5001 11.1917 38.5001 9.16667C38.5001 7.14162 36.8585 5.5 34.8334 5.5C32.8084 5.5 31.1667 7.14162 31.1667 9.16667C31.1667 11.1917 32.8084 12.8333 34.8334 12.8333Z" fill="url(#paint1_radial_797_2693)" stroke="#BBBBBB" strokeWidth="0.733333"/>
    <path d="M9.16667 38.5C11.1917 38.5 12.8333 36.8584 12.8333 34.8333C12.8333 32.8083 11.1917 31.1667 9.16667 31.1667C7.14162 31.1667 5.5 32.8083 5.5 34.8333C5.5 36.8584 7.14162 38.5 9.16667 38.5Z" fill="url(#paint2_radial_797_2693)" stroke="#BBBBBB" strokeWidth="0.733333"/>
    <path d="M34.8334 38.5C36.8585 38.5 38.5001 36.8584 38.5001 34.8333C38.5001 32.8083 36.8585 31.1667 34.8334 31.1667C32.8084 31.1667 31.1667 32.8083 31.1667 34.8333C31.1667 36.8584 32.8084 38.5 34.8334 38.5Z" fill="url(#paint3_radial_797_2693)" stroke="#BBBBBB" strokeWidth="0.733333"/>
    <path d="M22 10.0833C24.0251 10.0833 25.6667 8.44171 25.6667 6.41667C25.6667 4.39162 24.0251 2.75 22 2.75C19.975 2.75 18.3334 4.39162 18.3334 6.41667C18.3334 8.44171 19.975 10.0833 22 10.0833Z" fill="url(#paint4_radial_797_2693)" stroke="#BBBBBB" strokeWidth="0.733333"/>
    <path d="M22 41.25C24.0251 41.25 25.6667 39.6084 25.6667 37.5833C25.6667 35.5583 24.0251 33.9167 22 33.9167C19.975 33.9167 18.3334 35.5583 18.3334 37.5833C18.3334 39.6084 19.975 41.25 22 41.25Z" fill="url(#paint5_radial_797_2693)" stroke="#BBBBBB" strokeWidth="0.733333"/>
    <path d="M22 30.25C26.5563 30.25 30.25 26.5563 30.25 22C30.25 17.4437 26.5563 13.75 22 13.75C17.4437 13.75 13.75 17.4437 13.75 22C13.75 26.5563 17.4437 30.25 22 30.25Z" fill="#111111"/>
    <path d="M22 26.5833C24.5313 26.5833 26.5833 24.5313 26.5833 22C26.5833 19.4687 24.5313 17.4167 22 17.4167C19.4687 17.4167 17.4166 19.4687 17.4166 22C17.4166 24.5313 19.4687 26.5833 22 26.5833Z" stroke="white" strokeOpacity="0.314" strokeWidth="0.916667" strokeDasharray="1.83 1.83"/>
    <path d="M22 33.9167C28.5814 33.9167 33.9167 28.5814 33.9167 22C33.9167 15.4186 28.5814 10.0833 22 10.0833C15.4186 10.0833 10.0834 15.4186 10.0834 22C10.0834 28.5814 15.4186 33.9167 22 33.9167Z" stroke="#111111" strokeOpacity="0.125" strokeWidth="0.916667"/>
    <defs>
      <radialGradient id="paint0_radial_797_2693" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.16667 9.16667) scale(3.66667)">
        <stop stopColor="#F8F8F8"/>
        <stop offset="1" stopColor="#D0D0D0"/>
      </radialGradient>
      <radialGradient id="paint1_radial_797_2693" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.8334 9.16667) scale(3.66667)">
        <stop stopColor="#F8F8F8"/>
        <stop offset="1" stopColor="#D0D0D0"/>
      </radialGradient>
      <radialGradient id="paint2_radial_797_2693" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.16667 34.8333) scale(3.66667)">
        <stop stopColor="#F8F8F8"/>
        <stop offset="1" stopColor="#D0D0D0"/>
      </radialGradient>
      <radialGradient id="paint3_radial_797_2693" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.8334 34.8333) scale(3.66667)">
        <stop stopColor="#F8F8F8"/>
        <stop offset="1" stopColor="#D0D0D0"/>
      </radialGradient>
      <radialGradient id="paint4_radial_797_2693" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22 6.41667) scale(3.66667)">
        <stop stopColor="#F8F8F8"/>
        <stop offset="1" stopColor="#D0D0D0"/>
      </radialGradient>
      <radialGradient id="paint5_radial_797_2693" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22 37.5833) scale(3.66667)">
        <stop stopColor="#F8F8F8"/>
        <stop offset="1" stopColor="#D0D0D0"/>
      </radialGradient>
    </defs>
  </svg>
);

const strategyIcon = (
  <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 36 C 14 30, 20 22, 37 9" stroke="#E4E4E4" strokeWidth="4" fill="none" strokeLinecap="round"/>
    
    {/* Node 1 */}
    <circle cx="8" cy="36" r="5" fill="url(#paint0_linear_797_2730)" stroke="#BBBBBB" strokeWidth="0.916667"/>
    <text x="8" y="38.5" fill="#666666" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="600" textAnchor="middle">1</text>
    
    {/* Node 2 */}
    <circle cx="18" cy="26" r="5" fill="url(#paint0_linear_797_2730)" stroke="#BBBBBB" strokeWidth="0.916667"/>
    <text x="18" y="28.5" fill="#666666" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="600" textAnchor="middle">2</text>
    
    {/* Node 3 */}
    <circle cx="28" cy="16" r="5" fill="url(#paint0_linear_797_2730)" stroke="#BBBBBB" strokeWidth="0.916667"/>
    <text x="28" y="18.5" fill="#666666" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="600" textAnchor="middle">3</text>
    
    {/* Star Node */}
    <circle cx="37" cy="9" r="6" fill="#111111" stroke="#111111" strokeWidth="0.916667"/>
    <text x="37" y="11.8" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" textAnchor="middle">★</text>
    
    <defs>
      <linearGradient id="paint0_linear_797_2730" x1="-2.29175" y1="12.375" x2="41.7083" y2="-31.625" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0E0E0"/>
        <stop offset="1" stopColor="#F5F5F5"/>
      </linearGradient>
    </defs>
  </svg>
);

const getIcon = (name: string) => {
  switch (name) {
    case "software": return softwareIcon;
    case "marketing": return marketingIcon;
    case "uiux": return uiuxIcon;
    case "brand": return brandIcon;
    case "automation": return automationIcon;
    case "strategy": return strategyIcon;
    default: return null;
  }
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

const getCellClasses = (i: number) => {
  // Base classes: layout, padding, and border color
  let classes = "flex flex-col items-start p-6 lg:p-[32px_20px] border-[#E4E4E4]";
  
  // Bottom border logic:
  // Mobile: Bottom border on index 0, 1, 2. No bottom border on last item (index 3).
  // Tablet (MD): Bottom border on row 1 (index 0, 1). No bottom border on row 2 (index 2, 3).
  // Desktop (LG): No bottom border on any cell (the grid container's border-b handles the line).
  if (i === 3) {
    classes += " border-b-0";
  } else {
    classes += " border-b md:border-b-0";
  }
  if (i < 2) {
    classes += " md:border-b lg:border-b-0";
  }

  // Right border logic:
  // Mobile: No right borders.
  // Tablet (MD): Right border on odd items (index 0, 2).
  // Desktop (LG): Right border on index 0, 1, 2. No right border on index 3.
  if (i % 2 === 0) {
    classes += " md:border-r";
  } else if (i === 1) {
    classes += " lg:border-r";
  }
  
  return classes;
};

export default function WhatWeDo() {
  return (
    <section 
      className="w-full bg-white pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        
        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-6 mb-16"
        >
          <div className="flex-1">
            <span 
              className="mb-6 block"
              style={{
                color: "#2B2B2B",
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontSize: "11.52px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "17.28px",
                letterSpacing: "2.995px",
                textTransform: "uppercase",
              }}
            >
              03 &nbsp; WHAT WE DO
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-[49.6px] leading-[38px] sm:leading-[46px] lg:leading-[52.576px]"
              style={{
                width: "100%",
                maxWidth: "800px",
                color: "#111",
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontStyle: "normal",
                fontWeight: 300,
                letterSpacing: "-0.992px",
              }}
            >
              Everything your business needs.<br />
              Built by one team
            </h2>
          </div>
          <div className="w-full lg:w-[220px] shrink-0 lg:mt-11">
            <p 
              className="text-left lg:text-right"
              style={{
                color: "#2B2B2B",
                fontFamily: "Aspekta, system-ui, sans-serif",
                fontSize: "14.08px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "22.88px",
              }}
            >
              Every service contributes to<br />
              'YOUR GROWTH' strategically
            </p>
          </div>
        </motion.div>

        {/* 4-Column Grid Section */}
        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full border-t border-b border-[#E4E4E4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {CAPABILITIES.map((cap, i) => (
            <div 
              key={i} 
              className={getCellClasses(i)}
            >
              
              {/* Icon Container */}
              <div className="mb-6 h-[40px] flex items-center justify-start">
                {getIcon(cap.iconName)}
              </div>

              {/* Title */}
              <h3 
                className="mb-1.5"
                style={{
                  width: "100%",
                  color: "#111",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontSize: "19.2px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "24px",
                }}
              >
                {cap.title}
              </h3>

              {/* Subtext */}
              <span 
                className="mb-8 block"
                style={{
                  color: "#666666",
                  fontFamily: "Aspekta, system-ui, sans-serif",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16.5px",
                  minHeight: "33px",
                }}
              >
                {cap.subtext}
              </span>

              {/* Bullet list */}
              <div className="flex flex-col gap-2.5 mb-8">
                {cap.bullets.map((bullet, idx) => (
                  <span 
                    key={idx}
                    style={{
                      color: "#2B2B2B",
                      fontFamily: "Aspekta, system-ui, sans-serif",
                      fontSize: "12.48px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "18.72px",
                      letterSpacing: "0.6px",
                    }}
                  >
                    · &nbsp; {bullet}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </motion.div>

        {/* Footer Section */}
        <motion.div 
          variants={fadeInUp}
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mt-16"
        >
          <p 
            style={{
              width: "100%",
              maxWidth: "512px",
              color: "#2B2B2B",
              fontFamily: "Aspekta, system-ui, sans-serif",
              fontSize: "14.08px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "22.88px",
            }}
          >
            All the services run together as a single system. Strategy sets the target; services aim and execute it.
          </p>
          <div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-[#111] text-[#111] hover:bg-[#111] hover:text-white transition-all duration-300"
              style={{
                padding: "16px 28px",
                fontFamily: '"Funnel Display", system-ui, sans-serif',
                fontSize: "11.84px",
                fontWeight: 300,
                letterSpacing: "1.421px",
                textTransform: "uppercase",
              }}
            >
              SEE ALL CAPABILITIES &nbsp; →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
