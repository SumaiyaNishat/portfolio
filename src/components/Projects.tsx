"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type FilterType = "All" | "MERN Stack" | "Next.js";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All Projects", value: "All" },
  { label: "MERN Stack", value: "MERN Stack" },
  { label: "Next.js Architectures", value: "Next.js" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "MERN Stack") {
      return project.category.toLowerCase().includes("mern");
    }
    if (activeFilter === "Next.js") {
      return project.category.toLowerCase().includes("next");
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-border/30 dark:border-zinc-900/60 transition-colors duration-500">
      
      {/* Title & Filter Block */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 mb-16">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-primary font-bold mb-2 block animate-pulse select-none"
          >
            Selected Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-foreground dark:text-white select-none"
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Filter Navigation Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-1.5 p-1.5 rounded-full bg-foreground/5 dark:bg-zinc-950/45 border border-border/40 dark:border-zinc-900/60 shadow-sm backdrop-blur-md select-none w-fit"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-500 cursor-pointer ${
                  isActive ? "text-background dark:text-background" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-project-filter"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 bg-primary dark:bg-white rounded-full -z-10 shadow-md"
                  />
                )}
                <span>{filter.label}</span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Horizontal Carousel on mobile, Grid on desktop */}
      <motion.div 
        layout
        className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex-shrink-0 w-[85vw] md:w-[400px] lg:w-full snap-center"
            >
              <ProjectCard
                project={project}
                index={idx}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
