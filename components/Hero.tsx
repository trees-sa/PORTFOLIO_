"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Large Floating Background Typography (like reference image) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <div className="outline-text text-[15vw] md:text-[18vw] leading-none opacity-4 w-full text-center tracking-[0.15em] select-none uppercase font-black">
          TREESA
        </div>
      </div>

      {/* Radial Cyan Glow Elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-cyber-cyan/15 blur-[120px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-cyber-blue/10 blur-[100px] pointer-events-none z-0" />

      {/* Main Grid Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left: Heading & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Small Upper Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-cyber-cyan font-display">
              CREATIVE DEVELOPER
            </span>
          </motion.div>

          {/* Main Typography Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            I AM A{" "}
            <span className="text-cyber-cyan bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue font-extrabold neon-glow-cyan">
              CREATIVE
            </span>{" "}
            DEVELOPER
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mb-8"
          >
            I am <strong className="text-white font-medium">Treesa Mariya</strong>, a Computer Science and Engineering student at <strong className="text-white font-medium">Vimal Jyothi Engineering College</strong>. I possess a deep passion for building high-performance software applications and crafting immersive, modern UI/UX designs that balance clean structure with striking visuals.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-blue text-sm font-semibold tracking-wider text-black hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] font-display"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950/40 text-sm font-semibold tracking-wider text-zinc-300 hover:text-cyber-cyan hover:border-cyber-cyan/50 hover:bg-zinc-950/70 transition-all duration-300 font-display"
            >
              <span>GET IN TOUCH</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Glowing Avatar Image Card (exactly matching the reference image layout) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative h-[380px] sm:h-[450px] md:h-[500px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[360px] sm:h-[410px] md:h-[460px] group"
          >
            {/* The outer cyan neon glow backdrop */}
            <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-b from-cyber-cyan via-cyber-blue to-transparent opacity-70 blur-xl group-hover:opacity-95 transition-opacity duration-500 pointer-events-none" />

            {/* Inner Glassmorphic Frame Card */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-cyber-cyan/35 bg-zinc-950/40 p-2 shadow-2xl backdrop-blur-sm flex items-center justify-center">
              <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
                <Image
                  src="/avatar.png"
                  alt="Treesa Mariya - Creative Developer"
                  fill
                  priority
                  sizes="(max-w-720px) 100vw, 360px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Cyber Card Overlay Grid/Scanlines */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display font-semibold tracking-wider text-lg text-white">
                    TREESA MARIYA
                  </p>
                  <p className="text-xs uppercase tracking-widest text-cyber-cyan mt-1 font-medium">
                    BTECH CSE Student
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating abstract decorative cyan indicator */}
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-cyber-cyan rounded-tr-lg" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-cyber-cyan rounded-bl-lg" />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
