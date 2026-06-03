"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FOOTER_ICONS = {
  talkToUs: "/logo/talk%20to%20us.svg",
  instagram: "/logo/insta_logo.svg",
  x: "/logo/x_logo.svg",
  facebook: "/logo/facebook.svg",
  linkedin: "/logo/linkedin-round-svgrepo-com%201.svg",
  copyright: "/logo/copyright.svg",
} as const;

const COMPANY_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#projects" },
  { label: "Careers", href: "#careers" },
  { label: "Contacts", href: "mailto:info@tectratechnologies.com" },
] as const;

const SERVICE_LINKS = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Designing",
  "Blockchain Solutions",
  "Cloud Services",
  "DevOps",
  "QA Automation",
  "Digital Marketing",
] as const;

const OTHER_LINKS = [
  { label: "Blogs", href: "#blogs" },
  { label: "Our Clients", href: "#clients" },
] as const;

const CONTACT_ROWS = [
  { label: "Enquiries", email: "info@tectratechnologies.com" },
  { label: "Sales", email: "sales@tectratechnologies.com" },
  { label: "Careers", email: "hr@tectratechnologies.com" },
] as const;

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", src: FOOTER_ICONS.instagram },
  { label: "X", href: "https://x.com", src: FOOTER_ICONS.x },
  { label: "Facebook", href: "https://facebook.com", src: FOOTER_ICONS.facebook },
  { label: "LinkedIn", href: "https://linkedin.com", src: FOOTER_ICONS.linkedin },
] as const;

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-dm-sans text-sm font-medium leading-4 text-color-neutral-0">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="section-footer-surface w-full overflow-hidden"
      aria-labelledby="footer-cta-heading"
    >
      <div className="section-shell w-full py-5 sm:py-6 lg:py-7">
        <div className="flex w-full flex-col gap-4 lg:gap-5">
          <div className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex min-w-0 flex-col gap-0.5">
              <h2
                id="footer-cta-heading"
                className="font-dm-sans text-3xl font-normal leading-tight text-color-neutral-0 sm:text-4xl lg:text-6xl"
              >
                Build beyond ordinary.
              </h2>
              <p className="font-dm-sans text-xs font-normal leading-5 text-color-neutral-400 sm:text-sm">
                Talk to our team today.
              </p>
            </div>

            <motion.div
              className="shrink-0"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="mailto:info@tectratechnologies.com"
                className="inline-flex h-9 items-center justify-center gap-1.5 bg-color-neutral-0 px-4 py-2 font-dm-sans text-sm font-medium leading-4 text-color-primary-main transition-opacity hover:opacity-90"
              >
                Talk to Us
                <Image
                  src={FOOTER_ICONS.talkToUs}
                  alt=""
                  width={16}
                  height={16}
                  unoptimized
                  className="h-4 w-4 shrink-0"
                  aria-hidden
                />
              </Link>
            </motion.div>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:gap-x-10">
            <FooterColumn title="Company">
              <ul className="flex flex-col gap-1">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-dm-sans text-xs font-normal leading-4 text-color-neutral-400 transition-colors hover:text-color-neutral-0"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Services">
              <ul className="flex flex-col gap-1">
                {SERVICE_LINKS.map((label) => (
                  <li key={label}>
                    <Link
                      href="#services"
                      className="font-dm-sans text-xs font-normal leading-4 text-color-neutral-400 transition-colors hover:text-color-neutral-0 whitespace-nowrap"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Other">
              <ul className="flex flex-col gap-1">
                {OTHER_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-dm-sans text-xs font-normal leading-4 text-color-neutral-400 transition-colors hover:text-color-neutral-0"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Connect with Us">
              <ul className="flex flex-col gap-1">
                {CONTACT_ROWS.map((row) => (
                  <li key={row.label}>
                    <a
                      href={`mailto:${row.email}`}
                      className="break-all font-dm-sans text-xs font-normal leading-4 text-color-neutral-400 transition-colors hover:text-color-neutral-0"
                    >
                      <span className="text-color-neutral-400">{row.label} : </span>
                      {row.email}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>

          <div className="flex w-full flex-row items-center justify-between gap-3">
            <Link href="/" aria-label="Tectra Technologies home">
              <Image
                src="/logo/tectra_logo_only.png"
                alt=""
                width={64}
                height={64}
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                priority={false}
              />
            </Link>

            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, src }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-opacity hover:opacity-80"
                >
                  <Image
                    src={src}
                    alt=""
                    width={28}
                    height={28}
                    unoptimized
                    className="h-7 w-7"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 border-t border-color-neutral-800 pt-4 text-[11px] font-normal leading-4 text-color-neutral-500 sm:grid sm:grid-cols-3 sm:items-center sm:gap-1.5">
            <p className="order-last flex items-center justify-center sm:justify-start gap-1 font-dm-sans sm:order-first sm:justify-self-start">
              <Image
                src={FOOTER_ICONS.copyright}
                alt=""
                width={12}
                height={12}
                unoptimized
                className="h-3 w-3 shrink-0"
                aria-hidden
              />
              Tectra Technologies © 2026 All Rights reserved
            </p>
            <div className="flex w-full justify-between sm:contents">
              <Link
                href="/privacy"
                className="font-dm-sans transition-colors hover:text-color-neutral-300 sm:justify-self-center"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-dm-sans transition-colors hover:text-color-neutral-300 sm:justify-self-end"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
