"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Blogs", href: "/#blogs" },
  { label: "Careers", href: "/#careers" },
  { label: "Pricings", href: "/#pricings" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/#about" },
] as const;

const navItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + index * 0.035, duration: 0.4 },
  }),
};

type NavbarProps = {
  className?: string;
  onMobileMenuChange?: (open: boolean) => void;
  tone?: "light" | "dark";
};

export default function Navbar({ className = "", onMobileMenuChange, tone = "light" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const setOpen = useCallback(
    (open: boolean) => {
      setMobileOpen(open);
      onMobileMenuChange?.(open);
    },
    [onMobileMenuChange],
  );

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`relative z-40 w-full shrink-0 ${className}`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative flex min-h-12 w-full items-center justify-between gap-4 lg:min-h-14">
          <Logo className="relative z-10 shrink-0" tone={tone} />

          <nav
             className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
             aria-label="Primary"
          >
            <ul className="flex items-center gap-7 xl:gap-9">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    className={`text-[15px] font-normal transition-opacity hover:opacity-70 ${
                      tone === "dark" ? "text-color-neutral-900" : "text-White"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="hidden sm:block"
            >
              <Link
                href="#contact"
                className={`inline-flex items-center gap-2.5 text-[15px] transition-opacity hover:opacity-70 ${
                  tone === "dark" ? "text-color-neutral-900" : "text-White"
                }`}
              >
                <Image
                  src="/logo/phone.svg"
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                  className={`h-6 w-6 shrink-0 ${tone === "dark" ? "brightness-0" : ""}`}
                  aria-hidden
                />
                Contact Us
              </Link>
            </motion.div>

            <button
              type="button"
              className={`flex h-10 w-10 items-center justify-center lg:hidden ${
                tone === "dark" ? "text-color-neutral-900" : "text-White"
              }`}
              onClick={() => setOpen(true)}
              aria-expanded={mobileOpen}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setOpen(false)} />
    </>
  );
}
