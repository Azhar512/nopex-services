import { useParams, Navigate, Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Find the matching service from the JSON data
  const service = servicesData.find(
    (s) => s.slug === subservice && s.discipline === discipline
  );

  useEffect(() => {
    if (service) {
      document.title = `${service.name} | Nopex Services`;
    }
  }, [service]);

  // If service not found, show NotFound or redirect
  if (!service) {
    return <Navigate to="/not-found" replace />;
  }

  // Helper to format discipline name for display
  const displayDiscipline = discipline ? discipline.charAt(0).toUpperCase() + discipline.slice(1) : "";

  // Assign a placeholder background image based on discipline
  const getBackgroundImage = (disc: string) => {
    switch (disc) {
      case "civil": return "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1600&q=80";
      case "structural": return "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80";
      case "architectural": return "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80";
      case "mep": return "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1600&q=80";
      case "industrial": return "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80";
      case "bim": return "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80";
      default: return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground" ref={containerRef}>
        <Navbar />

        {/* ═══════════ HERO ═══════════ */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <img
                    src={getBackgroundImage(service.discipline)}
                    alt={service.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </motion.div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl pt-20"
                >
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                        <span className="text-sm font-semibold tracking-wider uppercase">
                            Services / {displayDiscipline}
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {service.name}
                    </h1>
                    <p className="text-lg sm:text-xl text-white/90 font-light max-w-2xl leading-relaxed">
                        {service.summary}
                    </p>
                </motion.div>
            </div>
        </section>

        {/* ═══════════ OVERVIEW ═══════════ */}
        <section className="py-24 bg-background">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
                            Service Overview
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {service.summary} Nopex Services delivers coordinated, precise engineering solutions tailored to your project requirements.
                        </p>
                        
                        <h3 className="text-2xl font-bold mb-6 text-foreground">What's Included</h3>
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {service.deliverables.map((del, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-muted rounded-lg border border-border/50">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="font-medium text-foreground">{del}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mb-6 text-foreground">Sectors Commonly Served</h3>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {service.sectors.map((sector) => (
                                <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold capitalize">
                                    {sector}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-lg overflow-hidden relative z-10">
                            <img
                                src={getBackgroundImage(service.discipline)}
                                alt={service.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-2/3 h-1/2 bg-muted -z-0 rounded-lg" />
                        <div className="absolute -top-6 -right-6 w-2/3 h-1/2 border-2 border-primary/20 -z-0 rounded-lg" />
                    </div>
                </div>
            </div>
        </section>

        {/* ═══════════ FAQ & CTA ═══════════ */}
        <section className="py-24 bg-muted/30 border-y border-border/50">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {service.faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-lg font-medium">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="bg-[#1a4d4d] text-white p-10 rounded-2xl flex flex-col justify-center h-full relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
                            <p className="text-white/80 mb-8 text-lg">
                                Send us your project scope or drawings, and our engineering team will provide a structured quote and timeline.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-[#a8d96e] text-[#1a4d4d] font-bold rounded-lg hover:bg-[#96c75c] transition-all"
                            >
                                Send Us Your Project Scope
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                        
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
  );
};

export default ServiceDetailTemplate;
