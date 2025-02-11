"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Habit-tracker (Hacktoberfest)",
      url: "https://habittracker-umber.vercel.app/",
      description: "A habit tracking application developed during Hacktoberfest.",
    },
    {
      title: "Blog Application",
      url: "https://blog-application-version-0-0-1.vercel.app/",
      description: "A full-featured blog application.",
    },
    {
      title: "Expenditure Managing Website",
      url: "https://moneymap-pi.vercel.app",
      description: "A website for managing personal expenditures.",
    },
  ]

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="py-20 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

