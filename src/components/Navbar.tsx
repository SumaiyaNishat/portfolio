"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import Magnetic from "./Magnetic";
import { Menu, X, Sun, Moon, Mail } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", targetId: "hero" },
  { label: "About", targetId: "about" },
  { label: "Tech Stack", targetId: "tech" },
  { label: "Skills", targetId: "skills" },
  { label: "Education", targetId: "education" },
  { label: "Projects", targetId: "projects" },
  { label: "Contact", targetId: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ["hero", "about", "tech", "skills", "education", "experience", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    setIsMobileMenuOpen(false);
    if (el) {
      const offsetTop = el.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`bg-card/85 rounded-full p-2 flex items-center justify-between pill-shadow w-full max-w-[950px] transition-all duration-500 border border-border/40 backdrop-blur-md ${isScrolled ? "scale-[0.97] bg-card/95 border-border/80 shadow-2xl" : ""
            }`}
        >
          {/* Logo */}
          <div className="pl-4">
            <Magnetic range={0.15} speed={0.7}>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
                className="text-foreground font-extrabold text-lg sm:text-xl tracking-tight select-none flex items-center gap-1.5"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                Sumaiya<span className="text-[#8EAEC6] font-normal">.dev</span>
              </a>
            </Magnetic>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1 text-[14px] font-medium text-foreground/60">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <li key={item.targetId} className="relative">
                  <a
                    href={`#${item.targetId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.targetId);
                    }}
                    className={`relative px-4 py-2 rounded-full transition-colors duration-300 block select-none ${isActive ? "text-foreground font-semibold" : "hover:text-foreground"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 bg-foreground/5 dark:bg-foreground/10 rounded-full -z-10"
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Controls: Mode Toggle & Mobile Menu */}
          <div className="flex items-center gap-2 pr-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-border/40 hover:bg-foreground/5 flex items-center justify-center text-foreground transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-zinc-850" />
              )}
            </button>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full border border-border/40 hover:bg-foreground/5 flex items-center justify-center text-foreground transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[360px] bg-card border-l border-border/40 shadow-2xl z-50 p-8 flex flex-col justify-between lg:hidden"
            >
              <div className="space-y-8">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-border/40">
                  <span className="text-foreground font-extrabold text-lg select-none">
                    Navigation
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-foreground hover:bg-foreground/5 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col gap-4">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.targetId;
                    return (
                      <a
                        key={item.targetId}
                        href={`#${item.targetId}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.targetId);
                        }}
                        className={`text-lg py-2.5 px-4 rounded-2xl transition font-medium select-none flex items-center justify-between ${isActive
                            ? "bg-foreground/10 text-foreground font-semibold"
                            : "text-foreground/75 hover:bg-foreground/5 hover:text-foreground"
                          }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Theme toggle & contact details at the bottom of drawer */}
              <div className="space-y-6 pt-6 border-t border-border/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60 font-medium">Switch Theme</span>
                  <button
                    onClick={toggleTheme}
                    className="w-12 h-12 rounded-2xl bg-card border border-border/40 flex items-center justify-center text-foreground transition cursor-pointer"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5 text-amber-500" />
                    ) : (
                      <Moon className="w-5 h-5 text-zinc-850" />
                    )}
                  </button>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="w-full bg-primary text-background py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 select-none text-center"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
