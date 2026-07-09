"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal content */}
          <motion.div
            className="relative z-10 flex max-h-[90vh] max-w-[90vw] flex-col"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Full view of ${alt}`}
          >
            {/* Game-style frame */}
            <div className="pixel-border relative overflow-hidden bg-bg-card p-2">
              {/* Title bar - like a game window */}
              <div className="mb-2 flex items-center justify-between border-b-2 border-border pb-2">
                <p className="font-display text-[7px] text-accent">
                  📷 SCREENSHOT VIEWER
                </p>
                <button
                  onClick={onClose}
                  className="pixel-btn flex items-center gap-1 bg-hp-red px-2 py-1 font-display text-[7px] text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label="Close image viewer"
                >
                  ✕ CLOSE
                </button>
              </div>

              {/* Image */}
              <div className="relative aspect-video w-[80vw] max-w-[1000px]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  unoptimized={src.endsWith(".svg")}
                  priority
                />
              </div>

              {/* Bottom bar */}
              <div className="mt-2 border-t-2 border-border pt-2">
                <p className="font-body text-sm text-text-secondary">
                  Press <span className="text-accent">[ESC]</span> or click outside to close
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
