"use client";

import { motion } from "framer-motion";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

const STACK_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "Angular", "Next.js", "Vue.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", ".NET", "Python", "PHP"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
];

const DEFAULT_PARTICLE_COUNT = 0;
const DEFAULT_SPOTLIGHT_RADIUS = 100;
const DEFAULT_GLOW_COLOR = "0, 0, 0";

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const TechButton: React.FC<{
  skill: string;
  glowColor?: string;
  particleCount?: number;
  spotlightRadius?: number;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
}> = ({
  skill,
  glowColor = DEFAULT_GLOW_COLOR,
  particleCount = DEFAULT_PARTICLE_COUNT,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
}) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const disableAnimations = isMobile;

  const initializeParticles = useCallback(() => {
    if (particleCount === 0 || particlesInitialized.current || !btnRef.current) return;

    const { width, height } = btnRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (particleCount === 0 || !btnRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !btnRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        btnRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 50,
          y: (Math.random() - 0.5) * 50,
          rotation: Math.random() * 360,
          duration: 1.5 + Math.random() * 1.5,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 80);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !btnRef.current) return;

    const element = btnRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      element.style.setProperty("--glow-intensity", "1");
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 4,
          rotateY: 4,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 400,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      element.style.setProperty("--glow-intensity", "0");
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Update glow properties
      const relativeX = (x / rect.width) * 100;
      const relativeY = (y / rect.height) * 100;
      element.style.setProperty("--glow-x", `${relativeX}%`);
      element.style.setProperty("--glow-y", `${relativeY}%`);

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power2.out",
          transformPerspective: 400,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.12;
        const magnetY = (y - centerY) * 0.12;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement("div");
      ripple.className = "ripple-effect";
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.35) 0%, rgba(${glowColor}, 0.15) 35%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        }
      );
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("click", handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={btnRef}
      className={`tech-btn relative overflow-hidden py-3 px-4 flex items-center justify-center bg-white border border-[#E4E4E4] rounded-[4px] cursor-pointer select-none`}
      style={{
        "--glow-x": "50%",
        "--glow-y": "50%",
        "--glow-intensity": "0",
        "--glow-radius": `${spotlightRadius}px`,
        position: "relative",
      } as React.CSSProperties}
    >
      <span
        className="relative z-10"
        style={{
          color: "#2B2B2B",
          fontFamily: "Aspekta, system-ui, sans-serif",
          fontSize: "13.5px",
          fontWeight: 400,
          lineHeight: "20.25px",
          whiteSpace: "nowrap",
        }}
      >
        {skill}
      </span>
    </div>
  );
};

export default function TechnologyStack() {
  return (
    <section
      className="w-full bg-white pt-16 pb-16 md:pt-20 md:pb-20 relative z-10"
      style={{ borderBottom: "0.8px solid #E4E4E4" }}
    >
      <style>
        {`
          .tech-btn {
            transform-style: preserve-3d;
            transition: box-shadow 0.3s ease, border-color 0.3s ease;
          }
          
          .tech-btn::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${DEFAULT_GLOW_COLOR}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${DEFAULT_GLOW_COLOR}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .tech-btn:hover {
            box-shadow: 0 4px 15px rgba(${DEFAULT_GLOW_COLOR}, 0.15), 0 0 10px rgba(${DEFAULT_GLOW_COLOR}, 0.08);
            border-color: rgba(${DEFAULT_GLOW_COLOR}, 0.5);
          }

          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${DEFAULT_GLOW_COLOR}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">

        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
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
            11 &nbsp; INFRASTRUCTURE
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
            Our Technology Stack
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={fadeInUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {STACK_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-[#E4E4E4] rounded-[4px] p-6 md:p-8 flex flex-col justify-start transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              <h3
                className="mb-6"
                style={{
                  color: "#111",
                  fontFamily: '"Funnel Display", system-ui, sans-serif',
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "28px",
                }}
              >
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <TechButton key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
