"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Full-stack Developer",
    company: "Admirise Digital Performance Agency",
    location: "Frankfurt am Main",
    period: "Jan 2025 - Present",
    achievements: [
      "Improved application load performance by 45% by refactoring React components and optimizing Next.js rendering strategies across 10+ production applications.",
      "Reduced API response latency by 30% by designing scalable Express-based backends with PostgreSQL and Prisma.",
      "Increased client organic traffic by over 50% by delivering SEO-optimized WordPress websites tailored to business goals.",
      "Reduced deployment time from hours to under 10 minutes, enabling faster release cycles through GitHub Actions–based CI/CD pipelines.",
      "Enabled reliable multi-environment scaling by containerizing services with Docker and orchestrating deployments using Kubernetes.",
      "Maintained a 95% on-time delivery rate by contributing to Agile sprints and collaborating closely with cross-functional teams.",
      "Reduced feature development time by ~30% by leveraging AI-assisted coding tools (e.g., Cursor, Claude) for refactoring, test generation, and rapid iteration while maintaining code quality.",
    ],
  },
  {
    title: "FullStack Developer",
    company: "Innovation and Partners",
    location: "Istanbul, Turkey",
    period: "Sep 2023 - Jun 2025",
    achievements: [
      "Increased client traffic and conversions by over 30% within one quarter by delivering high-performing full-stack web applications built with React, Next.js, and TypeScript.",
      "Boosted brand visibility and user engagement by developing modern, SEO-optimized platforms using Next.js, React, and server-side rendering best practices.",
      "Supported a 40% increase in active users by designing and maintaining scalable backend systems with Node.js, Express, and PostgreSQL while preserving performance under load.",
      "Improved site speed and search rankings by rebuilding multiple WordPress websites with custom plugins, optimized themes, and performance-focused integrations.",
      "Reduced new feature development time by 25% by introducing clean code standards, reusable component libraries, and TypeScript-based conventions across projects.",
      "Shortened deployment cycles from days to under one hour by leading workflow automation using CI/CD pipelines, Docker-based environments, and GitHub Actions.",
    ],
  },
  {
    title: "FullStack Developer",
    company: "Jotform",
    location: "Ankara, Turkey",
    period: "Sep 2023 - Aug 2024",
    achievements: [
      "Improved frontend performance by refactoring key components, optimizing rendering, and applying code-splitting strategies using React, Redux, Redux-Saga, and TailwindCSS.",
      "Enhanced backend efficiency and data consistency by building scalable Node.js and Express services to process and synchronize application data across multiple environments.",
      "Increased team productivity by approximately 20% by promoting modular component structures, reusable hooks, and standardized TailwindCSS styling conventions.",
      "Improved user interaction quality, increasing successful form submissions by 12%, by identifying and resolving 30+ UI/UX issues on high-traffic pages.",
      "Improved deployment reliability by implementing GitHub-based automation pipelines and containerizing services with Docker to ensure consistent and reproducible builds.",
      "Accelerated cross-team delivery speed by collaborating closely with designers, QA engineers, and product teams to translate requirements into production-ready features.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary text-2xl font-mono">03.</span>
            <span>Experience</span>
            <div className="h-px bg-gray-800 flex-1 ml-4" />
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-8 md:pl-12 border-l-2 border-gray-800 hover:border-accent-primary transition-colors duration-300 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent-primary group-hover:scale-125 transition-transform duration-300 ring-4 ring-background" />

                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 md:p-8 border border-gray-800 group-hover:border-accent-primary/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-accent-secondary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 text-sm md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + achIndex * 0.05, duration: 0.4 }}
                        className="flex items-start gap-3 text-gray-400"
                      >
                        <span className="text-accent-primary text-lg mt-1 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
