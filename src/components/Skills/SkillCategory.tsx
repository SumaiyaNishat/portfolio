"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Settings, GraduationCap, Compass } from "lucide-react";
import { SkillCategoryData } from "./skillsData";
import SkillCard from "./SkillCard";

// Dynamic Lucide icon based on category ID
function CategoryIcon({ id, className = "w-6 h-6" }: { id: string; className?: string }) {
  switch (id) {
    case "frontend":
      return <Layout className={className} />;
    case "backend":
      return <Server className={className} />;
    case "tools":
      return <Settings className={className} />;
    case "learning":
      return <GraduationCap className={className} />;
    default:
      return <Compass className={className} />;
  }
}

interface SkillCategoryProps {
  category: SkillCategoryData;
  categoryIndex: number;
}

export default function SkillCategory({ category, categoryIndex }: SkillCategoryProps) {
  // Stagger entry configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Fluid sequence entry
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-6 md:space-y-8"
    >
      {/* Category Header */}
      <motion.div variants={headerVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/30 dark:border-[#223547]/40">
        <div className="flex items-center gap-3.5">
          {/* Category Icon Container with Glow */}
          <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${category.accentColor} text-white shadow-lg shadow-primary/5 flex items-center justify-center`}>
            <CategoryIcon id={category.id} className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground dark:text-white tracking-tight select-none">
              {category.title}
            </h3>
            <p className="text-xs md:text-sm text-foreground/60 dark:text-zinc-400 mt-0.5 select-none">
              {category.description}
            </p>
          </div>
        </div>

        {/* Counter of skills inside category */}
        <div className="hidden sm:flex px-4 py-1.5 rounded-full bg-foreground/[0.04] dark:bg-white/[0.02] border border-border/40 dark:border-[#223547]/50 text-foreground/50 dark:text-zinc-500 text-xs font-mono font-bold select-none w-fit">
          {category.skills.length} Techs
        </div>
      </motion.div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {category.skills.map((skill, idx) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            accentColor={category.accentColor}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
}
