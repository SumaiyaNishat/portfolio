"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, Code2, Globe, Wrench, GraduationCap } from "lucide-react";
import { SKILLS_DATA } from "./skillsData";
import SkillCategory from "./SkillCategory";

type FilterTab = "all" | "frontend" | "backend" | "tools" | "learning";

interface TabOption {
  id: FilterTab;
  label: string;
  icon: React.ReactNode;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const tabOptions: TabOption[] = [
    { id: "all", label: "All Skills", icon: <Globe className="w-4 h-4" /> },
    { id: "frontend", label: "Frontend", icon: <Code2 className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Terminal className="w-4 h-4" /> },
    { id: "tools", label: "Tools", icon: <Wrench className="w-4 h-4" /> },
    { id: "learning", label: "Learning", icon: <GraduationCap className="w-4 h-4" /> },
  ];

  // Filter skills based on tab selection
  const filteredCategories = activeTab === "all" 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter((cat) => cat.id === activeTab);

  return (
    <section 
      id="skills" 
      className="relative scroll-mt-24 py-28 px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto border-t border-border/30 dark:border-zinc-900/60 overflow-hidden"
    >
      
      {/* Premium Floating Blurred Background Decors */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Shape 1 - Floating Purple/Cyan Blob */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px]"
        />

        {/* Shape 2 - Floating Pink/Orange Blob */}
        <motion.div
          animate={{
            y: [0, 45, 0],
            x: [0, -35, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#8EAEC6]/15 dark:bg-[#5C8FB3]/5 blur-[130px]"
        />

        {/* Shape 3 - Centered background mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-primary/5 to-transparent dark:from-white/1 blur-[150px] opacity-60" />
      </div>

      {/* Modern Section Header */}
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/[0.04] dark:bg-white/[0.02] border border-border/30 dark:border-[#223547]/50 text-foreground/80 dark:text-zinc-300 text-xs font-semibold tracking-wider uppercase mb-5 select-none shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary dark:text-[#8EAEC6] animate-pulse" />
          TECHNICAL ARSENAL
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-foreground dark:text-white tracking-tight leading-[1.15] mb-5 select-none"
        >
          My Technical Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-foreground/75 dark:text-zinc-400 text-base sm:text-lg leading-relaxed select-none"
        >
          A recruiter-friendly overview of my technical skills, development workflow, and continuously growing expertise.
        </motion.p>
      </div>

      {/* Segmented Tab Controls (Glassmorphism Pill) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center mb-16 px-2"
      >
        <div className="inline-flex flex-wrap md:flex-nowrap items-center justify-center p-1.5 rounded-2xl md:rounded-full bg-card/50 dark:bg-[#152330]/50 border border-border/40 dark:border-[#223547]/50 backdrop-blur-md shadow-lg gap-1.5 w-full max-w-2xl">
          {tabOptions.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl md:rounded-full text-sm font-bold tracking-wide transition-all duration-300 select-none cursor-pointer flex-1 md:flex-initial ${
                  isSelected 
                    ? "text-background dark:text-[#0b131a]" 
                    : "text-foreground/70 dark:text-zinc-400 hover:text-foreground dark:hover:text-white"
                }`}
              >
                {/* Background Slider Indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-primary dark:bg-[#F9F3EF] rounded-xl md:rounded-full -z-10 shadow-md shadow-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Main Categories Display Grid */}
      <div className="relative space-y-16 md:space-y-24 min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-16 md:space-y-24"
          >
            {filteredCategories.map((category, idx) => (
              <SkillCategory
                key={category.id}
                category={category}
                categoryIndex={idx}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-border/50 dark:via-[#223547]/50 to-transparent" />
    </section>
  );
}
