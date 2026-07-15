import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const StampingLicensure = () => {
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
            <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-[#a8d96e]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How Stamping & Licensure Works
            </h1>
            <p className="text-xl opacity-90">
              Stamped, Sealed, and Ready to Submit — In Every State
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
              Nopex Services provides engineering design, drafting, and BIM coordination. For projects requiring a stamped and sealed submission, we work with a network of licensed Professional Engineers (PEs) covering all 50 states, matched to the state and discipline your project requires. This partnership model lets us support projects nationally while ensuring every stamped deliverable is signed off by an engineer licensed in the relevant jurisdiction.
            </p>
            <ul className="space-y-4 mb-8 list-disc pl-6">
              <li>
                <strong>No On-Site Field Services:</strong> We do not perform on-site field services (surveying, on-site inspections, laser scan capture) — these are coordinated with the client's local surveyor/inspector or provided by the client directly.
              </li>
              <li>
                <strong>Transparency:</strong> Clients are told upfront which deliverables involve a stamping partner versus in-house design work.
              </li>
              <li>
                <strong>Matched Expertise:</strong> PE partner selection is matched to the specific state and discipline needed for each project.
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

export default StampingLicensure;
