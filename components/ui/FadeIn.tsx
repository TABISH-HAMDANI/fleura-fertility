"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  distance?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
  distance = 26,
}: FadeInProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: !reduced && direction === "up" ? distance : 0,
        x: !reduced && direction === "left" ? -distance : !reduced && direction === "right" ? distance : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduced ? 0.12 : 0.62,
        delay: reduced ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
