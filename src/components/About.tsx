import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Cloud, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "SOLID principles & TDD" },
  { icon: Server, label: "Distributed Systems", desc: "Microservices & event-driven" },
  { icon: Cloud, label: "Cloud Native", desc: "AWS, Docker, Kubernetes" },
  { icon: Zap, label: "High Performance", desc: "Optimized for scale" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container max-w-5xl">
        <motion.div variants={stagger} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-16">
          <motion.div variants={fadeUp} className="space-y-4">
            <span className="font-mono text-sm text-primary tracking-wider">{"// about"}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Backend-focused
              <br />
              <span className="text-gradient">systems that scale.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Backend-focused Software Engineer with ~2 years of experience building 
                scalable APIs and data-intensive systems using Java, Spring Boot, and PostgreSQL. 
                I focus on writing clean, maintainable code and designing systems that are 
                secure, efficient, and production-ready.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My approach combines TDD, Clean Code, and API-first design — 
                delivering systems that perform well under real-world load.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Architecture", value: "Microservices & Clean Architecture" },
                { label: "Focus", value: "Performance & Scalability" },
                { label: "Methodology", value: "TDD, Clean Code, API-first" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-3.5 border-b border-border group hover:border-primary/30 transition-colors">
                  <span className="text-sm text-muted-foreground font-mono">{label}</span>
                  <span className="text-sm font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Highlight cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="p-5 rounded-2xl glass hover-lift text-center group cursor-default"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-heading font-semibold text-sm mb-1">{label}</h4>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
