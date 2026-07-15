import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import servicesData from "@/data/services.json";

const ServiceDetailTemplate = () => {
  const { discipline, subservice } = useParams();

  const service = servicesData.find(
    (s) => s.slug === subservice && s.discipline === discipline
  );

  useEffect(() => {
    if (service) {
      document.title = `${service.name} | Nopex Services`;
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/not-found" replace />;
  }

  const displayDiscipline = discipline ? discipline.charAt(0).toUpperCase() + discipline.slice(1) : "";

  // Dedicated background images based on discipline with modern unsplash architecture/engineering photos
  const getBackgroundImage = (disc: string) => {
    switch (disc) {
      case "civil": return "https://images.unsplash.com/photo-1541888086925-ebbc6eb22205?w=1600&q=80"; // site development
      case "structural": return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"; // modern steel/glass
      case "architectural": return "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80"; // interior architecture
      case "mep": return "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80"; // electrical/mep
      case "industrial": return "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"; // industrial plant
      case "bim": return "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"; // 3D structural
      default: return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80";
    }
  };

  // Specific content image
  const getContentImage = (disc: string) => {
    switch (disc) {
      case "civil": return "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80";
      case "structural": return "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80";
      case "architectural": return "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80";
      case "mep": return "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80";
      case "industrial": return "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80";
      case "bim": return "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80";
      default: return "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80";
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* ═══════════ NEW ROUNDED HERO ═══════════ */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8 font-medium">
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/services/${discipline}`} className="hover:text-primary transition-colors">{displayDiscipline}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{service.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
                {displayDiscipline} Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                {service.name}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                {service.summary}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <img
                  src={getBackgroundImage(service.discipline)}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rounded blob behind image */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -z-10 transform rotate-3" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ OVERVIEW & DELIVERABLES ═══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Service Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                {service.description || `At Nopex Services, our ${service.name} solutions are designed to deliver unparalleled accuracy and efficiency. Leveraging modern technology and industry best practices, we ensure that every aspect aligns seamlessly with your overall project goals.`}
              </p>

              <h3 className="text-2xl font-bold mb-6 text-gray-900">What's Included</h3>
              <div className="grid sm:grid-cols-1 gap-4 mb-10">
                {(service.deliverables || []).map((del: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-gray-800">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-12">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                <img
                  src={getContentImage(service.discipline)}
                  alt="Process"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Sectors We Serve</h3>
                <div className="flex flex-wrap gap-3">
                  {(service.sectors || []).map((sector: string) => (
                    <span key={sector} className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ SECTION ═══════════ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">Common questions about our {service.name} services.</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
              {service.faqs.map((faq: {q: string, a: string}, index: number) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0 border-gray-100">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-primary py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* ═══════════ CTA SECTION ═══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a4d4d] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                Send us your project scope or drawings, and our engineering team will provide a structured quote and timeline tailored to your requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-[#a8d96e] text-[#1a4d4d] font-bold text-lg rounded-full shadow-xl hover:bg-white hover:scale-105 transition-all duration-300"
              >
                Discuss Your Requirements
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#a8d96e]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailTemplate;
