import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Healthcare | Tectra Technologies",
  description: "Designing intuitive digital experiences tailored to the unique needs of every industry.",
};

const HEALTHCARE_FAQ_ITEMS = [
  {
    question: "How does Tectra approach user experience design?",
    answer: "Tectra follows a user-centered design approach, focusing on user research, intuitive interfaces, and seamless experiences to create digital products that are both engaging and effective."
  },
  {
    question: "Do you provide both UI and UX design services?",
    answer: "Yes, we provide end-to-end UI and UX design services, ensuring both the visual aesthetics and user journey are optimized for the best possible experience."
  },
  {
    question: "How do you ensure designs are user-friendly and accessible?",
    answer: "We adhere to industry-standard accessibility guidelines (WCAG) and conduct thorough usability testing to ensure our designs are intuitive and accessible to all users."
  },
  {
    question: "Can Tectra redesign existing digital products or platforms?",
    answer: "Absolutely. We offer complete redesign services to modernize outdated interfaces, improve usability, and align with current design trends and business goals."
  },
  {
    question: "What tools and processes do you use for experience design?",
    answer: "Our process involves wireframing, prototyping, and user testing using industry-leading tools like Figma, Adobe XD, and user research platforms."
  }
];

export default function HealthcarePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#FFF] text-Black overflow-x-hidden">
      
      {/* ── Hero Section (Dark) ─────────────────────────── */}
      <div 
        className="w-full flex justify-center"
        style={{
          background: `linear-gradient(90deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.30) 50%, rgba(0, 0, 0, 0.30) 100%), url('/images/Frame%201984080690.png') center / cover no-repeat`
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
                Healthcare
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
                Designing intuitive healthcare experiences that simplify patient journeys and improve access to care.
              </h2>
            </div>
          </div>

        </section>
      </div>

      {/* ── Services / Offerings Section ──────────────────────── */}
      <div className="w-full bg-[#F6F6F6] flex justify-center py-10 md:py-[100px]">
        <section className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 xl:px-[120px] flex flex-col">
          <h2 className="font-dm-sans text-[32px] sm:text-[48px] font-light leading-normal text-[#171717] mb-8 sm:mb-[56px]">
            See what we can do for<br />your industry
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {[
              {
                title: "Portals Patients Love",
                desc: "We build intuitive web portals that make it easy for patients to book appointments, access records, and stay connected with their care team",
                img: "/images/image 153.png",
              },
              {
                title: "Apps for Better Care",
                desc: "We develop mobile apps that help patients manage their health, consult doctors remotely, and receive timely care from anywhere",
                img: "/images/image 154.png",
              },
              {
                title: "A Brand That Builds Trust",
                desc: "We craft healthcare brand identities that communicate reliability, professionalism, and compassion to every patient and stakeholder.",
                img: "/images/image 156.png",
              },
              {
                title: "Reach the Right Patients",
                desc: "We run targeted digital marketing campaigns that help healthcare providers grow their online presence and attract the right audience",
                img: "/images/image 157.png",
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col border-t border-[#D6D6D6] md:border-t-0 md:border-l border-[#D6D6D6] first:border-0 pt-6 md:pt-0 pl-0 md:pl-8 first:pl-0 pr-0 md:pr-8"
              >
                <h3 className="font-dm-sans text-[20px] font-medium text-[#000] mb-4">
                  {item.title}
                </h3>
                <p className="font-dm-sans text-[15px] text-[#666] leading-[1.6] mb-[40px] flex-grow">
                  {item.desc}
                </p>
                {/* Image Placeholder */}
                <div className="w-full max-w-[223px] aspect-[157/88] bg-[lightgray] rounded-[16px] overflow-hidden relative mt-auto">
                  {item.img ? (
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── What's New Section ────────────────────────────── */}
      <div className="w-full bg-[#FFF] flex justify-center py-10 md:py-[100px]">
        <section className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 xl:px-[120px] flex flex-col">
          <h2 className="font-dm-sans text-[32px] sm:text-[48px] font-light leading-normal text-[#171717] mb-8 sm:mb-[56px]">
            See what&apos;s New in<br />Healthcare Industry
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Card 1 */}
            <div 
              className="relative w-full aspect-square p-[32px] flex flex-col justify-between overflow-hidden group"
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('/images/image%20159.png') lightgray 50% / cover no-repeat`
              }}
            >
              <div className="relative z-10">
                <h3 className="font-dm-sans text-[22px] font-medium text-White">
                  Your Doctor is Now One Tap Away
                </h3>
              </div>
              <div className="relative z-10">
                <p className="font-dm-sans text-[14px] text-White/90 leading-[1.6] mb-6">
                  Healthcare providers are increasingly adopting self-service web portals that allow patients to book appointments, access medical records, and manage billing — reducing administrative load and improving patient satisfaction
                </p>
                <Link href="#" className="font-dm-sans text-[14px] font-medium text-White flex items-center gap-2 hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 10.8333V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H9.16667M17.5 2.5L10 10M17.5 7.5V2.5H12.5" stroke="#D6D6D6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full aspect-square bg-[#F5F5F5] p-[24px] flex flex-col justify-between items-start">
              <div>
                <h3 className="font-dm-sans text-[22px] font-medium text-[#171717]">
                  The Waiting Room is<br />Going Digital
                </h3>
              </div>
              <div>
                <p className="font-dm-sans text-[14px] text-[#404040] leading-[1.6] mb-6">
                  Healthcare providers are increasingly adopting self-service web portals that allow patients to book appointments, access medical records, and manage billing — reducing administrative load and improving patient satisfaction
                </p>
                <Link href="#" className="font-dm-sans text-[14px] font-medium text-[#737373] flex items-center gap-2 hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 10.8333V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H9.16667M17.5 2.5L10 10M17.5 7.5V2.5H12.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full aspect-square bg-[#F5F5F5] p-[24px] flex flex-col justify-between items-start">
              <div>
                <h3 className="font-dm-sans text-[22px] font-medium text-[#171717]">
                  First Impressions Now<br />Happen Online
                </h3>
              </div>
              <div>
                <p className="font-dm-sans text-[14px] text-[#404040] leading-[1.6] mb-6">
                  Patients today search and evaluate healthcare providers digitally before their first visit. A strong brand presence and targeted digital campaigns are becoming essential for hospitals and clinics to stay visible and trusted.
                </p>
                <Link href="#" className="font-dm-sans text-[14px] font-medium text-[#737373] flex items-center gap-2 hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 10.8333V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H9.16667M17.5 2.5L10 10M17.5 7.5V2.5H12.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div 
            className="w-full mt-6 p-6 sm:p-[40px] flex flex-col md:flex-row items-start md:items-center justify-between border-[1.768px] border-[#E5E5E5] gap-6"
            style={{ background: "linear-gradient(91deg, #000 0%, rgba(0, 0, 0, 0.70) 100%)" }}
          >
            <div className="flex flex-col">
              <h3 className="font-dm-sans text-[20px] font-medium text-White mb-1">
                Curious to Know More?
              </h3>
              <p className="font-dm-sans text-[14px] text-[#ADADAD]">
                Explore in-depth articles, industry trends and expert perspectives on our blog
              </p>
            </div>
            <Link 
              href="/blogs" 
              className="bg-White text-[#171717] font-dm-sans text-[14px] font-medium px-6 py-3 flex items-center gap-2 hover:bg-gray-100 transition-colors shrink-0"
            >
              Explore Blogs
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33334 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </section>
      </div>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <FAQSection items={HEALTHCARE_FAQ_ITEMS} />

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
