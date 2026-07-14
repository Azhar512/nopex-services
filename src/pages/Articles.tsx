import { motion } from "framer-motion";
import { FileText, Clock, User, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "BIM", "Sustainability", "Project Management", "Technology", "Case Studies"];

  const articles = [
    {
      id: 1,
      title: "The Complete Guide to BIM Level of Development (LOD)",
      excerpt: "Understanding LOD 100 through LOD 500 and how to specify the right level of detail for your project requirements.",
      author: "Michael Chen, PE",
      date: "March 15, 2024",
      readTime: "12 min read",
      category: "BIM",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
      featured: true
    },
    {
      id: 2,
      title: "5 Ways BIM Coordination Reduces Construction Conflicts",
      excerpt: "Real-world examples of how clash detection and model coordination save time and money on complex projects.",
      author: "Sarah Martinez, AIA",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "BIM",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Achieving Net-Zero: Engineering Strategies for Carbon Neutral Buildings",
      excerpt: "A comprehensive look at design strategies, material selection, and renewable energy integration for net-zero projects.",
      author: "Jennifer Wu, P.Eng",
      date: "March 5, 2024",
      readTime: "15 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80",
      featured: true
    },
    {
      id: 4,
      title: "MEP Coordination Best Practices for High-Rise Buildings",
      excerpt: "Lessons learned from coordinating mechanical, electrical, and plumbing systems across 50+ floor towers.",
      author: "Dr. Rajesh Kumar",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Project Management",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
    },
    {
      id: 5,
      title: "Digital Twins in Facility Management: ROI Analysis",
      excerpt: "Quantifying the operational cost savings and performance improvements from implementing digital twin technology.",
      author: "Fatima Al-Said",
      date: "February 22, 2024",
      readTime: "9 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
    },
    {
      id: 6,
      title: "Structural BIM for Seismic Design: A Technical Guide",
      excerpt: "How advanced structural modeling and analysis workflows improve seismic resilience in high-risk zones.",
      author: "Dr. Rajesh Kumar",
      date: "February 15, 2024",
      readTime: "13 min read",
      category: "BIM",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"
    },
    {
      id: 7,
      title: "Case Study: $250M Mixed-Use Development in Miami",
      excerpt: "How integrated BIM coordination delivered a complex urban project on time and 15% under budget.",
      author: "David Thompson, PE",
      date: "February 8, 2024",
      readTime: "11 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
    },
    {
      id: 8,
      title: "Parametric Design with Dynamo: Advanced Workflows",
      excerpt: "Automating repetitive design tasks and optimizing building systems through computational design.",
      author: "Fatima Al-Said",
      date: "January 30, 2024",
      readTime: "14 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
    },
    {
      id: 9,
      title: "Water Infrastructure Design in the Age of Climate Change",
      excerpt: "Resilience strategies for stormwater management and wastewater treatment in extreme weather events.",
      author: "David Thompson, PE",
      date: "January 25, 2024",
      readTime: "10 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")'
          }} />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <FileText className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider">ARTICLES & INSIGHTS</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Technical Articles & Thought Leadership
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90">
              In-depth explorations of BIM, engineering design, and construction technology from our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-muted sticky top-16 z-40 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === "All" && !searchTerm && (
        <section className="py-20 bg-background">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {articles.filter(a => a.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-semibold mt-4 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">
              {searchTerm ? `Search Results (${filteredArticles.length})` : 
               selectedCategory !== "All" ? `${selectedCategory} Articles` : "All Articles"}
            </h2>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % 9) * 0.1 }}
                  className="bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{article.date}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d4d] to-[#0d3333] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Never Miss an Article
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Subscribe to our newsletter and get the latest engineering insights, BIM tips, and industry trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-md text-gray-900"
            />
            <button className="px-8 py-4 bg-[#a8d96e] text-[#1a4d4d] font-semibold rounded-md hover:bg-[#96c75c] transition-all whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;

