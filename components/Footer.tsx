"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-black border-t border-white/5 py-12 relative overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] rounded-full bg-cyber-cyan/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-6">
        
        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/trees-sa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-zinc-950/60 border border-zinc-900 text-zinc-500 hover:text-cyber-cyan hover:border-cyber-cyan/30 hover:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all duration-300"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="mailto:treesa.mariya@example.com"
            className="p-2.5 rounded-full bg-zinc-950/60 border border-zinc-900 text-zinc-500 hover:text-cyber-cyan hover:border-cyber-cyan/30 hover:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-zinc-950/60 border border-zinc-900 text-zinc-500 hover:text-cyber-cyan hover:border-cyber-cyan/30 hover:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* Text Details */}
        <div className="text-center flex flex-col gap-2">
          <p className="text-zinc-600 text-xs tracking-wider">
            &copy; {currentYear} Treesa Mariya. All rights reserved.
          </p>
          <p className="text-zinc-600 text-[10px] tracking-[0.2em] uppercase font-display">
            DESIGN INSPIRED BY{" "}
            <span className="text-zinc-500 font-semibold">HYKROX</span> | BUILT
            BY <span className="text-zinc-500 font-semibold">TREESA MARIYA</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
