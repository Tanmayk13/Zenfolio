import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, ArrowRight, X, ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadBlogPosts, type BlogPost } from "@/data/blogPosts";

const blogPosts = loadBlogPosts();

const INITIAL_VISIBLE = 3;

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, INITIAL_VISIBLE);

  return (
    <>
      <section id="blog" className="section-padding" ref={ref}>
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="font-mono text-sm text-primary tracking-wider">{"// blog"}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Latest <span className="text-gradient">thoughts</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {visiblePosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 25, scale: 0.97 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setSelectedPost(post)}
                  className="group p-6 rounded-2xl glass hover-lift cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-lg font-heading font-bold group-hover:text-primary transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {blogPosts.length > INITIAL_VISIBLE && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="flex justify-center"
              >
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-heading font-medium text-sm text-foreground hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {showAll ? "Show less" : `See more (${blogPosts.length - INITIAL_VISIBLE})`}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Blog post modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-background/80 backdrop-blur-xl overflow-y-auto py-8 px-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-3xl glass-strong rounded-3xl p-8 md:p-12 my-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                {selectedPost.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground pb-4 border-b border-border">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </span>
              </div>

              <div className="prose-blog">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedPost.content}
                </ReactMarkdown>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Blog;
