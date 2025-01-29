import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-64 h-64 mb-8 overflow-hidden rounded-full border-4 border-gray-300 shadow-lg"
      >
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Profile Picture"
          width={256}
          height={256}
          className="object-cover"
        />
      </motion.div>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-4 text-center text-gray-100"
      >
        Your Name
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-center max-w-2xl text-gray-300"
      >
        Full Stack Developer | AI & ML Enthusiast | Cloud Expert
      </motion.p>
    </section>
  )
}

