export type JobLevel = "Senior level" | "Junior level" | "Internship";
export type JobType = "Full Time" | "Part Time" | "Contract";

export const JOB_LEVELS: ("ALL" | JobLevel)[] = ["ALL", "Senior level", "Junior level", "Internship"];

export interface JobResponsibility {
  title: string;
  description: string;
}

export interface Job {
  id: string;
  title: string;
  type: JobType;
  level: JobLevel;
  description: string;
  timestamp: number; // For sorting
  location: string;
  department: string;
  experience: string;
  salaryRange: string;
  posted: string;
  longDescription: string;
  aboutRole: string[];
  responsibilities: JobResponsibility[];
  requirements?: {
    mustHave: string[];
    niceToHave: string[];
  };
}

// Generate realistic mock timestamps for sorting
const today = new Date().getTime();
const daysAgo = (days: number) => today - days * 24 * 60 * 60 * 1000;

export const ALL_JOBS: Job[] = [
  {
    id: "job-1",
    title: "Full Stack Developer",
    type: "Full Time",
    level: "Senior level",
    description: "Develops scalable web applications across frontend and backend technologies.",
    timestamp: daysAgo(2),
    location: "Chennai | Hybrid",
    department: "Engineering",
    experience: "5-8 Years",
    salaryRange: "₹12L - ₹18L per annum",
    posted: "2 days ago",
    longDescription: "We are looking for a Senior Full Stack Developer who will lead frontend and backend development of our core SaaS and enterprise products. You will work with Next.js, Node.js, and modern cloud platforms.",
    aboutRole: [
      "Tectra Technologies is building next-generation enterprise applications. We are expanding our engineering team to handle complex cloud workflows and high-scale SaaS architectures.",
      "Our engineering team is at the core of our tech stack. We value clean code, scalable architecture, and proactive problem solving. In this role, you will help design and implement core APIs and services.",
      "You'll collaborate with product managers, frontend engineers, and DevOps to build secure, robust systems that handle millions of transactions daily."
    ],
    responsibilities: [
      {
        title: "Architecture & Design",
        description: "Design scalable, secure, and performant backend APIs and database schemas to support business logic."
      },
      {
        title: "Feature Development",
        description: "Develop frontend interfaces and integrate them with backend systems using Next.js, Node.js, and PostgreSQL."
      },
      {
        title: "Code Quality",
        description: "Write robust, clean, and tested code, and actively participate in team code reviews to maintain engineering excellence."
      },
      {
        title: "DevOps & Cloud",
        description: "Monitor, deploy, and scale services on cloud platforms, ensuring high availability and system reliability."
      }
    ],
  },
  {
    id: "job-2",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Internship",
    description: "Develops responsive and accessible frontend applications for seamless experiences.",
    timestamp: daysAgo(5),
    location: "Chennai | Remote",
    department: "Engineering",
    experience: "0-1 Years",
    salaryRange: "₹3L - ₹5L per annum",
    posted: "5 days ago",
    longDescription: "Join our frontend engineering team as an intern and work on real-world projects. You will learn and implement responsive user interfaces using Next.js and Tailwind CSS.",
    aboutRole: [
      "We are growing our user interface design and engineering systems to provide seamless digital experiences across all devices and platforms.",
      "As a Frontend Developer Intern, you will work on crafting modern, performant, and accessible interfaces. You'll collaborate with designers and senior engineers to turn mockups into code.",
      "You will learn and apply frontend best practices, write reusable components, and gain experience in real-world deployment pipelines."
    ],
    responsibilities: [
      {
        title: "UI Implementation",
        description: "Translate Figma designs into responsive, pixel-perfect web interfaces using Next.js and Tailwind CSS."
      },
      {
        title: "Accessibility & SEO",
        description: "Optimize client-facing pages for fast loading speeds, SEO best practices, and WCAG accessibility compliance."
      },
      {
        title: "API Integration",
        description: "Integrate REST and GraphQL APIs dynamically, handling data state management smoothly."
      },
      {
        title: "Performance Optimization",
        description: "Identify and fix web performance bottlenecks, minimizing asset sizes and layout shifts."
      }
    ],
  },
  {
    id: "job-3",
    title: "UI/UX Designer",
    type: "Full Time",
    level: "Junior level",
    description: "Designs user-centered digital experiences that balance usability and business goals.",
    timestamp: daysAgo(10),
    location: "Chennai | Hybrid",
    department: "Product Design",
    experience: "1-3 Years",
    salaryRange: "₹4L - ₹7L per annum",
    posted: "3 days ago",
    longDescription: "Join our design team to craft intuitive, beautiful digital experiences that solve real problems. You'll work alongside talented designers and developers to shape products used by thousands.",
    aboutRole: [
      "Tectra Technologies is experiencing unprecedented growth. We've recently secured Series B funding and expanded our client portfolio to include Fortune 500 companies across fintech, healthcare, and enterprise SaaS.",
      "Our design team is at the heart of this transformation. We're building a world-class design organization that pushes boundaries in digital product design. This role is critical to scaling our design capabilities while maintaining the quality and craft that defines our work.",
      "You'll collaborate with product managers, engineers, and clients to design sophisticated interfaces that handle complex workflows. Your work will directly impact how millions of users interact with financial platforms, healthcare systems, and enterprise tools."
    ],
    responsibilities: [
      {
        title: "User Research & Analysis",
        description: "Conduct user interviews, usability tests, and analyze behavioral data to inform design decisions and validate hypotheses."
      },
      {
        title: "Interface Design",
        description: "Design intuitive, accessible interfaces for web and mobile applications following established design systems and brand guidelines."
      },
      {
        title: "Prototyping & Testing",
        description: "Create interactive prototypes to communicate design intent and validate concepts through iterative user testing."
      },
      {
        title: "Design System Contribution",
        description: "Contribute to and maintain our design system, ensuring consistency and scalability across all product touchpoints."
      },
      {
        title: "Cross-functional Collaboration",
        description: "Work closely with engineers, product managers, and stakeholders to ensure seamless implementation of designs."
      },
      {
        title: "Design Documentation",
        description: "Create comprehensive design specifications, user flows, and documentation to support development and future iterations."
      }
    ],
    requirements: {
      mustHave: ["Figma", "Wireframing", "Prototyping", "User Flows", "Design Systems", "UX Research"],
      niceToHave: ["HTML/CSS", "Motion Design", "AI Tools", "Adobe Creative Suite"]
    }
  },
  {
    id: "job-4",
    title: "SMM Executive",
    type: "Full Time",
    level: "Internship",
    description: "Manages social media campaigns to drive brand awareness and engagement.",
    timestamp: daysAgo(1),
    location: "Chennai | Hybrid",
    department: "Marketing",
    experience: "0-1 Years",
    salaryRange: "₹2.5L - ₹4L per annum",
    posted: "1 day ago",
    longDescription: "Help drive brand awareness across LinkedIn, Twitter, and Instagram. You will work with copywriters and designers to produce high-impact social media assets.",
    aboutRole: [
      "Tectra Technologies is expanding its digital brand footprint globally. We are looking for creative voices to help share our stories and connect with our community.",
      "Our marketing team handles multi-channel social media strategies. In this role, you will help design, script, and launch engaging digital campaigns across major networks.",
      "You will collaborate with content writers, visual creators, and business analysts to analyze social traffic metrics and optimize brand reach."
    ],
    responsibilities: [
      {
        title: "Campaign Management",
        description: "Plan and coordinate high-impact organic social campaigns to grow brand visibility and community size."
      },
      {
        title: "Content Creation",
        description: "Draft scripts, posts, and visual outlines for LinkedIn, X (Twitter), and Instagram."
      },
      {
        title: "Metric Analytics",
        description: "Analyze user engagement and referral traffic metrics using Google Analytics to refine content strategies."
      },
      {
        title: "Cross-team Sync",
        description: "Work closely with graphic designers and product managers to align visual narratives with company releases."
      }
    ],
  },
  {
    id: "job-5",
    title: "AI Developer",
    type: "Full Time",
    level: "Senior level",
    description: "Develops AI-powered solutions to automate processes and enhance user experiences.",
    timestamp: daysAgo(7),
    location: "Chennai | Hybrid",
    department: "Research & Development",
    experience: "4-7 Years",
    salaryRange: "₹15L - ₹24L per annum",
    posted: "7 days ago",
    longDescription: "Design, build, and deploy generative AI agents, LLM integrations, and custom ML pipelines for enterprise applications. Experience with vector databases and LangChain is highly preferred.",
    aboutRole: [
      "We are pioneering custom generative AI solutions, agentic frameworks, and smart automation pipelines for enterprise clients globally.",
      "Our R&D team works at the intersection of AI, LLMs, and cognitive agents. In this role, you will research, integrate, and deploy advanced models to solve real-world industry tasks.",
      "You'll work with vector databases, language models, and agent architectures to design applications that think, adapt, and scale."
    ],
    responsibilities: [
      {
        title: "Model Integration",
        description: "Research, fine-tune, and deploy generative AI pipelines and Large Language Models (LLMs) for enterprise SaaS."
      },
      {
        title: "Agent Architectures",
        description: "Design autonomous agentic systems that retrieve data, execute actions, and safely orchestrate complex tasks."
      },
      {
        title: "Vector Embeddings",
        description: "Set up and optimize vector database indexing strategies to power fast, relevant semantic retrieval."
      },
      {
        title: "Safety & Guardrails",
        description: "Build evaluation datasets and guardrails to ensure model responses are accurate, safe, and context-aligned."
      }
    ],
  },
  {
    id: "job-6",
    title: "Graphic Designer",
    type: "Full Time",
    level: "Junior level",
    description: "Creates visually compelling designs that communicate ideas and strengthen brand identity.",
    timestamp: daysAgo(3),
    location: "Madurai | Hybrid",
    department: "Creative",
    experience: "1-2 Years",
    salaryRange: "₹3.5L - ₹5.5L per annum",
    posted: "3 days ago",
    longDescription: "Create visually stunning brand designs, marketing collaterals, and digital assets. You will shape Tectra's visual identity across all public-facing platforms.",
    aboutRole: [
      "Tectra Technologies is looking for a creative graphic designer to define and expand our brand assets and visual communication style.",
      "Our creative design team works across web, media, and marketing collateral. You will build high-fidelity graphics, design presentations, and shape visual narratives.",
      "You will collaborate with marketing executives and product leads to deliver consistent, visually compelling assets that capture Tectra's brand identity."
    ],
    responsibilities: [
      {
        title: "Visual Assets",
        description: "Create high-fidelity graphic layouts, social media posts, presentation decks, and marketing collaterals."
      },
      {
        title: "Brand Alignment",
        description: "Ensure all public-facing visual assets strictly follow Tectra's typography and color tokens."
      },
      {
        title: "Content Layouts",
        description: "Collaborate on formatting and designing layout styling recommendations for visual Case Studies."
      },
      {
        title: "Creative Brainstorming",
        description: "Participate in visual concept sprints to turn abstract technological themes into clear, beautiful illustrations."
      }
    ],
  },
];

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
