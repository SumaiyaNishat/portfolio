"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, Facebook, Download, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import { Button } from "@heroui/react";

const DESIGNATIONS = [
  "MERN Stack Developer",
  "Next.js Enthusiast",
  "Learning AWS"
];

export default function Hero() {
  const [designationIndex, setDesignationIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setDesignationIndex((prev) => (prev + 1) % DESIGNATIONS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6 md:px-20 lg:px-32 overflow-hidden bg-background transition-colors duration-500"
    >
      {/* Background Interactive Lights */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: mousePosition.x * 1.5,
            y: mousePosition.y * 1.5,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: -mousePosition.x * 1.5,
            y: -mousePosition.y * 1.5,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-secondary/15 dark:bg-secondary/5 blur-[140px]"
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl z-10">

        {/* Left Column: Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-border/30 text-foreground/80 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 w-fit mx-auto lg:mx-0 select-none shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities
          </motion.div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-foreground/70 uppercase mb-3 select-none">
            Hello, I'm
          </h2>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-4 tracking-tight select-none">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent dark:from-white dark:via-secondary dark:to-accent">
              Sumaiya Khan Nishat
            </span>
          </h1>

          {/* Animated designations */}
          <div className="h-10 sm:h-14 overflow-hidden mb-6 flex items-center justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.h3
                key={designationIndex}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary select-none"
              >
                {DESIGNATIONS[designationIndex]}
              </motion.h3>
            </AnimatePresence>
          </div>

          <p className="text-foreground/75 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mb-8 leading-relaxed select-none">
            I am a passionate MERN Stack Developer with experience in building modern, responsive, and user-friendly web applications. I specialize in MongoDB, Express.js, React.js, Next.js, and Node.js, with a strong focus on creating clean, scalable, and efficient solutions.
          </p>

          {/* Buttons: Resume & Contact */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href="/resume.pdf"
              download="Sumaiya_Khan_Nishat_Resume.pdf"
              className="bg-primary text-background dark:bg-primary dark:text-background font-bold px-8 py-3.5 rounded-full hover:opacity-90 text-sm sm:text-base flex items-center gap-2.5 transition duration-300 shadow-lg shadow-primary/20 cursor-pointer text-center"
            >
              <Download className="w-4.5 h-4.5" />
              Download Resume
            </a>
            <Button
              onPress={() => scrollToSection("projects")}
              className="bg-transparent border-2 border-border/80 hover:bg-foreground/5 text-foreground font-semibold px-8 py-6 rounded-full text-sm sm:text-base flex items-center gap-2 transition duration-300 cursor-pointer"
            >
              View Work
              <ArrowRight className="w-4.5 h-4.5" />
            </Button>
          </div>

          {/* Social Icons with Magnetic effects */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <Magnetic range={0.2} speed={0.7}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border/40 text-foreground shadow-sm hover:bg-foreground/5 hover:border-border/80 transition duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </Magnetic>
            <Magnetic range={0.2} speed={0.7}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border/40 text-foreground shadow-sm hover:bg-foreground/5 hover:border-border/80 transition duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Magnetic>
            <Magnetic range={0.2} speed={0.7}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border/40 text-foreground shadow-sm hover:bg-foreground/5 hover:border-border/80 transition duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right Column: Hero Image (3D Floating Effect) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[500px]"
        >
          {/* Custom background circles */}
          <div className="absolute w-[280px] sm:w-[400px] md:w-[460px] h-[280px] sm:h-[400px] md:h-[460px] rounded-full bg-gradient-to-tr from-primary/10 to-secondary/15 dark:from-primary/5 dark:to-secondary/10 blur-xl animate-pulse" />

          <motion.div
            animate={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
            className="absolute z-10 flex items-center justify-center"
          >
            <div className="w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full overflow-hidden border-4 border-primary/20 dark:border-primary/30 relative shadow-2xl bg-gradient-to-br from-card to-background flex items-center justify-center">
              <div className="w-[96%] h-[96%] relative rounded-full overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Sumaiya Khan Nisha Profile"
                  fill
                  className="object-cover object-center filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                  sizes="(max-width: 768px) 240px, 320px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
