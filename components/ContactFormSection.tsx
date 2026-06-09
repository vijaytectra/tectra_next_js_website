"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Lightbulb, Repeat, Building2, Clock, ShieldCheck } from "lucide-react";

export default function ContactFormSection() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile App Development" },
    { value: "cloud", label: "Cloud Solutions" },
    { value: "digital", label: "Digital Transformation" }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">

        {/* Left Column: Form */}
        <div className="flex-1 flex flex-col">
          <form className="w-full flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="flex flex-col gap-3">
                <label className="flex flex-col justify-center font-dm-sans text-[14px] font-normal leading-[1.5] text-[#000]">First Name*</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-[56px] px-[24px] border-[0.5px] border-[#171717] font-dm-sans text-[14px] font-normal leading-[1.5] text-[#111111] placeholder:text-[#737373] focus:outline-none transition-colors"
                />
              </div>

              {/* Select Service */}
              <div className="flex flex-col gap-3" ref={dropdownRef}>
                <label className="flex flex-col justify-center font-dm-sans text-[14px] font-normal leading-[1.5] text-[#000]">Select Related Service</label>
                <div className="relative">
                  <div
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                    className="w-full h-[56px] px-[24px] border-[0.5px] border-[#171717] font-dm-sans text-[14px] font-normal leading-[1.5] text-[#737373] cursor-pointer flex items-center justify-between transition-colors bg-transparent"
                    style={{ borderColor: isServiceOpen ? '#111111' : '#171717' }}
                  >
                    <span className={selectedService ? "text-[#111111]" : "text-[#737373]"}>
                      {selectedService ? services.find(s => s.value === selectedService)?.label : "Select your Service"}
                    </span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isServiceOpen ? 'rotate-180' : ''}`}>
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  
                  {/* Dropdown Menu */}
                  {isServiceOpen && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#E5E5E5] rounded-[2px] shadow-lg z-10 py-2">
                      {services.map((service) => (
                        <div
                          key={service.value}
                          onClick={() => {
                            setSelectedService(service.value);
                            setIsServiceOpen(false);
                          }}
                          className="px-4 py-3 font-dm-sans text-[14px] font-normal leading-[1.5] text-[#737373] hover:bg-neutral-50 hover:text-[#111111] cursor-pointer transition-colors"
                        >
                          {service.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3">
                <label className="flex flex-col justify-center font-dm-sans text-[14px] font-normal leading-[1.5] text-[#000]">Email*</label>
                <input
                  type="email"
                  placeholder="Enter Your Email ID"
                  className="w-full h-[56px] px-[24px] border-[0.5px] border-[#171717] font-dm-sans text-[14px] font-normal leading-[1.5] text-[#111111] placeholder:text-[#737373] focus:outline-none transition-colors"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-3">
                <label className="flex flex-col justify-center font-dm-sans text-[14px] font-normal leading-[1.5] text-[#000]">Mobile Number*</label>
                <input
                  type="tel"
                  placeholder="Enter Your Mobile Number"
                  className="w-full h-[56px] px-[24px] border-[0.5px] border-[#171717] font-dm-sans text-[14px] font-normal leading-[1.5] text-[#111111] placeholder:text-[#737373] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Tell us more */}
            <div className="flex flex-col gap-3">
              <label className="flex flex-col justify-center font-dm-sans text-[14px] font-normal leading-[1.5] text-[#000]">Tell us more</label>
              <textarea
                placeholder="Tell us what you're looking for"
                rows={5}
                className="w-full px-[24px] py-4 border-[0.5px] border-[#171717] font-dm-sans text-[14px] font-normal leading-[1.5] text-[#111111] placeholder:text-[#737373] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit & Trust Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
              <button
                type="submit"
                className="bg-[#111111] text-white font-dm-sans text-[15px] font-medium px-8 py-4 flex items-center justify-center gap-4 hover:bg-black transition-colors rounded-[2px] min-w-[240px]"
              >
                Request a Consultation
                <ArrowRight size={18} />
              </button>

              <div className="flex items-center gap-3 max-w-[260px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="shrink-0">
                  <path d="M19.3662 2.06616C19.765 1.86676 20.235 1.86676 20.6338 2.06616L33.9668 8.73315C34.4467 8.97308 34.7499 9.4633 34.75 9.99976V19.9998C34.75 24.3779 33.3368 28.0361 30.8047 31.032C28.295 34.0008 24.7409 36.2582 20.5361 37.9783C20.1927 38.1188 19.8073 38.1188 19.4639 37.9783C15.2591 36.2582 11.7058 34.0008 9.19629 31.032C6.664 28.0361 5.25 24.378 5.25 19.9998V9.99976C5.25012 9.46329 5.55335 8.97307 6.0332 8.73315L19.3662 2.06616ZM25.5938 14.075C26.1049 13.4826 26.9995 13.4165 27.5918 13.9275C28.1842 14.4386 28.2503 15.3331 27.7393 15.9255L19.1123 25.9255C18.8566 26.2219 18.4888 26.3995 18.0977 26.4158C17.7068 26.4319 17.3263 26.2855 17.0469 26.0115L12.3418 21.3962C11.7832 20.8484 11.7744 19.9509 12.3223 19.3923C12.87 18.8342 13.7667 18.8253 14.3252 19.3728L17.7627 22.7449L17.9531 22.9314L18.127 22.7292L25.5938 14.075ZM31.917 10.8757L31.7783 10.8064L20.1113 4.97339L20 4.91772L19.8887 4.97339L8.22168 10.8064L8.08301 10.8757V19.9998C8.08301 23.7125 9.26221 26.7217 11.3594 29.2029C13.3645 31.5751 16.2583 33.5199 19.9014 35.0886L20 35.1316L20.0986 35.0886C23.7417 33.5199 26.6355 31.5751 28.6406 29.2029C30.7378 26.7217 31.917 23.7125 31.917 19.9998V10.8757Z" fill="#737373" stroke="white" strokeWidth="0.5" />
                </svg>
                <p className="font-dm-sans text-[13.333px] font-medium leading-[1.3] text-[#737373] max-w-[186px]">
                  Your information is Secure with us and never be shared
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column: Why Work With Tectra */}
        <div className="w-full lg:w-[446px] shrink-0">
          <div className="w-full lg:w-[446px] lg:h-[446px] bg-[#171717] text-white py-8 px-10 flex flex-col items-start gap-12 rounded-[2px]">
            <h3 className="font-dm-sans text-[28px] md:text-[32px] font-normal leading-[1.2]">
              Why Work with Tectra ?
            </h3>

            <div className="flex flex-col gap-6 flex-1 justify-center">
              {/* Item 1 */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center text-black relative">
                  <Image src="/logo/idea 1.svg" alt="Idea" width={24} height={24} className="object-contain" unoptimized />
                </div>
                <p className="font-dm-sans text-[16px] font-normal text-[#ADADAD] leading-normal pt-1.5 max-w-[277px]">
                  End - End Digital Solutions under one roof
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center text-black relative">
                  <Image src="/logo/Frame 1984080715.svg" alt="Process" width={24} height={24} className="object-contain" unoptimized />
                </div>
                <p className="font-dm-sans text-[16px] font-normal text-[#ADADAD] leading-normal pt-1.5 max-w-[277px]">
                  Agile and Transparent Process fo every project
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center text-black relative">
                  <Image src="/logo/building-svgrepo-com 1.svg" alt="Building" width={18} height={18} className="object-contain shrink-0 aspect-square" unoptimized />
                </div>
                <p className="font-dm-sans text-[16px] font-normal text-[#ADADAD] leading-normal pt-1.5 max-w-[277px]">
                  Scalable solutions that grow with your business
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center text-black relative">
                  <Image src="/logo/Vector.svg" alt="Clock" width={24} height={24} className="object-contain" unoptimized />
                </div>
                <p className="font-dm-sans text-[16px] font-normal text-[#ADADAD] leading-normal pt-1.5 max-w-[277px]">
                  On Time Delivery and post Launch support
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
