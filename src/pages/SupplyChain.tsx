import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SupplyChain = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">Our Supply Chain</h1>
            <p className="text-xl opacity-90 max-w-3xl">Sustainable and ethical supply chain practices.</p>
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
            <h2 className="text-3xl font-bold mb-6">Our Procurement Philosophy</h2>
            <p className="text-muted-foreground mb-6">
              At Nopex Services, we view our supply chain as an extension of our own commitment to engineering excellence. We partner with vendors and service providers who share our values of integrity, sustainability, and technical innovation.
            </p>

            <h2 className="text-3xl font-bold mb-6">Ethical Sourcing</h2>
            <p className="text-muted-foreground mb-6">
              We are committed to ethical sourcing practices across our global operations. This means ensuring that the products and services we procure are produced under fair labor conditions and that our suppliers adhere to strict environmental standards.
            </p>

            <h2 className="text-3xl font-bold mb-6">Supplier Qualification</h2>
            <p className="text-muted-foreground mb-4">
              Our vendor selection process is rigorous and transparent. We evaluate potential partners based on:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Technical capability and track record in the AEC industry.</li>
              <li>Financial stability and reliability of delivery.</li>
              <li>Commitment to diversity, equity, and inclusion in their own workforce.</li>
              <li>Adherence to our Supplier Code of Conduct.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Sustainable Procurement</h2>
            <p className="text-muted-foreground mb-6">
              We prioritize suppliers who demonstrate a commitment to reducing their carbon footprint and waste. This includes selecting energy-efficient hardware, using recycled materials in our administrative operations, and favoring cloud-based solutions that optimize resource usage.
            </p>

            <div className="mt-12 p-8 bg-muted rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in becoming a vendor?</h3>
              <p className="text-muted-foreground mb-6">
                We are always looking for innovative partners to strengthen our delivery capabilities. If your firm aligns with our values, we'd like to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Register as a Supplier
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default SupplyChain;
