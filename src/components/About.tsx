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
              ONE TEAM, EVERY DISCIPLINE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Most projects need more than one engineering discipline to succeed — and most delays happen when those disciplines aren't coordinated.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nopex Services brings Civil, Structural, Architectural, MEP, and Industrial engineering design together under one team, coordinated through BIM, so your project moves forward without the handoff gaps that cause rework. Stamped and sealed deliverables are provided in partnership with licensed Professional Engineers covering all 50 states.
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
