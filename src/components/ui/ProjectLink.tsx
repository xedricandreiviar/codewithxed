"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/ui/icons";
import type { ProjectLink as ProjectLinkType } from "@/types";

export interface ProjectLinkProps {
  link: ProjectLinkType;
}

export function ProjectLink({ link }: ProjectLinkProps) {
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="pixel-btn inline-flex items-center gap-2 bg-bg-social px-3 py-2 font-body text-lg text-accent transition-colors hover:bg-accent hover:text-text-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {link.icon === "arrow" && (
        <motion.span
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          🔗
        </motion.span>
      )}
      {link.icon === "github" && <GithubIcon className="size-4" />}
      <span>{link.label}</span>
    </motion.a>
  );
}
