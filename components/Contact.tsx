"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-cyber-black/40 cyber-grid">
      
      {/* Cyan/Blue blur highlights */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-cyber-cyan/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full bg-cyber-blue/15 blur-[120px] pointer-events-none z-0" />

      {/* Background outline typography */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-0 overflow-hidden select-none">
        <span className="outline-text text-[20vw] opacity-[0.02] mr-8 font-black leading-none uppercase">
          VJEC
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-cyber-cyan font-display">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight"
          >
            CONNECT WITH <span className="text-cyber-cyan neon-glow-cyan">ME</span>
          </motion.h2>
        </div>

        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact details (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-[1.5rem] glass-card flex-grow flex flex-col justify-center"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6 tracking-wide">
                CONTACT DETAILS
              </h3>
              
              <div className="flex flex-col gap-6">
                {/* Email Item */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-cyber-cyan group-hover:border-cyber-cyan/30 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-display font-semibold">
                      Send an Email
                    </p>
                    <a
                      href="mailto:treesa.mariya@example.com"
                      className="text-white text-sm hover:text-cyber-cyan transition-colors"
                    >
                      treesa.mariya@example.com
                    </a>
                  </div>
                </div>

                {/* College Location Item */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-cyber-cyan group-hover:border-cyber-cyan/30 transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-display font-semibold">
                      College
                    </p>
                    <p className="text-white text-sm">
                      Vimal Jyothi Engineering College, Chemperi, Kerala
                    </p>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-cyber-cyan group-hover:border-cyber-cyan/30 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-display font-semibold">
                      Open Source
                    </p>
                    <a
                      href="https://github.com/trees-sa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-cyber-cyan transition-colors"
                    >
                      github.com/trees-sa
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form (7 columns) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-[1.5rem] glass-card"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-5 py-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-zinc-300 text-sm placeholder-zinc-700 focus:outline-none focus:border-cyber-cyan/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-5 py-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-zinc-300 text-sm placeholder-zinc-700 focus:outline-none focus:border-cyber-cyan/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, question, or proposal..."
                    className="w-full px-5 py-4 rounded-xl bg-zinc-950/60 border border-zinc-900 text-zinc-300 text-sm placeholder-zinc-700 focus:outline-none focus:border-cyber-cyan/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue text-sm font-semibold tracking-wider text-black hover:opacity-90 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] disabled:opacity-50 disabled:cursor-not-allowed font-display"
                >
                  {submitted ? (
                    <span>MESSAGE TRANSMITTED</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
