import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AntiHumanTrafficking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">Anti-Human Trafficking Policy</h1>
            <p className="text-xl opacity-90 max-w-3xl">Our commitment to preventing human trafficking.</p>
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

            <h2 className="text-3xl font-bold mb-6">Compliance Statement</h2>
            <p className="text-muted-foreground mb-6">
              Nopex Services is committed to a work environment that is free from human trafficking and forced labor. Our policy is to comply with all applicable laws and regulations relating to human trafficking and modern slavery in every jurisdiction in which we operate.
            </p>

            <h2 className="text-3xl font-bold mb-6">Zero Tolerance Policy</h2>
            <p className="text-muted-foreground mb-6">
              We prohibit the use of forced, bonded (including debt bondage) or indentured labor, involuntary prison labor, slavery, or trafficking of persons. This includes transporting, harboring, recruiting, transferring, or receiving persons by means of threat, force, coercion, abduction, or fraud for labor or services.
            </p>

            <h2 className="text-3xl font-bold mb-6">Employee Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              All employees, contractors, and business partners of Nopex Services are required to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Adhere to the highest ethical standards in all business dealings.</li>
              <li>Report any suspected violations of this policy through established whistleblowing channels.</li>
              <li>Complete mandatory training on identifying and preventing human trafficking.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Recruitment Practices</h2>
            <p className="text-muted-foreground mb-6">
              Our recruitment processes are transparent and conducted in full compliance with local labor laws. We do not charge recruitment fees to candidates and ensure that all employees have written contracts in a language they understand, outlining their rights and responsibilities.
            </p>

            <h2 className="text-3xl font-bold mb-6">Monitoring and Compliance</h2>
            <p className="text-muted-foreground mb-6">
              We conduct regular internal audits and supplier assessments to ensure compliance with this policy. Any found violations will result in immediate corrective action, which may include termination of business relationships or employment.
            </p>

            <div className="mt-12 p-8 bg-muted rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Reporting a Violation</h3>
              <p className="text-muted-foreground mb-6">
                If you become aware of any activity that may violate this policy, please report it immediately. Reports can be made anonymously where permitted by law.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Submit a Report
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default AntiHumanTrafficking;
