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
      <section className="relative h-[600px] flex items-center overflow-hidden mt-16">
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
            <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-4">
              ENGINEERING EXCELLENCE
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Designing a Better World
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Nopex Services delivers integrated engineering design, drafting, and project documentation that shape resilient, efficient, and sustainable environments.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-secondary font-semibold text-sm hover:gap-3 gap-2 transition-all group"
            >
              Find out more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Tab Navigation */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex overflow-x-auto">
            {[
              { label: "OUR SERVICES", link: "/services" },
              { label: "MARKETS", link: "/markets" },
              { label: "CASE STUDIES", link: "/case-studies" },
              { label: "BIM & DIGITAL", link: "/bim-digital" },
              { label: "CONTACT US", link: "/contact" },
            ].map((tab, index) => (
              <Link
                key={tab.label}
                to={tab.link}
                className={`px-6 py-4 text-xs font-bold whitespace-nowrap border-b-2 transition-colors ${
                  index === 0
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
