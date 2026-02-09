"use client";

import { motion } from "framer-motion";

const skills = {
  languages: ["JavaScript", "Java", "HTML", "CSS", "Python"],
  frameworks: ["React", "Spring Boot", "Node.js", "Tailwind CSS"],
  tools: [
    "Git",
    "GitHub Copilot",
    "AWS Cloud",
    "Gemini AI",
    "Kafka",
    "Keycloak",
    "Spring AI",
    "Eureka",
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* HEADER */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl text-[var(--accent)]">
            Skills & Technologies
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            A comprehensive overview of the technologies and tools I work with regularly.
          </p>
        </motion.header>

        {/* SKILL CARDS */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--accent-soft)] p-8 shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <h2 className="mb-6 text-2xl font-bold text-[var(--accent)] capitalize">
                {category}
              </h2>
              <ul className="space-y-3">
                {(items as string[]).map((item, index) => (
                  <motion.li
                    key={item}
                    custom={index}
                    variants={skillItemVariants}
                    className="flex items-center gap-2 text-base"
                  >
                    <span className="text-[var(--accent)] text-lg">
                      {category === "languages"
                        ? "⚡"
                        : category === "frameworks"
                        ? "🚀"
                        : "🛠️"}
                    </span>
                    <span className="text-[var(--foreground)] font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
