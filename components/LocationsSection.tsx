import Image from "next/image";

export default function LocationsSection() {
  const locations = [
    {
      country: "India",
      company: "Tectra Technologies",
      address: "301-B3, 3rd Floor, Alpha Block\nSSPDL Alphacity, Navalur, OMR\nTamil Nadu, Chennai - 600130",
      email: "info@tectratechnologies.com",
      phone: "99999-99999",
      image: "/logo/image 186.png",
    },
    {
      country: "USA",
      company: "Tectra Technologies LLC",
      address: "30 N Gould ST Ste R Sheridan,\nWY 82801. USA",
      email: "info@tectratechnologies.com",
      phone: "99999-99999",
      image: "/logo/image 188.png",
    },
    {
      country: "Malaysia",
      company: "Tectra Tech Sdn Bhd",
      address: "B-5-8, Plaza Mont Kiara,\nMont Kiara 50480,\nKuala Lumpur, Malaysia",
      email: "info@tectratechnologies.com",
      phone: "99999-99999",
      image: "/logo/image 187.png",
    }
  ];

  return (
    <section className="w-full bg-white pt-16 pb-8 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {locations.map((loc, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Image */}
              <div className="w-full aspect-[16/15] bg-[#EBEBEB] mb-8 relative flex items-center justify-center overflow-hidden">
                {loc.image ? (
                  <Image src={loc.image} alt={loc.country} fill className="object-cover" unoptimized />
                ) : (
                  <span className="font-dm-sans text-[14px] text-[#A3A3A3]">Image Placeholder</span>
                )}
              </div>

              {/* Country */}
              <div className="flex items-center gap-2 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
                </svg>
                <span className="font-dm-sans text-[18px] font-medium text-black">{loc.country}</span>
              </div>

              {/* Company */}
              <h3 className="font-dm-sans text-[22px] font-medium text-black mb-3">
                {loc.company}
              </h3>

              {/* Address */}
              <p className="font-dm-sans text-[15px] font-normal leading-[1.6] text-[#4A4A4A] mb-6 whitespace-pre-line">
                {loc.address}
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                  </svg>
                  <span className="font-dm-sans text-[14px] font-medium text-[#4A4A4A]">{loc.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.5 14.82C16.16 14.7 15.77 14.79 15.5 15.06L13.1 17.46C10.28 16.03 8.01 13.76 6.58 10.94L8.98 8.54C9.25 8.27 9.34 7.87 9.23 7.53C8.86 6.44 8.66 5.25 8.66 4.02C8.66 3.47 8.21 3.02 7.66 3.02H4.03C3.48 3.02 3 3.47 3 4.02C3 13.43 10.61 21.04 20.03 21.04C20.58 21.04 21.03 20.59 21.03 20.04V16.38C21.03 15.83 20.58 15.38 20.01 15.38Z"/>
                  </svg>
                  <span className="font-dm-sans text-[14px] font-medium text-[#4A4A4A]">{loc.phone}</span>
                </div>
              </div>

              {/* Get Directions */}
              <a href="#" className="flex items-center gap-2 text-[#2563EB] font-dm-sans text-[15px] font-medium hover:underline mt-auto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#2563EB] shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"/>
                </svg>
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
