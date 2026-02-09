"use client";

import { motion } from "framer-motion";
import { AiFillRocket } from "react-icons/ai";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { FiMapPin, FiCpu, FiMonitor } from "react-icons/fi";
import { RiGraduationCapFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutPage() {
  const facts = [
    { icon: <FaSchool />, text: "S.A Engineering College" },
    { icon: <FaGraduationCap />, text: "B.E - Electronics and Communication Engineering" },
    { icon: <RiGraduationCapFill />, text: "CPGA - 8.0 / 10.0" },
    { icon: <SlCalender />, text: "Graduated - 2025" },
    { icon: <FiMapPin />, text: "Chennai, India" },
    { icon: <FiCpu />, text: "Career Focus: AI Full-stack, Using AI Tools and Tech" },
    { icon: <FiMonitor />, text: "Interests: AI productivity, AI animations, performance" },
    { icon: <AiFillRocket />, text: "Open to: Internships & Full-time opportunities" },

  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 flex flex-col gap-12">

        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl text-[var(--accent)]">
            About Me
          </h1>
          
        </motion.header>

        {/* CONTENT */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* TEXT */}
          <motion.article
            variants={itemVariants}
            className="space-y-6 text-lg leading-relaxed"
          >
            <p className="text-[var(--foreground)]">

              I&apos;m a dedicated developer focused on building modern, performant,
              and user-friendly web experiences. I enjoy turning ideas into reality
              through clean design and robust engineering.
            </p>
            <p className="text-[var(--muted)]">
              With a passion for creating seamless user interfaces and scalable
              applications, I bring together technical expertise and creative
              problem-solving to deliver exceptional digital products.
            </p>
            <p className="text-[var(--muted)]">
              Outside of coding, I&apos;m always learning new tools, exploring design
              trends, and refining my craft so I can deliver better products and
              experiences.
            </p>
          </motion.article>

          {/* QUICK FACTS */}
          <motion.aside
            variants={itemVariants}
            className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--accent-soft)] p-8 shadow-lg 
                       transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[rgba(99,102,241,0.4)]"
          >
            <h2 className="text-2xl font-bold text-[var(--accent)]">Education and Qualification</h2>

            <ul className="space-y-3 text-base">
              {facts.map((fact, index) => (
                <motion.li
                  key={fact.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 text-[var(--foreground)] font-medium hover:text-[var(--accent)] transition-colors duration-300"
                >
                  <span className="text-[var(--accent)] text-lg">{fact.icon}</span>
                  <span>{fact.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </motion.div>
      </section>
    </main>
  );
}
