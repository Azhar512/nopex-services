import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projectsData from "@/data/projects.json";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
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
              Our Global Projects
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Explore our portfolio of engineering, BIM, and architectural achievements. Click on any project to view its full details and gallery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Projects Grid */}
      <section className="py-20 bg-muted/30 flex-grow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/projects/${project.id}`} className="block group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-100">
                    <div className="relative h-64 overflow-hidden">
                      {project.mainImage ? (
                        <img
                          src={project.mainImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                          No Image Available
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#1a4d4d] transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        {project.location && (
                          <p className="text-sm text-gray-500 mb-2 flex items-center">
                            <span className="inline-block w-3 h-3 bg-[#aecc53] rounded-full mr-2"></span>
                            {project.location}
                          </p>
                        )}
                      </div>
                      <div className="mt-4 flex items-center text-[#aecc53] font-semibold text-sm">
                        View Details <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover how our global engineering and BIM expertise turns design concepts into constructable realities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Our Team
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
