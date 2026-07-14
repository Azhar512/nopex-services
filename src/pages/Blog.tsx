import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Insights, trends, and expertise from our engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of LOD 500: Beyond Construction",
                excerpt: "Exploring how high-fidelity BIM models are transforming facility management and lifecycle operations.",
                category: "BIM Strategy",
                date: "Feb 5, 2026",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              },
              {
                title: "Sustainable Structural Design in Seismic Zones",
                excerpt: "Designing for resilience: Balancing carbon footprint with structural integrity in high-risk areas.",
                category: "Engineering",
                date: "Jan 28, 2026",
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
              },
              {
                title: "Common Data Environments: Lessons from Large-Scale Projects",
                excerpt: "Key takeaways from managing multi-discipline coordination in complex infrastructure developments.",
                category: "Project Management",
                date: "Jan 15, 2026",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
              },
              {
                title: "AI in Generative Design: A Practical Approach",
                excerpt: "Moving beyond the hype: How we're using generative algorithms to optimize MEP routing.",
                category: "Innovation",
                date: "Jan 5, 2026",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
              },
              {
                title: "The Shift Towards Off-Site Prefabrication",
                excerpt: "How BIM-enabled shop drawings are shortening site timelines and reducing material waste.",
                category: "Construction",
                date: "Dec 20, 2025",
                image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
              },
              {
                title: "Navigating Global Standards in Digital Engineering",
                excerpt: "Comparing ISO 19650 implementation across North American and Middle Eastern markets.",
                category: "Standards",
                date: "Dec 12, 2025",
                image: "https://images.unsplash.com/photo-1454165833767-131438967468?w=800&q=80"
              }
            ].map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer bg-muted rounded-lg overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
