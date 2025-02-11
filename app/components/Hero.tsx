"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Amal Francis Olakengil</h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">Data Scientist & Software Developer</h2>
            <p className="text-xl mb-8 text-gray-400">
              Specializing in machine learning, deep learning, and web development
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-white text-black py-3 px-8 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-white/10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-13%20at%2000.10.55_89cf8098.jpg-4RWwXf5aNckQML4gjLwnKuRhGSTxYz.jpeg"
                alt="Amal Francis Olakengil"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

