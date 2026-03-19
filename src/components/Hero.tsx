import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Download } from "lucide-react";
import LeetCodeIcon from "@/components/icons/LeetCodeIcon";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 dot-grid" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-[100px] opacity-20 animate-float"
        style={{ background: 'hsl(var(--primary))' }} />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-[120px] opacity-10 animate-float-delayed"
        style={{ background: 'hsl(var(--accent))' }} />
      
      {/* Spinning ring decoration */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] hidden lg:block">
        <motion.div 
          className="w-full h-full rounded-full border border-border/30 animate-spin-slow"
          style={{ y, opacity }}
        />
        <motion.div 
          className="absolute inset-8 rounded-full border border-primary/10 animate-spin-slow"
          style={{ animationDirection: 'reverse', y, opacity }}
        />
        <motion.div 
          className="absolute inset-16 rounded-full border border-accent/10 animate-spin-slow"
          style={{ y, opacity }}
        />
      </div>

      <div className="container relative z-10 max-w-5xl">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 mb-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-primary">Tanmay Khilari</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-extrabold tracking-tight leading-[0.95]">
            Building scalable
            <br />
            <span className="text-gradient glow-text">backend systems</span>
            <br />
            <span className="text-gradient glow-text">that perform.</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Software Engineer focused on clean architecture & real-world performance. 
            Building secure, efficient, production-ready APIs with Java & Spring Boot.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
              Get in touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass font-heading font-medium text-sm text-foreground hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
              View projects
            </a>
            <a href="https://drive.google.com/file/d/1kR0ugO1Nq1oFmDrd6SQaDNdYp-AuDjZc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-warm text-warm-foreground font-heading font-semibold text-sm hover:shadow-lg hover:shadow-warm/25 transition-all duration-300 hover:-translate-y-0.5">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6 pt-6">
            {[
              { icon: Github, href: "https://github.com/Tanmayk13", label: "GitHub", external: true },
              { icon: Linkedin, href: "https://www.linkedin.com/in/itsmetanmayk/", label: "LinkedIn", external: true },
              { icon: LeetCodeIcon, href: "https://leetcode.com/u/FaPDScOgqv/", label: "LeetCode", external: true },
              { icon: Mail, href: "#contact", label: "Email", external: false },
            ].map(({ icon: Icon, href, label, external }) => (
              <a key={label} href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1" aria-label={label}>
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
