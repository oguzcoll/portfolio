"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary text-2xl font-mono">05.</span>
            <span>Education</span>
            <div className="h-px bg-gray-800 flex-1 ml-4" />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-8 md:p-12 border border-gray-800 hover:border-accent-primary/50 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl group-hover:bg-accent-primary/10 transition-colors duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-accent-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-xl text-accent-secondary font-medium mb-1">
                    Abdullah Gul University
                  </p>
                  <p className="text-gray-400">Kayseri, Turkey</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-primary" />
                  <span className="text-gray-400">
                    <span className="font-semibold text-white">GPA:</span> 3.50
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-primary" />
                  <span className="text-gray-400">
                    <span className="font-semibold text-white">Degree:</span> B.Sc.
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent-primary/5 rounded-lg border-l-4 border-accent-primary">
                <p className="text-gray-300 leading-relaxed">
                  Completed a rigorous, ABET-accredited Computer Engineering program with a strong{" "}
                  <span className="text-accent-primary font-semibold">3.50 GPA</span>, demonstrating
                  consistent academic excellence across advanced coursework in software architecture,
                  system design, and computational theory. Actively contributed to collaborative projects,
                  applying theoretical knowledge to practical software development challenges.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                <h4 className="text-lg font-semibold text-white mb-3">Key Focus Areas</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Advanced Software Engineering & Design Patterns",
                    "Data Structures, Algorithms & Complexity Analysis",
                    "Full-Stack Web Application Development",
                    "Database Systems & Query Optimization",
                    "Computer Networks & Distributed Systems",
                    "Operating Systems & System Programming",
                  ].map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-accent-primary">▹</span>
                      <span>{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
