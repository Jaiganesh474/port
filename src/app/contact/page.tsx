"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitted" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send email");

      formRef.current?.reset();
      setStatus("submitted");
      setTimeout(() => setStatus("idle"), 5000);
      
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <section className="mx-auto max-w-4xl px-6 py-24 md:py-32 flex flex-col gap-12">
        
        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl text-[var(--accent)]">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Have a project in mind or just want to say hi? Drop a message below and
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.header>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--accent-soft)] p-8 shadow-lg transition-all hover:shadow-2xl hover:shadow-[rgba(99,102,241,0.2)] dark:border-[var(--border)] dark:bg-[var(--background)]"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* NAME */}
            <motion.div
              className="flex flex-col gap-2 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="name" className="text-sm font-semibold text-[var(--foreground)] flex items-center gap-2">
                <FiUser className="text-[var(--accent)]" /> Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)] hover:shadow-md hover:shadow-[rgba(99,102,241,0.2)]"
              />
            </motion.div>

            {/* EMAIL */}
            <motion.div
              className="flex flex-col gap-2 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="text-sm font-semibold text-[var(--foreground)] flex items-center gap-2">
                <FiMail className="text-[var(--accent)]" /> Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)] hover:shadow-md hover:shadow-[rgba(99,102,241,0.2)]"
              />
            </motion.div>
          </div>

          {/* MESSAGE */}
          <motion.div
            className="flex flex-col gap-2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="message" className="text-sm font-semibold text-[var(--foreground)] flex items-center gap-2">
              <FiMessageSquare className="text-[var(--accent)]" /> Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              required
              placeholder="Tell me about your project or just say hello..."
              className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)] hover:shadow-md hover:shadow-[rgba(99,102,241,0.2)]"
            />
          </motion.div>

          {/* SUBMIT BUTTON */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(99,102,241,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className={`w-full md:w-auto rounded-lg bg-[var(--accent)] px-8 py-3 text-sm cursor-pointer font-semibold text-[var(--background)] transition-all hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]
            ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* SUBMISSION STATUS */}
          <AnimatePresence>
            {status === "submitted" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
              >
                ✓ Thanks for reaching out! Your message has been sent.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="rounded-lg bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
              >
                ✗ Failed to send message. Please try again later.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </section>
    </main>
  );
}
