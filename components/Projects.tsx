"use client";

import { motion } from "framer-motion";
import { Flame, Film, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FIRERESCUES",
    subtitle: "Smart emergency/fire rescue management system",
    description: "An advanced IoT-integrated emergency tracking and coordination platform designed to optimize response times and manage fire rescue dispatch details dynamically in critical windows.",
    tech: ["Next.js", "React Native", "Firebase", "Google Maps API"],
    icon: Flame,
    link: "https://github.com/trees-sa/firerescues",
    // Slight vertical shift up for the first column
    offset: "lg:-translate-y-6",
  },
  {
    title: "CINEMATCHES",
    subtitle: "Movie recommendation and matching platform",
    description: "A collaborative movie recommendation engine using preference-matching algorithms to allow groups of users to vote and sync on movies to watch together, eliminating index paralysis.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    icon: Film,
    link: "https://github.com/trees-sa/cinematches",
    // Slight vertical shift down for the second column
    offset: "lg:translate-y-6",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden bg-cyber-black/40 cyber-grid"
    >
      {/* Floating Background Typography */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none z-0 overflow-hidden select-none">
        <div className="outline-text text-[20vw] opacity-[0.03] ml-12 font-black leading-none uppercase select-none">
          DEV
        </div>
      </div>

      {/* Cyan Glow Element */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-cyber-cyan/10 blur-[130px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center z-10">
        
        {/* Left Column: Heading and Info (replicates "WHAT WE DO?" layout) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-cyber-cyan font-display">
              OUR PROJECTS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-tight"
          >
            WHAT I <span className="text-cyber-cyan neon-glow-cyan">BUILD</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md"
          >
            Developing high-quality, impact-driven software solutions using cutting-edge tech stacks. From smart emergency systems utilizing real-time maps to social matching platforms, I build responsive tools with focus on clean code structure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://github.com/trees-sa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-cyber-cyan/60 bg-transparent text-xs font-semibold tracking-[0.2em] text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] font-display"
            >
              VIEW ALL
            </a>
          </motion.div>
        </div>

        {/* Right Column: 2 Staggered Project Cards (matching the reference styling) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 items-center">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col justify-between p-8 rounded-[1.5rem] glass-card glass-card-hover transition-all duration-300 min-h-[360px] cursor-default group ${project.offset}`}
              >
                {/* Neon Icon Container */}
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-cyber-cyan shadow-[inset_0_0_10px_rgba(6,182,212,0.1)] group-hover:border-cyber-cyan/50 group-hover:text-cyber-cyan group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
                    <IconComponent size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-600 hover:text-cyber-cyan transition-colors duration-200"
                    aria-label={`View GitHub Repository for ${project.title}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                {/* Card Title & Info */}
                <div className="flex-grow">
                  <h3 className="text-xl font-display font-bold text-white tracking-wide mb-1 group-hover:text-cyber-cyan transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-cyber-cyan mb-4 font-semibold opacity-80">
                    {project.subtitle}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags footer */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-[10px] uppercase tracking-wider font-semibold bg-zinc-950/80 border border-zinc-800 text-zinc-500 font-display group-hover:border-zinc-800/80 group-hover:text-zinc-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom subtle neon line highlight */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
