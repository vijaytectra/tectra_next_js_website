"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SRC = "/videos/hero-coins-loop.mp4";
const HERO_VIDEO_POSTER = "/logo/bg_image_hero.png";

export default function HeroScrollBackground() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const element = parallaxRef.current;
    const video = videoRef.current;
    if (!element || !video) return;

    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const playVideo = () => {
      video.muted = true;
      void video.play().catch(() => {
        setVideoReady(false);
      });
    };

    const updateParallax = () => {
      if (motionMedia.matches) {
        element.style.setProperty("--parallax-x", "0px");
        element.style.setProperty("--parallax-y", "0px");
        element.style.setProperty("--parallax-scale", "1");
        return;
      }

      const scroll = window.scrollY;
      element.style.setProperty("--parallax-x", `${scroll * 0.012}px`);
      element.style.setProperty("--parallax-y", `${scroll * 0.22}px`);
      element.style.setProperty("--parallax-scale", `${1 + scroll * 0.000024}`);
    };

    playVideo();
    updateParallax();

    video.addEventListener("loadeddata", playVideo);
    window.addEventListener("scroll", updateParallax, { passive: true });

    return () => {
      video.removeEventListener("loadeddata", playVideo);
      window.removeEventListener("scroll", updateParallax);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
      aria-hidden
    >
      <div ref={parallaxRef} className="hero-bg-video-layer">
        <div className="hero-bg-video-frame">
          <Image
            src={HERO_VIDEO_POSTER}
            alt=""
            fill
            priority
            className={`object-contain object-center transition-opacity duration-500 ${
              videoReady ? "opacity-0" : "opacity-100"
            }`}
            sizes="100vw"
          />

          <video
            ref={videoRef}
            className="hero-bg-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => {
              setVideoReady(true);
              void videoRef.current?.play().catch(() => setVideoReady(false));
            }}
            onError={() => setVideoReady(false)}
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
