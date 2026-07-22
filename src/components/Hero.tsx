import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] max-h-[900px] flex items-center overflow-hidden mt-14">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Engineering Excellence"
          className="w-full h-full object-cover"
        />
        {/* Stark dark overlay for corporate feel */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="w-16 h-1 bg-white mb-8" />
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Engineering a better<br />world, together.
          </h1>
          <p className="text-lg sm:text-2xl text-white/90 mb-10 max-w-2xl font-light">
            Integrated engineering, design, and BIM solutions delivering certainty and sustainability across the globe.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#000000] font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              Discover Our Capabilities
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-[#000000] transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Trust / Stats Bar positioned at the bottom of the hero */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#00353e] border-t border-white/10 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="grid grid-cols-4 gap-8 divide-x divide-white/20">
            {[
              { label: "Years of Excellence", value: "16+" },
              { label: "Projects Delivered", value: "760+" },
              { label: "States Covered", value: "50" },
              { label: "Core Disciplines", value: "5" },
            ].map((stat, index) => (
              <div key={index} className={`flex flex-col items-center justify-center ${index === 0 ? "pl-0" : ""}`}>
                <div className="text-3xl font-bold text-[#aecc53] mb-1">{stat.value}</div>
                <div className="text-xs text-white font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
