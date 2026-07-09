"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, SKILLS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SkillChip } from "@/components/ui/SkillChip";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-[1440px] px-4 py-12 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col gap-8">
        {/* Section title */}
        <ScrollReveal animation="slide-rotate">
          <div className="flex items-center gap-3">
            <motion.span
              className="font-body text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              🧙
            </motion.span>
            <h2
              id="about-heading"
              className="font-display text-sm text-accent lg:text-lg"
            >
              Character Bio
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Bio panel */}
          <ScrollReveal animation="fade-up" delay={0.2} className="flex-1">
            <motion.div
              className="pixel-border bg-bg-card p-4 lg:p-6"
              whileHover={{ boxShadow: "0 0 12px rgba(var(--theme-accent-rgb, 255 204 0), 0.1)" }}
            >
              <p className="mb-1 font-display text-[8px] text-accent">BACKSTORY</p>
              <p className="font-body text-xl leading-relaxed text-text-primary lg:text-2xl">
                {SITE_CONFIG.aboutHeading}
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary lg:text-xl">
                {SITE_CONFIG.aboutDescription}
              </p>

              {/* Fun easter egg stats */}
              <div className="mt-4 border-t-2 border-border pt-3">
                <p className="font-display text-[7px] text-text-secondary mb-2">QUICK STATS</p>
                <div className="grid grid-cols-2 gap-2">
                  <motion.div
                    className="flex items-center gap-2 border border-border bg-bg-primary px-2 py-1"
                    whileHover={{ borderColor: "var(--theme-accent)", scale: 1.02 }}
                  >
                    <span className="text-sm">☕</span>
                    <span className="font-body text-base text-text-secondary">Coffee/day: 3</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 border border-border bg-bg-primary px-2 py-1"
                    whileHover={{ borderColor: "var(--theme-accent)", scale: 1.02 }}
                  >
                    <span className="text-sm">💻</span>
                    <span className="font-body text-base text-text-secondary">Lines coded: ∞</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 border border-border bg-bg-primary px-2 py-1"
                    whileHover={{ borderColor: "var(--theme-accent)", scale: 1.02 }}
                  >
                    <span className="text-sm">🏋️</span>
                    <span className="font-body text-base text-text-secondary">Gym streak: Active</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 border border-border bg-bg-primary px-2 py-1"
                    whileHover={{ borderColor: "var(--theme-accent)", scale: 1.02 }}
                  >
                    <span className="text-sm">🎮</span>
                    <span className="font-body text-base text-text-secondary">Side quests: 2</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Skill tree panel */}
          <ScrollReveal animation="fade-up" delay={0.4} className="lg:w-[400px]">
            <div className="pixel-border bg-bg-card p-4 lg:p-6">
              <p className="mb-1 font-display text-[8px] text-accent">⚡ SKILL TREE</p>
              <p className="mb-3 font-body text-sm text-text-secondary">Hover a skill to see its level</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <SkillChip key={skill} label={skill} />
                ))}
              </div>
              <div className="mt-4 border-t-2 border-border pt-3 flex items-center justify-between">
                <p className="font-body text-lg text-xp-green">
                  🏆 {SKILLS.length} skills unlocked
                </p>
                <motion.p
                  className="font-body text-sm text-text-secondary"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  +more loading...
                </motion.p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
