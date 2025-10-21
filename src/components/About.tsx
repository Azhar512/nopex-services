import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about-us"
      className="py-20 bg-background"
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">
              WHO WE ARE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Nopex Services is a multidisciplinary engineering design and drafting firm committed to excellence in every line drawn and every structure envisioned.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We provide Civil, Structural, Architectural, MEP, and Industrial design services that support contractors, builders, and developers across the globe. Our focus is on precision, innovation, and constructability — ensuring that each design we deliver is compliant, coordinated, and ready for execution.
            </p>
            <Link to="/about" className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all group">
              About us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
