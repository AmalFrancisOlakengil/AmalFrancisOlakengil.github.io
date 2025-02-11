"use client"
import { motion } from "framer-motion"

export default function Certifications() {
  const certifications = [
    {
      platform: "KAGGLE",
      courses: [
        {
          name: "Intro to Machine Learning",
          url: "https://www.kaggle.com/learn/certification/amalfrancisolakengil/intro-to-programming",
        },
        {
          name: "Intermediate Machine Learning",
          url: "https://www.kaggle.com/learn/certification/amalfrancisolakengil/intermediate-machine-learning",
        },
        {
          name: "Deep Learning",
          url: "https://www.kaggle.com/learn/certification/amalfrancisolakengil/intro-to-deep-learning",
        },
        {
          name: "Computer Vision",
          url: "https://www.kaggle.com/learn/certification/amalfrancisolakengil/computer-vision",
        },
        {
          name: "Feature Engineering",
          url: "https://www.kaggle.com/learn/certification/amalfrancisolakengil/feature-engineering",
        },
      ],
    },
    {
      platform: "HACKERRANK",
      courses: [
        { name: "Java (Basic)", url: "https://www.hackerrank.com/certificates/2f9087d2a2b5" },
        { name: "Problem Solving (Basic)", url: "https://www.hackerrank.com/certificates/f3b98be20f5c" },
        { name: "Python (Basic)", url: "https://www.hackerrank.com/certificates/2d96d712631c" },
      ],
    },
    {
      platform: "UDEMY",
      courses: [
        {
          name: "Java Data Structures and Algorithms",
          url: "https://www.udemy.com/certificate/UC-d1063d64-dbc0-4961-94dc-020a2cf7e905/",
        },
      ],
    },
  ]

  return (
    <motion.section
      id="certifications"
      className="py-20 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-black font-semibold text-center mb-8">Certifications</h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl text-black font-semibold mb-4">{cert.platform}</h3>
              <ul className="space-y-2">
                {cert.courses.map((course, i) => (
                  <li key={i}>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {course.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

