"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Blogs", href: "/#blogs" },
  { label: "Careers", href: "/#careers" },
  { label: "Pricings", href: "/#pricings" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/#about" },
] as const;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, damping: 32, stiffness: 320 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 + index * 0.05, duration: 0.35 },
  }),
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 lg:hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-Black/80 backdrop-blur-sm"
            variants={overlayVariants}
            onClick={onClose}
          />

          <motion.nav
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-Gray-900 px-6 py-8 shadow-2xl"
            variants={panelVariants}
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-Gray-400">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-Gray-800 text-White transition-colors hover:border-Gray-600 hover:bg-Gray-800"
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-3.5 text-lg font-medium text-White transition-colors hover:bg-Gray-800 hover:text-Gray-50"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 border-t border-Gray-800 pt-8"
            >
              <Link
                href="#contact"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-White px-6 py-3.5 text-sm font-medium text-Black transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Image
                  src="/logo/phone.svg"
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                  className="h-5 w-5"
                  aria-hidden
                />
                Contact Us
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
