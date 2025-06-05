"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle, Calendar } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-950/30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/10 dark:bg-blue-700/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-white/80 dark:bg-blue-950/20 backdrop-blur-sm border-blue-100 dark:border-blue-900/50">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Contact Information</h3>

                  <div className="space-y-4">
                    <motion.a
                      href="mailto:judetadeja17@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          judetadeja17@gmail.com
                        </p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:09939514188"
                      className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                        <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          09939514188
                        </p>
                      </div>
                    </motion.a>

                    <motion.div
                      className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40">
                        <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">Batangas City, Philippines</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links and Availability */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Social Media */}
            <Card className="bg-white/80 dark:bg-blue-950/20 backdrop-blur-sm border-blue-100 dark:border-blue-900/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Connect with me</h3>
                <div className="grid grid-cols-1 gap-4">
                  <motion.a
                    href="https://github.com/hiy17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                      <Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        GitHub
                      </p>
                      <p className="text-sm text-muted-foreground">View my repositories</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/jude-tadeja-408b9932a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                      <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        LinkedIn
                      </p>
                      <p className="text-sm text-muted-foreground">Professional network</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://x.com/jdtadeja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                      <Twitter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Twitter
                      </p>
                      <p className="text-sm text-muted-foreground">Follow my updates</p>
                    </div>
                  </motion.a>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200 dark:border-blue-800/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">Availability</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  I'm currently open to freelance opportunities, internships, and collaboration on interesting projects.
                  Feel free to reach out if you'd like to work together!
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    Available for new opportunities
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Contact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
            >
              <a href="mailto:judetadeja17@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-200 dark:border-blue-900/50">
              <a
                href="https://www.linkedin.com/in/jude-tadeja-408b9932a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Message on LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
