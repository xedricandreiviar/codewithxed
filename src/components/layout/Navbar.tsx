"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import type { NavLink } from "@/types";

export interface NavbarProps {
  logoText: string;
  links: NavLink[];
}

export function Navbar({ logoText, links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [showLogo, setShowLogo] = useState(false);

  // Animate logo text appearing like typing
  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", "")).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-bg-primary/95 border-b-4 border-border backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 lg:px-8"
      >
        {/* Logo as game title */}
        <motion.a
          href="#home"
          className="font-display text-[10px] leading-tight text-accent hover:text-gold lg:text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: showLogo ? 1 : 0, x: showLogo ? 0 : -20 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="inline-block animate-float">⚔️</span> {logoText}
        </motion.a>

        {/* Desktop nav - game menu style */}
        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex items-center gap-1">
            {links.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative px-3 py-2 font-body text-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    activeSection === link.href
                      ? "text-accent"
                      : "text-text-secondary hover:bg-accent/20 hover:text-accent"
                  )}
                >
                  <span className={cn(
                    "transition-opacity",
                    activeSection === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}>{">"} </span>
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"
                      layoutId="nav-underline"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {i < links.length - 1 && (
                    <span className="ml-2 text-border">|</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-4 flex items-center gap-2 border-l-4 border-border pl-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <motion.button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="pixel-btn bg-bg-card px-3 py-2 font-body text-xl text-accent"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? "[X]" : "[≡]"}
          </motion.button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden transition-all duration-200 md:hidden border-b-4 border-border",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-b-0"
        )}
      >
        <div className="bg-bg-card p-4">
          <p className="mb-2 font-display text-[8px] text-accent">SELECT DESTINATION:</p>
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 font-body text-xl transition-colors",
                    activeSection === link.href
                      ? "text-accent bg-accent/10"
                      : "text-text-secondary hover:bg-accent/20 hover:text-accent"
                  )}
                >
                  {activeSection === link.href ? "▸" : ">"} {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
