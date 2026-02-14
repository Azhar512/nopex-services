import { motion } from "framer-motion";
import { BookOpen, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Publications = () => {
  const publications = [
    {
      title: "BIM Implementation Guide for Engineering Firms",
      type: "Whitepaper",
      pages: "45 pages",
      year: "2024",
      description: "A comprehensive guide to implementing BIM workflows, selecting software, training teams, and measuring ROI across multidisciplinary engineering firms.",
      downloads: "2,500+",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80"
    },
    {
      title: "Sustainable Design Handbook: Net-Zero Engineering",
      type: "Technical Manual",
      pages: "120 pages",
      year: "2024",
      description: "Engineering strategies for achieving net-zero carbon buildings including energy modeling, renewable integration, and embodied carbon reduction.",
      downloads: "1,800+",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80"
    },
    {
      title: "MEP Coordination Best Practices",
      type: "Industry Report",
      pages: "35 pages",
      year: "2023",
      description: "Proven methodologies for clash detection, coordination meetings, and BIM-enabled MEP design across complex building projects.",
      downloads: "3,200+",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
    },
    {
      title: "Digital Twin Technology in Facility Management",
      type: "Case Study Collection",
      pages: "28 pages",
      year: "2023",
      description: "Real-world implementations of digital twin technology demonstrating operational cost savings and performance improvements.",
      downloads: "1,500+",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
    },
    {
      title: "Structural BIM for High-Rise Buildings",
      type: "Technical Guide",
      pages: "65 pages",
      year: "2023",
      description: "Advanced structural modeling techniques, analysis workflows, and coordination strategies for tall building projects.",
      downloads: "2,100+",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"
    },
    {
      title: "Global AEC Industry Trends 2024",
      type: "Annual Report",
      pages: "85 pages",
      year: "2024",
      description: "Comprehensive analysis of market trends, technology adoption, and growth opportunities across global engineering markets.",
      downloads: "4,200+",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider">PUBLICATIONS & RESOURCES</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Whitepapers, Guides & Industry Reports
            </h1>
            <p className="text-2xl leading-relaxed font-light opacity-90">
              Download comprehensive resources to advance your engineering and BIM expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
                      {pub.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-4 text-xs mb-2">
                      <span>{pub.pages}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {pub.downloads}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pub.description}
                  </p>
                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Custom Research or Training Materials?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Our team can develop tailored whitepapers, training guides, and technical documentation for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;

