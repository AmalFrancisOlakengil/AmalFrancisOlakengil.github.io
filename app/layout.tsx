import "./globals.css"
import { Orbitron } from "next/font/google"
import type React from "react" // Import React

const orbitron = Orbitron({ subsets: ["latin"] })

export const metadata = {
  title: "Amal Francis Olakengil - Data Scientist & Software Developer",
  description:
    "Portfolio of Amal Francis Olakengil, a data scientist and software developer specializing in machine learning, deep learning, and web development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}



import './globals.css'