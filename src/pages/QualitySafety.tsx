import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const QualitySafety = () => {
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
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-[#a8d96e]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Quality & Safety Commitment
            </h1>
            <p className="text-xl opacity-90">
              Rigorous QA/QC processes and safety standards driving our engineering excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <p className="text-xl leading-relaxed mb-8">
              At Nopex Services, quality and safety are integrated into every phase of our engineering design process. We adhere strictly to national and local codes, ensuring that our multidisciplinary designs are not only innovative but fundamentally safe and constructible.
            </p>
            <h3 className="text-2xl font-bold text-[#003339] mt-10 mb-4">QA/QC Processes</h3>
            <ul className="space-y-4 mb-8 list-disc pl-6">
              <li>
                <strong>Cross-Disciplinary Reviews:</strong> Structured review milestones where all disciplines (Civil, Structural, Architectural, MEP, Industrial) cross-check models in a shared BIM environment.
              </li>
              <li>
                <strong>Code Compliance:</strong> Continuous evaluation against building codes and industry standards during the design phase.
              </li>
              <li>
                <strong>Clash Detection:</strong> Automated and manual clash detection protocols to identify and resolve conflicts before they reach the field.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-[#003339] mt-10 mb-4">Safety Standards</h3>
            <ul className="space-y-4 mb-8 list-disc pl-6">
              <li>
                <strong>Design for Safety:</strong> Engineering solutions that prioritize the safety of construction workers and end-users.
              </li>
              <li>
                <strong>Regulatory Alignment:</strong> Designs that meet or exceed OSHA and local safety regulations.
              </li>
            </ul>
          </motion.div>
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

export default QualitySafety;
