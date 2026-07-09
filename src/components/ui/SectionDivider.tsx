"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-6 lg:px-8" aria-hidden="true">
      <motion.div
        className="h-1 flex-1 bg-border"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.span
        className="font-body text-xl text-border"
        whileInView={{ rotate: [0, 180, 360] }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        ⬥ ⬥ ⬥
      </motion.span>
      <motion.div
        className="h-1 flex-1 bg-border"
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}
