"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, ExternalLink, Github, Mail, Menu } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import GridBackground from "@/components/grid-background"
import TubeLight from "@/components/tube-light"
import AnimatedSection from "@/components/animated-section"
import AnimatedItem from "@/components/animated-item"
import CursorGlow from "@/components/cursor-glow"
import ParticleBackground from "@/components/particle-background"
import ParticleMask from "@/components/particle-mask"
import SectionTransition from "@/components/section-transition"
import SmoothScrollLink from "@/components/smooth-scroll-link"
import PageTransition from "@/components/page-transition"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import Link from "next/link"

import "./components/profile-image-animation.css"

// Dynamically import ThreeScene to avoid SSR issues
const ThreeScene = dynamic(() => import("@/components/three-scene"), {
  ssr: false,
  loading: () => <div className="w-full h-[400px]"></div>,
})

export default function Portfolio() {
  // Client-side state for animations
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu when clicking a link
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-hidden">
        {/* Grid Background - Move to lower z-index */}
        <div className="fixed inset-0 z-0">
          <GridBackground />
        </div>

        {/* Particle Background - Higher z-index than grid */}
        {mounted && (
          <div className="fixed inset-0 z-[1]">
            <ParticleBackground />
          </div>
        )}

        {/* Particle Mask - Only applies to specific sections */}
        {mounted && <ParticleMask />}

        {/* Cursor Glow Effect - Only on desktop */}
        {mounted && window.innerWidth > 768 && <CursorGlow />}

        {/* Tube Light Effect */}
        <TubeLight />

        {/* Navigation */}
        <header className="sticky top-0 z-40 w-full py-4">
          <div className="container flex justify-center">
            {/* Desktop Navigation */}
            <nav className="px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hidden md:flex items-center gap-8 text-sm">
              <SmoothScrollLink href="#about" className="transition-colors hover:text-primary">
                About
              </SmoothScrollLink>
              <SmoothScrollLink href="#skills" className="transition-colors hover:text-primary">
                Skills
              </SmoothScrollLink>
              <div className="flex items-center gap-2 font-bold px-4">
                <Code className="h-5 w-5 text-primary" />
                <span>Portfolio</span>
              </div>
              <SmoothScrollLink href="#projects" className="transition-colors hover:text-primary">
                Projects
              </SmoothScrollLink>
              <SmoothScrollLink href="#contact" className="transition-colors hover:text-primary">
                Contact
              </SmoothScrollLink>
              <ThemeToggle />
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden w-full flex items-center justify-between px-4">
              <div className="flex items-center gap-2 font-bold">
                <Code className="h-5 w-5 text-primary" />
                <span>Portfolio</span>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-2xl">&times;</span>
                </Button>
                <nav className="flex flex-col items-center gap-8 text-lg">
                  <SmoothScrollLink
                    href="#about"
                    className="transition-colors hover:text-primary"
                    onClick={handleMobileNavClick}
                  >
                    About
                  </SmoothScrollLink>
                  <SmoothScrollLink
                    href="#skills"
                    className="transition-colors hover:text-primary"
                    onClick={handleMobileNavClick}
                  >
                    Skills
                  </SmoothScrollLink>
                  <SmoothScrollLink
                    href="#projects"
                    className="transition-colors hover:text-primary"
                    onClick={handleMobileNavClick}
                  >
                    Projects
                  </SmoothScrollLink>
                  <SmoothScrollLink
                    href="#contact"
                    className="transition-colors hover:text-primary"
                    onClick={handleMobileNavClick}
                  >
                    Contact
                  </SmoothScrollLink>
                </nav>
              </div>
            )}
          </div>
        </header>

        <main className="container py-10 relative z-10 px-4 md:px-10">
          {/* Hero Section */}
          <SectionTransition id="hero">
            <AnimatedSection className="py-12 md:py-32 relative" direction="up" distance={50}>
              {/* 3D Scene in background - hide on small mobile */}
              <div className="absolute inset-0 -z-10 h-[300px] md:h-[600px] hidden sm:block">
                {mounted && <ThreeScene />}
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                <div className="rounded-full bg-gradient-to-br from-primary/20 to-primary/40 p-1 shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-primary/30 w-[7.2rem] h-[7.2rem] md:w-[9.6rem] md:h-[9.6rem] overflow-hidden profile-image-float profile-image-glow">
                  <img src="/images/profile.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-3 md:mb-4 text-white">
                    Hi, I'm <span className="text-primary">TAYEF</span>
                  </h1>
                  <p className="text-lg md:text-2xl text-gray-300 max-w-[650px] mb-6 md:mb-8 relative z-10 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                    A passionate full-stack developer crafting beautiful and functional web experiences
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary border-none shadow-lg shadow-primary/20 text-sm md:text-base"
                      size="default"
                      asChild
                    >
                      <SmoothScrollLink href="#projects">
                        View My Work <ArrowRight className="ml-2 h-4 w-4" />
                      </SmoothScrollLink>
                    </Button>
                    <Button
                      variant="outline"
                      size="default"
                      className="border-primary/50 text-white hover:bg-primary/20 text-sm md:text-base"
                      asChild
                    >
                      <SmoothScrollLink href="#contact">Get In Touch</SmoothScrollLink>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </SectionTransition>

          {/* About Section */}
          <SectionTransition id="about">
            <AnimatedSection className="py-12 md:py-16" direction="left" threshold={0.2}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">About Me</h2>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    I'm a full-stack developer with 5+ years of experience building web applications. I specialize in
                    React, Next.js, Node.js, and modern web technologies.
                  </p>
                  <p className="text-gray-300 mb-6 text-sm md:text-base">
                    My journey in web development started when I built my first website in college. Since then, I've
                    worked with startups and established companies to create user-friendly, performant, and accessible
                    web applications.
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary/50 text-white hover:bg-primary/20 text-sm md:text-base"
                    asChild
                  >
                    <Link href="/resume.pdf" target="_blank">
                      Download Resume
                    </Link>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center border border-white/10 shadow-xl overflow-hidden mt-6 md:mt-0">
                  <div className="relative w-full h-full p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
                    <img
                      src="/images/profile.png"
                      alt="Profile"
                      className="rounded-lg relative z-10 w-full h-full object-cover object-center"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </SectionTransition>

          {/* Skills Section */}
          <SectionTransition id="skills">
            <AnimatedSection className="py-12 md:py-16" direction="right" threshold={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-white">My Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "HTML/CSS",
                  "Git",
                  "RESTful APIs",
                  "GraphQL",
                  "AWS",
                  "Docker",
                  "CI/CD",
                ].map((skill, index) => (
                  <AnimatedItem
                    key={skill}
                    delay={index * 50}
                    isVisible={mounted}
                    direction="up"
                    className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center border border-white/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 group"
                  >
                    <p className="font-medium text-gray-200 group-hover:text-primary transition-colors text-sm md:text-base">
                      {skill}
                    </p>
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedSection>
          </SectionTransition>

          {/* Projects Section */}
          <SectionTransition id="projects">
            <AnimatedSection className="py-12 md:py-16 relative" direction="up" threshold={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-16 text-center text-white">Project Timeline</h2>

              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 top-32 bottom-16 w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30 transform -translate-x-1/2 z-0 hidden md:block"></div>

              {/* Mobile Timeline Line */}
              <div className="absolute left-4 top-32 bottom-16 w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30 z-0 md:hidden"></div>

              {[
                {
                  title: "E-commerce Platform",
                  description: "A full-featured online store with payment processing and inventory management.",
                  tags: ["Next.js", "Stripe", "MongoDB"],
                  image: "/placeholder.svg?height=200&width=300",
                  github: "#",
                  demo: "#",
                  year: "2023",
                  align: "right", // right side of timeline
                },
                {
                  title: "Task Management App",
                  description: "A collaborative task manager with real-time updates and team features.",
                  tags: ["React", "Firebase", "Tailwind"],
                  image: "/placeholder.svg?height=200&width=300",
                  github: "#",
                  demo: "#",
                  year: "2022",
                  align: "left", // left side of timeline
                },
                {
                  title: "Weather Dashboard",
                  description: "A weather application with location-based forecasts and interactive maps.",
                  tags: ["JavaScript", "Weather API", "Chart.js"],
                  image: "/placeholder.svg?height=200&width=300",
                  github: "#",
                  demo: "#",
                  year: "2021",
                  align: "right", // right side of timeline
                },
              ].map((project, index) => (
                <AnimatedItem
                  key={index}
                  delay={index * 200}
                  isVisible={mounted}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="relative z-10 mb-12 md:mb-16"
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:block">
                    <div
                      className={`flex items-center justify-center mb-8 ${
                        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      <div className="bg-primary text-white px-4 py-1 rounded-full font-medium">{project.year}</div>
                    </div>

                    <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}>
                      {/* Timeline node */}
                      <div className="hidden md:flex items-center justify-center">
                        {project.title === "Task Management App" || project.title === "E-commerce Platform" ? (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-20">
                            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                          </div>
                        ) : (
                          <div className="w-6 h-6 opacity-0"></div>
                        )}
                      </div>

                      {/* Project card - positioned based on index */}
                      <div className={`${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                        <Card className="enhanced-card overflow-hidden border-white/10 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm shadow-xl transition-all duration-300 group relative">
                          {(project.title === "Task Management App" || project.title === "E-commerce Platform") && (
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-20">
                              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                            </div>
                          )}
                          <div className="aspect-video w-full overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-white">{project.title}</CardTitle>
                            <CardDescription className="text-gray-300">{project.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="bg-primary/20 text-primary border-primary/30"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-primary/50 text-white hover:bg-primary/20"
                              asChild
                            >
                              <Link href={project.github}>
                                <Github className="mr-2 h-4 w-4" /> Code
                              </Link>
                            </Button>
                            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                              <Link href={project.demo}>
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden pl-10 relative">
                    {/* Timeline node */}
                    <div className="absolute left-0 top-0 flex items-center">
                      {project.title === "Task Management App" || project.title === "E-commerce Platform" ? (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-20">
                          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                        </div>
                      ) : (
                        <div className="w-5 h-5 opacity-0"></div>
                      )}
                    </div>

                    {/* Year */}
                    <div className="bg-primary text-white px-3 py-1 rounded-full font-medium inline-block mb-4 text-sm">
                      {project.year}
                    </div>

                    {/* Project card */}
                    <Card className="enhanced-card overflow-hidden border-white/10 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm shadow-xl transition-all duration-300 group relative">
                      {(project.title === "Task Management App" || project.title === "E-commerce Platform") && (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-20">
                          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                        </div>
                      )}
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-gray-300 text-sm">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-primary/20 text-primary border-primary/30 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 text-white hover:bg-primary/20 text-xs h-8"
                          asChild
                        >
                          <Link href={project.github}>
                            <Github className="mr-1 h-3 w-3" /> Code
                          </Link>
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs h-8" asChild>
                          <Link href={project.demo}>
                            <ExternalLink className="mr-1 h-3 w-3" /> Live Demo
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </SectionTransition>

          {/* Contact Section */}
          <SectionTransition id="contact">
            <AnimatedSection className="py-12 md:py-16" direction="up" threshold={0.2}>
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-white">Get In Touch</h2>
                <Card className="enhanced-card border-white/10 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm shadow-xl transition-all duration-300">
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-white text-xl md:text-2xl">Contact Me</CardTitle>
                    <CardDescription className="text-gray-300 text-sm md:text-base">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-200">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-white/10 bg-gray-800/50 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-200">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-white/10 bg-gray-800/50 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-200">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-gray-800/50 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          placeholder="Your message"
                        />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary border-none shadow-lg shadow-primary/20 text-sm md:text-base">
                      <Mail className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </AnimatedSection>
          </SectionTransition>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-6 md:py-0 relative z-10">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 px-4 md:px-10">
            <p className="text-xs md:text-sm text-gray-400">
              © {new Date().getFullYear()} DevPortfolio. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  )
}
