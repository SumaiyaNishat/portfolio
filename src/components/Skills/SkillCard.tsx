"use client";

import React, { useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { Sparkles, GraduationCap } from "lucide-react";
import { Skill } from "./skillsData";

// Customized high-fidelity inline SVGs for all technology logos
function TechLogo({ id, className = "w-10 h-10" }: { id: string; className?: string }) {
  switch (id) {
    case "html":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" fill="#E34F26" />
          <path d="M12 2.18v19.64l6.573-1.87 1.543-17.77H12z" fill="#EF652A" />
          <path d="M12 9.475H8.384L8.13 6.627H12V4.44H5.688l.758 8.528H12v-2.18zM12 17.27l-.023.007-3.15-.85-.202-2.27h-2.18l.403 4.53 5.129 1.39.023-.007V17.27z" fill="#EBEBEB" />
          <path d="M12 9.475V11.8h3.37l-.318 3.568-3.052.824v2.18l5.029-1.39.638-7.163H12zM12 4.44v2.187h5.952l.192-2.187H12z" fill="white" />
        </svg>
      );
    case "css":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" fill="#1572B6" />
          <path d="M12 2.18v19.64l6.573-1.87 1.543-17.77H12z" fill="#33A9DC" />
          <path d="M12 9.475H8.384L8.13 6.627H12V4.44H5.688l.758 8.528H12v-2.18zM12 17.27l-.023.007-3.15-.85-.202-2.27h-2.18l.403 4.53 5.129 1.39.023-.007V17.27z" fill="#EBEBEB" />
          <path d="M12 9.475V11.8h3.37l-.318 3.568-3.052.824v2.18l5.029-1.39.638-7.163H12zM12 4.44v2.187h5.952l.192-2.187H12z" fill="white" />
        </svg>
      );
    case "javascript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M18.667 19.333c0 .888-.344 1.488-1.033 1.8-.69.31-1.6.467-2.734.467-1.077 0-1.983-.2-2.716-.6l.533-1.833c.6.355 1.25.533 1.95.533.578 0 1.011-.11 1.3-.333.289-.222.433-.567.433-1.034 0-.377-.122-.688-.367-.933-.244-.244-.705-.567-1.383-.967-1.022-.6-1.744-1.122-2.167-1.566-.422-.445-.633-1.056-.633-1.834 0-.822.333-1.422 1-1.8.666-.378 1.544-.567 2.633-.567.978 0 1.778.156 2.4.467l-.533 1.767c-.556-.267-1.156-.4-1.8-.4-.489 0-.856.09-1.1.266-.244.178-.367.445-.367.8 0 .334.128.612.383.834.256.222.75.533 1.484.933.977.533 1.677 1.056 2.1 1.567.422.51.633 1.155.633 1.933zm-7.667-2.133c0 .889-.31 1.533-.933 1.933-.622.4-1.556.6-2.8.6-.933 0-1.789-.155-2.567-.467l.467-1.767c.71.31 1.4.467 2.067.467.51 0 .9-.09 1.166-.267.267-.178.4-.467.4-.867v-5.966H11v7.334z" fill="#000000" />
        </svg>
      );
    case "typescript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="3" fill="#3178C6" />
          <path d="M20.25 18.75h-2.5v-6.25H20.25v6.25zM12.5 18.75c0 .625-.125 1.094-.375 1.406s-.625.469-1.125.469c-.5 0-.969-.156-1.406-.469l.344-1.375c.344.22.688.328 1.031.328.22 0 .39-.047.516-.14s.187-.266.187-.516V9.375H12.5v9.375zM16.5 9.375c-.344-.22-.719-.328-1.125-.328-.344 0-.625.078-.844.234s-.328.39-.328.703c0 .28.11.516.328.703s.64.422 1.266.703c.875.375 1.5.78 1.875 1.22s.563.984.563 1.64c0 .844-.328 1.5-.984 1.97s-1.547.7-2.672.7c-.938 0-1.797-.188-2.578-.563l.5-1.5c.78.438 1.5.656 2.156.656.469 0 .844-.094 1.125-.28s.422-.484.422-.89c0-.312-.11-.578-.328-.8s-.656-.47-1.312-.75c-.844-.344-1.453-.734-1.828-1.17s-.563-.984-.563-1.64c0-.812.312-1.453.938-1.922s1.484-.703 2.578-.703c.875 0 1.64.156 2.3.469l-.47 1.406z" fill="white" />
        </svg>
      );
    case "react":
      return (
        <svg className={className} viewBox="-11.5 -10.2317 23 20.4634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.52L69.142 54H54v72h14.4V72.58l65.811 84.94H149.51z" fill="url(#next-gradient)" />
          <rect x="115" y="54" width="14.4" height="72" fill="url(#next-gradient)" />
          <defs>
            <linearGradient id="next-gradient" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "tailwind":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.567.89 2.29 1.624C13.684 10.635 15.068 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.567-.89-2.29-1.624C16.318 6.165 14.934 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.567.89 2.29 1.624 1.192 1.21 2.576 2.576 5.509 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.567-.89-2.29-1.624C10.318 13.365 8.934 12 6.001 12z" fill="#06B6D4" />
        </svg>
      );
    case "nodejs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9v-9.8L12 2zm6.9 13.8L12 19.8l-6.9-4V8.2L12 4.2l6.9 4v7.6z" fill="#339933" />
          <path d="M12 6.5l5.2 3v5l-5.2 3-5.2-3v-5l5.2-3z" fill="#339933" fillOpacity="0.4" />
          <path d="M12 9l2.6 1.5v3L12 15l-2.6-1.5v-3L12 9z" fill="#339933" />
        </svg>
      );
    case "express":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#353535" />
          <path d="M6 7h4v2H8v2h2v2H8v2h2v2H6V7zm6 0h2.5l1.5 3 1.5-3H20l-2.5 4.5L20 16h-2.5l-1.5-3-1.5 3H12l2.5-4.5L12 7z" fill="#FFFFFF" />
        </svg>
      );
    case "mongodb":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .3c-.3 0-.6.1-.8.4C9.5 3.3 7 8 7 11.5c0 3.6 2 6.5 5 7.9V23.7c0 .2.2.3.4.3s.4-.1.4-.3v-4.3c3-1.4 5-4.3 5-7.9 0-3.5-2.5-8.2-4.2-10.8-.2-.3-.5-.4-.8-.4zm0 2.2c1 1.9 3.5 6 3.5 9 0 2.8-1.5 5-3.5 6.1V2.5z" fill="#47A248" />
          <path d="M12 2.5V17.6c-2-1.1-3.5-3.3-3.5-6.1 0-3 2.5-7.1 3.5-9z" fill="#589636" />
        </svg>
      );
    case "firebase":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.89 15.4L8.14 2.28c.1-.32.55-.32.65 0L10.9 9.07 3.89 15.4z" fill="#FFC107" />
          <path d="M13.62 10.36L11.19 2.87c-.12-.37-.65-.37-.77 0L8.85 7.69l4.77 2.67z" fill="#FFA000" />
          <path d="M3.84 15.54l.07-.15 7.15-6.42 2.56 1.43 6.44 11.45c.16.29-.05.65-.38.65H4.25c-.38 0-.62-.42-.41-.76l.01-.01" fill="#FF8F00" />
          <path d="M11.06 9.04L3.89 15.4l7.17-6.36c.1-.09.25-.09.35.01L13.9 10.5l-2.84-1.46z" fill="#F4B400" />
          <path d="M20.08 22.5L13.62 10.36l6.46 12.14z" fill="#FFCA28" />
        </svg>
      );
    case "jwt":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" stroke="#FB0057" strokeWidth="2" />
          <path d="M12 2a10 10 0 0110 10c0 1-.15 1.96-.44 2.86L12 12V2z" fill="#00B9F1" />
          <path d="M12 12l9.56 2.86A10 10 0 012 12c0-5.52 4.48-10 10-10v10z" fill="#D63AFF" />
          <path d="M12 12H2a10 10 0 0017.56 2.86L12 12z" fill="#FB0057" />
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
        </svg>
      );
    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.384 11.233L12.768.616a1.082 1.082 0 00-1.533 0L9.124 2.727l3.208 3.207a3.023 3.023 0 013.914 3.914l3.197 3.196a3.023 3.023 0 01.378 4.275l3.56-3.56a1.083 1.083 0 000-1.536z" fill="#F05032" />
          <path d="M18.847 13.987a3.023 3.023 0 01-3.195-3.197L12.456 7.59a3.023 3.023 0 11-4.274 0l-3.21-3.21L.616 11.232a1.082 1.082 0 000 1.533l10.617 10.617a1.083 1.083 0 001.533 0l10.616-10.616a1.083 1.083 0 000-1.536l-4.535 4.537z" fill="#F05032" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor" />
        </svg>
      );
    case "vscode":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 6.5L16.5.5v23l-15-6V6.5z" fill="#007ACC" fillOpacity="0.8" />
          <path d="M16.5.5L22.5 4v16l-6 3.5V.5z" fill="#007ACC" />
          <path d="M1.5 6.5l7 5.5-7 5.5v-11z" fill="#1F9CF0" />
          <path d="M16.5 6.5v11L8.5 12l8-5.5z" fill="#0066B3" />
        </svg>
      );
    case "figma":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0h-4c-2.209 0-4 1.791-4 4s1.791 4 4 4h4V0z" fill="#F24E1E" />
          <path d="M12 8H8c-2.209 0-4 1.791-4 4s1.791 4 4 4h4V8z" fill="#A259FF" />
          <path d="M8 16c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4v-4H8z" fill="#0ACF83" />
          <path d="M16 8h4c2.209 0-4-1.791-4-4s-1.791-4-4-4h-4v8z" fill="#FF7262" />
          <path d="M16 12c0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4h-4v8z" fill="#1ABC9C" />
        </svg>
      );
    case "postman":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.85 10.4c-.16-.62-.57-1.13-1.12-1.42l-9.15-4.83a3.17 3.17 0 00-2.92 0L1.51 8.98a1.59 1.59 0 00-.77 2.18 1.62 1.62 0 001.2.9h19.86c.64-.02 1.21-.4 1.43-1 .25-.66.1-1.39-.38-1.66z" fill="#FF6C37" />
          <path d="M12.12 13.56c-.08-.03-.17-.03-.25 0l-9.15 4.83a1.59 1.59 0 00-.77 2.18 1.62 1.62 0 001.2.9h17.86a1.59 1.59 0 001.43-1 1.62 1.62 0 00-.38-1.66l-10.24-5.25z" fill="#FF6C37" fillOpacity="0.8" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="#FF6C37" fillOpacity="0.2" />
        </svg>
      );
    case "aws":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.188 3.992c-1.394.02-2.827.42-3.805 1.22-.525.432-.472 1.157.065 1.52.474.321.996.196 1.488-.093.753-.443 1.657-.689 2.502-.647 1.942.063 3.003 1.115 3.013 2.766a5.539 5.539 0 00-2.316-.54c-2.484.004-4.708 1.173-4.706 3.82.002 1.995 1.34 3.056 3.033 3.054a3.834 3.834 0 002.977-1.378c.35.485.875 1.096 1.642 1.096.797 0 1.213-.538 1.423-.974.195-.407.247-.942.247-1.503v-4.996c0-3.32-2.146-4.346-5.563-4.346zm.43 10.97c-.983 0-1.782-.603-1.78-1.597.003-1.049.882-1.55 1.977-1.55a4.238 4.238 0 011.64.331c-.13 1.839-1.002 2.816-1.837 2.816z" fill="#FF9900" />
          <path d="M2.518 17.518c5.448 3.328 13.067 4.191 18.776 1.543.513-.238.995.275.617.653-4.887 4.885-13.435 4.394-19.645-.297-.432-.325-.138-.857.252-.9zm19.112-.047c-.287-.367-1.928-.216-2.66-.123-.236.03-.284-.2-.069-.333 1.385-.86 3.023-.62 3.238-.344.215.277-.384 1.823-1.328 2.946-.145.174-.337.073-.28-.142.179-.675.25-1.828.099-2.004z" fill="#FF9900" />
        </svg>
      );
    case "redux":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.24 2a9.98 9.98 0 00-7.07 2.93 10 10 0 000 14.14A10 10 0 1012.24 2zm2.93 13.66a4.11 4.11 0 01-5.86 0 4.14 4.14 0 010-5.86 4.14 4.14 0 015.86 0 4.14 4.14 0 010 5.86z" fill="#764ABC" />
          <path d="M11 6.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5S13.485 6.5 11 6.5zm0 7.5a3 3 0 110-6 3 3 0 010 6z" fill="#764ABC" fillOpacity="0.6" />
          <circle cx="12.24" cy="12.07" r="1.5" fill="#764ABC" />
        </svg>
      );
    case "vercel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

interface SkillCardProps {
  skill: Skill;
  accentColor: string;
  index: number;
}

export default function SkillCard({ skill, accentColor, index }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values for tracking glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for mouse follow
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const background = useMotionTemplate`radial-gradient(180px circle at ${glowX}px ${glowY}px, rgba(92, 143, 179, 0.22), transparent 75%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const getLevelBadgeStyles = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "Advanced":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "Intermediate":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      case "Learning":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20";
    }
  };

  // Stagger / fade variants
  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative group rounded-3xl p-[1px] transition-all duration-300 w-full h-full flex"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          mouseX.set(rect.width / 2);
          mouseY.set(rect.height / 2);
        }
      }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated Gradient Border Overlay (Visible on Hover) */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${accentColor} opacity-20 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
      />

      {/* Main Glassmorphic Card Container */}
      <div className="relative w-full rounded-[23px] bg-card/65 dark:bg-[#152330]/65 border border-border/40 dark:border-[#223547]/50 p-6 md:p-7 backdrop-blur-md flex flex-col justify-between overflow-hidden">
        
        {/* Dynamic Card Glow (Glow follows cursor) */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{ background }}
        />

        {/* Top Section: Icon & Badges */}
        <div>
          <div className="flex items-start justify-between mb-5">
            {/* Logo Wrapper with Custom Hover Rotation */}
            <motion.div 
              className="p-3 bg-foreground/[0.03] dark:bg-white/[0.02] border border-border/30 dark:border-[#223547] rounded-2xl flex items-center justify-center shadow-inner text-foreground/80 dark:text-white"
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <TechLogo id={skill.id} className="w-10 h-10 object-contain" />
            </motion.div>

            {/* Experience level badge & active learning indicator */}
            <div className="flex flex-col items-end gap-1.5">
              <motion.span 
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full border ${getLevelBadgeStyles(skill.level)} tracking-wider select-none`}
              >
                {skill.level}
              </motion.span>
              
              {skill.isLearning && (
                <span className="inline-flex items-center gap-1 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 animate-pulse uppercase tracking-wider select-none">
                  {skill.id === "aws" ? (
                    <>
                      <Sparkles className="w-2.5 h-2.5" />
                      Active Learning
                    </>
                  ) : (
                    <>
                      <GraduationCap className="w-2.5 h-2.5" />
                      Learning
                    </>
                  )}
                </span>
              )}
            </div>
          </div>

          {/* Technology Info */}
          <h4 className="text-lg md:text-xl font-bold text-foreground dark:text-white mb-2 tracking-tight group-hover:text-primary dark:group-hover:text-[#8EAEC6] transition-colors duration-200">
            {skill.name}
          </h4>

          <p className="text-xs md:text-sm text-foreground/70 dark:text-zinc-400 leading-relaxed font-normal">
            {skill.description}
          </p>
        </div>

        {/* Decorative corner glow detail */}
        <div className={`absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br ${accentColor} opacity-5 rounded-tl-full blur-[8px] -z-10`} />
      </div>
    </motion.div>
  );
}
