"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Vice President",
      company: "Geekcoders Community",
      period: "2024 - present",
      responsibilities: [
        "Developed the Events page of GeekCoders Community website",
        "Event management and Team management",
        "Event Organizer and Speaker",
      ],
    },
    {
      title: "Technical Member",
      company: "Cyborg Club SRM",
      period: "2024 - Present",
      responsibilities: ["Technical Event Organizer", "Event Management"],
    },
  ]

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="py-20 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-black/50 rounded-lg p-6 border border-white/10"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-gray-400">
                {exp.company} | {exp.period}
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

