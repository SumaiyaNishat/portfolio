import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Sparkles, Terminal, AlertTriangle, Milestone, ShieldCheck, Heart, Layers } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Sumaiya Khan Nishat Portfolio` : "Project Details",
    description: project ? project.description : "Details of developer projects.",
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get related projects (excluding current one)
  const relatedProjects = PROJECTS_DATA.filter((p) => p.slug !== slug);

  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-6 sm:px-12 md:px-24 relative overflow-hidden transition-colors duration-500">
      {/* Background Glow Lights */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-purple-500/5 dark:bg-purple-650/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-650/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground font-semibold transition group select-none"
          >
            <ArrowLeft className="w-4 h-4 transition group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>

        {/* Header Block */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2 block select-none">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground dark:text-white leading-tight tracking-tight select-none">
            {project.title}
          </h1>
        </div>

        {/* Featured Image Centerpiece */}
        <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-card border border-border/50 dark:border-zinc-900 mb-16 shadow-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
          
          {/* Left Column: Full Description, Features, Challenges, Solutions */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white flex items-center gap-2 select-none">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Project Overview
              </h2>
              <p className="text-foreground/80 dark:text-zinc-400 text-sm sm:text-base leading-relaxed select-none">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white flex items-center gap-2 select-none">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className="p-4 rounded-2xl bg-card/50 dark:bg-zinc-950/30 border border-border/40 dark:border-zinc-900/60 text-sm text-foreground/80 dark:text-zinc-400 flex items-start gap-2.5 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Challenges */}
              <div className="p-6 sm:p-8 rounded-3xl bg-red-500/5 dark:bg-red-500/5 border border-red-500/20 space-y-3">
                <h3 className="text-lg font-bold text-red-650 dark:text-red-400 flex items-center gap-2 select-none">
                  <AlertTriangle className="w-5 h-5" />
                  Challenges Faced
                </h3>
                <p className="text-foreground/80 dark:text-zinc-450 text-sm leading-relaxed select-none">
                  {project.challenges}
                </p>
              </div>

              {/* Solutions */}
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-500/5 dark:bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2 select-none">
                  <ShieldCheck className="w-5 h-5" />
                  Solutions Implemented
                </h3>
                <p className="text-foreground/80 dark:text-zinc-450 text-sm leading-relaxed select-none">
                  {project.solutions}
                </p>
              </div>
            </div>

            {/* Project Image Gallery */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white flex items-center gap-2 select-none">
                <Layers className="w-5 h-5 text-indigo-500" />
                Interface Showcase
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="relative aspect-video rounded-2xl overflow-hidden border border-border/40 dark:border-zinc-900/60 group shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-750 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Future Improvements */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white flex items-center gap-2 select-none">
                <Milestone className="w-5 h-5 text-blue-500" />
                Roadmap &amp; Improvements
              </h3>
              <p className="text-foreground/80 dark:text-zinc-400 text-sm leading-relaxed select-none">
                {project.improvements}
              </p>
            </div>
          </div>

          {/* Right Column: Tech Stack & Actions */}
          <div className="space-y-8 p-6 sm:p-8 rounded-3xl bg-card dark:bg-zinc-950/40 border border-border/50 dark:border-zinc-900/65 shadow-xl">
            {/* Tech Stack List */}
            <div>
              <h3 className="text-lg font-bold text-foreground dark:text-white mb-4 flex items-center gap-2 select-none">
                <Terminal className="w-5 h-5 text-primary" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-foreground/5 dark:bg-zinc-900 border border-border/45 dark:border-zinc-800 text-foreground/80 dark:text-zinc-350 text-xs sm:text-sm font-semibold select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-border/30 dark:border-zinc-900/60 flex flex-col gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-primary text-background dark:bg-white dark:text-black font-semibold py-3 rounded-full hover:opacity-90 flex items-center justify-center gap-2 transition duration-200 shadow-md cursor-pointer text-center text-sm sm:text-base"
              >
                Launch Live App
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-transparent border-2 border-border/80 hover:bg-foreground/5 text-foreground font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition duration-200 cursor-pointer text-center text-sm sm:text-base"
              >
                View Repository
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="pt-16 border-t border-border/30 dark:border-zinc-900/60">
          <h3 className="text-2xl font-bold text-foreground dark:text-white mb-8 flex items-center gap-2 select-none">
            <Heart className="w-6 h-6 text-pink-500" />
            Related Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((p, idx) => (
              <div 
                key={p.slug}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/40 dark:border-zinc-900/60 hover:border-primary/40 dark:hover:border-primary/30 p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="relative w-24 h-16 rounded-xl overflow-hidden border border-border/30 flex-shrink-0">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">
                      {p.category}
                    </span>
                    <h4 className="text-base font-bold text-foreground dark:text-white mt-1 group-hover:text-primary dark:group-hover:text-primary-400 transition-colors duration-200">
                      {p.title}
                    </h4>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-foreground/70 dark:text-zinc-450 line-clamp-1 flex-grow pr-4">
                    {p.description}
                  </p>
                  <Link 
                    href={`/projects/${p.slug}`}
                    className="text-xs font-bold text-primary hover:underline flex-shrink-0 flex items-center gap-1"
                  >
                    View details
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
