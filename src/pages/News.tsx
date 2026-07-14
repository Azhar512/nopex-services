import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Nopex Services Selected for San Francisco Transit Center BIM Upgrade",
      excerpt: "Our San Francisco team has been awarded the BIM coordination contract for a major transit hub enhancement, focusing on multi-stakeholder integration and LOD 400 detailing.",
      date: "2026-02-01",
      category: "Project News",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "New Digital Engineering Hub Operational in Lahore",
      excerpt: "We're expanding our delivery capabilities with the opening of our specialized Digital Engineering Hub in Lahore, focusing on parametric modeling and structural detailing.",
      date: "2026-01-15",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Innovation in Seismic Reinforcement: A Case Study",
      excerpt: "Nopex Services releases a white paper on innovative seismic reinforcement techniques used in recent West Coast projects, highlighting efficiency and safety improvements.",
      date: "2026-01-05",
      category: "Thought Leadership",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Nopex Achieves ISO 19650-2 Global Certification",
      excerpt: "Demonstrating our commitment to international excellence, we've successfully achieved ISO 19650-2 certification across all our global design and production workflows.",
      date: "2025-12-20",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Sustainable MEP Design for Commercial High-Rises",
      excerpt: "Our team shares insights on integrating high-performance MEP systems into modern commercial architecture to meet net-zero energy goals.",
      date: "2025-12-05",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Expanding Our BIM Services to the Industrial Sector",
      excerpt: "Nopex Services is now offering specialized BIM-to-Fabrication workflows for complex industrial plants and manufacturing facilities worldwide.",
      date: "2025-11-20",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      readTime: "3 min read"
    }
  ];

  const categories = ["All", "Project News", "Company News", "Awards", "Partnerships", "Events"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Stay informed about our latest projects, achievements, and industry insights
              as we continue to shape the future of engineering and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {item.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex items-center text-primary font-semibold text-sm hover:gap-3 gap-2 transition-all group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter for the latest news, project updates, and industry insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
