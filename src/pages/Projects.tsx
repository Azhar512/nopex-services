import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Midtown Commercial Complex",
      location: "Florida, USA",
      category: "COMMERCIAL",
      disciplines: "Architecture | Structural | MEP | BIM Coordination",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      description: "A mixed-use development featuring coordinated architectural, structural, and MEP designs delivered using BIM 360 for multi-stakeholder collaboration.",
      scope: "Complete architectural design, structural analysis, MEP coordination, and BIM model development for a 15-story mixed-use complex including retail, office, and residential spaces.",
      outcome: "Reduced field conflicts by 40% through model-based coordination and achieved project delivery 3 weeks ahead of schedule."
    },
    {
      title: "EV Charging Infrastructure Rollout",
      location: "Ontario, Canada",
      category: "ENERGY",
      disciplines: "Energy | Electrical | Civil",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80",
      description: "Comprehensive design and documentation for a regional EV charging network.",
      scope: "Electrical layouts, conduit routing, load calculations, site civil design, and permitting coordination for 22 EV charging stations across Ontario.",
      outcome: "Delivered 22 sites within 6 weeks — fully compliant with provincial energy standards and ready for construction."
    },
    {
      title: "Industrial Plant Expansion",
      location: "Texas, USA",
      category: "INDUSTRIAL",
      disciplines: "Structural | Industrial | Fabrication Drawings",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
      description: "Structural and fabrication detailing for expansion of an existing process facility.",
      scope: "Equipment foundations, steel platforms, piping GA drawings, BOMs, and connection details for a 50,000 sq ft manufacturing expansion.",
      outcome: "Seamless fabrication and zero rework due to 100% coordinated detailing. Client reported 15% cost savings through optimized material use."
    },
    {
      title: "Water Treatment Facility Upgrade",
      location: "Doha, Qatar",
      category: "INFRASTRUCTURE",
      disciplines: "Civil | MEP | BIM",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80",
      description: "BIM-based design and coordination for a municipal water treatment system.",
      scope: "Drainage systems, pumping station design, mechanical layout, instrumentation integration, and full BIM model coordination.",
      outcome: "15% material optimization achieved through early BIM-based quantity analysis. Project completed with zero clashes during construction."
    },
    {
      title: "Healthcare Facility",
      location: "California, USA",
      category: "HEALTHCARE",
      disciplines: "Architecture | MEP | BIM | Sustainability",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
      description: "Full design package for a 120-bed healthcare facility, integrating Revit models across disciplines.",
      scope: "Architectural planning, structural coordination, complete MEP design, fire protection systems, and LEED compliance documentation.",
      outcome: "Achieved LEED Silver certification and met seismic design requirements under CBC. Delivered coordinated LOD 400 BIM models for construction."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
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
          <div className="max-w-[1400px] mx-auto px-6">
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
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">More Projects</h2>
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
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Explore the Impact of Precision.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover how our global engineering and BIM expertise turns design concepts into constructable realities.
          </p>
          <div className="flex gap-4 justify-center">
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

