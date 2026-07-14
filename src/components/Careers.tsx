import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" className="py-20 bg-primary text-primary-foreground" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-4">
              CAREERS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Join Our Global Engineering Team
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              A collaborative and innovative workplace is core to our vision — designing a better world through precision engineering and digital integration. Be part of a multidisciplinary team shaping the future of infrastructure and building design.
            </p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-secondary text-secondary font-semibold text-sm hover:bg-secondary hover:text-secondary-foreground transition-all group">
              Explore career opportunities
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
