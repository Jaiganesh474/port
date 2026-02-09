"use client";

import { motion } from "framer-motion";
import { FiDatabase, FiCode, FiBox, FiImage } from "react-icons/fi";

const projects = [
    {
        title: "Product Management System",
        description:
            "A Java-based application with CRUD operations, database connectivity, and role-based access.",
        tech: ["Java", "Spring Boot", "PostgreSQL"],
        icon: <FiDatabase className="inline-block mr-2 text-[var(--accent)]" />,
        link: "https://github.com/Jaiganesh474/React-Springboot--Full-stack-project.git",
    },
    {
        title: "Food Delivery App",
        description:
            "A full-stack web app for managing tomato food delivery orders and customers.",
        tech: ["React", "Node.js", "MongoDB"],
        icon: <FiCode className="inline-block mr-2 text-[var(--accent)]" />,
        link: "https://github.com/Jaiganesh474/food-order-client.git",
    },
    {
        title: "Online Grocery Delivery App with Live Tracking",
        description:
            "Infrared and low-light image fusion using MATLAB for enhanced visibility.",
        tech: ["ReactJS", "Node.js", "MySQL"],
        icon: <FiImage className="inline-block mr-2 text-[var(--accent)]" />,
        link: "https://github.com/Jaiganesh474/Food-Delivery-web---MERN.git",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
            <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
                {/* HEADER */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold tracking-tight text-[var(--accent)]">
                        Projects
                    </h2>
                    <p className="mt-4 text-[var(--muted)]">
                        A showcase of my work with modern technologies and tools.
                    </p>
                </motion.div>

                {/* PROJECT CARDS */}
                <motion.div
                    className="grid gap-6 md:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group relative rounded-2xl border border-[var(--border)] bg-[var(--accent-soft)] p-8 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 dark:border-[var(--border)] dark:bg-[var(--background)]"
                        >
                            {/* Gradient Hover Overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] opacity-0 transition-opacity duration-300 group-hover:opacity-15"></div>

                            {/* TITLE */}
                            <h3 className="relative text-2xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)] flex items-center">
                                {project.icon}
                                {project.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="relative mt-3 text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--foreground)]">
                                {project.description}
                            </p>

                            {/* TECH BADGES */}
                            <div className="relative mt-4 flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-[var(--accent)] px-3 py-1 text-sm font-medium text-[var(--accent)] transition-all duration-300 ease-in-out group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-soft)] hover:scale-110 flex items-center gap-1"
                                    >
                                        <FiBox className="text-[var(--accent-soft)]" />
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* LINK */}
                            <a
                                href={project.link}
                                className="relative mt-6 inline-block text-sm font-medium text-[var(--accent)] transition-all duration-300 hover:text-[var(--foreground)] group-hover:text-[var(--foreground)]"
                            >
                                View Project →
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
}
