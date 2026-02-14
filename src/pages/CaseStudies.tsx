import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies | Nopex Services - Proven Engineering Excellence";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Explore our portfolio of successful projects worldwide, demonstrating our expertise in BIM coordination, MEP engineering, and structural design.");
    }
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Midtown Commercial Complex",
      category: "Commercial Development",
      location: "Dubai, UAE",
      description: "A 45-story mixed-use development featuring advanced BIM coordination across all MEP systems, structural engineering, and architectural design. Project delivered 3 months ahead of schedule with zero clashes.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      stats: {
        area: "2.5M sq ft",
        duration: "18 months",
        savings: "25% cost reduction"
      },
      services: ["BIM Coordination", "MEP Engineering", "Structural Design"],
      results: [
        "Zero clash detection issues at construction phase",
        "25% reduction in construction timeline",
        "30% improvement in project coordination"
      ]
    },
    {
      id: 2,
      title: "Metropolitan Transit Hub",
      category: "Infrastructure",
      location: "Singapore",
      description: "Comprehensive civil and structural engineering design for a major transit interchange, integrating rail, bus, and pedestrian systems with intelligent building management.",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      stats: {
        capacity: "50K passengers/day",
        duration: "24 months",
        investment: "$180M"
      },
      services: ["Civil Engineering", "Structural Analysis", "BIM Integration"],
      results: [
        "Seamless integration of multiple transport modes",
        "15% energy efficiency improvement",
        "Award-winning sustainable design"
      ]
    },
    {
      id: 3,
      title: "Industrial Manufacturing Plant",
      category: "Industrial",
      location: "Texas, USA",
      description: "Complete MEP design and coordination for a 500,000 sq ft advanced manufacturing facility with complex HVAC, electrical distribution, and process piping systems.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      stats: {
        area: "500K sq ft",
        systems: "15+ MEP systems",
        efficiency: "40% energy savings"
      },
      services: ["MEP Engineering", "Process Design", "Energy Modeling"],
      results: [
        "LEED Gold certification achieved",
        "40% reduction in energy consumption",
        "Optimized production flow design"
      ]
    },
    {
      id: 4,
      title: "Smart Hospital Complex",
      category: "Healthcare",
      location: "London, UK",
      description: "State-of-the-art healthcare facility with integrated medical equipment planning, advanced HVAC systems for infection control, and comprehensive BIM modeling.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      stats: {
        beds: "450 beds",
        area: "1.2M sq ft",
        duration: "30 months"
      },
      services: ["Healthcare Engineering", "BIM Coordination", "Medical Planning"],
      results: [
        "WHO-compliant infection control systems",
        "20% operational cost reduction",
        "Future-ready digital infrastructure"
      ]
    },
    {
      id: 5,
      title: "Renewable Energy Park",
      category: "Energy",
      location: "California, USA",
      description: "Electrical engineering design and civil layout for a 100MW solar energy facility with battery storage integration and smart grid connectivity.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      stats: {
        capacity: "100MW",
        area: "500 acres",
        homes: "25K homes powered"
      },
      services: ["Electrical Engineering", "Civil Design", "Grid Integration"],
      results: [
        "99.5% system uptime",
        "Carbon neutral operations",
        "Scalable design for future expansion"
      ]
    },
    {
      id: 6,
      title: "Urban Residential Tower",
      category: "Residential",
      location: "Toronto, Canada",
      description: "60-story luxury residential tower featuring advanced structural engineering, sustainable MEP systems, and comprehensive facade engineering.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      stats: {
        floors: "60 floors",
        units: "400 units",
        height: "220m"
      },
      services: ["Structural Engineering", "MEP Design", "Facade Engineering"],
      results: [
        "Seismic-resistant design certified",
        "35% energy efficiency improvement",
        "Award-winning architecture integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-4">
              PROVEN EXCELLENCE
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Explore our portfolio of successfully delivered engineering projects across the globe.
              From complex infrastructure to cutting-edge commercial developments, we deliver precision,
              innovation, and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">150+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">25+</div>
              <div className="text-muted-foreground">Countries</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative overflow-hidden rounded-lg shadow-xl group">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-secondary px-4 py-2 rounded-full">
                      <span className="text-xs font-bold text-primary">{study.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                    {study.location}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {study.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-6 bg-muted rounded-lg">
                    {Object.entries(study.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-xs text-muted-foreground uppercase mb-1">
                          {key}
                        </div>
                        <div className="text-sm font-bold text-foreground">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-foreground uppercase mb-3">
                      Services Provided
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-foreground uppercase mb-3">
                      Key Results
                    </div>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-primary font-semibold text-sm hover:gap-3 gap-2 transition-all group"
                  >
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our engineering expertise can bring your vision to life
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-secondary text-primary font-bold text-sm rounded-md hover:bg-secondary/90 transition-colors gap-2"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;

