"use client";

import React from "react";
import Magnetic from "./Magnetic";
import { Github, Linkedin, Facebook, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-10 px-6 overflow-hidden relative">
      {/* Glow underlay */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Bottom Socials Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-1 items-center sm:items-start text-foreground/50 text-xs sm:text-sm select-none">
            <span>&copy; {new Date().getFullYear()} Sumaiya Khan Nishat. All rights reserved.</span>
            <span className="flex items-center gap-1.5 text-foreground/45 mt-1">
              Built with Next.js &amp; HeroUI
              <Heart className="w-3 h-3 text-[#7C3AED]" />
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Magnetic range={0.2} speed={0.7}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-border/40 bg-card flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-border transition duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic range={0.2} speed={0.7}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-border/40 bg-card flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-border transition duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic range={0.2} speed={0.7}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-border/40 bg-card flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-border transition duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </Magnetic>
          </div>

          {/* Back to top button */}
          <Magnetic range={0.15} speed={0.7}>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-border/40 bg-card flex items-center justify-center text-foreground/75 hover:text-foreground hover:border-border transition duration-300 select-none cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
