import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { FiHome, FiUser, FiLayers, FiFolder, FiMail } from "react-icons/fi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Software Developer",
  description: "Personal portfolio showcasing skills, projects, and experience",
};

const navItems = [
  { name: "Home", href: "/", icon: <FiHome /> },
  { name: "About", href: "/about", icon: <FiUser /> },
  { name: "Skills", href: "/skills", icon: <FiLayers /> },
  { name: "Projects", href: "/projects", icon: <FiFolder /> },
  { name: "Contact", href: "/contact", icon: <FiMail /> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors">
            
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[var(--background)]/80 backdrop-blur-md dark:border-zinc-800">
              <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                
                <Link
                  href="/"
                  className="text-lg font-bold tracking-tight transition-all hover:opacity-80 hover:shadow-md hover:shadow-[rgba(99,102,241,0.2)] px-2 py-1 rounded"
                >
                  My Portfolio
                </Link>

                <div className="flex items-center gap-6">
                  {/* Navigation Links */}
                  <div className="hidden gap-6 text-sm font-medium md:flex">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-1 rounded px-2 py-1 text-[var(--foreground)] transition-all hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] hover:shadow-md hover:shadow-[rgba(99,102,241,0.2)]"
                      >
                        <span className="text-base">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Theme Toggle */}
                  <ThemeToggle />
                </div>
              </nav>
            </header>

            {/* Page Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="border-t border-zinc-200 bg-[var(--background)]/80 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800 transition-all hover:shadow-inner hover:shadow-[rgba(99,102,241,0.1)]">
              © {new Date().getFullYear()} Jaiganesh. All rights reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
