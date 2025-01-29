"use client"

import { motion } from "framer-motion"
import Hero from "./components/Hero"
import WorkExperience from "./components/WorkExperience"
import Skills from "./components/Skills"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <WorkExperience />
        <Skills />
      </motion.div>
    </div>
  )
}

