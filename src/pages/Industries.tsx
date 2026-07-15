import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      title: "Commercial",
      description: "Office, retail, and mixed-use projects needing coordinated civil, structural, and MEP design.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      expertise: ["Mixed-Use Developments", "Corporate Offices", "Retail Centers"]
    },
    {
      title: "Healthcare",
      description: "High-density MEP coordination, equipment clearances, code-driven layouts.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      expertise: ["Hospitals", "Medical Clinics", "Research Laboratories"]
    },
    {
      title: "Education",
      description: "Phased renovations and new construction with occupied-site coordination.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      expertise: ["K-12 Schools", "University Campuses", "Student Housing"]
    },
    {
      title: "Industrial & Manufacturing",
      description: "Process piping, equipment layout, structural steel for plants and warehouses.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      expertise: ["Manufacturing Plants", "Distribution Centers", "Warehouses"]
    },
    {
      title: "Government",
      description: "Compliance-heavy documentation, accessibility and security requirements.",
      image: "https://images.unsplash.com/photo-1523292562811-8fa7962ba558?w=800&q=80",
      expertise: ["Civic Buildings", "Military Facilities", "Public Works"]
    },
    {
      title: "Residential",
      description: "Multi-family and single-family site development and structural design.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      expertise: ["Multi-Family Housing", "Condominiums", "Custom Homes"]
    },
    {
      title: "Retail",
      description: "Fast-turnaround prototype rollouts and standardized store design.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      expertise: ["Store Prototypes", "Shopping Malls", "Boutique Retail"]
    },
    {
      title: "Infrastructure",
      description: "Civil and structural coordination for public works and transportation projects.",
      image: "https://images.unsplash.com/photo-1545620165-2407519961da?w=800&q=80",
      expertise: ["Bridges", "Transportation", "Water Systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#1a4d4d] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Industries Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d4d] to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Industries & Sectors We Serve
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              At Nopex Services, we deliver multidisciplinary engineering and BIM solutions across diverse sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, index) => (
        <section key={industry.title} className={index % 2 === 0 ? "py-20 bg-background" : "py-20 bg-muted"}>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 0 ? "" : "lg:order-2"}
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-4xl font-bold mb-6">{industry.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {industry.description}
                </p>

                <h3 className="text-xl font-bold mb-4">Expertise Includes:</h3>
                <ul className="space-y-3">
                  {industry.expertise.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl opacity-90 mb-10">
              Partner with Nopex Services for precision engineering and comprehensive BIM coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-semibold rounded-md hover:bg-muted transition-colors gap-2"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
