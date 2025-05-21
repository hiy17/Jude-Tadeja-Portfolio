"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 shadow-md">
                <h3 className="text-xl font-medium mb-4">About Me</h3>
                <p className="text-muted-foreground">
                  I am a dedicated Computer Science student with a passion for creating innovative digital solutions. My
                  journey in technology is driven by curiosity and a desire to solve real-world problems through code. I
                  specialize in web development and software engineering, constantly expanding my skills to stay at the
                  forefront of technological advancements.
                </p>
              </div>

              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-medium mb-4">My Approach</h3>
                <p className="text-muted-foreground">
                  I believe in writing clean, efficient code and creating intuitive user experiences. My approach
                  combines technical expertise with creative problem-solving, allowing me to develop solutions that are
                  both functional and user-friendly. I thrive in collaborative environments and am always eager to learn
                  from others and share my knowledge.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Computer Science Student</h3>
            <p className="text-muted-foreground">
              I am a passionate computer science student with a strong interest in web development, software
              engineering, and problem-solving. I enjoy learning new technologies and applying them to create innovative
              solutions.
            </p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h4 className="font-semibold">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-blue-500/10">
                  Computer Literate
                </Badge>
                <Badge variant="outline" className="bg-blue-500/10">
                  Willingness to learn
                </Badge>
                <Badge variant="outline" className="bg-blue-500/10">
                  Adaptability
                </Badge>
                <Badge variant="outline" className="bg-blue-500/10">
                  Professional Work Ethic
                </Badge>
                <Badge variant="outline" className="bg-blue-500/10">
                  Team Collaboration
                </Badge>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h4 className="font-semibold">Education</h4>
              <div className="grid grid-cols-1 gap-3">
                <Card>
                  <CardContent className="p-4">
                    <p className="font-medium">Bachelor of Science in Computer Science</p>
                    <p className="text-sm text-muted-foreground">
                      Batangas State University - The National Engineering University - Alangilan
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="font-medium">Science, Technology, Engineering and Mathematics (STEM)</p>
                    <p className="text-sm text-muted-foreground">
                      Occidental Mindoro National High School - With High Honors
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h4 className="font-semibold">Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Card>
                  <CardContent className="p-4">
                    <p className="font-medium">Computer Networking 1</p>
                    <p className="text-sm text-muted-foreground">CISCO Networking Academy</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="font-medium">Responsive Web Design</p>
                    <p className="text-sm text-muted-foreground">freeCodeCamp</p>
                  </CardContent>
                </Card>
                <Card className="sm:col-span-2">
                  <CardContent className="p-4">
                    <p className="font-medium">JavaScript Algorithms and Data Structures</p>
                    <p className="text-sm text-muted-foreground">freeCodeCamp</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
