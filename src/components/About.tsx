"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Sparkles, Heart, Coffee, BookOpen, Target } from "lucide-react";

export default function About() {
  const hobbies = [
    { name: "Digital Content", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { name: "Reading", icon: <BookOpen className="w-3.5 h-3.5" /> },
    { name: "Creative Crafts", icon: <Heart className="w-3.5 h-3.5" /> },
    { name: "Learning Tech", icon: <Target className="w-3.5 h-3.5" /> }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-border/30 dark:border-zinc-900/60">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

        {/* Left Column: Visual avatar card & Hobbies */}
        <div className="w-full lg:w-[45%] relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-card/45 dark:bg-zinc-950/40 border border-border/50 dark:border-zinc-900/65 backdrop-blur-sm shadow-xl transition-colors duration-500">
          {/* Blur Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-purple-550/5 rounded-full blur-[60px] -z-10" />

          <div>
            {/* Avatar icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-550/10">
              <User className="w-8 h-8 text-white animate-pulse" />
            </div>

            <h3 className="text-xl font-bold text-foreground dark:text-white mb-3 select-none">Sumaiya Khan Nishat</h3>
            <p className="text-foreground/75 dark:text-zinc-400 text-sm leading-relaxed mb-6 select-none">
              Passionate MERN Stack Developer focused on building modern, responsive, and user-friendly web applications using React, Next.js, Node.js, MongoDB, and Firebase.
            </p>

            {/* Quick stats metrics */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/40 dark:border-zinc-900">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground dark:text-white block select-none">12+</span>
                <span className="text-[10px] sm:text-xs text-foreground/50 dark:text-zinc-500 uppercase tracking-wider font-semibold">Projects Built</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground dark:text-white block select-none">15+</span>
                <span className="text-[10px] sm:text-xs text-foreground/50 dark:text-zinc-500 uppercase tracking-wider font-semibold">Technologies Learned</span>
              </div>
            </div>
          </div>

          {/* Personality and Hobbies */}
          <div className="mt-8">
            <h4 className="text-xs font-semibold text-foreground/60 dark:text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-1.5 select-none">
              <Heart className="w-3.5 h-3.5 text-pink-400" />
              Hobbies &amp; Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.name}
                  className="bg-foreground/5 dark:bg-zinc-900 border border-border/30 dark:border-zinc-800 text-foreground/80 dark:text-zinc-300 text-xs font-medium py-1 px-3 rounded-lg select-none flex items-center gap-1.5 shadow-sm"
                >
                  {hobby.icon}
                  <span>{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Bio details */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-foreground/50 dark:text-zinc-505 font-semibold uppercase tracking-widest text-xs mb-4"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Biography &amp; Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-foreground dark:text-white mb-6 select-none"
          >
            My Journey in Web Development
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground/85 dark:text-zinc-400 text-sm sm:text-base space-y-5 leading-relaxed select-none"
          >
            <p>
              My journey into web development started with a simple curiosity about how websites are created and how they work behind the scenes. That curiosity inspired me to explore the fundamentals of web development and gradually build my skills step by step.
            </p>

            <p>
              I began with HTML and CSS, learning how to structure and design web pages. As my interest grew, I explored JavaScript to add interactivity and create more engaging user experiences. Later, I learned React, Next.js, and Tailwind CSS to build modern, responsive, and scalable web applications.
            </p>

            <p>
              Wanting to understand how complete web applications work, I expanded my knowledge into backend development with Node.js, Express.js, and MongoDB. I also gained experience with Firebase Authentication and secure user management, which helped me develop a strong foundation in full-stack development.
            </p>

            <p>
              I enjoy building practical projects, solving real-world problems, and continuously learning new technologies. Outside of programming, I enjoy creating digital content, exploring new ideas, and working on creative projects. My goal is to keep improving my skills and build impactful web applications that provide real value to users.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
