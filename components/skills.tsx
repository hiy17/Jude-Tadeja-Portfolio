"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Wrench, Users, Lightbulb } from "lucide-react"

type Skill = {
  name: string
  level: number
  icon: React.ReactNode
}

type SkillCategory = {
  name: string
  title: string
  icon: React.ReactNode
  skills: Skill[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    name: "languages",
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "Python", level: 80, icon: "🐍" },
      { name: "Java", level: 75, icon: "☕" },
      { name: "C++", level: 70, icon: "⚡" },
      { name: "JavaScript", level: 75, icon: "🟨" },
      { name: "HTML/CSS", level: 85, icon: "🌐" },
    ],
  },
  {
    name: "frameworks",
    title: "Frameworks & Libraries",
    icon: <Globe className="h-6 w-6" />,
    color: "from-green-500 to-green-600",
    skills: [
      { name: "React.js", level: 75, icon: "⚛️" },
      { name: "Tailwind CSS", level: 80, icon: "🎨" },
      { name: "Node.js", level: 65, icon: "🟢" },
    ],
  },
  {
    name: "tools",
    title: "Tools & Technologies",
    icon: <Wrench className="h-6 w-6" />,
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "Git/GitHub", level: 75, icon: "🔧" },
      { name: "MySQL", level: 70, icon: "🗄️" },
      { name: "Figma", level: 70, icon: "🎨" },
      { name: "VS Code", level: 85, icon: "💻" },
    ],
  },
  {
    name: "soft",
    title: "Soft Skills",
    icon: <Users className="h-6 w-6" />,
    color: "from-orange-500 to-orange-600",
    skills: [
      { name: "Problem Solving", level: 85, icon: "🧩" },
      { name: "Team Collaboration", level: 90, icon: "🤝" },
      { name: "Adaptability", level: 85, icon: "🔄" },
      { name: "Communication", level: 80, icon: "💬" },
      { name: "Time Management", level: 75, icon: "⏰" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 dark:bg-blue-700/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my education and projects. Here's an overview of my
            technical and soft skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <Card className="overflow-hidden bg-white dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <Badge variant="outline" className="bg-blue-500/10">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-2 text-xs flex rounded-full bg-blue-100 dark:bg-blue-900/30">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${category.color} rounded-full`}
                            ></motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200 dark:border-blue-800/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">What I Bring to the Table</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
                  <p className="text-sm text-muted-foreground">Programming Languages</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Certifications Earned</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
