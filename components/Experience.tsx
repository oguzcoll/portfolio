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
      "Engineered a comprehensive React performance optimization strategy across 10+ production applications, implementing advanced code-splitting, lazy loading, and component memoization techniques that slashed initial load times by 45% and dramatically improved Core Web Vitals scores.",
      "Architected and deployed high-throughput Express-based API systems with PostgreSQL and Prisma ORM, leveraging connection pooling, query optimization, and intelligent caching strategies that reduced average API response latency by 30% under peak concurrent user loads.",
      "Spearheaded SEO transformation initiatives for multiple WordPress platforms, implementing technical SEO best practices, schema markup, performance optimization, and content strategy that propelled organic traffic growth beyond 50% and significantly boosted conversion rates.",
      "Revolutionized deployment infrastructure by designing and implementing GitHub Actions-based CI/CD pipelines with automated testing, security scanning, and zero-downtime deployments, compressing release cycles from multi-hour manual processes to under 10 minutes of automated delivery.",
      "Orchestrated production-grade containerization and scaling strategy using Docker and Kubernetes, implementing auto-scaling policies, health monitoring, and multi-environment deployment workflows that ensure 99.9% uptime across distributed microservices architecture.",
      "Consistently achieved 95% on-time delivery rate across concurrent high-priority projects by driving Agile ceremonies, maintaining transparent communication with cross-functional stakeholders, and proactively identifying and mitigating technical risks before they impact timelines.",
      "Accelerated feature development velocity by approximately 30% through strategic integration of AI-powered development tools (Cursor, Claude), utilizing intelligent code generation for boilerplate reduction, automated test creation, and rapid refactoring while maintaining rigorous code quality standards and comprehensive code review processes.",
    ],
  },
  {
    title: "FullStack Developer",
    company: "Innovation and Partners",
    location: "Istanbul, Turkey",
    period: "Sep 2023 - Jun 2025",
    achievements: [
      "Architected and delivered enterprise-grade full-stack web applications using React, Next.js, and TypeScript that drove client traffic and conversion rates beyond 30% within a single quarter through strategic performance optimization, intuitive UX design, and data-driven feature implementation.",
      "Transformed brand digital presence and user engagement metrics by engineering modern, SEO-optimized web platforms leveraging Next.js server-side rendering, incremental static regeneration, and advanced meta-tag optimization, resulting in measurably improved search rankings and sustained organic traffic growth.",
      "Designed and maintained highly scalable backend systems using Node.js, Express, and PostgreSQL that successfully supported a 40% surge in active users while maintaining sub-100ms response times through sophisticated database indexing, query optimization, and horizontal scaling strategies.",
      "Led comprehensive WordPress modernization projects, rebuilding legacy sites with custom plugin development, performance-optimized themes, advanced caching mechanisms, and CDN integration that elevated site speed scores to 90+ and dramatically improved search engine rankings.",
      "Established and enforced rigorous code quality standards across the engineering team, introducing TypeScript strict mode, reusable component libraries, comprehensive ESLint configurations, and standardized architectural patterns that reduced new feature development time by 25% and cut bug reports by 40%.",
      "Pioneered DevOps transformation by designing and implementing Docker-based development environments and GitHub Actions CI/CD workflows with automated testing, staging deployments, and production releases, compressing deployment cycles from multi-day manual processes to under one hour of reliable, repeatable automation.",
    ],
  },
  {
    title: "FullStack Developer",
    company: "Jotform",
    location: "Ankara, Turkey",
    period: "Sep 2023 - Aug 2024",
    achievements: [
      "Drove substantial frontend performance gains by systematically refactoring critical React components, implementing advanced rendering optimization techniques including React.memo, useMemo, useCallback, and strategic code-splitting with React.lazy, while coordinating Redux and Redux-Saga state management patterns that eliminated unnecessary re-renders and improved user-perceived responsiveness.",
      "Engineered robust backend data processing pipelines using Node.js and Express that ensured data consistency and integrity across multiple production environments through transactional database operations, comprehensive error handling, and idempotent API design patterns.",
      "Elevated team development velocity by approximately 20% through the introduction and documentation of modular component architecture, custom React hooks library, standardized TailwindCSS design system, and comprehensive component testing strategies that dramatically reduced code duplication and onboarding time.",
      "Directly impacted business metrics by identifying and resolving 30+ critical UI/UX issues across navigation flows, form validation logic, responsive design breakpoints, and accessibility compliance on high-traffic pages, resulting in a measurable 12% increase in successful form submission rates and reduced user drop-off.",
      "Strengthened deployment reliability and consistency by architecting GitHub Actions-based automation pipelines with comprehensive test coverage, Docker containerization for reproducible builds, and environment-specific configuration management that eliminated deployment-related outages and reduced rollback incidents by 60%.",
      "Accelerated cross-functional delivery timelines by establishing streamlined collaboration workflows between design, QA, and product teams, translating complex requirements into detailed technical specifications and production-ready features while maintaining high code quality through rigorous peer review processes.",
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
