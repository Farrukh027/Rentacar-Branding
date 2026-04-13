"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { fadeUp, luxuryEase } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-14% 0px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div ref={ref} initial={false} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={fadeUp.hidden}
      animate={inView ? fadeUp.visible : fadeUp.hidden}
      transition={{ duration: 0.8, delay, ease: luxuryEase }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
