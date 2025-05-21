"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 px-4 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-950/20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Jude Tadeja</h3>
            <p className="text-sm text-muted-foreground">
              Computer Science Student passionate about creating innovative solutions through technology.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#home" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
              <Link href="#about" className="hover:text-blue-500 transition-colors">
                About
              </Link>
              <Link href="#projects" className="hover:text-blue-500 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-blue-500 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="hover:text-blue-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <span>jude.tadeja@example.com</span>
              </p>
              <p>Manila, Philippines</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="GitHub"
                whileHover={{ y: -3 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="Twitter"
                whileHover={{ y: -3 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:jude.tadeja@example.com"
                className="hover:text-blue-500 transition-colors"
                aria-label="Email"
                whileHover={{ y: -3 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Jude Tadeja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
