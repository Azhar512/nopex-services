import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const services = [
    { title: "Construction Management", link: "/services/program-management", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
    { title: "Civil Engineering", link: "/services/civil", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f4?w=800&q=80" },
    { title: "Environmental Services", link: "/services/environment", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80" },
    { title: "IT and Cybersecurity", link: "/bim-digital", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
    { title: "Planning and Consulting", link: "/services/program-management", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
    { title: "Architecture", link: "/services/architecture", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80" },
    { title: "Finance", link: "/services/program-management", image: "https://images.unsplash.com/photo-1554224155-98406858d056?w=800&q=80" },
    { title: "Cost Management", link: "/services/program-management", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&q=80" },
    { title: "Transportation", link: "/services/transportation", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" },
    { title: "Water", link: "/services/water", image: "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?w=800&q=80" },
    { title: "Energy", link: "/services/energy", image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80" },
    { title: "Industrial", link: "/services/industrial", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80" }
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
            Services
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl leading-relaxed text-[#333] font-light"
            >
              Nopex Services partners with clients to take on their most complex challenges and pioneer innovative solutions that make a positive, lasting impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base leading-relaxed text-[#666]"
            >
              Across the globe, our teams push the limits of what’s possible and build legacies for generations to come – the world’s longest cable-stayed bridge, record-breaking sports events, the largest greenfield port development mega project, life-sustaining disaster recovery programs, and the tallest tower in the Western Hemisphere.
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
