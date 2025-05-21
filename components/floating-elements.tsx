"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Laptop, Server, Sparkles, Cpu } from "lucide-react"

type FloatingElement = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  icon: React.ReactNode
  rotation: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Generate random floating elements
    const newElements: FloatingElement[] = []
    const count = 15
    const icons = [
      <Code key="code" className="text-blue-500/60 dark:text-blue-400/40" />,
      <Database key="database" className="text-blue-500/60 dark:text-blue-400/40" />,
      <Laptop key="laptop" className="text-blue-500/60 dark:text-blue-400/40" />,
      <Server key="server" className="text-blue-500/60 dark:text-blue-400/40" />,
      <Sparkles key="sparkles" className="text-blue-500/60 dark:text-blue-400/40" />,
      <Cpu key="cpu" className="text-blue-500/60 dark:text-blue-400/40" />,
    ]

    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 40 + 10,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        icon: icons[Math.floor(Math.random() * icons.length)],
        rotation: Math.random() * 360,
      })
    }

    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [element.rotation, element.rotation + 180, element.rotation + 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  )
}
