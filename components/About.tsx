"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Palette, BrainCircuit, Lightbulb, Briefcase } from "lucide-react";

const features = [
  {
    title: "Clean Code",
    description: "Writing readable, maintainable, and highly structured code using modern architectural patterns.",
    icon: Code2,
  },
  {
    title: "Modern Design",
    description: "Crafting fully responsive, accessible, and immersive layouts with smooth transitions.",
    icon: Palette,
  },
  {
    title: "Problem Solving",
    description: "Analyzing data structures, debugging systems, and optimizing performance bottlenecks.",
    icon: BrainCircuit,
  },
  {
    title: "Creative Thinking",
    description: "Approaching web development challenges with unique, interactive, and modern design solutions.",
    icon: Lightbulb,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-cyber-black">
      
      {/* Decorative Blur Glows */}
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] rounded-full bg-cyber-blue/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-cyber-cyan/15 blur-[140px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Top Content: About Bio & Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center mb-24">
          
          {/* Left Column: Grayscale image and background letters (replicates reference) */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-[350px] sm:h-[420px] md:h-[480px] w-full">
            {/* Outline Letter Background behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden">
              <span className="outline-text text-[24vw] lg:text-[18vw] opacity-[0.03] font-black tracking-widest leading-none">
                CSE
              </span>
            </div>

            {/* Low-contrast Grayscale Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[340px] sm:h-[390px] md:h-[440px] rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-950/20 shadow-2xl"
            >
              <Image
                src="/about_bg.png"
                alt="Developer workspace theme"
                fill
                sizes="(max-w-720px) 100vw, 360px"
                className="object-cover grayscale brightness-[0.4] contrast-[1.2] opacity-50 mix-blend-lighten hover:scale-105 transition-transform duration-750"
              />
              {/* Radial Fade-out overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-cyber-black/70" />
            </motion.div>
          </div>

          {/* Right Column: Bio & 2x2 grid */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-cyber-cyan font-display">
                ABOUT ME
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-tight"
            >
              WHO AM <span className="text-cyber-cyan neon-glow-cyan">I?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-sm md:text-base leading-relaxed mb-12 max-w-xl"
            >
              Currently pursuing a Bachelor of Technology in Computer Science and Engineering at Vimal Jyothi Engineering College, I focus on coding paradigms and modern web methodologies. I enjoy creating performant sites, solving complex bugs, and testing user-friendly visual structures.
            </motion.p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {features.map((feat, index) => {
                const FeatIcon = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 text-cyber-cyan mt-1">
                      <div className="p-2 rounded-xl bg-zinc-950/60 border border-zinc-900 group-hover:border-cyber-cyan/30 transition-colors">
                        <FeatIcon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-display font-semibold text-base mb-1.5 group-hover:text-cyber-cyan transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-zinc-500 text-xs md:text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                        {feat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Centered Bottom Statistics (exactly matching the reference style, centered) */}
        <div id="skills" className="w-full flex justify-center border-t border-white/5 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center group cursor-default"
          >
            {/* Stat SVG Icon */}
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900 text-cyber-cyan mb-4 shadow-[inset_0_0_15px_rgba(6,182,212,0.1)] group-hover:border-cyber-cyan/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300">
              <Briefcase size={32} className="group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            {/* Stat Label */}
            <span className="text-zinc-500 text-[10px] md:text-xs font-display font-bold uppercase tracking-[0.25em] mb-2 group-hover:text-zinc-400 transition-colors">
              PROJECTS COMPLETED
            </span>
            
            {/* Stat Value */}
            <span className="text-4xl md:text-5xl font-display font-black text-cyber-cyan bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue tracking-wider neon-glow-cyan group-hover:scale-105 transition-transform duration-300">
              5+
            </span>
            
            {/* Outline Letter background running behind stat */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none z-0 select-none overflow-hidden">
              <span className="outline-text text-[15vw] opacity-[0.02] font-black uppercase tracking-[0.2em]">
                VJEC
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
