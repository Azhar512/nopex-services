import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import servicesData from "@/data/services.json";

// Map discipline slug to title and description
const disciplineInfo: Record<string, { title: string, desc: string }> = {
  "civil": {
    title: "Civil Engineering",
    desc: "Comprehensive site development, stormwater, and public-realm infrastructure engineering."
  },
  "structural": {
    title: "Structural Engineering",
    desc: "Structural building design, steel detailing, and advanced seismic retrofitting."
  },
  "architectural": {
    title: "Architectural Services",
    desc: "Full-service architectural design, interior planning, and sustainable building solutions."
  },
  "mep": {
    title: "MEP Engineering",
    desc: "Mechanical, electrical, plumbing, and fire protection engineering design."
  },
  "industrial": {
    title: "Industrial Engineering",
    desc: "Specialized facility design, process piping, and manufacturing layout engineering."
  },
  "bim": {
    title: "BIM & Revit Modeling",
    desc: "Advanced 3D modeling, scan-to-BIM, and cross-disciplinary clash detection."
  }
};

// Fallback images for subservices
const fallbackImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
];

const DisciplineTemplate = () => {
  const { discipline } = useParams();
  
  if (!discipline || !disciplineInfo[discipline]) {
    return <NotFound />;
  }

  const info = disciplineInfo[discipline];
  const relatedServices = servicesData.filter(s => s.discipline === discipline);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      <Navbar />

      {/* HEADER SECTION */}
      <section className="pt-40 pb-16 px-6 lg:px-12 bg-[#F6F7F9]">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/services" className="inline-flex items-center text-[#006A73] font-medium hover:underline mb-6">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to All Services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-medium text-[#003339] mb-8"
          >
            {info.title}
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl leading-relaxed text-[#333] font-light md:col-span-2"
            >
              {info.desc}
            </motion.p>
          </div>
        </div>
      </section>

      {/* FILTER BAR (Visual Only) */}
      <div className="bg-[#F6F7F9] pb-8 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center gap-4 text-[#006A73] font-medium">
          <span>Select a specialization :</span>
        </div>
      </div>

      {/* IMAGE GRID FOR SUBSERVICES */}
      <section className="pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {relatedServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-[4/3] group overflow-hidden cursor-pointer bg-gray-200"
            >
              <Link to={`/services/${discipline}/${service.slug}`} className="block w-full h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={fallbackImages[index % fallbackImages.length]}
                    alt={service.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="border-l-4 border-[#A8D96E] pl-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-2xl font-medium tracking-wide mb-2">
                      {service.name}
                    </h3>
                    <p className="text-white/80 line-clamp-2 text-sm">
                      {service.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DisciplineTemplate;
