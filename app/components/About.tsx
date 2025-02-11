"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-black font-semibold text-center mb-8">About Me</h2>
        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I build websites, desktop applications, Linear regression and binary classification models, and image
          classifiers. I have experience in Python, Java, C/C++, JavaScript, HTML, and CSS. I mainly work in Visual
          Studio Code, Visual Studio, Jupyter, Kaggle Notebooks and Google Colab.
        </motion.p>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          As a data scientist and software developer, I'm passionate about leveraging technology to solve complex
          problems and create innovative solutions.
        </motion.p>
      </div>
    </motion.section>
  )
}

