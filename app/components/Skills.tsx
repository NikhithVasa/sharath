import { motion } from "framer-motion"

const skills = {
  backend: ["Java", "Groovy", "Python"],
  frontend: ["React.js", "TypeScript", "JavaScript", "Angular.js"],
  cloud: ["AWS", "Kubernetes"],
  other: ["AI", "ML", "Jenkins"],
}

export default function Skills() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-200 capitalize">{category} Technologies</h3>
              <ul className="space-y-2">
                {items.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                    className="text-gray-400"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

