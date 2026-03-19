import { Github, Linkedin, Mail, Heart } from "lucide-react";
import LeetCodeIcon from "@/components/icons/LeetCodeIcon";

const Footer = () => (
  <footer className="py-12 px-6 md:px-8 border-t border-border">
    <div className="container max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-heading font-extrabold text-lg text-gradient">{'<zenfolio />'}</span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { icon: Github, href: "https://github.com/Tanmayk13", label: "GitHub", external: true },
            { icon: Linkedin, href: "https://www.linkedin.com/in/itsmetanmayk/", label: "LinkedIn", external: true },
            { icon: LeetCodeIcon, href: "https://leetcode.com/u/FaPDScOgqv/", label: "LeetCode", external: true },
            { icon: Mail, href: "#contact", label: "Email", external: false },
          ].map(({ icon: Icon, href, label, external }) => (
            <a key={label} href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1" aria-label={label}>
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <span className="text-sm text-muted-foreground flex items-center gap-1.5 font-mono">
          © {new Date().getFullYear()} · Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Pune, Maharashtra
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
