"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SocialIconButton } from "@/components/ui/SocialIconButton";
import { useGate } from "@/components/ui/GateContext";

export function Hero() {
  const { gateOpen } = useGate();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center px-4 pt-28 lg:flex-row lg:items-center lg:px-8 lg:pt-24"
    >
      {/* Character card / status screen */}
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        {/* Left: Character portrait */}
        <motion.div
          className="relative mx-auto w-[250px] lg:mx-0 lg:w-[350px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="pixel-border-accent relative aspect-square overflow-hidden bg-bg-card p-2"
            whileHover={{ boxShadow: "0 0 20px var(--theme-accent), 0 0 40px var(--theme-accent)" }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/profile.png"
              alt="Xedric Andrei Viar - Developer portrait"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 250px, 350px"
            />
            {/* Hover overlay with status */}
            <motion.div
              className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-display text-[7px] text-xp-green">STATUS: ONLINE ●</p>
            </motion.div>
          </motion.div>
          {/* Level badge */}
          <motion.div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent px-4 py-1 font-display text-[8px] text-text-dark"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.1, y: -2 }}
          >
            LVL 2 STUDENT
          </motion.div>
        </motion.div>

        {/* Right: Character info */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Name plate */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="font-body text-2xl text-accent">— PLAYER ONE —</p>
            <h1
              id="hero-heading"
              className="font-display text-lg leading-relaxed text-text-primary lg:text-2xl"
            >
              {SITE_CONFIG.name}
            </h1>
          </motion.div>

          {/* Stats panel - bars */}
          <motion.div
            className="pixel-border bg-bg-card p-4 lg:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="mb-3 font-display text-[8px] text-accent lg:text-[10px]">CHARACTER STATS</p>
            <div className="flex flex-col gap-3">
              {/* HP bar - Age: 18/100 */}
              <div className="flex items-center gap-3">
                <span className="w-16 font-body text-lg text-health-red">❤️ HP</span>
                <div className="flex-1 border-2 border-border bg-bg-primary p-0.5">
                  <motion.div
                    className="h-4 bg-health-red"
                    initial={{ width: 0 }}
                    animate={gateOpen ? { width: "18%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
                <motion.span
                  className="font-body text-lg text-text-secondary"
                  initial={{ opacity: 0 }}
                  animate={gateOpen ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  18/100
                </motion.span>
              </div>
              {/* MP bar - College Level: 2/4 */}
              <div className="flex items-center gap-3">
                <span className="w-16 font-body text-lg text-mana-blue">💎 MP</span>
                <div className="flex-1 border-2 border-border bg-bg-primary p-0.5">
                  <motion.div
                    className="h-4 bg-mana-blue"
                    initial={{ width: 0 }}
                    animate={gateOpen ? { width: "50%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
                  />
                </div>
                <motion.span
                  className="font-body text-lg text-text-secondary"
                  initial={{ opacity: 0 }}
                  animate={gateOpen ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 2.7 }}
                >
                  2/4
                </motion.span>
              </div>
              {/* XP bar - Experience: 50/100 */}
              <div className="flex items-center gap-3">
                <span className="w-16 font-body text-lg text-xp-green">⭐ XP</span>
                <div className="flex-1 border-2 border-border bg-bg-primary p-0.5">
                  <motion.div
                    className="h-4 bg-xp-green"
                    initial={{ width: 0 }}
                    animate={gateOpen ? { width: "50%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 2.9, ease: "easeOut" }}
                  />
                </div>
                <motion.span
                  className="font-body text-lg text-text-secondary"
                  initial={{ opacity: 0 }}
                  animate={gateOpen ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 3.9 }}
                >
                  50/100
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Stats legend table */}
          <motion.div
            className="pixel-border bg-bg-card p-4 lg:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <p className="mb-3 font-display text-[8px] text-accent lg:text-[10px]">📊 STATS BREAKDOWN</p>
            <div className="flex flex-col gap-0">
              {/* Header row */}
              <div className="flex items-center border-b-2 border-border pb-2 mb-2">
                <span className="w-20 font-display text-[7px] text-text-secondary">STAT</span>
                <span className="flex-1 font-display text-[7px] text-text-secondary">DESCRIPTION</span>
                <span className="w-20 text-right font-display text-[7px] text-text-secondary">VALUE</span>
              </div>
              {/* HP row */}
              <div className="flex items-center border-b border-border py-2">
                <span className="w-20 font-body text-lg text-health-red">❤️ HP</span>
                <span className="flex-1 font-body text-lg text-text-primary">Age — Years alive in this world</span>
                <span className="w-20 text-right font-body text-lg text-accent">18 yrs</span>
              </div>
              {/* MP row */}
              <div className="flex items-center border-b border-border py-2">
                <span className="w-20 font-body text-lg text-mana-blue">💎 MP</span>
                <span className="flex-1 font-body text-lg text-text-primary">College Level — 2nd Year CS Student</span>
                <span className="w-20 text-right font-body text-lg text-accent">Year 2</span>
              </div>
              {/* XP row */}
              <div className="flex items-center py-2">
                <span className="w-20 font-body text-lg text-xp-green">⭐ XP</span>
                <span className="flex-1 font-body text-lg text-text-primary">Experience — Dev projects & work</span>
                <span className="w-20 text-right font-body text-lg text-accent">50%</span>
              </div>
            </div>
          </motion.div>

          {/* Quest description */}
          <motion.div
            className="pixel-border bg-bg-card p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="font-body text-xl leading-relaxed text-text-secondary lg:text-2xl">
              {SITE_CONFIG.heroSubtitle}
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
          >
            <Button label="⚡ Hire Me" variant="primary" href="#contact" />
            {SOCIAL_LINKS.filter(
              (s) => s.platform === "linkedin" || s.platform === "github"
            ).map((social) => (
              <SocialIconButton
                key={social.platform}
                icon={social.platform as "linkedin" | "github"}
                href={social.href}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
