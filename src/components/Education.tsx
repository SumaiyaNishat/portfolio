"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

interface TimelineItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const EDUCATION_TIMELINE: TimelineItem[] = [
  {
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    institution: "Green University of Bangladesh",
    period: "2020 - 2024",
    description: "Completed undergraduate degree with a major in Software Engineering. Academic focus on web development paradigms, algorithm optimizations, relational database models, and human-computer interactions.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science Group",
    institution: "Dhaka City College",
    period: "2018 - 2020",
    description: "Focused on physics, chemistry, mathematics, and introductory computer operations, scoring high grades in computing algorithms and arithmetic math.",
  },
  {
    degree: "Secondary School Certificate (SSC) - Science Group",
    institution: "Dhaka High School",
    period: "2016 - 2018",
    description: "Solid foundational study in natural sciences, introductory statistics, geometry, and basic digital logic operations.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto border-t border-border/30 dark:border-zinc-900/60">
      <div className="mb-16 text-center sm:text-left">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 block animate-pulse select-none"
        >
          My Credentials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-foreground dark:text-white select-none"
        >
          Education &amp; Academic Timeline
        </motion.h2>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l border-border/30 dark:border-zinc-800/80 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12 animate-fade-in">
        {EDUCATION_TIMELINE.map((item, idx) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-6 h-6 rounded-full bg-[#7C3AED] border-4 border-background flex items-center justify-center shadow-lg shadow-purple-500/20 z-10 animate-pulse" />
            
            <div className="p-8 rounded-3xl bg-card/45 dark:bg-zinc-950/40 border border-border/50 dark:border-zinc-900/60 hover:border-border/80 dark:hover:border-zinc-850 transition duration-300 relative overflow-hidden group backdrop-blur-sm shadow-md">
              {/* Background gradient line reveal */}
              <div className="absolute top-0 left-0 w-[4px] h-0 bg-[#7C3AED] group-hover:h-full transition-all duration-500" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 select-none">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white transition duration-200 animate-slide-up">
                    {item.degree}
                  </h3>
                  <span className="text-sm text-foreground/75 dark:text-zinc-400 font-semibold flex items-center gap-1.5 mt-1">
                    <GraduationCap className="w-4 h-4 text-purple-400 animate-pulse" />
                    {item.institution}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 dark:bg-zinc-900 border border-border/30 dark:border-zinc-800 text-foreground/70 dark:text-zinc-400 text-xs font-medium w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-foreground/80 dark:text-zinc-400 text-sm sm:text-base leading-relaxed select-none">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
