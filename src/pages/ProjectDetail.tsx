import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projectsData from "@/data/projects.json";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    if (!project) {
      navigate("/projects");
      return;
    }
    
    document.title = `${project.title} | Nopex Services Projects`;
    window.scrollTo(0, 0);
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-[#00353e] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-white/70 hover:text-[#aecc53] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            {project.location && (
              <p className="text-lg text-[#aecc53] font-medium flex items-center opacity-90">
                <span className="inline-block w-4 h-4 bg-[#aecc53] rounded-full mr-3"></span>
                {project.location}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 flex-grow bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          
          {/* Main Image */}
          {project.mainImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-12 cursor-pointer group relative"
              onClick={() => setSelectedImage(project.mainImage)}
            >
              <img 
                src={project.mainImage} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wide transition-opacity bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">View Full Size</span>
              </div>
            </motion.div>
          )}

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              {project.description.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
              ))}
              {!project.description && (
                <p className="italic text-gray-500">More details coming soon.</p>
              )}
            </div>
          </div>

          {/* Gallery */}
          {project.images && project.images.length > 1 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative aspect-video rounded-xl overflow-hidden shadow-md group cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} - Image ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wide transition-opacity bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">View Full Size</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 text-white hover:text-red-500 transition-colors bg-black/50 hover:bg-black/80 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
