"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "flip"
  | "bounce"
  | "slide-rotate"
  | "glitch"
  | "typewriter";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants: Record<AnimationType, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0 },
  },
  bounce: {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  },
  "slide-rotate": {
    hidden: { opacity: 0, x: -100, rotate: -10 },
    visible: { opacity: 1, x: 0, rotate: 0 },
  },
  glitch: {
    hidden: { opacity: 0, x: -20, skewX: 10 },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  },
  typewriter: {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "auto" },
  },
};

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
