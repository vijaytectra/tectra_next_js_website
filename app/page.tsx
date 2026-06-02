import HeroScrollBackground from "@/components/HeroScrollBackground";
import AboutVision from "@/components/AboutVision";
import Blogs from "@/components/Blogs";
import Careers from "@/components/Careers";
import ClientLogos from "@/components/ClientLogos";
import ClientWorks from "@/components/ClientWorks";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurProducts from "@/components/OurProducts";
import OurServices from "@/components/OurServices";
import WhatWeDo from "@/components/WhatWeDo";

export default function HomePage() {
  return (
    <>
      <HeroScrollBackground />
      <main className="relative z-10">
      <Hero />
      <WhatWeDo />
      <OurServices />
      <OurProducts />
      <ClientWorks />
      <AboutVision />
      <Blogs />
      <ClientLogos />
      <Careers />
      <Footer />
    </main>
    </>
  );
}
