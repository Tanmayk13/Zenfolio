import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="p-10 md:p-16 rounded-3xl glass glow-border text-center space-y-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-20"
              style={{ background: 'hsl(var(--primary))' }} />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-[80px] opacity-10"
              style={{ background: 'hsl(var(--accent))' }} />
            
            <div className="relative z-10 space-y-8">
              <span className="font-mono text-sm text-primary tracking-wider">{"// contact"}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Let's build something
                <br />
                <span className="text-gradient">amazing together.</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-lg">
                I'm always open to discussing new projects, interesting ideas, 
                or opportunities to be part of your vision.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:khilaritanmay24@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-heading font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  khilaritanmay24@gmail.com
                  <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
