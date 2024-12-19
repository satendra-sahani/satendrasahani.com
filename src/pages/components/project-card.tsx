import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    url: string
    tags: string[]
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg bg-gray-800/50 p-6 backdrop-blur-md hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-6 aspect-video relative overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-gray-100">{project.title}</h3>
      <p className="mb-4 text-lg text-gray-300">{project.description}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-teal-900/30 px-3 py-1 text-sm font-medium text-teal-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded bg-teal-600 px-6 py-2 text-base font-medium text-white hover:bg-teal-700 transition-colors"
        >
          Preview
        </button>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-teal-600 px-6 py-2 text-base font-medium text-teal-300 hover:bg-teal-600/10 transition-colors"
        >
          Visit Site
        </a>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative h-[80vh] w-[80vw] overflow-hidden rounded-lg shadow-2xl"
          >
            <iframe
              src={project.url}
              className="h-full w-full border-0"
              title={project.title}
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

