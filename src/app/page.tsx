"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMail, FiArrowRight, FiArrowDown } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] transition-colors">
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-32 md:flex-row md:items-center md:py-40">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* TERTIARY TEXT */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-[color-mix(in_srgb,var(--muted)_85%,var(--foreground))]"
          >
            Welcome to my Portfolio
          </motion.p>

          {/* PRIMARY TEXT */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-[color-mix(in_srgb,var(--foreground)_92%,var(--accent))]"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Jaiganesh
            </span>
          </motion.h1>

          {/* SECONDARY TEXT */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-xl leading-relaxed text-[color-mix(in_srgb,var(--foreground)_65%,var(--muted))]"
          >
            I&apos;m a passionate software developer focused on building modern,
            accessible, and engaging web experiences using cutting-edge
            technologies like React, Spring AI and Gemini AI.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            
            {/* PRIMARY CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg 
                         bg-[var(--foreground)] px-8 py-3 text-sm font-semibold 
                         text-[color-mix(in_srgb,var(--background)_95%,var(--accent))] shadow-lg 
                         transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiMail className="h-5 w-5" /> Get in Touch
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"
              />
            </Link>

            {/* SECONDARY CTA */}
            <Link
              href="/skills"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--border)] 
                         px-8 py-3 text-sm font-semibold 
                         text-[color-mix(in_srgb,var(--foreground)_80%,var(--muted))] 
                         transition-all duration-300 hover:text-[var(--accent)] hover:bg-[var(--border)] hover:scale-105"
            >
              View My Skills <FiArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1ixA9Hp0kMTn_HsFNIZu2iPkQ9tTiA4pH/view?usp=sharing"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--border)] 
                         px-8 py-3 text-sm font-semibold 
                         text-[color-mix(in_srgb,var(--foreground)_80%,var(--muted))] 
                         transition-all duration-300 hover:text-[var(--accent)] hover:bg-[var(--border)] hover:scale-105"
            >
              Download My Resume <FiArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="mt-10 flex-1 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 opacity-20 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.div
              className="relative h-full w-full overflow-hidden rounded-full border-4 border-[var(--border)] bg-[var(--background)] shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] hover:scale-105 transition-transform"
            >
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="h-full w-full rounded-full object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
