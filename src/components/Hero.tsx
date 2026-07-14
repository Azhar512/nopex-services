import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center overflow-hidden mt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Digital Innovation"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-overlay)" }}
          />
        </div>

        {/* Content - Left Aligned */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="text-xs font-bold text-[#a8d96e] uppercase tracking-wider mb-4">
              ENGINEERING EXCELLENCE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Multi-Disciplinary Engineering, Delivered With Precision.
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-xl">
              Nopex Services provides integrated Civil, Structural, Architectural, MEP, and Industrial engineering — backed by BIM-driven coordination that keeps every discipline aligned from design through construction.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#a8d96e] text-[#1a4d4d] font-semibold text-sm rounded-md hover:bg-[#96c75c] transition-colors gap-2"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white/30 text-white font-semibold text-sm rounded-md hover:bg-white/10 transition-colors gap-2"
              >
                Talk to Our Engineering Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust / Stats Bar */}
      <div className="bg-[#1a4d4d] text-white border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-6 lg:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-x divide-white/20">
            {[
              { label: "Years in Business", value: "16+" },
              { label: "Projects Delivered", value: "760+" },
              { label: "States Covered via PE Network", value: "50" },
              { label: "Integrated Disciplines", value: "5" },
            ].map((stat, index) => (
              <div key={index} className={`flex flex-col items-center justify-center ${index === 0 ? "pl-0" : ""}`}>
                <div className="text-3xl sm:text-4xl font-bold text-[#a8d96e] mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium text-center uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
