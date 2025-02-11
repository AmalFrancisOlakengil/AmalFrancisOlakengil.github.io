"use client"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-black font-semibold text-center mb-8">Contact Information</h2>
        <motion.div
          className="max-w-md mx-auto bg-gray-100 rounded-lg p-6 shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="mb-4 text-black">
            <strong>Phone:</strong> 9363032004
          </p>
          <p className="mb-4 text-black">
            <strong>Email:</strong>{" "}
            <a href="mailto:francisamal030@gmail.com" className="text-blue-600 hover:underline">
              francisamal030@gmail.com
            </a>
          </p>
          <p className="mb-4 text-black">
            <strong>Github:</strong>{" "}
            <a
              href="https://github.com/AmalFrancisOlakengil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              AmalFrancisOlakengil
            </a>
          </p>
          <p className="mb-4 text-black">
            <strong>Linktree:</strong>{" "}
            <a
              href="https://linktr.ee/AmalFrancisOlakengil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              AmalFrancisOlakengil
            </a>
          </p>
          <p className="mb-4 text-black">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/amalfrancisolakengil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              amalfrancisolakengil
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

