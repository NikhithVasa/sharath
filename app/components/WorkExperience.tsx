import { motion } from "framer-motion"
const workExperience = [
  {
    company: "Elevance Health",
    period: "Aug 2023 - Present",
    role: "Conversational AI Bot Developer",
  },
  {
    company: "Concentrix",
    period: "Nov 2019 - Sep 2021",
    role: "Senior Software Engineer",
  },
  {
    company: "Wipro",
    period: "Nov 2018 - Sep 2019",
    role: "Consultant – Developer",
  },
  {
    company: "Wipro",
    period: "Nov 2017 - Nov 2018",
    role: "UI Developer",
  },
  {
    company: "ICROZ SOLUTIONS PRIVATE LIMITED",
    period: "Jan 2017 - Oct 2017",
    role: "Content Developer",
  },
  {
    company: "ICROZ SOLUTIONS PRIVATE LIMITED",
    period: "Jan 2016 - Dec 2016",
    role: "Junior Web Developer",
  },
];

export default function WorkExperience() {
  return (
    <section className="py-16 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-200">{job.company}</h3>
              <p className="text-gray-300 mb-2">{job.period}</p>
              <p className="text-gray-400">{job.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

