"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    "TensorFlow",
    "Scikit-learn",
    "Numpy",
    "Pandas",
    "Tkinter",
    "Sqlite",
    "Reactjs",
    "Nextjs",
    "Tailwindcss",
    "Flask",
    "SqlAlchemy",
    "Matplotlib",
    "Seaborn",
    "Python",
    "Java",
    "C/C++",
    "JavaScript",
    "HTML",
    "CSS",
  ]

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="py-20 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Skills & Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-black/50 border border-white/10 rounded-md px-6 py-3 text-gray-300 hover:bg-black/70"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

