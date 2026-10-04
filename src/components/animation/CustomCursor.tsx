"use client"

import React, { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  // Smooth springs for cursor movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    // Check if device supports hover (hide on mobile/touch)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsMobile(false)
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX - 16) // Offset by half the width (32px / 2)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if hovering over interactive elements
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    if (!isMobile) {
      window.addEventListener("mousemove", updateMousePosition)
      window.addEventListener("mouseover", handleMouseOver)
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY, isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-500/50 dark:border-blue-400/50 rounded-full pointer-events-none z-[100]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  )
}
