"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
}

export default function MotionCard({ children, className }: MotionCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -5,
        boxShadow: "0 14px 30px -6px rgba(0,0,0,0.11)",
        transition: { duration: 0.22, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
    >
      {children}
    </motion.div>
  );
}
