import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WithoutLimits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Without Limits
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Pushing the boundaries of engineering excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                'Without Limits' isn't just a tagline; it's the operational standard at Nopex Services. It represents our commitment to solving the most complex engineering challenges through a culture of unconstrained innovation and digital transformation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By removing the traditional silos between architecture, engineering, and construction, we enable a seamless flow of data and creativity that pushes the boundaries of what's possible in the built environment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-primary/5 p-12 rounded-lg border-2 border-primary/10 shadow-inner"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Core Pillars</h3>
              <ul className="space-y-4">
                {[
                  "Unconstrained Innovation",
                  "Radical Transparency",
                  "Data-Driven Decision Making",
                  "Interdisciplinary Integration",
                  "Zero-Tolerance for Mediocrity"
                ].map((pillar) => (
                  <li key={pillar} className="flex items-center gap-3 text-lg font-semibold">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Excellence",
                description: "We don't settle for 'good enough'. We pursue technical perfection in every model, every drawing, and every calculation."
              },
              {
                title: "Curiosity",
                description: "The field of digital engineering is constantly evolving. We foster a culture of lifelong learning and technological exploration."
              },
              {
                title: "Resilience",
                description: "We build structures and systems designed to withstand the tests of time, nature, and the changing needs of society."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center p-12 bg-[#1a4d4d] text-white rounded-lg shadow-2xl">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Ready to work without limits?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Bring your most complex challenges to us. We have the technical depth and the creative vision to turn them into reality.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition-all text-lg"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WithoutLimits;
