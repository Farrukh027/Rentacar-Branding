"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    mass: 0.24
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-[linear-gradient(90deg,var(--color-accent),rgba(241,238,231,0.85))]"
      style={{ scaleX }}
    />
  );
}
