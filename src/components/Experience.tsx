import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Raja Software Labs",
    location: "Pune",
    period: "Jun 2024 — Dec 2025",
    description: "Optimized 20+ GraphQL queries/mutations for efficient data retrieval. Improved caching and reduced redundant network calls. Designed reusable backend layers using Clean Architecture. Wrote 50+ unit & integration tests to improve system stability. Collaborated on schema evolution and resolved API inconsistencies.",
    tech: ["Java", "Kotlin", "Spring Boot", "GraphQL", "PostgreSQL", "JUnit", "Mockito"],
  },
  {
    role: "Backend Engineer Intern",
    company: "TechSpot InfoTech",
    location: "Sangli",
    period: "Dec 2023 — May 2024",
    description: "Built REST APIs using Spring Boot. Implemented JWT & OAuth2-based authentication and authorization. Tested APIs using Swagger & Postman.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="font-mono text-sm text-primary tracking-wider">{"// experience"}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Where I've <span className="text-gradient">worked</span>
            </h2>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-10 pb-14 last:pb-0 group"
              >
                {/* Timeline line */}
                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border group-last:hidden" />
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <Briefcase className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <div className="p-6 rounded-2xl glass hover-lift space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-lg font-heading font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                    <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded-full bg-secondary">{exp.period}</span>
                  </div>
                  <span className="text-sm text-primary font-medium">{exp.company}{exp.location ? `, ${exp.location}` : ""}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.tech && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground">{t}</span>
                      ))}
                    </div>
                  )}
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
