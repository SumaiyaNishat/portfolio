"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Server, Settings } from "lucide-react";

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Python", "SQL (Postgres)", "GraphQL"],
  },
  {
    title: "Frameworks & Runtimes",
    icon: <Layout className="w-5 h-5" />,
    color: "from-purple-500 to-indigo-500",
    items: ["React 19", "Next.js 16 (App Router)", "Node.js", "Express.js", "React Native", "Tailwind CSS v4"],
  },
  {
    title: "State & Animation",
    icon: <Server className="w-5 h-5" />,
    color: "from-pink-500 to-rose-500",
    items: ["GSAP (GreenSock)", "Framer Motion", "Lenis Smooth Scroll", "Redux Toolkit", "Zustand", "Webpack/Turbopack"],
  },
  {
    title: "Tools & Operations",
    icon: <Settings className="w-5 h-5" />,
    color: "from-amber-500 to-orange-500",
    items: ["Git & GitHub", "Figma", "Docker", "Vercel / AWS", "PostgreSQL / MongoDB", "npm / pnpm / bun"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-6 max-w-7xl mx-auto border-t border-border/30 dark:border-zinc-900/60">
      <div className="mb-16 text-center sm:text-left">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 block animate-pulse select-none"
        >
          My Ecosystem
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-foreground dark:text-white select-none"
        >
          Core Tech Stack
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TECH_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-card/45 dark:bg-zinc-950/40 border border-border/50 dark:border-zinc-900/60 hover:border-border/80 dark:hover:border-zinc-800/80 transition-all duration-300 relative overflow-hidden group backdrop-blur-sm shadow-md"
          >
            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.03] rounded-full blur-[40px] -z-10 transition duration-300`} />
            
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-2xl bg-gradient-to-tr ${category.color} text-white shadow-lg shadow-purple-500/5`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground dark:text-white select-none">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-xl bg-foreground/5 dark:bg-zinc-900/70 border border-border/30 dark:border-zinc-850 text-foreground/80 dark:text-zinc-300 text-sm font-medium hover:border-primary/50 dark:hover:border-zinc-700 hover:text-primary dark:hover:text-white transition duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
