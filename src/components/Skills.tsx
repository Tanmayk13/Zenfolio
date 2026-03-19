import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Languages", items: ["Java", "Kotlin", "JavaScript", "SQL"], color: "primary" },
  { category: "Backend & Frameworks", items: ["Spring Boot", "Spring Security", "Spring Data JPA", "Microservices", "REST APIs", "GraphQL"], color: "accent" },
  { category: "Security", items: ["JWT", "OAuth 2.0"], color: "primary" },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"], color: "accent" },
  { category: "Testing", items: ["JUnit", "Mockito"], color: "primary" },
  { category: "Tools & DevOps", items: ["Git", "Maven", "Docker", "Postman", "Swagger"], color: "accent" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />

      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="font-mono text-sm text-primary tracking-wider">{"// skills"}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Tech <span className="text-gradient">stack</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map(({ category, items }, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl glass hover-lift group"
              >
                <h3 className="font-mono text-xs text-primary mb-5 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
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

export default Skills;
