"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, GraduationCap, Award, Brain } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-50/30 dark:to-blue-950/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and qualifications.
          </p>
        </motion.div>

        <Tabs defaultValue="profile" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-blue-50 dark:bg-blue-950/50">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Education</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>Skills</span>
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Certifications</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="profile" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/20 shadow-lg border border-blue-100 dark:border-blue-900/20">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am a dedicated Computer Science student with a passion for creating innovative digital solutions.
                    My journey in technology is driven by curiosity and a desire to solve real-world problems through
                    code. I specialize in web development and software engineering, constantly expanding my skills to
                    stay at the forefront of technological advancements.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/20 shadow-lg border border-blue-100 dark:border-blue-900/20">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">My Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in writing clean, efficient code and creating intuitive user experiences. My approach
                    combines technical expertise with creative problem-solving, allowing me to develop solutions that
                    are both functional and user-friendly. I thrive in collaborative environments and am always eager to
                    learn from others and share my knowledge.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:col-span-2"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 dark:from-blue-500/5 dark:to-blue-600/5 shadow-lg border border-blue-100 dark:border-blue-900/20">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Core Values</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { title: "Continuous Learning", desc: "Always seeking to expand my knowledge and skills" },
                      { title: "Problem Solving", desc: "Finding elegant solutions to complex challenges" },
                      { title: "Attention to Detail", desc: "Ensuring quality in every aspect of my work" },
                      { title: "Collaboration", desc: "Working effectively with others to achieve common goals" },
                    ].map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="p-4 bg-white dark:bg-blue-900/10 rounded-lg shadow-sm"
                      >
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="relative p-6 pt-10 rounded-2xl bg-white dark:bg-blue-950/20 shadow-lg border border-blue-100 dark:border-blue-900/20">
                  <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-4">
                    Batangas State University - The National Engineering University - Alangilan
                  </p>
                  <p className="text-muted-foreground">
                    Studying core computer science concepts including algorithms, data structures, software engineering,
                    and web development. Focusing on building practical skills through project-based learning.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="relative p-6 pt-10 rounded-2xl bg-white dark:bg-blue-950/20 shadow-lg border border-blue-100 dark:border-blue-900/20">
                  <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Science, Technology, Engineering and Mathematics (STEM)</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-4">
                    Occidental Mindoro National High School - With High Honors
                  </p>
                  <p className="text-muted-foreground">
                    Completed STEM track with high honors, developing a strong foundation in mathematics, physics, and
                    computer studies. Participated in various science and technology competitions.
                  </p>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/20 shadow-lg border border-blue-100 dark:border-blue-900/20">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Technical Skills</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Programming Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "Java", "C++", "JavaScript", "HTML/CSS"].map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-blue-500/10 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Frameworks & Libraries</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React.js", "Tailwind CSS", "Node.js"].map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-blue-500/10 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Git/GitHub", "MySQL", "Figma", "VS Code", "MS Office"].map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-blue-500/10 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-6 rounded-2xl bg-white dark:bg-blue-950/20 shadow-lg border border-blue-100 dark:border-blue-900/20">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Soft Skills</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { skill: "Problem Solving", level: 85 },
                      { skill: "Team Collaboration", level: 90 },
                      { skill: "Adaptability", level: 85 },
                      { skill: "Communication", level: 80 },
                      { skill: "Time Management", level: 75 },
                      { skill: "Critical Thinking", level: 85 },
                    ].map((item, index) => (
                      <motion.div
                        key={item.skill}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{item.skill}</span>
                          <span className="text-sm text-muted-foreground">{item.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-blue-100 dark:bg-blue-900/30 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Computer Networking 1",
                  issuer: "CISCO Networking Academy",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19h-1.782v-1.542h1.782v1.542zm-1.782-2.741v-2.259h1.782v2.259h-1.782zm.177-3.418c-.25-.111-.334-.342-.408-.783-.041-.292-.109-.433-.341-.456l-.412-.081c-.234-.056-.343-.155-.343-.297 0-.188.133-.292.436-.292.363 0 .582.159.627.292l.786-.159c-.133-.503-.605-.878-1.403-.878-1.107 0-1.439.605-1.439 1.051 0 .546.363.893.885.976l.343.081c.291.056.343.212.343.297 0 .133-.177.276-.463.276-.437 0-.678-.243-.728-.513l-.826.103c.109.718.663 1.118 1.534 1.118.843 0 1.439-.441 1.439-1.051 0-.212-.056-.381-.177-.513l.147-.17zm2.531-3.418c-.604 0-1.011.268-1.203.804l.659.268c.098-.268.319-.413.594-.413.308 0 .461.193.461.413v.042c0 .203-.203.193-.679.268-1.107.098-1.593.413-1.593 1.161 0 .536.387 1.042 1.107 1.042.461 0 .843-.193 1.012-.536h.049v.413h.679v-2.29c0-.804-.533-1.172-1.086-1.172zm.048 2.488c0 .341-.308.608-.727.608-.267 0-.437-.134-.437-.374 0-.244.203-.364.533-.413.194-.024.582-.073.631-.146v.325zm1.488-2.374v3.066h.679v-1.903c0-.487.292-.778.679-.778.364 0 .534.243.534.632v2.049h.679v-2.139c0-.694-.412-1.042-1.012-1.042-.461 0-.752.243-.929.585h-.049v-.47h-.581zm5.452 2.244c-.194.536-.631.908-1.252.908-.776 0-1.398-.632-1.398-1.611 0-.956.622-1.588 1.398-1.588.67 0 1.107.438 1.252.908l.582-.268c-.243-.7-.873-1.161-1.834-1.161-1.252 0-2.077.908-2.077 2.109 0 1.224.825 2.132 2.077 2.132.961 0 1.591-.487 1.834-1.161l-.582-.268z" />
                    </svg>
                  ),
                  desc: "Comprehensive training in computer networking fundamentals, including network architecture, protocols, and security principles.",
                },
                {
                  title: "Responsive Web Design",
                  issuer: "freeCodeCamp",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.5 19.5h-2.25v-6.75h2.25v6.75zm-1.125-7.875c-.69 0-1.125-.54-1.125-1.125s.435-1.125 1.125-1.125 1.125.54 1.125 1.125-.435 1.125-1.125 1.125zm9.375 7.875h-2.25v-3.375c0-.81-.081-1.86-1.17-1.86-1.17 0-1.35.885-1.35 1.8v3.435h-2.25v-6.75h2.16v.975h.03c.3-.57 1.035-1.17 2.13-1.17 2.28 0 2.7 1.5 2.7 3.45v3.495z" />
                    </svg>
                  ),
                  desc: "Mastery of responsive web design techniques, HTML5, CSS3, and modern layout methods like Flexbox and CSS Grid.",
                },
                {
                  title: "JavaScript Algorithms and Data Structures",
                  issuer: "freeCodeCamp",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                    </svg>
                  ),
                  desc: "Advanced JavaScript programming, including algorithms, data structures, object-oriented and functional programming concepts.",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-blue-950/20 shadow-lg border border-blue-100 dark:border-blue-900/20 flex flex-col h-full"
                >
                  <div className="mb-4">{cert.icon}</div>
                  <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-4">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm flex-grow">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
