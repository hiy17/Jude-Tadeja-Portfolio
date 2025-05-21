import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingElements />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
