"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Finance Saas App",
    date: "Feb 2025",
    description:
      "Engineered a production-ready, enterprise-grade Finance SaaS platform leveraging Next.js 14, React Server Components, TypeScript, and Drizzle ORM with PostgreSQL, architecting a highly scalable, type-safe system that streamlines complex financial data management, transaction processing, and real-time analytics for business users. Implemented advanced authentication, role-based access control, and comprehensive data validation layers.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Drizzle", "TailwindCSS"],
    highlights: [
      "Full-stack architecture with Next.js Server Components for optimal performance and SEO",
      "Real-time financial transaction processing with optimistic UI updates and conflict resolution",
      "Type-safe database operations with Drizzle ORM, comprehensive migrations, and query optimization",
      "Advanced authentication and granular role-based authorization system",
      "Interactive data visualization dashboards with real-time analytics",
    ],
  },
  {
    title: "University-Library Management System",
    date: "Oct 2024",
    description:
      "Architected and deployed a comprehensive library management platform using Node.js, Express, MongoDB, and React that revolutionizes book inventory tracking, user management, and circulation operations for academic institutions. Designed with scalability in mind, the system handles thousands of concurrent transactions while maintaining data integrity through advanced validation, indexing strategies, and optimized query patterns.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    highlights: [
      "Real-time book inventory tracking with advanced search, filtering, and reservation capabilities",
      "Comprehensive user management with role-based permissions for students, faculty, and administrators",
      "RESTful API architecture with comprehensive error handling and input validation",
      "Automated overdue notifications and fine calculation system",
      "Performance-optimized database queries with strategic indexing for sub-second response times",
    ],
  },
  {
    title: "E-Commerce REST API",
    date: "Jan 2023",
    description:
      "Developed a robust, production-ready e-commerce backend API using Node.js, Express, MongoDB, and JWT-based authentication, providing comprehensive CRUD operations for products, users, reviews, and orders within a highly scalable microservices-ready architecture. Implemented advanced security measures including input sanitization, rate limiting, and encrypted password storage to ensure enterprise-grade data protection.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    highlights: [
      "Complete RESTful API with comprehensive CRUD operations for all e-commerce entities",
      "Secure JWT-based authentication with refresh token rotation and role-based access control",
      "Advanced product search with filtering, pagination, and sorting capabilities",
      "Order processing pipeline with inventory management and transaction handling",
      "Scalable architecture designed for horizontal scaling and microservices integration",
    ],
  },
  {
    title: "Hotel Booking Platform",
    date: "Jan 2022",
    description:
      "Created a feature-rich hotel booking platform using React, React Router, React Query, Supabase, and Styled-Components, delivering real-time availability tracking, booking management, and interactive administrative dashboards. Leveraged React Query's intelligent caching and background synchronization to provide instantaneous user feedback while maintaining perfect data consistency with the backend.",
    technologies: ["React", "React Router", "React Query", "Supabase", "Styled-Components"],
    highlights: [
      "Real-time booking management with optimistic updates and conflict resolution",
      "Interactive administrative dashboards with booking analytics and revenue tracking",
      "Advanced search and filtering system with real-time availability checking",
      "Supabase backend integration with real-time subscriptions and row-level security",
      "Responsive design with Styled-Components and modern CSS-in-JS patterns",
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary text-2xl font-mono">04.</span>
            <span>Featured Projects</span>
            <div className="h-px bg-gray-800 flex-1 ml-4" />
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 md:p-8 border border-gray-800 hover:border-accent-primary/50 transition-all duration-300 group hover:transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-accent-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-500 font-mono">{project.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent-secondary mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-accent-primary mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 rounded-lg text-xs text-gray-300 font-mono border border-gray-700 group-hover:border-accent-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
