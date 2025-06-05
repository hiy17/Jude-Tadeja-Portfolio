"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Palette, CircuitBoard, BrainCircuit, Car } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  tags: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Park C - Parking Reservation System",
    description: "A parking reservation system developed in C# that allows users to book parking spots in advance.",
    icon: (
      <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center rounded-t-lg">
        <Car className="h-16 w-16 text-white" />
      </div>
    ),
    tags: ["C#", "Console Application", "Data Structures"],
    category: "desktop",
    githubUrl: "https://github.com/hiy17/Park-C---Parking-Reservation-System",
  },
  {
    id: 2,
    title: "Shade Parade - Color Palette Sorter",
    description: "Color palette sorter by lightness or hue using Merge, Quick, and Bubble Sort algorithms.",
    icon: (
      <div className="w-full h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center rounded-t-lg">
        <Palette className="h-16 w-16 text-white" />
      </div>
    ),
    tags: ["HTML", "CSS", "JavaScript", "Algorithms"],
    category: "web",
    githubUrl: "https://github.com/hiy17/Shade-Parade",
    liveUrl: "https://github.com/hiy17/Shade-Parade",
  },
  {
    id: 3,
    title: "Eulermation - Circuit Animation Generator",
    description: "An Euler Circuit Animation Generator that visualizes graph theory concepts.",
    icon: (
      <div className="w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center rounded-t-lg">
        <CircuitBoard className="h-16 w-16 text-white" />
      </div>
    ),
    tags: ["Python", "HTML", "CSS", "JavaScript"],
    category: "desktop",
    githubUrl: "https://github.com/hiy17/Eulermation",
  },
  {
    id: 4,
    title: "Quiz Whiz - Learning Application",
    description: "A comprehensive quiz and learning application with multiple language implementations.",
    icon: (
      <div className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center rounded-t-lg">
        <BrainCircuit className="h-16 w-16 text-white" />
      </div>
    ),
    tags: ["Dart", "C++", "Swift", "C", "HTML"],
    category: "web",
    githubUrl: "https://github.com/iZilchi/Quiz-Whiz",
    liveUrl: "https://github.com/iZilchi/Quiz-Whiz",
  },
]

export function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-50/30 dark:to-blue-950/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project has helped me develop different skills and solve
            unique challenges.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <div className="flex justify-center">
            <TabsList className="bg-blue-50 dark:bg-blue-950/50">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="desktop">Desktop Applications</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group border-blue-100 dark:border-blue-900/50 bg-white dark:bg-blue-950/20">
      <div className="relative overflow-hidden">{project.icon}</div>
      <CardHeader className="bg-white dark:bg-transparent">
        <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow bg-white dark:bg-transparent">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-blue-500/10">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 bg-white dark:bg-transparent">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild className="group/btn border-blue-200 dark:border-blue-900/50">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 group-hover/btn:text-blue-500 transition-colors" />
              View Code
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button
            size="sm"
            asChild
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
