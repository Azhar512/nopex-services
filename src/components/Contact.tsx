import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact-us" className="py-20 bg-muted" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Let's Design Something Extraordinary Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have an engineering or design project in mind? Get in touch with our global team to discuss how we can deliver integrated, BIM-enabled design solutions that ensure your project's success from concept to completion.
            </p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all group">
              Contact us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
