"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent-primary text-2xl font-mono">01.</span>
            <span>About Me</span>
            <div className="h-px bg-gray-800 flex-1 ml-4" />
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I architect and deploy enterprise-grade full-stack applications that drive measurable business growth. Specializing in high-performance web solutions, I&apos;ve delivered{" "}
                <span className="text-accent-primary font-medium">45% performance improvements</span>,{" "}
                <span className="text-accent-primary font-medium">50%+ traffic increases</span>, and consistently maintained a{" "}
                <span className="text-accent-primary font-medium">95% on-time delivery rate</span> across 10+ production applications serving thousands of users daily.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                My technical arsenal spans cutting-edge frontend development with{" "}
                <span className="text-accent-primary font-medium">React/Next.js</span> and{" "}
                <span className="text-accent-primary font-medium">TypeScript</span>, complemented by robust backend systems built on{" "}
                <span className="text-accent-primary font-medium">Node.js</span>,{" "}
                <span className="text-accent-primary font-medium">Express</span>,{" "}
                <span className="text-accent-primary font-medium">PostgreSQL</span>,{" "}
                <span className="text-accent-primary font-medium">MongoDB</span>, and{" "}
                <span className="text-accent-primary font-medium">Prisma ORM</span>. I design systems that scale seamlessly under production load while maintaining code quality and developer experience.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Beyond modern frameworks, I deliver premium{" "}
                <span className="text-accent-primary font-medium">WordPress solutions</span> for high-traffic commercial sites, implementing custom features, performance optimizations, and SEO strategies that drive organic growth and conversions.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                I champion DevOps excellence through{" "}
                <span className="text-accent-primary font-medium">Docker containerization</span>,{" "}
                <span className="text-accent-primary font-medium">Kubernetes orchestration</span>, and automated{" "}
                <span className="text-accent-primary font-medium">CI/CD pipelines</span>, transforming deployment cycles from hours to minutes. My Agile collaboration approach ensures technical precision meets business objectives, every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-white">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-accent-primary text-xl">▹</span>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">45% performance improvement</span> through React optimization
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-primary text-xl">▹</span>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">30% reduction</span> in API response latency
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-primary text-xl">▹</span>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">50+ organic traffic increase</span> with SEO-optimized sites
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-primary text-xl">▹</span>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">95% on-time delivery</span> rate across projects
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-primary text-xl">▹</span>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Deployment time: hours → 10 minutes</span> with CI/CD
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
