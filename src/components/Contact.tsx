"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form endpoint submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Hide feedback after duration
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-border/30 dark:border-zinc-900/60">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
        
        {/* Left Column: Contact details */}
        <div className="w-full lg:w-[40%] flex flex-col justify-between p-8 rounded-3xl bg-card/45 dark:bg-zinc-950/40 border border-border/50 dark:border-zinc-900/60 backdrop-blur-sm relative overflow-hidden shadow-md">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-purple-500/5 dark:bg-purple-600/5 rounded-full blur-[40px] -z-10" />

          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 block animate-pulse select-none">
              Connect
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground dark:text-white mb-6 select-none">
              Start a Conversation
            </h2>
            <p className="text-foreground/80 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-10 select-none">
              Have an exciting project idea, a design query, or just want to connect? Reach out using the channels below.
            </p>

            <div className="space-y-6">
              {/* Email details */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-foreground/5 dark:bg-zinc-900 border border-border/30 dark:border-zinc-850 rounded-2xl text-purple-400">
                  <Mail className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] text-foreground/50 dark:text-zinc-500 font-semibold block uppercase">Email</span>
                  <a href="mailto:nisha@example.com" className="text-sm sm:text-base font-bold text-foreground dark:text-white hover:text-primary transition duration-200">
                    nisha@example.com
                  </a>
                </div>
              </div>

              {/* Phone details */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-foreground/5 dark:bg-zinc-900 border border-border/30 dark:border-zinc-850 rounded-2xl text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-foreground/50 dark:text-zinc-500 font-semibold block uppercase">Phone</span>
                  <a href="tel:+8801700000000" className="text-sm sm:text-base font-bold text-foreground dark:text-white hover:text-primary transition duration-200">
                    +880 1700-000000
                  </a>
                </div>
              </div>

              {/* WhatsApp details */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-foreground/5 dark:bg-zinc-900 border border-border/30 dark:border-zinc-850 rounded-2xl text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-foreground/50 dark:text-zinc-500 font-semibold block uppercase">WhatsApp</span>
                  <a 
                    href="https://wa.me/8801700000000" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm sm:text-base font-bold text-foreground dark:text-white hover:text-primary transition duration-200"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/30 dark:border-zinc-900/60 mt-8 lg:mt-0 select-none text-xs text-foreground/40 dark:text-zinc-500">
            Typically responds within 24 hours.
          </div>
        </div>

        {/* Right Column: Message Form Card */}
        <div className="w-full lg:w-[60%] p-8 sm:p-10 rounded-3xl bg-card/45 dark:bg-zinc-950/45 border border-border/50 dark:border-zinc-900/60 backdrop-blur-sm relative overflow-hidden shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold text-foreground/60 dark:text-zinc-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="bg-foreground/5 dark:bg-zinc-900/50 border border-border/30 dark:border-zinc-850 focus:border-primary/50 dark:focus:border-primary/40 text-foreground dark:text-white rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none transition duration-300 shadow-sm"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold text-foreground/60 dark:text-zinc-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="bg-foreground/5 dark:bg-zinc-900/50 border border-border/30 dark:border-zinc-850 focus:border-primary/50 dark:focus:border-primary/40 text-foreground dark:text-white rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none transition duration-300 shadow-sm"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-semibold text-foreground/60 dark:text-zinc-400 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project proposal"
                className="bg-foreground/5 dark:bg-zinc-900/50 border border-border/30 dark:border-zinc-850 focus:border-primary/50 dark:focus:border-primary/40 text-foreground dark:text-white rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none transition duration-300 shadow-sm"
              />
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold text-foreground/60 dark:text-zinc-400 uppercase tracking-wider">
                Your Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your design or development goals..."
                className="bg-foreground/5 dark:bg-zinc-900/50 border border-border/30 dark:border-zinc-850 focus:border-primary/50 dark:focus:border-primary/40 text-foreground dark:text-white rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none transition duration-300 resize-none shadow-sm"
              />
            </div>

            {/* Submits */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div className="w-full sm:w-auto">
                <Button
                  type="submit"
                  isDisabled={isSubmitting || isSuccess}
                  className="w-full sm:w-auto bg-primary text-background dark:bg-white dark:text-black font-semibold px-8 py-6 rounded-full hover:opacity-90 flex items-center justify-center gap-2 transition duration-205 disabled:bg-foreground/10 disabled:text-foreground/40 cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </div>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold select-none mt-2 sm:mt-0"
                  >
                    <CheckCircle className="w-4 h-4 animate-bounce" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
