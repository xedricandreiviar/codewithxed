"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { ProjectLink } from "@/components/ui/ProjectLink";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

export interface ProjectCardProps {
  project: Project;
}

const DESCRIPTION_PREVIEW_LENGTH = 120;

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const isLongDescription = project.description.length > DESCRIPTION_PREVIEW_LENGTH;

  const displayedDescription = isExpanded || !isLongDescription
    ? project.description
    : project.description.slice(0, DESCRIPTION_PREVIEW_LENGTH).trimEnd() + "\u2026";

  return (
    <>
      <motion.article
        className="pixel-border flex flex-col gap-0 overflow-hidden bg-bg-card lg:flex-row"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Project image - clickable */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="relative block aspect-video w-full shrink-0 overflow-hidden border-b-4 border-border bg-bg-primary lg:aspect-square lg:w-[400px] lg:border-b-0 lg:border-r-4 cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={`View full screenshot of ${project.title}`}
        >
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-contain p-6 transition-transform group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 400px"
            unoptimized={project.image.endsWith(".svg")}
          />
          {project.tag && (
            <div className="absolute left-2 top-2 bg-accent px-2 py-1 font-display text-[7px] text-text-dark">
              {project.tag.toUpperCase()}
            </div>
          )}
          {/* Hover hint */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
            <span className="font-display text-[8px] text-white opacity-0 transition-opacity group-hover:opacity-100">
              🔍 CLICK TO INSPECT
            </span>
          </div>
        </button>

        {/* Project content - quest description */}
        <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
          {/* Title */}
          <div>
            <p className="font-display text-[8px] text-accent mb-1">
              {project.status === "in-progress" ? "\u2694\uFE0F QUEST IN PROGRESS" : "\uD83D\uDCDC QUEST COMPLETE"}
            </p>
            <h3 className="font-display text-[10px] leading-relaxed text-text-primary lg:text-xs">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <div>
            <p className="font-body text-lg leading-relaxed text-text-secondary lg:text-xl">
              {displayedDescription}
            </p>
            {isLongDescription && (
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="mt-2 font-body text-base text-accent opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Show less" : "See full description"}
              </button>
            )}
          </div>

          {/* Project info - game stats style */}
          <div className="border-t-2 border-b-2 border-border py-3">
            <p className="mb-2 font-display text-[7px] text-accent">QUEST DETAILS</p>
            <dl className="flex flex-col gap-1">
              {project.info.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between font-body text-lg"
                >
                  <dt className="text-text-secondary">{item.label}:</dt>
                  <dd className="text-accent">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <ProjectLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </motion.article>

      {/* Lightbox */}
      <ImageLightbox
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}
