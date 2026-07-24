import { useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Handshake, Globe2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Clients = () => {
  useEffect(() => {
    document.title = "Our Clients | Nopex Services - Trusted by Global Leaders";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Discover the world-class organizations that trust Nopex Services to deliver precision engineering and BIM coordination.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#00353e] text-white overflow-hidden mt-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-1 bg-[#aecc53] mb-8" />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
              Trusted by Global Industry Leaders.
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-light">
              We partner with visionary organizations across the globe, delivering engineering excellence that shapes the future of the built environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">OUR PARTNERSHIP APPROACH</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-[#00353e]">Why Clients Choose Nopex Services</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our clients demand precision, reliability, and innovation. We deliver by integrating cutting-edge technology with decades of multi-disciplinary engineering expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-background rounded-lg shadow-lg"
            >
              <Globe2 className="w-12 h-12 text-[#aecc53] mb-6" />
              <h4 className="text-xl font-bold mb-4 text-[#00353e]">Global Reach, Local Expertise</h4>
              <p className="text-muted-foreground leading-relaxed">
                With a global footprint and a deep understanding of local regulations, we seamlessly bridge international scale with regional compliance and standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-background rounded-lg shadow-lg"
            >
              <Handshake className="w-12 h-12 text-[#aecc53] mb-6" />
              <h4 className="text-xl font-bold mb-4 text-[#00353e]">Collaborative Synergy</h4>
              <p className="text-muted-foreground leading-relaxed">
                We believe in true partnership. By working closely with our clients’ teams, we ensure that every design aligns perfectly with their strategic vision and project goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-background rounded-lg shadow-lg"
            >
              <Building2 className="w-12 h-12 text-[#aecc53] mb-6" />
              <h4 className="text-xl font-bold mb-4 text-[#00353e]">Proven Excellence</h4>
              <p className="text-muted-foreground leading-relaxed">
                From soaring skyscrapers to intricate industrial facilities, our track record of successful deliveries speaks to our uncompromising commitment to quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#00353e]">Industries We Empower</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Commercial Real Estate", "Healthcare Facilities", "Infrastructure & Transportation", "Data Centers", "Industrial & Manufacturing", "Energy & Power", "Education & Campuses", "Residential Developments"].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-muted rounded-lg font-semibold text-foreground hover:bg-[#aecc53] hover:text-[#00353e] transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="py-20 bg-[#00353e] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#aecc53]">Client Success Stories</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our work speaks for itself. Here is how we've helped our clients achieve their engineering and construction goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
            >
              <p className="text-lg italic mb-6 text-white/90">
                "Nopex Services completely transformed our BIM coordination process. Their ability to integrate seamlessly with our internal teams and identify critical clashes before construction saved us millions on our latest commercial development."
              </p>
              <div>
                <p className="font-bold text-[#aecc53]">Director of Engineering</p>
                <p className="text-sm text-white/70">Leading Global Construction Firm</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
            >
              <p className="text-lg italic mb-6 text-white/90">
                "The structural integrity and innovative MEP design provided by Nopex Services for our new data center were beyond impressive. They delivered on time, under budget, and with unparalleled precision."
              </p>
              <div>
                <p className="font-bold text-[#aecc53]">VP of Infrastructure</p>
                <p className="text-sm text-white/70">International Technology Provider</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#00353e]">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the ranks of industry leaders who trust Nopex Services to bring their most complex engineering visions to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00353e] text-white font-semibold rounded-md hover:bg-[#aecc53] hover:text-[#00353e] transition-all"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00353e] text-[#00353e] font-semibold rounded-md hover:bg-gray-50 transition-all"
            >
              View Our Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
