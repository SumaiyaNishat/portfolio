"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, CheckCircle2 } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  index: number;
}

// Reusable Experience Card Component
function ExperienceCard({ role, company, period, description, highlights, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="p-8 rounded-3xl bg-card/45 dark:bg-zinc-950/40 border border-border/50 dark:border-zinc-900/60 hover:border-border/80 dark:hover:border-zinc-800/80 transition-all duration-300 relative overflow-hidden group backdrop-blur-sm shadow-md"
    >
      <div className="absolute top-0 left-0 w-[4px] h-0 bg-[#7C3AED] group-hover:h-full transition-all duration-500" />
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 select-none">
        <div>
          <h3 className="text-xl font-bold text-foreground dark:text-white transition duration-205">
            {role}
          </h3>
          <span className="text-sm text-foreground/70 dark:text-zinc-400 font-semibold flex items-center gap-1.5 mt-1">
            <Briefcase className="w-4 h-4 text-purple-400 animate-pulse" />
            {company}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 dark:bg-zinc-900 border border-border/30 dark:border-zinc-800 text-foreground/70 dark:text-zinc-450 text-xs font-medium w-fit">
          <Calendar className="w-3.5 h-3.5" />
          <span>{period}</span>
        </div>
      </div>

      <p className="text-foreground/80 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 select-none">
        {description}
      </p>

      {/* Highlights */}
      <div className="space-y-2 select-none">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 dark:text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const JOBS_DATA = [
  {
    role: "MERN Stack Web Developer",
    company: "Apex Software Studio",
    period: "2024 - Present",
    description: "Responsible for building full-stack web applications using the MERN ecosystem. Lead development of responsive SaaS client portals and dashboard configurations.",
    highlights: [
      "Optimized MongoDB aggregations improving query times by 40%",
      "Integrated secure authentication structures using JWT and custom sessions",
      "Deployed full-scale products on Vercel and AWS clusters",
    ],
  },
  {
    role: "Junior Web Application Developer",
    company: "Green IT Solutions",
    period: "2023 - 2024",
    description: "Created modular React elements, maintained Express endpoint integrations, and tested database architectures to ensure fast page loads.",
    highlights: [
      "Built 10+ pixel-perfect landing pages from Figma designs",
      "Collaborated with backend teams to configure MongoDB search indexes",
      "Conducted usability testing improving mobile viewport responsiveness by 15%",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-border/30 dark:border-zinc-900/60">
      <div className="mb-16 text-center sm:text-left">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 block animate-pulse select-none"
        >
          My Career
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-foreground dark:text-white select-none"
        >
          Professional Experience
        </motion.h2>
      </div>

      {/* Grid of Reusable Experience Cards */}
      <div className="grid grid-cols-1 gap-8">
        {JOBS_DATA.map((job, idx) => (
          <ExperienceCard
            key={job.role}
            role={job.role}
            company={job.company}
            period={job.period}
            description={job.description}
            highlights={job.highlights}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
