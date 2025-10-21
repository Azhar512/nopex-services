import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RecruitmentPrivacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Recruitment Privacy Notice</h1>
            <p className="text-xl opacity-90 max-w-3xl">How we handle your personal information during recruitment.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
          <p className="text-muted-foreground mb-8">Privacy notice information is under development.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">Contact Us</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default RecruitmentPrivacy;
