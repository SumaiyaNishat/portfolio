"use client";

import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Download, FileText, ArrowUpRight, Github, BookOpen } from "lucide-react";

interface Resource {
  title: string;
  type: string;
  description: string;
  size: string;
  icon: React.ReactNode;
  downloadUrl: string;
}

const RESOURCES: Resource[] = [
  {
    title: "Next.js & HeroUI Core Template",
    type: "Source Code Boilerplate",
    description: "Our highly optimized template featuring Framer Motion config, Lenis setups, and customized Tailwind configs to bootstrap your projects in seconds.",
    size: "1.4 MB",
    icon: <Github className="w-5 h-5 text-purple-400" />,
    downloadUrl: "https://github.com/example/boilerplate",
  },
  {
    title: "GSAP Animation Cheat Sheet",
    type: "Reference Guide (PDF)",
    description: "A compact reference guide covering gsap.to, timelines, ScrollTrigger settings, and advanced react cleanups using official hooks.",
    size: "450 KB",
    icon: <FileText className="w-5 h-5 text-pink-400" />,
    downloadUrl: "#",
  },
  {
    title: "Modern UI Component Library",
    type: "Figma Asset Pack",
    description: "Premium Figma UI assets containing dark mode variants, sleek typography setups, and ready-to-code components matching the HeroUI library.",
    size: "12.8 MB",
    icon: <BookOpen className="w-5 h-5 text-blue-400" />,
    downloadUrl: "#",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900/60">
      <div className="mb-16 text-center sm:text-left">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2 block animate-pulse"
        >
          Developer Toolkit
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-white select-none"
        >
          Free Creative Resources
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RESOURCES.map((resource, idx) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-zinc-950/40 border border-zinc-900/60 hover:border-zinc-800/80 transition-all duration-300 relative overflow-hidden group backdrop-blur-sm"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-white/[0.01] group-hover:bg-white/[0.02] rounded-full blur-[40px] -z-10 transition duration-300" />
            
            <div>
              {/* Type and Size */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  {resource.type}
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  {resource.size}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-850 group-hover:border-zinc-750 transition duration-300">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition duration-300 select-none">
                  {resource.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 select-none">
                {resource.description}
              </p>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-zinc-900/60">
              <Button
                as="a"
                href={resource.downloadUrl}
                className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 text-zinc-350 hover:text-white font-medium py-5 rounded-xl text-sm flex items-center justify-center gap-2 transition duration-205 group-hover:border-zinc-700"
              >
                <span>Get Resource</span>
                {resource.type.includes("Source") ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
