export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  techStack: string[];
  features: string[];
  challenges: string;
  solutions: string;
  improvements: string;
  link: string;
  github: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: "devflow",
    title: "DevFlow - Developer Q&A Platform",
    category: "Full Stack / MERN App",
    description: "A comprehensive developer Q&A forum platform featuring search, recommendations, vote systems, and badges similar to StackOverflow.",
    fullDescription: "DevFlow is a social developer forum that lets users ask questions, search answers using AI search utilities, vote on responses, save questions, and gain reputation points. It is designed using Next.js Server Actions and MongoDB aggregate pipelines to handle complex querying and real-time feeds.",
    image: "/dashboard.png",
    gallery: ["/dashboard.png", "/agency.png", "/mobile.png"],
    tags: ["Next.js", "React 19", "MongoDB", "Tailwind CSS", "Node.js"],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "MongoDB / Mongoose", "Clerk Authentication", "PrismJS"],
    features: [
      "AI-powered answer recommendations utilizing developer tools",
      "Detailed tag database with real-time popularity index counters",
      "Upvote/Downvote reputation reward tracking with user badges",
      "Robust Markdown support with visual preview and syntax highlight"
    ],
    challenges: "Handling database indexes and aggregate query performance for dynamic feeds containing search, tags, and vote calculations was challenging.",
    solutions: "Designed compound database indexes in MongoDB and built optimized cursor pagination models, resulting in an 80% query improvement.",
    improvements: "Integrate a real-time markdown editor with preview, add WebSocket-based live notifications, and enable offline-caching with service workers.",
    link: "https://devflow-qa.example.com",
    github: "https://github.com/sumaiyakhan/devflow",
  },
  {
    slug: "promptopia",
    title: "Promptopia - AI Prompt Marketplace",
    category: "Next.js Web App",
    description: "A central hub to discover, create, and share optimized creative AI prompts for ChatGPT, Midjourney, and stable diffusion.",
    fullDescription: "Promptopia allows copywriters and designers to browse optimized prompts, filter by tags, copy prompts instantly, and manage their shared prompts under user profiles. Uses Next-Auth for authentication and MongoDB for fast document retrieval.",
    image: "/agency.png",
    gallery: ["/agency.png", "/dashboard.png", "/mobile.png"],
    tags: ["Next.js", "MongoDB", "Next-Auth", "Tailwind CSS"],
    techStack: ["Next.js 15", "React 19", "Next-Auth", "MongoDB", "Tailwind CSS", "Lucide Icons"],
    features: [
      "Dynamic search filters parsing content tags, names, and titles",
      "Secure OAuth integrations via Next-Auth login systems",
      "Interactive profile page featuring custom posts and list metrics",
      "Instant copy dashboard interface for prompt execution"
    ],
    challenges: "Configuring seamless session validation and redirect behaviors inside Next.js parallel and intercepting route layouts while using server-rendered pages.",
    solutions: "Modularized session check hook behaviors and set up persistent local context stores for dynamic client layout synchronizations.",
    improvements: "Implement an AI-powered prompt quality score analyzer, support payments for premium prompts using Stripe, and add categories filtering.",
    link: "https://promptopia-ai.example.com",
    github: "https://github.com/sumaiyakhan/promptopia",
  },
  {
    slug: "apex-planner",
    title: "Apex Planner - MERN Task Dashboard",
    category: "MERN SaaS / Real-time",
    description: "A highly collaborative project dashboard containing drag-and-drop lists, task analytics, and user work teams.",
    fullDescription: "Apex Planner offers board layouts similar to Trello with card tracking, deadline reminders, and team chat channels. It relies on Express.js endpoints and WebSockets for real-time dashboard state changes across team members.",
    image: "/mobile.png",
    gallery: ["/mobile.png", "/dashboard.png", "/agency.png"],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB / Mongoose", "Socket.io", "Framer Motion", "Tailwind CSS"],
    features: [
      "Fluid drag-and-drop kanban workspace boards with cards",
      "Real-time task synchronization across users via WebSocket feeds",
      "Interactive data analytics graphs displaying progress metrics",
      "Integrated team workspaces containing custom invite portals"
    ],
    challenges: "Syncing real-time drag-and-drop states without visual lag or race conditions.",
    solutions: "Designed local React state optimistic mutations and processed socket updates in lock channels with event throttle checks.",
    improvements: "Create custom calendar and Gantt chart timelines, integrate email alerts for approaching deadlines, and support Slack webhooks.",
    link: "https://apex-planner.example.com",
    github: "https://github.com/sumaiyakhan/apex-planner",
  },
];
