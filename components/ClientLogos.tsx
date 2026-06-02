"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "./ui/SectionLabel";
import { images } from "@/lib/images";

const CLIENT_LOGO_COUNT = 11;

export default function ClientLogos() {
  return (
    <section
      id="clients"
      className="section-dark-surface w-full overflow-hidden py-16 sm:py-24"
      aria-labelledby="clients-heading"
    >
      <div className="section-shell flex flex-col gap-12 lg:gap-16">
        <div className="flex max-w-[607px] flex-col gap-3">
          <SectionLabel>OUR CLIENTS</SectionLabel>
          <h2
            id="clients-heading"
            className="font-dm-sans text-2xl font-normal leading-10 text-color-neutral-50 sm:text-3xl"
          >
            We Value Our Clients
          </h2>
        </div>

        <div
          className="flex flex-wrap items-center content-center self-stretch justify-start w-full"
          style={{
            borderLeft: "0.8px solid var(--color-neutral-700, #404040)",
          }}
        >
          {Array.from({ length: CLIENT_LOGO_COUNT }, (_, index) => {
            const logoIndex = index + 1;
            const isFirstBox = logoIndex === 1;
            const isSecondBox = logoIndex === 2;
            const isThirdBox = logoIndex === 3;
            const isFourthBox = logoIndex === 4;
            const isFifthBox = logoIndex === 5;
            const isSixthBox = logoIndex === 6;
            const isSeventhBox = logoIndex === 7;
            const isEighthBox = logoIndex === 8;
            const isNinthBox = logoIndex === 9;
            const isTenthBox = logoIndex === 10;
            const isEleventhBox = logoIndex === 11;
            const isCustomBox = isFirstBox || isSecondBox || isThirdBox || isFourthBox || isFifthBox || isSixthBox || isSeventhBox || isEighthBox || isNinthBox || isTenthBox || isEleventhBox;

            const imageClass = isCustomBox
              ? "brightness-90 transition-all duration-300 hover:brightness-100 object-contain shrink-0 max-w-[85%] max-h-[70%]"
              : "max-h-14 w-auto max-w-[85%] object-contain sm:max-h-16 brightness-90 transition-all duration-300 hover:brightness-100";

            let width = 224;
            let height = 80;
            let inlineStyle: React.CSSProperties | undefined = undefined;

            if (isFirstBox) {
              width = 75;
              height = 72;
              inlineStyle = { width: "100%", maxWidth: "75px", height: "auto", aspectRatio: "25/24" };
            } else if (isSecondBox) {
              width = 51;
              height = 80;
              inlineStyle = { height: "100%", maxHeight: "80px", width: "auto", aspectRatio: "30/47" };
            } else if (isThirdBox) {
              width = 118;
              height = 64;
              inlineStyle = { width: "100%", maxWidth: "118.154px", height: "auto", aspectRatio: "24/13" };
            } else if (isFourthBox) {
              width = 77;
              height = 64;
              inlineStyle = { width: "100%", maxWidth: "76.8px", height: "auto", aspectRatio: "6/5" };
            } else if (isFifthBox) {
              width = 224;
              height = 56;
              inlineStyle = { width: "100%", maxWidth: "224px", height: "auto", aspectRatio: "4/1" };
            } else if (isSixthBox) {
              width = 224;
              height = 56;
              inlineStyle = { width: "100%", maxWidth: "224px", height: "auto", aspectRatio: "4/1" };
            } else if (isSeventhBox) {
              width = 99;
              height = 64;
              inlineStyle = { width: "100%", maxWidth: "99.097px", height: "auto", aspectRatio: "48/31" };
            } else if (isEighthBox) {
              width = 238;
              height = 48;
              inlineStyle = { width: "100%", maxWidth: "238px", height: "auto", aspectRatio: "119/24" };
            } else if (isNinthBox) {
              width = 175;
              height = 64;
              inlineStyle = { width: "100%", maxWidth: "174.711px", height: "auto", aspectRatio: "174.71/64.00" };
            } else if (isTenthBox) {
              width = 152;
              height = 80;
              inlineStyle = { width: "100%", maxWidth: "151.579px", height: "auto", aspectRatio: "36/19" };
            } else if (isEleventhBox) {
              width = 67;
              height = 80;
              inlineStyle = { height: "100%", maxHeight: "80px", width: "auto", aspectRatio: "66.51/80.00" };
            }

            const logoPath = (() => {
              if (logoIndex === 1) return "/logo/image%2049.png";
              if (logoIndex === 2) return "/logo/image%2050.png";
              if (logoIndex === 3) return "/logo/image%2051.png";
              if (logoIndex === 4) return "/logo/image%2053.png";
              if (logoIndex === 5) return "/logo/image%2055.png";
              if (logoIndex === 6) return "/logo/image%2056.png";
              if (logoIndex === 7) return "/logo/image%2060.png";
              if (logoIndex === 8) return "/logo/image%2077.png";
              if (logoIndex === 9) return "/logo/image%2075.png";
              if (logoIndex === 10) return "/logo/image%2078.png";
              if (logoIndex === 11) return "/logo/image%2079.png";
              return `/logo/clients/${logoIndex}.png`;
            })();

             return (
              <motion.div
                key={logoIndex}
                className="group flex items-center justify-center p-4 transition-all duration-300 w-1/2 sm:w-1/3 lg:w-[400px] h-[192px] gap-[18px] bg-color-primary-main"
                style={{
                  borderTop: "0.8px solid var(--color-neutral-700, #404040)",
                  borderRight: "0.8px solid var(--color-neutral-700, #404040)",
                  borderBottom: "0.8px solid var(--color-neutral-700, #404040)",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ backgroundColor: "#080808" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Image
                  src={logoPath}
                  alt={`Client logo ${logoIndex}`}
                  width={width}
                  height={height}
                  unoptimized
                  className={`${imageClass} transition-transform duration-300 group-hover:scale-105`}
                  style={inlineStyle}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
