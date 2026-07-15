import { motion } from "framer-motion";
import { ArrowRight, Settings } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HowWeWork = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1a4d4d] text-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Settings className="w-16 h-16 mx-auto mb-6 text-[#a8d96e]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How We Work
            </h1>
            <p className="text-xl opacity-90">
              A proven process for multidisciplinary engineering coordination.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="grid gap-12">
            {[
              { title: "1. Share Your Project Scope", desc: "Send drawings, site data, or design requirements." },
              { title: "2. Scoping & Proposal", desc: "We assess discipline needs and return a structured quote and timeline." },
              { title: "3. Design & Coordination", desc: "Our discipline teams work in a shared BIM environment to avoid conflicts." },
              { title: "4. Review & Revisions", desc: "Scheduled check-ins and coordinated review across disciplines." },
              { title: "5. Delivery & Support", desc: "Final deliverables in your required format, with post-delivery support." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#a8d96e] text-[#1a4d4d] flex items-center justify-center font-bold text-2xl">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#003339]">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

export default HowWeWork;
