import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ModernSlavery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">Modern Slavery Statement</h1>
            <p className="text-xl opacity-90 max-w-3xl">Our commitment to preventing modern slavery.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-muted-foreground mb-8">
              <strong>Last updated:</strong> February 12, 2026
            </p>

            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <p className="text-muted-foreground mb-6">
              This statement is made pursuant to Section 54 of the Modern Slavery Act 2015. It sets out the steps that Nopex Services has taken and is continuing to take to ensure that modern slavery or human trafficking is not taking place within our business or supply chain.
            </p>

            <h2 className="text-3xl font-bold mb-6">Our Business and Supply Chains</h2>
            <p className="text-muted-foreground mb-6">
              Nopex Services is an integrated engineering design and BIM consultancy with operations in San Francisco and Lahore. Our supply chains primarily consist of professional service providers, software vendors, and office equipment suppliers. We recognize that our responsibility extends beyond our direct operations to our supply chain partners.
            </p>

            <h2 className="text-3xl font-bold mb-6">Our Policies on Slavery and Human Trafficking</h2>
            <p className="text-muted-foreground mb-6">
              We are committed to ensuring that there is no modern slavery or human trafficking in our supply chains or in any part of our business. Our Anti-Slavery Policy reflects our commitment to acting ethically and with integrity in all our business relationships and to implementing and enforcing effective systems and controls.
            </p>

            <h2 className="text-3xl font-bold mb-6">Due Diligence Processes</h2>
            <p className="text-muted-foreground mb-4">
              As part of our initiative to identify and mitigate risk, we:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Identify and assess potential risk areas in our supply chains.</li>
              <li>Mitigate the risk of slavery and human trafficking occurring in our supply chains.</li>
              <li>Monitor potential risk areas in our supply chains.</li>
              <li>Protect whistleblowers.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Supplier Adherence to Our Values</h2>
            <p className="text-muted-foreground mb-6">
              We have zero tolerance to slavery and human trafficking. To ensure all those in our supply chain and contractors comply with our values, we include specific prohibitions against the use of forced, compulsory, or trafficked labor in our supplier agreements.
            </p>

            <div className="mt-12 p-8 bg-muted rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Questions about our policy?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions regarding our Modern Slavery Statement or ethical practices, please reach out to our legal department.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Legal Department
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ModernSlavery;
