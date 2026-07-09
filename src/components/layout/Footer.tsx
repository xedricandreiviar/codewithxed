"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { SocialIconButton } from "@/components/ui/SocialIconButton";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function TypingText({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayed, text, speed, started]);

  return (
    <motion.div
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      <p className="font-body text-xl leading-relaxed text-text-primary">
        &ldquo;{displayed}
        {displayed.length < text.length && <span className="typewriter-cursor">&nbsp;</span>}
        {displayed.length === text.length && "&rdquo;"}
      </p>
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="w-full" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8">
          {/* Section header */}
          <ScrollReveal animation="bounce">
            <div className="flex items-center gap-3">
              <motion.span
                className="font-body text-2xl"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                💬
              </motion.span>
              <h2
                id="contact-heading"
                className="font-display text-sm text-accent lg:text-lg"
              >
                Message Guild
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
            {/* Left: NPC dialog */}
            <ScrollReveal animation="fade-left" className="flex-1">
              <div className="pixel-border bg-bg-card p-4 lg:p-6">
                <div className="mb-4 flex items-center gap-3 border-b-2 border-border pb-3">
                  <motion.span
                    className="text-2xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🧙‍♂️
                  </motion.span>
                  <div>
                    <p className="font-display text-[8px] text-accent">NPC: XEDRIC</p>
                    <div className="flex items-center gap-2">
                      <p className="font-body text-lg text-text-secondary">Quest Giver</p>
                      <motion.span
                        className="inline-block h-2 w-2 rounded-full bg-xp-green"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4 border-2 border-border bg-bg-primary p-3">
                  <TypingText
                    text="Greetings, adventurer! Looking to collaborate on an epic quest? Send me a message or find me on the networks below."
                    speed={25}
                  />
                </div>

                <div className="mb-4">
                  <p className="mb-1 font-display text-[7px] text-accent">📧 MAIL</p>
                  <motion.a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-body text-xl text-text-primary underline decoration-accent underline-offset-4 hover:text-accent transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {SITE_CONFIG.email}
                  </motion.a>
                </div>

                {/* Social links */}
                <div>
                  <p className="mb-2 font-display text-[7px] text-accent">🌐 NETWORKS</p>
                  <div className="flex gap-2">
                    {SOCIAL_LINKS.map((social, i) => (
                      <motion.div
                        key={social.platform}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <SocialIconButton
                          icon={social.platform}
                          href={social.href}
                          size="sm"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 border-t-2 border-border pt-3">
                  <p className="font-body text-lg text-text-secondary">
                    {SITE_CONFIG.copyright}
                  </p>
                  <p className="mt-1 font-body text-sm text-text-secondary/60">
                    ⚙️ Built with Next.js, Tailwind CSS & Framer Motion
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Contact form */}
            <ScrollReveal animation="fade-right" delay={0.2} className="flex-1">
              <div className="pixel-border bg-bg-card p-4 lg:p-6">
                <p className="mb-4 font-display text-[8px] text-accent">
                  ✉️ COMPOSE NEW MESSAGE
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </footer>
  );
}
