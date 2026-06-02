import type { Metadata } from "next";
import {
  DM_Mono,
  DM_Sans,
  Geist,
  Geist_Mono,
  IBM_Plex_Sans,
  Urbanist,
} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tectra | Enterprise Technology Ecosystem",
  description:
    "Where vision becomes technology. Enterprise-grade solutions for services, projects, and digital transformation.",
  openGraph: {
    title: "Tectra | Enterprise Technology Ecosystem",
    description:
      "Where vision becomes technology. Enterprise-grade technology solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} ${ibmPlexSans.variable} ${urbanist.variable} ${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full overflow-x-hidden bg-color-primary-main text-color-neutral-50 antialiased">
        {children}
      </body>
    </html>
  );
}
