import { motion } from 'framer-motion';

const skills = {
  "Frontend": [
    "JavaScript",
    "TypeScript",
    "React.js",
    "React-Native",
    "Redux",
    "Redux-Saga",
    "Next.js",
    "Tailwind CSS",
    "Material UI",
    "Bootstrap",
  ],
  "Backend": [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Socket.io",
    "MongoDB",
    "Redis",
    "Java",
  ],
  "DevOps": [
    "Docker",
    "Kubernetes",
    "CI/CD",
    "AWS",
  ],
  "Other": [
    "REST APIs",
    "Webpack",
    "Git",
    "Agile",
  ],
};

export default function SkillsSection() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {Object.entries(skills).map(([category, skillList]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg bg-gray-800/50 p-6 backdrop-blur"
        >
          <h3 className="mb-4 text-xl font-bold text-teal-300">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillList.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
