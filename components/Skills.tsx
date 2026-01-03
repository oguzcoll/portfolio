"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = {
  Frontend: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Redux",
    "Zustand",
    "React Query",
    "React Router",
    "Tailwind CSS",
    "CSS",
    "HTML",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "RESTful APIs",
  ],
  "DevOps & Tools": [
    "Docker",
    "Kubernetes",
    "CI/CD Automation",
    "Git",
    "GitHub Actions",
  ],
  CMS: ["WordPress", "Custom Plugin Development"],
  "AI-Powered Development": ["Claude", "Cursor", "AI-Assisted Coding"],
};

const languagesData = [
  { language: "English", level: "B2" },
  { language: "German", level: "B1" },
  { language: "Turkish", level: "Native" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary text-2xl font-mono">02.</span>
            <span>Skills & Technologies</span>
            <div className="h-px bg-gray-800 flex-1 ml-4" />
          </h2>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-800 hover:border-accent-primary/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold mb-4 text-accent-primary group-hover:text-accent-secondary transition-colors">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.3 }}
                      className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-sm text-gray-300 hover:bg-accent-primary/20 hover:text-accent-primary transition-all duration-200 cursor-default border border-transparent hover:border-accent-primary/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Languages</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {languagesData.map((lang, index) => (
                <motion.div
                  key={lang.language}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-800 hover:border-accent-secondary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-white">{lang.language}</span>
                    <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary rounded-full text-sm font-medium border border-accent-secondary/30">
                      {lang.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
