"use client"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      institution: "SRM UNIVERSITY",
      degree: "BTech in Computer Science and Engineering",
      status: "Pursuing",
      grade: "CGPA - 9.78",
    },
    {
      institution: "INDIAN INSTITUTE OF TECHNOLOGY MADRAS",
      degree: "Diploma in Data Science and applications",
      status: "Pursuing",
      grade: "CGPA - 9.0",
      link: "https://app.onlinedegree.iitm.ac.in/student/24F2001432",
    },
    {
      institution: "SPARTAN MATRICULATION SCHOOL",
      degree: "High School - Bio Maths Group",
      status: "Completed",
      grade: "Grade: 93%",
    },
  ]

  return (
    <motion.section
      id="education"
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-black text-center mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl text-black font-semibold">{edu.institution}</h3>
              <p className="text-gray-600">{edu.degree}</p>
              <p className="text-gray-700">{edu.status}</p>
              <p className="text-gray-700">{edu.grade}</p>
              {edu.link && (
                <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View Online ID
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

