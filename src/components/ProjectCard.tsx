"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Staggered reveal animations
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
      },
    },
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block w-full h-full cursor-pointer relative"
    >
      <motion.article
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="rounded-[2rem] overflow-hidden relative shadow-2xl group aspect-[3/4] flex flex-col justify-between p-8 text-white w-full border border-border/10 transition-shadow duration-500 hover:shadow-primary/10"
      >
        {/* Background Project Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 -z-20"
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 400px, 33vw"
          priority={index === 0}
        />

        {/* Dark Overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent -z-10" />

        {/* Dynamic Cursor Spotlight Sheen */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(124, 58, 237, 0.12), transparent 80%)`,
          }}
        />

        {/* Top Content */}
        <div data-purpose="card-top-content" className="select-none">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight group-hover:text-primary-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-250 leading-relaxed max-w-[260px] opacity-90">
            {project.description}
          </p>
        </div>

        {/* Bottom tags and Arrow button */}
        <div className="flex items-end justify-between select-none" data-purpose="card-footer">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] sm:text-[11px] font-semibold border border-white/10 text-white/90 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Arrow Icon Button */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-md">
            <svg
              className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
