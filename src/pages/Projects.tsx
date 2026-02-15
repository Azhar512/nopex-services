import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Silicon Valley Tech Hub Integration",
      location: "California, USA",
      category: "COMMERCIAL",
      disciplines: "BIM Coordination | MEP Design | Structural Support",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      description: "Comprehensive BIM management for a high-density technology campus, focusing on complex MEP routing and inter-disciplinary clash resolution.",
      scope: "Coordination of structural, architectural, and MEP models to LOD 400. Managed the Common Data Environment (CDE) for over 15 distinct subcontractors.",
      outcome: "Resolved over 1,200 unique field clashes during the design phase, resulting in a zero-change-order construction process for the primary MEP systems."
    },
    {
      title: "Renewable Energy Distribution Network",
      location: "Punjab, Pakistan",
      category: "INFRASTRUCTURE",
      disciplines: "Civil Engineering | Electrical Design | Site Planning",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80",
      description: "Engineering design for a regional solar energy distribution network, including site civil works and high-voltage electrical layouts.",
      scope: "Civil site preparation, drainage design, structural foundations for solar arrays, and complete electrical schematic development.",
      outcome: "Optimized site layout to increase energy yield by 8% while reducing grading costs through advanced terrain analysis."
    },
    {
      title: "Precision Industrial Manufacturing Expansion",
      location: "Texas, USA",
      category: "INDUSTRIAL",
      disciplines: "Structural Detailing | Fabrication Drawings | Industrial Layout",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
      description: "Development of fabrication-ready documentation for a complex manufacturing plant expansion, integrating pre-engineered equipment into existing structural frames.",
      scope: "Structural steel detailing, equipment support design, and 3D modeling of process piping for a 75,000 sq ft facility.",
      outcome: "Delivered 100% accurate shop drawings for over 500 tons of structural steel, enabling a record-setting fabrication and erection schedule."
    },
    {
      title: "Urban Water Resource Management System",
      location: "Lahore, Pakistan",
      category: "UTILITIES",
      disciplines: "Civil Engineering | Drainage Design | BIM",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80",
      description: "Digital engineering and design for an integrated urban water management system catering to a rapidly expanding residential sector.",
      scope: "Hydraulic modeling, stormwater drainage network design, and 3D utility coordination using Civil 3D.",
      outcome: "Achieved a 20% reduction in pipe conflicts during the design phase, significantly reducing potential construction delays in high-density urban areas."
    },
    {
      title: "Specialized Healthcare Center MEP Upgrade",
      location: "Northern California, USA",
      category: "HEALTHCARE",
      disciplines: "MEP Engineering | Hospital Systems | Revit Modeling",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
      description: "Highly coordinated MEP design for a critical care facility upgrade, focusing on life-safety systems and medical gas distribution.",
      scope: "Re-design of HVAC and electrical systems within an operational environment. Created detailed Revit models for point-cloud-verified existing conditions.",
      outcome: "Successfully integrated complex new systems into a heritage edificio with zero disruption to active critical services."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Delivering Global Engineering Solutions — One Project at a Time
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Our projects reflect our technical depth, interdisciplinary collaboration, and commitment to excellence. Each design tells a story of innovation, coordination, and precision — built on data-driven modeling, clear documentation, and a deep understanding of construction realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {projects.map((project, index) => (
        <section key={project.title} className={index % 2 === 0 ? "py-20 bg-background" : "py-20 bg-muted"}>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 0 ? "" : "lg:order-2"}
              >
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="text-xs font-bold text-[#a8d96e] mb-2 tracking-wider">
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-80">{project.location}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm font-semibold text-primary mb-4">
                  {project.disciplines}
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">Scope:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.scope}
                  </p>
                </div>

                <div className="p-6 bg-primary/10 border-l-4 border-primary rounded">
                  <h4 className="text-lg font-bold mb-2">Outcome:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Projects Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-bold mb-12 text-center">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Highway Interchange Design", location: "Arizona, USA", category: "Transportation" },
              { title: "Solar Farm Development", location: "Nevada, USA", category: "Energy" },
              { title: "Corporate Office Tower", location: "Dubai, UAE", category: "Commercial" },
              { title: "Airport Terminal Expansion", location: "Singapore", category: "Infrastructure" },
              { title: "Manufacturing Facility", location: "Mexico", category: "Industrial" },
              { title: "University Campus Development", location: "UK", category: "Education" }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${1541888946425 + index * 1000}-d81bb19240f5?w=600&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-xs font-bold text-[#a8d96e] mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-80">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Explore the Impact of Precision.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover how our global engineering and BIM expertise turns design concepts into constructable realities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all"
            >
              Contact Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all"
            >
              Submit Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

