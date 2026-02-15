import { motion } from "framer-motion";
import { Newspaper, Calendar, Tag, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LatestPosts = () => {
  const posts = [
    {
      title: "NOPEX Expands BIM Services to Middle East with New Dubai Office",
      excerpt: "Opening of our 6th global office positions us to better serve growing demand in the GCC region.",
      date: "March 18, 2024",
      category: "Company News",
      type: "Announcement",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
    },
    {
      title: "New Partnership with Autodesk for Advanced BIM Training",
      excerpt: "Becoming an Autodesk Authorized Training Center to offer certified BIM education programs.",
      date: "March 12, 2024",
      category: "Partnerships",
      type: "News",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "Q1 2024: Record Quarter with 45 New Projects Awarded",
      excerpt: "Strong start to the year with major wins across transportation, energy, and commercial building sectors.",
      date: "March 8, 2024",
      category: "Business Update",
      type: "Report",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      title: "NOPEX Achieves ISO 9001:2015 Certification",
      excerpt: "Quality management system certification demonstrates our commitment to excellence and continuous improvement.",
      date: "February 28, 2024",
      category: "Certifications",
      type: "Achievement",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
      title: "Webinar Series: Mastering BIM Coordination - Register Now",
      excerpt: "Free 4-part webinar series covering clash detection, model federation, and coordination workflows.",
      date: "February 22, 2024",
      category: "Events",
      type: "Webinar",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80"
    },
    {
      title: "Celebrating Our Team: 5 Engineers Earn PE Licenses",
      excerpt: "Congratulations to our newest Professional Engineers advancing their careers and expertise.",
      date: "February 15, 2024",
      category: "Team",
      type: "Celebration",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    }
  ];

  const categories = ["All", "Company News", "Partnerships", "Events", "Certifications", "Team"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <Newspaper className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider">LATEST POSTS & NEWS</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Stay Updated with NOPEX
            </h1>
            <p className="text-2xl leading-relaxed font-light opacity-90">
              Company news, project announcements, and industry updates from the NOPEX team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center bg-muted rounded-2xl overflow-hidden p-8"
          >
            <div className="relative h-96 rounded-xl overflow-hidden">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Featured
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                  {posts[0].category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">{posts[0].title}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{posts[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>{posts[0].type}</span>
                </div>
              </div>
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all">
                Read More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {post.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-xs text-muted-foreground mb-3 flex items-center gap-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="text-primary font-semibold">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-primary font-semibold text-sm hover:underline">
                    Read Full Post →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d4d] to-[#0d3333] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-[#a8d96e]" />
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Get the Latest Updates
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Subscribe to receive company news, project announcements, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-md text-gray-900"
            />
            <button className="px-8 py-4 bg-[#a8d96e] text-[#1a4d4d] font-semibold rounded-md hover:bg-[#96c75c] transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LatestPosts;

