"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Server, Settings, CheckCircle } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: <Cpu className="w-5 h-5 text-purple-405" />,
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "React.js", percentage: 95 },
      { name: "Next.js", percentage: 90 },
      { name: "TypeScript", percentage: 88 },
      { name: "Tailwind CSS", percentage: 95 },
    ],
  },
  {
    title: "Backend & Database",
    icon: <Server className="w-5 h-5 text-pink-405" />,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Node.js", percentage: 85 },
      { name: "Express.js", percentage: 88 },
      { name: "MongoDB", percentage: 85 },
      { name: "Firebase", percentage: 80 },
    ],
  },
  {
    title: "Tools & Deployments",
    icon: <Settings className="w-5 h-5 text-amber-405" />,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Git", percentage: 90 },
      { name: "GitHub", percentage: 92 },
      { name: "Vercel", percentage: 88 },
      { name: "Figma", percentage: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-border/30 dark:border-zinc-900/60">
      <div className="mb-16 text-center sm:text-left">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 block animate-pulse select-none"
        >
          My Expertise
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-foreground dark:text-white select-none"
        >
          Technical Skills
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            className="p-6 sm:p-8 rounded-3xl bg-card/45 dark:bg-zinc-950/40 border border-border/50 dark:border-zinc-900/65 flex flex-col justify-between backdrop-blur-sm shadow-md"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8 border-b border-border/30 dark:border-zinc-900 pb-4">
                <div className="p-2.5 bg-foreground/5 dark:bg-zinc-900 border border-border/30 dark:border-zinc-800 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground dark:text-white select-none">{category.title}</h3>
              </div>

              {/* Skills list with animated progress bars */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-semibold select-none">
                      <span className="text-foreground/80 dark:text-zinc-300 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-foreground/40 dark:text-zinc-500" />
                        {skill.name}
                      </span>
                      <span className="text-foreground/50 dark:text-zinc-400 font-mono">{skill.percentage}%</span>
                    </div>

                    {/* Progress bar container */}
                    <div className="w-full h-2 bg-foreground/5 dark:bg-zinc-900 rounded-full overflow-hidden border border-border/30 dark:border-zinc-850">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: skillIdx * 0.1 + 0.2 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
