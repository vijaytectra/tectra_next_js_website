import { images } from "./images";

export const CATEGORIES = ["ALL", "APP DEVELOPMENT", "AI & AUTOMATION", "BUSINESS & WEB"] as const;
export type Category = typeof CATEGORIES[number];

export interface Blog {
  id: number;
  category: Category;
  title: string;
  date: string;
  timestamp: number;
  author: string;
  image: string;
  readTime?: string;
}

export const ALL_BLOGS: Blog[] = [
  {
    id: 1,
    category: "APP DEVELOPMENT",
    title: "Five Tasks Your Business Is Doing Manually That AI Can Handle Better, Faster, and Cheaper in 2026",
    date: "Sep 17, 2025",
    timestamp: new Date("2025-09-17").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[2],
    readTime: "8 min read",
  },
  {
    id: 2,
    category: "AI & AUTOMATION",
    title: "Five Tasks Your Business Is Doing Manually That AI Can Handle Better, Faster, and Cheaper in 2026",
    date: "Oct 10, 2025",
    timestamp: new Date("2025-10-10").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[2],
    readTime: "8 min read",
  },
  {
    id: 3,
    category: "BUSINESS & WEB",
    title: "How much does a Business Website actually cost in Chennai in 2026?",
    date: "Nov 05, 2025",
    timestamp: new Date("2025-11-05").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[2],
    readTime: "12 mins read",
  },
  {
    id: 4,
    category: "APP DEVELOPMENT",
    title: "Things You Should Consider Automating In Your Business",
    date: "Aug 20, 2025",
    timestamp: new Date("2025-08-20").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[0],
    readTime: "4 min read",
  },
  {
    id: 5,
    category: "AI & AUTOMATION",
    title: "AI Agents: The Future of Workflow Optimization",
    date: "Dec 01, 2025",
    timestamp: new Date("2025-12-01").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[1],
    readTime: "5 min read",
  },
  {
    id: 6,
    category: "APP DEVELOPMENT",
    title: "Five Tasks Your Business Is Doing Manually That AI Can Handle Better, Faster, and Cheaper in 2026",
    date: "Jan 15, 2026",
    timestamp: new Date("2026-01-15").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[2],
    readTime: "5 min read",
  },
  {
    id: 7,
    category: "APP DEVELOPMENT",
    title: "How Chennai Business are using WhatsApp Automation to Generate more Enquiries without Increasing Headcount",
    date: "Sep 17, 2025",
    timestamp: new Date("2025-09-17").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[0],
    readTime: "7 min read",
  },
  {
    id: 8,
    category: "AI & AUTOMATION",
    title: "Five Tasks Your Business Is Doing Manually That AI Can Handle Better, Faster, and Cheaper in 2026",
    date: "Oct 10, 2025",
    timestamp: new Date("2025-10-10").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[1],
    readTime: "5 min read",
  },
  {
    id: 9,
    category: "BUSINESS & WEB",
    title: "How much does a Business Website actually cost in Chennai in 2026?",
    date: "Nov 05, 2025",
    timestamp: new Date("2025-11-05").getTime(),
    author: "Santhosh Kumar",
    image: images.blog[2],
    readTime: "12 mins read",
  },
];

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
