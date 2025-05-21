"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Code, Palette, CircuitBoard, BrainCircuit } from "lucide-react"
import Image from "next/image"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  icon: React.ReactNode
  githubUrl?: string
  liveUrl?: string
}

// Update the projects array with the real GitHub links
const projects: Project[] = [
  {
    id: 1,
    title: "Park C - Parking Reservation System",
    description: "A parking reservation system developed in C# that allows users to book parking spots in advance.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["C#", "Console Application", "Data Structures"],
    category: "desktop",
    icon: <Code className="h-5 w-5 text-blue-500" />,
    githubUrl: "https://github.com/hiy17/Park-C---Parking-Reservation-System",
  },
  {
    id: 2,
    title: "Shade Parade - Color Palette Sorter",
    description: "Color palette sorter by lightness or hue using Merge, Quick, and Bubble Sort algorithms.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["HTML", "CSS", "JavaScript", "Algorithms"],
    category: "web",
    icon: <Palette className="h-5 w-5 text-blue-500" />,
    githubUrl: "https://github.com/hiy17/Shade-Parade",
    liveUrl: "https://github.com/hiy17/Shade-Parade",
  },
  {
    id: 3,
    title: "Eulermation - Circuit Animation Generator",
    description: "An Euler Circuit Animation Generator that visualizes graph theory concepts.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "HTML", "CSS", "JavaScript"],
    category: "desktop",
    icon: <CircuitBoard className="h-5 w-5 text-blue-500" />,
    githubUrl: "https://github.com/hiy17/Eulermation",
  },
  {
    id: 4,
    title: "Quiz Whiz - Learning Application",
    description: "A comprehensive quiz and learning application with multiple language implementations.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Dart", "C++", "Swift", "C", "HTML"],
    category: "web",
    icon: <BrainCircuit className="h-5 w-5 text-blue-500" />,
    githubUrl: "https://github.com/iZilchi/Quiz-Whiz",
    liveUrl: "https://github.com/iZilchi/Quiz-Whiz",
  },
]

export function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 px-4">
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
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
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
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-full z-20">
          {project.icon}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-blue-500/10">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild className="group/btn">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 group-hover/btn:text-blue-500 transition-colors" />
              Code
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
