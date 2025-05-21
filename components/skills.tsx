"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

type Skill = {
  name: string
  level: number
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "languages",
    skills: [
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    name: "frameworks",
    skills: [
      { name: "React.js", level: 75 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Node.js", level: 65 },
    ],
  },
  {
    name: "tools",
    skills: [
      { name: "Git/GitHub", level: 75 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 85 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    name: "soft",
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Team Collaboration", level: 90 },
      { name: "Adaptability", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Time Management", level: 75 },
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

      <div className="container mx-auto max-w-5xl relative z-10">
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

        <Tabs defaultValue="languages" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-blue-50 dark:bg-blue-950/50">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200 dark:bg-blue-900/30">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-blue-600"
                            ></motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
