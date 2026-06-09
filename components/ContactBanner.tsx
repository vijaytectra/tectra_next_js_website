import Image from "next/image";

export default function ContactBanner() {
  return (
    <div className="w-full bg-[#171717] py-8 border-t border-[#2A2A2A]">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4">

        {/* Email */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shrink-0 text-black relative">
            <Image src="/logo/mail-svgrepo-com 1.svg" alt="Email" width={24} height={24} className="object-contain" unoptimized />
          </div>
          <div className="flex flex-col">
            <h4 className="font-dm-sans text-[16px] font-semibold text-white mb-1">Email</h4>
            <a href="mailto:info@tectratechnologies.com" className="font-dm-sans text-[14px] text-[#ADADAD] hover:text-white transition-colors">
              info@tectratechnologies.com
            </a>
          </div>
        </div>

        {/* Call Us */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shrink-0 text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.5 14.82C16.16 14.7 15.77 14.79 15.5 15.06L13.1 17.46C10.28 16.03 8.01 13.76 6.58 10.94L8.98 8.54C9.25 8.27 9.34 7.87 9.23 7.53C8.86 6.44 8.66 5.25 8.66 4.02C8.66 3.47 8.21 3.02 7.66 3.02H4.03C3.48 3.02 3 3.47 3 4.02C3 13.43 10.61 21.04 20.03 21.04C20.58 21.04 21.03 20.59 21.03 20.04V16.38C21.03 15.83 20.58 15.38 20.01 15.38Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="font-dm-sans text-[16px] font-semibold text-white mb-1">Call Us</h4>
            <a href="tel:info@tectratechnologies.com" className="font-dm-sans text-[14px] text-[#ADADAD] hover:text-white transition-colors">
              info@tectratechnologies.com
            </a>
          </div>
        </div>

        {/* Chat on WhatsApp */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shrink-0 text-black relative">
            <Image src="/logo/Page-1.svg" alt="WhatsApp" width={24} height={24} className="object-contain" unoptimized />
          </div>
          <div className="flex flex-col">
            <h4 className="font-dm-sans text-[16px] font-semibold text-white mb-1">Chat on WhatsApp</h4>
            <a href="https://wa.me/1234567890" className="font-dm-sans text-[14px] text-[#ADADAD] hover:text-white transition-colors">
              info@tectratechnologies.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
