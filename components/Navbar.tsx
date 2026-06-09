"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Case Study", href: "/#casestudies" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/#careers" },
  { label: "Pricings", href: "/pricings" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/about" },
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
        <div className="relative flex w-full py-4 items-center justify-between gap-4">
          <Logo className="relative z-10 shrink-0 -ml-2 sm:-ml-3 lg:-ml-[14px]" tone={tone} />

          <nav
             className="hidden flex-1 justify-center px-4 lg:flex"
             aria-label="Primary"
          >
            <ul className="flex items-center justify-center gap-3 lg:gap-4 xl:gap-9">
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
                    className={`whitespace-nowrap text-[14px] xl:text-[15px] font-normal transition-opacity hover:opacity-70 ${
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
              className="hidden lg:block"
            >
              <Link
                href="contact"
                className={`inline-flex items-center whitespace-nowrap gap-2.5 text-[14px] xl:text-[15px] transition-opacity hover:opacity-70 ${
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
              className={`flex items-center gap-2.5 lg:hidden transition-opacity hover:opacity-70 ${
                tone === "dark" ? "text-color-neutral-900" : "text-White"
              }`}
              onClick={() => setOpen(true)}
              aria-expanded={mobileOpen}
              aria-label="Open menu"
            >
              <div className="flex flex-col items-end gap-[5px]" aria-hidden>
                <div className="h-[2px] w-3.5 bg-current rounded-full"></div>
                <div className="h-[2px] w-6 bg-current rounded-full"></div>
              </div>
              <span className="font-dm-sans text-[13px] font-bold tracking-[0.1em] uppercase mt-[1px]">
                Menu
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setOpen(false)} />
    </>
  );
}
