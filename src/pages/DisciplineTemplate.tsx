import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import servicesData from "@/data/services.json";

// Map discipline slug to title and description
const disciplineInfo: Record<string, { title: string, desc: string }> = {
  "civil": {
    title: "Civil Engineering",
    desc: "Comprehensive site development, stormwater, and public-realm infrastructure engineering. We deliver scalable and sustainable designs for developments of all sizes."
  },
  "structural": {
    title: "Structural Engineering",
    desc: "Innovative structural building design, steel detailing, and advanced seismic retrofitting tailored to architectural vision and safety standards."
  },
  "architectural": {
    title: "Architectural Services",
    desc: "Full-service architectural design, interior planning, and sustainable building solutions focused on aesthetics, function, and performance."
  },
  "mep": {
    title: "MEP Engineering",
    desc: "Highly coordinated Mechanical, Electrical, Plumbing, and Fire Protection engineering designs that optimize energy efficiency and building operations."
  },
  "bim": {
    title: "BIM & Revit Modeling",
    desc: "Advanced 3D modeling, scan-to-BIM, and cross-disciplinary clash detection ensuring seamless construction execution and clash-free designs."
  }
};

// Modern, rounded fallback images for subservices
const getCardImage = (discipline: string, index: number) => {
  const images: Record<string, string[]> = {
    civil: [
      "https://images.unsplash.com/photo-1541888086925-ebbc6eb22205?w=800&q=80",
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
    ],
    structural: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356f27?w=800&q=80"
    ],
    mep: [
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
    ],
    architectural: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    ],
    bim: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356f27?w=800&q=80"
    ]
  };

  const pool = images[discipline] || images.civil;
  return pool[index % pool.length];
};

const DisciplineTemplate = () => {
  const { discipline } = useParams();
  
  if (!discipline || !disciplineInfo[discipline]) {
    return <NotFound />;
  }

  const info = disciplineInfo[discipline];
  const relatedServices = servicesData.filter(s => s.discipline === discipline);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* ═══════════ HEADER SECTION ═══════════ */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8 font-medium">
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{info.title}</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {info.title}
          </motion.h1>

          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {info.desc}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICE CARDS GRID ═══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link 
                  to={`/services/${discipline}/${service.slug}`} 
                  className="group block h-full bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 m-2 rounded-[1.5rem]">
                    <img
                      src={getCardImage(discipline, index)}
                      alt={service.name}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                      {service.summary}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold mt-auto group-hover:translate-x-2 transition-transform">
                      Explore Service
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DisciplineTemplate;
