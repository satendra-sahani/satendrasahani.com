import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import ContactForm from './components/contact-form'
import ProjectCard from './components/project-card'
import SkillsSection from './components/skills-section'

const projects = [
  {
    title: "Olibr Platform",
    description: "Job-candidate matching platform with AI-driven algorithms",
    image: "/olibr.jpg",
    url: "https://olibr.com",
    tags: ["Next.js", "Node.js", "AI", "MongoDB"]
  },
  {
    title: "Clickinpedia CRM",
    description: "Multi-role CRM system with real-time features",
    image: "/portal.clickinpedia.jpg", 
    url: "https://portal.clickinpedia.com",
    tags: ["React", "Socket.io", "Node.js"]
  },
  {
    title: "CLBhoomi",
    description: "Property management and real estate platform",
    image: "/clbhoomi.png",
    url: "https://clbhoomi.com",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Lucerno",
    description: "Business intelligence and analytics platform",
    image: "/lucerno.png",
    url: "https://lucerno.co.in",
    tags: ["React", "Node.js", "D3.js"]
  }
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      <Head>
        <title>Satendra Sahani - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies" />
      </Head>

      <nav className="fixed left-0 top-0 h-screen w-20 border-r border-gray-800 bg-[#0a192f]/90 backdrop-blur">
        <div className="flex h-full flex-col items-center justify-between py-8">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image 
              src="https://media.licdn.com/dms/image/v2/D5603AQFVx_DHj2fIqw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718308936440?e=1740009600&v=beta&t=TB4eVhdrJAIeMG5uPQlQAulQVddOD0Dbpvmq0jTaUoI"
              alt="Satendra Sahani"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">
            <button
              onClick={() => setActiveSection('about')}
              className={`transition-colors ${
                activeSection === 'about' ? 'text-teal-300' : 'hover:text-teal-300'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`transition-colors ${
                activeSection === 'projects' ? 'text-teal-300' : 'hover:text-teal-300'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection('skills')}
              className={`transition-colors ${
                activeSection === 'skills' ? 'text-teal-300' : 'hover:text-teal-300'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`transition-colors ${
                activeSection === 'contact' ? 'text-teal-300' : 'hover:text-teal-300'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="https://github.com/satendra-sahani" className="text-xl hover:text-teal-300">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/satendra-sahani-958019311/" className="text-xl hover:text-teal-300">
              <FaLinkedin />
            </Link>
            <Link href="mailto:satendrasahani270@gmail.com" className="text-xl hover:text-teal-300">
              <HiMail />
            </Link>
          </div>
        </div>
      </nav>

      <main className="ml-20 p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <section className="mb-16 max-w-4xl">
            <motion.h1 
              className="mb-4 text-7xl font-bold text-gray-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Satendra Sahani
            </motion.h1>
            <motion.h2 
              className="mb-8 text-3xl text-teal-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Software Engineer
            </motion.h2>
            <motion.p 
              className="mb-6 text-xl leading-relaxed text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              With over 3 years of experience in designing and developing scalable web applications, 
              I specialize in creating efficient and secure solutions that enhance business operations. 
              My expertise spans modern web technologies, with a focus on React.js, Node.js, and RESTful APIs.
            </motion.p>
            <motion.p 
              className="mb-6 text-xl leading-relaxed text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              I'm passionate about crafting real-time systems, cross-platform applications, and role-based CRMs. 
              My goal is to deliver pixel-perfect, accessible digital experiences that not only meet but exceed user expectations.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a
                href="#projects"
                className="rounded bg-teal-600 px-6 py-3 text-lg font-medium text-white hover:bg-teal-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('projects');
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded border border-teal-600 px-6 py-3 text-lg font-medium text-teal-300 hover:bg-teal-600/10 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('contact');
                }}
              >
                Contact Me
              </a>
            </motion.div>
          </section>

          {activeSection === 'projects' && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </motion.section>
          )}

          {activeSection === 'skills' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SkillsSection />
            </motion.div>
          )}

          {activeSection === 'contact' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ContactForm />
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  )
}

