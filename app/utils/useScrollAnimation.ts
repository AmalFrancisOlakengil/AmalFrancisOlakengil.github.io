"use client"
import { useEffect } from "react"

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".scroll-section").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])
}

