"use client";

import Image from "next/image";
import { EXPERIENCES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ExperienceEntry } from "@/types";

const TYPE_LABELS: Record<ExperienceEntry["type"], { label: string; icon: string; color: string }> = {
  "full-time": { label: "FULL CONTRACT", icon: "⚔️", color: "text-accent" },
  "part-time": { label: "SIDE QUEST", icon: "🛡️", color: "text-[#f0a030]" },
  freelance: { label: "BOUNTY QUEST", icon: "🏹", color: "text-xp-green" },
  internship: { label: "APPRENTICESHIP", icon: "📜", color: "text-mana-blue" },
};

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const typeInfo = TYPE_LABELS[entry.type];

  return (
    <ScrollReveal animation={index % 2 === 0 ? "fade-left" : "fade-right"} delay={index * 0.1}>
      <div className="pixel-border flex flex-col overflow-hidden bg-bg-card lg:flex-row">
        {/* Image */}
        {entry.image && (
          <div className="relative aspect-video w-full shrink-0 border-b-4 border-border bg-bg-primary lg:aspect-square lg:w-[280px] lg:border-b-0 lg:border-r-4">
            <Image
              src={entry.image}
              alt={`Screenshot from ${entry.company}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 280px"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
          {/* Header */}
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className={`font-display text-[7px] ${typeInfo.color} mb-1`}>
                {typeInfo.icon} {typeInfo.label}
              </p>
              <h3 className="font-display text-[10px] leading-relaxed text-text-primary lg:text-xs">
                {entry.title}
              </h3>
              <p className="mt-1 font-body text-lg text-accent">{entry.company}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-body text-base text-text-secondary">⏱️</span>
              <span className="font-body text-base text-text-secondary">{entry.dateRange}</span>
            </div>
          </div>

          {/* Description */}
          <p className="font-body text-lg leading-relaxed text-text-secondary lg:text-xl">
            {entry.description}
          </p>

          {/* Achievements */}
          <div className="border-t-2 border-border pt-3">
            <p className="mb-2 font-display text-[7px] text-accent">🏆 LOOT EARNED</p>
            <ul className="flex flex-col gap-1.5">
              {entry.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-lg text-text-primary">
                  <span className="text-xp-green shrink-0">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools used */}
          <div className="border-t-2 border-border pt-3">
            <p className="mb-2 font-display text-[7px] text-accent">🛠️ WEAPONS USED</p>
            <div className="flex flex-wrap gap-2">
              {entry.tools.map((tool) => (
                <span
                  key={tool}
                  className="border-2 border-border bg-bg-primary px-2 py-1 font-body text-base text-text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function GuildHistory() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-[1440px] px-4 py-12 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col gap-12">
        {/* Section header */}
        <ScrollReveal animation="glitch">
          <div className="pixel-border bg-bg-card p-4 lg:p-6">
            <p className="font-body text-xl text-accent">⚔️ GUILD HISTORY</p>
            <h2
              id="experience-heading"
              className="mt-2 font-display text-sm text-text-primary lg:text-lg"
            >
              Past Alliances
            </h2>
            <p className="mt-2 font-body text-xl text-text-secondary lg:text-2xl">
              A record of guilds served, bounties collected, and contracts fulfilled.
            </p>
            <p className="mt-2 font-body text-lg text-xp-green">
              📋 {EXPERIENCES.length} contracts on record
            </p>
          </div>
        </ScrollReveal>

        {/* Experience cards */}
        <div className="flex flex-col gap-8">
          {EXPERIENCES.map((entry, index) => (
            <ExperienceCard key={index} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
