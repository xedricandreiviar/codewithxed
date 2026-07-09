"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EVENTS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { EventEntry } from "@/types";

const TYPE_BADGES: Record<EventEntry["type"], { label: string; icon: string; color: string }> = {
  workshop: { label: "WORKSHOP", icon: "🔨", color: "text-accent" },
  hackathon: { label: "HACKATHON", icon: "⚡", color: "text-health-red" },
  conference: { label: "CONFERENCE", icon: "🏛️", color: "text-mana-blue" },
  meetup: { label: "MEETUP", icon: "🍺", color: "text-xp-green" },
  bootcamp: { label: "BOOTCAMP", icon: "⚔️", color: "text-[#f0a030]" },
};

function EventCard({ event }: { event: EventEntry }) {
  const badge = TYPE_BADGES[event.type];

  return (
    <div className="pixel-border flex flex-col overflow-hidden bg-bg-card h-full">
      {/* Event image */}
      <div className="relative aspect-video w-full shrink-0 border-b-4 border-border bg-bg-primary">
        {event.image ? (
          <Image
            src={event.image}
            alt={`Photo from ${event.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 500px"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="font-body text-lg text-text-secondary">📷 Photo coming soon</p>
          </div>
        )}
        {/* Type badge */}
        <div className={`absolute top-2 left-2 bg-bg-card/90 px-2 py-1 font-display text-[6px] ${badge.color}`}>
          {badge.icon} {badge.label}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-[9px] leading-relaxed text-text-primary lg:text-[10px]">
            {event.title}
          </h3>
          <div className="mt-1 flex items-center justify-between">
            <p className="font-body text-base text-accent">{event.organizer}</p>
            <p className="font-body text-base text-text-secondary">📅 {event.date}</p>
          </div>
        </div>

        <p className="font-body text-lg leading-relaxed text-text-secondary">
          {event.description}
        </p>

        {/* What was learned */}
        <div className="mt-auto border-t-2 border-border pt-3">
          <p className="mb-2 font-display text-[6px] text-accent">📚 KNOWLEDGE GAINED</p>
          <ul className="flex flex-col gap-1">
            {event.learned.map((item, i) => (
              <li key={i} className="flex items-start gap-2 font-body text-base text-text-primary">
                <span className="text-xp-green shrink-0">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function TavernBoard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalEvents = EVENTS.length;

  function goNext() {
    setCurrentIndex((prev) => (prev + 1) % totalEvents);
  }

  function goPrev() {
    setCurrentIndex((prev) => (prev - 1 + totalEvents) % totalEvents);
  }

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="mx-auto max-w-[1440px] px-4 py-12 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col gap-8">
        {/* Section header */}
        <ScrollReveal animation="glitch">
          <div className="pixel-border bg-bg-card p-4 lg:p-6">
            <p className="font-body text-xl text-accent">📜 TAVERN NOTICE BOARD</p>
            <h2
              id="events-heading"
              className="mt-2 font-display text-sm text-text-primary lg:text-lg"
            >
              Community Raids
            </h2>
            <p className="mt-2 font-body text-xl text-text-secondary lg:text-2xl">
              Events, workshops, and gatherings where knowledge was shared and connections were forged.
            </p>
            <p className="mt-2 font-body text-lg text-xp-green">
              🏅 {totalEvents} events attended
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <div className="flex items-center justify-between mb-4">
            <motion.button
              onClick={goPrev}
              className="pixel-btn bg-bg-card px-4 py-2 font-display text-[8px] text-accent hover:bg-accent hover:text-text-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous event"
            >
              ◀ PREV
            </motion.button>

            {/* Page indicator */}
            <div className="flex items-center gap-2">
              {EVENTS.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-3 w-3 border-2 transition-colors ${
                    i === currentIndex
                      ? "border-accent bg-accent"
                      : "border-border bg-bg-primary hover:border-accent"
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to event ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={goNext}
              className="pixel-btn bg-bg-card px-4 py-2 font-display text-[8px] text-accent hover:bg-accent hover:text-text-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next event"
            >
              NEXT ▶
            </motion.button>
          </div>

          {/* Event cards carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="mx-auto max-w-[600px]">
                  <EventCard event={EVENTS[currentIndex]} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Event counter */}
          <div className="mt-4 text-center">
            <p className="font-display text-[7px] text-text-secondary">
              NOTICE {currentIndex + 1} OF {totalEvents}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
