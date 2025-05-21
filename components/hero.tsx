"use client"

import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Code, Laptop, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/30 dark:to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
              duration: 0.8,
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 gradient-text">
                Jude Tadeja
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-6 mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 blur-sm animate-pulse-slow"></div>
              <Image
                src="/images/jude.jpg"
                alt="Jude Tadeja"
                width={128}
                height={128}
                className="rounded-full object-cover border-2 border-background shadow-lg relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl font-medium text-muted-foreground min-h-[60px]"
          >
            <TypeAnimation
              sequence={[
                "Computer Science Student",
                1000,
                "Web Developer",
                1000,
                "Problem Solver",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Aspiring to work in an environment that fosters continuous learning and skill development, where I can
            contribute meaningfully using my passion for technology and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg" className="rounded-full group relative overflow-hidden">
              <Link href="#projects" className="flex items-center gap-2">
                <span className="relative z-10">View My Work</span>
                <Code className="relative z-10 w-4 h-4 transition-transform group-hover:rotate-12" />
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:opacity-90 transition-opacity" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="#contact" className="flex items-center gap-2">
                Contact Me
                <Laptop className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10"
      >
        <Link href="#about">
          <Button variant="ghost" size="icon" className="rounded-full animate-bounce">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </Link>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 text-blue-500 dark:text-blue-400"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Sparkles />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 text-blue-600 dark:text-blue-500"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Code />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 w-10 h-10 text-blue-400 dark:text-blue-300"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Laptop />
        </motion.div>
      </div>
    </section>
  )
}
