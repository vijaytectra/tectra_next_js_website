import { images } from "./images";

export type CaseStudy = {
  id: string;
  title: string;
  description: string;
  image: string;
  expertise: string;
  industry: string;
};

export const EXPERTISE_OPTIONS = [
  "All Expertise",
  "UI/UX Design",
  "Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "Branding",
] as const;

export const INDUSTRY_OPTIONS = [
  "All Industries",
  "Healthcare",
  "Real Estate",
  "Technology",
  "E-commerce",
  "Finance",
] as const;

export const ALL_CASE_STUDIES: CaseStudy[] = [
  {
    id: "avmc-website",
    title: "AVMC Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur justo.",
    image: images.clientWork(1),
    expertise: "Web Development",
    industry: "Technology",
  },
  {
    id: "lead-101",
    title: "Lead 101",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur justo.",
    image: images.clientWork(2),
    expertise: "Digital Marketing",
    industry: "E-commerce",
  },
  {
    id: "ocean-life",
    title: "Ocean Life",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur justo.",
    image: images.clientWork(3),
    expertise: "UI/UX Design",
    industry: "Real Estate",
  },
  {
    id: "vmls-website",
    title: "VMLS Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur justo.",
    image: images.clientWork(4),
    expertise: "Web Development",
    industry: "Healthcare",
  },
];
