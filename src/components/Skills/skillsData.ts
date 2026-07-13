export interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate" | "Learning";
  description: string;
  id: string;
  isLearning?: boolean;
}

export interface SkillCategoryData {
  title: string;
  id: string;
  description: string;
  accentColor: string; // Gradient color theme for styling
  skills: Skill[];
}

export const SKILLS_DATA: SkillCategoryData[] = [
  {
    title: "Frontend Development",
    id: "frontend",
    description: "Building responsive, fast, and interactive user interfaces using modern web technologies.",
    accentColor: "from-blue-500 via-indigo-500 to-purple-500",
    skills: [
      {
        name: "HTML5",
        level: "Expert",
        description: "Semantic structures, SEO best practices, accessibility standards.",
        id: "html",
      },
      {
        name: "CSS3",
        level: "Expert",
        description: "Modern layouts, Flexbox/Grid, custom properties, styling architectures.",
        id: "css",
      },
      {
        name: "JavaScript (ES6+)",
        level: "Expert",
        description: "Asynchronous programming, functional patterns, DOM interaction.",
        id: "javascript",
      },
      {
        name: "TypeScript",
        level: "Advanced",
        description: "Static typing, advanced types, interface architectures, safety integrations.",
        id: "typescript",
      },
      {
        name: "React.js",
        level: "Expert",
        description: "Component lifecycle, Hooks API, global state management, virtual DOM.",
        id: "react",
      },
      {
        name: "Next.js",
        level: "Advanced",
        description: "App Router, Server Components, SSR/ISR rendering, API route handling.",
        id: "nextjs",
      },
      {
        name: "Tailwind CSS",
        level: "Expert",
        description: "Utility-first layout design, custom theme engines, styling fluid systems.",
        id: "tailwind",
      },
    ],
  },
  {
    title: "Backend Development",
    id: "backend",
    description: "Architecting scalable server-side systems, RESTful APIs, and secure database solutions.",
    accentColor: "from-emerald-500 via-teal-500 to-cyan-500",
    skills: [
      {
        name: "Node.js",
        level: "Advanced",
        description: "Server environments, async operations, package structures.",
        id: "nodejs",
      },
      {
        name: "Express.js",
        level: "Advanced",
        description: "RESTful routing, middleware management, controller design.",
        id: "express",
      },
      {
        name: "MongoDB",
        level: "Advanced",
        description: "NoSQL architecture, Mongoose aggregation pipelines, performance queries.",
        id: "mongodb",
      },
      {
        name: "Firebase",
        level: "Advanced",
        description: "Firestore database, realtime event handling, cloud utilities.",
        id: "firebase",
      },
      {
        name: "JWT",
        level: "Advanced",
        description: "JSON Web Tokens, session handling, route protection, token rotation.",
        id: "jwt",
      },
    ],
  },
  {
    title: "Developer Tools",
    id: "tools",
    description: "Utilizing modern workflows, version controls, design tools, and deployment environments.",
    accentColor: "from-amber-500 via-orange-500 to-rose-500",
    skills: [
      {
        name: "Git",
        level: "Advanced",
        description: "Branching strategies, conflict resolutions, repository management.",
        id: "git",
      },
      {
        name: "GitHub",
        level: "Advanced",
        description: "Collaborative workflows, code reviews, action automation setups.",
        id: "github",
      },
      {
        name: "VS Code",
        level: "Expert",
        description: "Power environment settings, extension sets, custom debug profiles.",
        id: "vscode",
      },
      {
        name: "Postman",
        level: "Advanced",
        description: "API mocking, custom environment configurations, test collections.",
        id: "postman",
      },
      {
        name: "Figma",
        level: "Intermediate",
        description: "UI/UX component design, screen transitions, prototype translations.",
        id: "figma",
      },
      {
        name: "Vercel",
        level: "Advanced",
        description: "Zero-config hosting, production environment settings, analytics.",
        id: "vercel",
      },
    ],
  },
  {
    title: "Currently Learning",
    id: "learning",
    description: "Actively expanding technical horizons to adopt cloud infrastructure and state management systems.",
    accentColor: "from-purple-500 via-fuchsia-500 to-pink-500",
    skills: [
      {
        name: "AWS",
        level: "Learning",
        description: "S3, EC2 deployments, serverless functions, basic cloud configurations.",
        id: "aws",
        isLearning: true,
      },
      {
        name: "Redux Toolkit",
        level: "Learning",
        description: "Slices, action creation, RTK Query, state cache optimization.",
        id: "redux",
        isLearning: true,
      },
    ],
  },
];
