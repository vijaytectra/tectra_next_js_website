"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ClientReviewsSection() {
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const maxScroll = target.scrollWidth - target.clientWidth;
    if (maxScroll <= 0) return;
    const scrollPercent = target.scrollLeft / maxScroll;
    setProgress(scrollPercent);
  };
  const reviews = [
    {
      text: "Tectra Technologies delivered exactly what we needed. Their team was responsive, professional, and focused on building a solution that matched our business goals.",
      name: "Monish",
      title: "Operations Head, VMLS",
      avatar: "/images/placeholder-avatar.jpg",
      platform: "google"
    },
    {
      text: "Great experience working with Tectra. The project was completed on time with impressive attention to detail.",
      name: "Shivasanthosh",
      title: "Founder, Stratton Oakmont",
      avatar: "/images/placeholder-avatar.jpg",
      platform: "linkedin"
    },
    {
      text: "Tectra delivered a seamless web experience and exceeded our expectations.",
      name: "Akshaya",
      title: "Founder, AVMC",
      avatar: "/images/placeholder-avatar.jpg",
      platform: "google"
    }
  ];

  return (
    <section className="w-full bg-[#EAEAEA] pt-8 pb-16 md:pt-[100px] md:pb-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
        
        {/* Top Header */}
        <h2 className="font-dm-sans text-[32px] md:text-[40px] font-normal text-[#2A2A2A] mb-8 lg:mb-16">
          Our Client Reviews
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          
          {/* Left Column */}
          <div className="w-full lg:w-[320px] shrink-0 flex flex-col items-start">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="text-[#808080] mb-4 lg:mb-8" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
            </svg>
            
            <h3 className="font-dm-sans text-[28px] md:text-[32px] font-medium text-[#4A4A4A] leading-[1.2] mb-8 lg:mb-12">
              What our<br/>customers are<br/>Saying
            </h3>

            <div className="hidden lg:flex items-center gap-8 mt-10">
              <button
                onClick={scrollLeft}
                className="text-[#737373] hover:text-black transition-colors duration-200 cursor-pointer p-1"
                aria-label="Previous review"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none stroke-linecap-round stroke-linejoin-round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>

              {/* Scroll Progress Bar */}
              <div className="relative w-[50px] h-[6px] bg-neutral-200 rounded-full">
                <div
                  className="absolute top-0 left-0 w-[20px] h-full bg-[#525252] rounded-full transition-transform duration-100 ease-out"
                  style={{
                    transform: `translateX(${progress * 30}px)`
                  }}
                />
              </div>

              <button
                onClick={scrollRight}
                className="text-[#737373] hover:text-black transition-colors duration-200 cursor-pointer p-1"
                aria-label="Next review"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none stroke-linecap-round stroke-linejoin-round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column (Cards container) */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex-1 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="flex items-stretch gap-6 w-max pb-4">
              {reviews.map((review, index) => (
                <div key={index} className="w-[320px] md:w-[396px] bg-[#FFF] p-8 flex flex-col rounded-[2px] snap-start">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#808080]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>

                    {review.platform === 'google' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    )}
                    {review.platform === 'linkedin' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452H16.89V14.881C16.89 13.553 16.865 11.848 15.044 11.848C13.201 11.848 12.918 13.288 12.918 14.786V20.452H9.362V9H12.778V10.565H12.825C13.301 9.664 14.464 8.718 16.182 8.718C19.774 8.718 20.447 11.08 20.447 14.166V20.452ZM5.337 7.433C4.195 7.433 3.273 6.505 3.273 5.367C3.273 4.227 4.195 3.3 5.337 3.3C6.476 3.3 7.403 4.227 7.403 5.367C7.403 6.505 6.476 7.433 5.337 7.433ZM7.118 20.452H3.553V9H7.118V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.225 0Z" />
                      </svg>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="font-dm-sans text-[15px] leading-[1.6] text-[#4A4A4A] mb-8 flex-1">
                    {review.text}
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-[#EBEBEB] rounded-full relative overflow-hidden shrink-0 flex items-center justify-center">
                      {review.avatar ? (
                        <span className="font-dm-sans text-[16px] font-bold text-[#808080]">{review.name.charAt(0)}</span>
                      ) : null}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-dm-sans text-[15px] font-medium text-black">{review.name}</span>
                      <span className="font-dm-sans text-[12px] text-[#737373]">{review.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex lg:hidden items-center justify-start gap-8 mt-2 w-full">
            <button
              onClick={scrollLeft}
              className="text-[#737373] hover:text-black transition-colors duration-200 cursor-pointer p-1"
              aria-label="Previous review"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none stroke-linecap-round stroke-linejoin-round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            {/* Scroll Progress Bar */}
            <div className="relative w-[50px] h-[6px] bg-neutral-200 rounded-full">
              <div
                className="absolute top-0 left-0 w-[20px] h-full bg-[#525252] rounded-full transition-transform duration-100 ease-out"
                style={{
                  transform: `translateX(${progress * 30}px)`
                }}
              />
            </div>

            <button
              onClick={scrollRight}
              className="text-[#737373] hover:text-black transition-colors duration-200 cursor-pointer p-1"
              aria-label="Next review"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none stroke-linecap-round stroke-linejoin-round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
