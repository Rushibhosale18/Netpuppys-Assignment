"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
}: ScrollRevealProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-10%" })

  const getVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }
      case "down":
        return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }
      case "left":
        return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }
      case "right":
        return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }
      case "none":
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
