import { motion } from "framer-motion";
import { ArrowRight, Building2, Ruler, Construction, Zap, Factory, FileText, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Architecture & Design",
      description: "Creative, practical, and buildable architectural solutions that combine aesthetics with performance.",
      link: "/services/architecture",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Civil Engineering",
      description: "Site grading, stormwater management, and utility design that form the foundation of success.",
      link: "/services/civil",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80",
      icon: <Ruler className="w-6 h-6" />
    },
    {
      title: "Structural Engineering",
      description: "Integrity and efficiency in steel and concrete design for modern infrastructure.",
      link: "/services/structural",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
      icon: <Construction className="w-6 h-6" />
    },
    {
      title: "MEP Engineering",
      description: "Coordinated mechanical, electrical, and plumbing systems for building performance and comfort.",
      link: "/services/mep",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Industrial & Fabrication",
      description: "Manufacturing precision, process layouts, and 3D fabrication detailing.",
      link: "/services/industrial",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Shop Drawings",
      description: "Fabrication-ready millwork, stone, tile, and metal drawings for precise installation.",
      link: "/shop-drawings",
      image: "https://images.unsplash.com/photo-1660662254922-383742b78122?w=1200&q=80", // Updated image
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "BIM & Digital Engineering",
      description: "Eliminating conflict and delivering certainty through intelligent 3D modeling and coordination.",
      link: "/bim-digital",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      icon: <Monitor className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-32 pb-24 text-white overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Corporate Engineering Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d2e2e]/80" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/95 leading-relaxed">
              We deliver integrated engineering, design, and digital solutions that tackle the world's most complex challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SERVICES GRID ═══════════ */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden border border-border/50 hover:-translate-y-1"
              >
                <Link to={service.link} className="block h-full flex flex-col">
                  {/* Image Area */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-4 left-4 p-2 bg-white/10 backdrop-blur-md rounded-md text-white border border-white/20">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm uppercase tracking-wider mt-auto group/link">
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Connect with our global team of experts to discuss how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all text-lg"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
