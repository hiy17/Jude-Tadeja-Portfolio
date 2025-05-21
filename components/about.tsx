"use client"

import { motion } from "framer-motion"
import Image from "next/image"
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
            <div className="aspect-square max-w-md mx-auto relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl"
                animate={{ rotate: [3, 5, 3] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              ></motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Image
                  src="/images/jude.jpg"
                  alt="Jude Tadeja"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover transform -rotate-3 relative z-10 border-4 border-background shadow-xl"
                />
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
