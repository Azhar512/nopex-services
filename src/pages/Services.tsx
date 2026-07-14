import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const services = [
    { title: "Civil Engineering", link: "/services/civil/site-civil-engineering", image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=800&q=80" },
    { title: "Structural Engineering", link: "/services/structural/building-design", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
    { title: "Architectural Services", link: "/services/architectural/design-development", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80" },
    { title: "MEP Engineering", link: "/services/mep/mechanical", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80" },
    { title: "Industrial Engineering", link: "/services/industrial/facility-design", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80" },
    { title: "BIM & Revit Modeling", link: "/services/bim/3d-modeling", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" }
  ];

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, services.length));
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      <Navbar />

      {/* ═══════════ HEADER SECTION ═══════════ */}
      <section className="pt-40 pb-16 px-6 lg:px-12 bg-[#F6F7F9]">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-medium text-[#003339] mb-12"
          >
            Five Disciplines.<br/>One Coordinated Team.
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl leading-relaxed text-[#333] font-light md:col-span-2"
            >
              Whatever stage your project is at — site development, structural design, MEP coordination, or industrial facility planning — Nopex Services brings the right discipline to the table, coordinated with everyone else already on your project.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════ FILTER BAR (Visual Only) ═══════════ */}
      <div className="bg-[#F6F7F9] pb-8 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center gap-4 text-[#006A73] font-medium cursor-pointer">
          <span>Select a service :</span>
          <span className="flex items-center text-lg">Service <ArrowRight className="w-4 h-4 ml-2 rotate-90" /></span>
        </div>
      </div>

      {/* ═══════════ IMAGE GRID ═══════════ */}
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {services.slice(0, visibleCount).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-[4/3] group overflow-hidden cursor-pointer bg-gray-200"
            >
              <Link to={service.link} className="block w-full h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Dark Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                </div>

                {/* Text Overlay - Bottom Left */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="border-l-4 border-[#A8D96E] pl-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-2xl font-medium tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ SHOW MORE BUTTON ═══════════ */}
      {visibleCount < services.length && (
        <section className="py-20 flex justify-center bg-white">
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-[#0d2e2e] text-white font-bold text-sm tracking-widest hover:bg-[#1a4d4d] transition-colors uppercase cursor-pointer"
          >
            Show More
          </button>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Services;
