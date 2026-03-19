import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "MintChat",
    subtitle: "Real-Time Chat Backend",
    description: "Real-time chat backend with WebSocket-based messaging and JWT-secured REST APIs. REST + WebSocket hybrid architecture, STOMP messaging with topic-based subscriptions, JWT-secured handshake & APIs. Designed for horizontal scalability.",
    tech: ["Java", "Spring Boot", "WebSocket", "STOMP", "JWT", "PostgreSQL"],
    github: "https://github.com/Tanmayk13/MintChat",
    live: "https://mint-chat-7xfrye213-tanmayk13s-projects.vercel.app/",
    featured: true,
  },
  {
    title: "MintHealth",
    subtitle: "Healthcare Backend System",
    description: "Secure healthcare backend with role-based access. JWT authentication + RBAC (ADMIN/DOCTOR/PATIENT), prevented IDOR vulnerabilities using ownership checks, double-booking prevention, standardized JSON error handling.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Docker"],
    github: "https://github.com/Tanmayk13/MintHealth",
    live: "https://minthealth.onrender.com/swagger-ui/index.html",
    featured: true,
  },
  {
    title: "MintURL",
    subtitle: "URL Shortener System",
    description: "Scalable URL shortener with Redis caching for ultra-fast redirects, MongoDB as primary datastore, rate limiting (10 req/min/IP), TTL-based expiration, and click analytics with Redis + periodic sync.",
    tech: ["Java", "Spring Boot", "Redis", "MongoDB", "React"],
    github: "https://github.com/Tanmayk13/MintURL",
    live: "https://mint-url.vercel.app",
    featured: true,
  },
  {
    title: "Shipping Cost Estimator",
    subtitle: "Full Stack",
    description: "Production-style shipping cost estimation system. Distance-based transport selection (Mini Van, Truck, Aeroplane), Strategy + Factory Pattern for pricing, REST APIs with caching, global exception handling, responsive frontend.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "React", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Tanmayk13/shipping-estimator",
    live: null,
    featured: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="font-mono text-sm text-primary tracking-wider">{"// projects"}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Selected <span className="text-gradient">work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-6 md:p-8 rounded-2xl glass hover-lift relative overflow-hidden ${
                  project.featured ? "md:col-span-1" : ""
                }`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live">
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
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
