import { useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle, Sun, Droplet, Wind, Building2, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sustainability = () => {
  useEffect(() => {
    document.title = "Sustainability | Nopex Services - Engineering for a Greener Future";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Nopex Services is committed to designing buildings and infrastructure that minimize environmental impact and create healthier communities.");
    }
  }, []);

  const commitments = [
    {
      icon: Leaf,
      title: "Sustainable Design Practices",
      description: "We integrate energy efficiency, material optimization, and lifecycle analysis into every project we deliver.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Recycle,
      title: "Circular Economy Principles",
      description: "Designing for adaptability, reuse, and minimal waste — reducing environmental footprint across project lifecycles.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Sun,
      title: "Renewable Energy Integration",
      description: "Incorporating solar, wind, and other renewable systems into building and infrastructure designs.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      description: "Rainwater harvesting, efficient plumbing systems, and sustainable stormwater management solutions.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Wind,
      title: "Indoor Environmental Quality",
      description: "Maximizing natural ventilation, daylighting, and air quality for healthier built environments.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Green Building Certifications",
      description: "Supporting LEED, BREEAM, and other sustainability certifications through compliant, optimized designs.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const goals = [
    {
      year: "2025",
      target: "Carbon Neutral Operations",
      description: "Achieve net-zero carbon emissions across all our offices and operations through renewable energy and carbon offsetting."
    },
    {
      year: "2027",
      target: "100% Sustainable Projects",
      description: "Ensure every project we deliver incorporates measurable sustainability metrics and green building practices."
    },
    {
      year: "2030",
      target: "Industry Leadership",
      description: "Become a recognized global leader in sustainable engineering design and BIM-enabled green building solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&q=80"
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <Leaf className="w-5 h-5 text-[#a8d96e]" />
              <span className="text-sm font-semibold tracking-wider">SUSTAINABILITY</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Engineering for a Sustainable Future
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90">
              We are committed to designing buildings and infrastructure that minimize environmental impact and create healthier communities for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-8">
                Sustainability at the Core
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                At Nopex Services, sustainability isn't an afterthought — it's embedded in every design decision we make. From material selection and energy modeling to water conservation and indoor air quality, we approach each project with a commitment to reducing environmental impact while delivering exceptional performance.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our multidisciplinary teams leverage BIM and advanced simulation tools to optimize designs for energy efficiency, lifecycle cost, and occupant well-being — ensuring your project meets both today's standards and tomorrow's expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                  alt="Green building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Six Commitments */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Our Sustainability Commitments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six pillars that guide our approach to sustainable engineering and design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Measurable Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to sustainability translates into real, quantifiable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "35%", label: "Average Energy Savings", description: "Through optimized MEP design and BIM modeling" },
              { number: "250+", label: "LEED Projects", description: "Supporting sustainable certification goals" },
              { number: "60%", label: "Water Use Reduction", description: "Via efficient plumbing and stormwater design" },
              { number: "1.2M", label: "Tons CO₂ Avoided", description: "Through our sustainable engineering practices" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-5xl font-bold text-green-600 mb-3">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2030 Goals Timeline */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d4d] to-[#0d3333] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Our 2030 Sustainability Goals</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ambitious targets driving our journey toward a more sustainable future.
            </p>
          </div>

          <div className="space-y-8">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-8 items-center bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-[#a8d96e] rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#1a4d4d]">{goal.year}</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3">{goal.target}</h3>
                  <p className="text-lg opacity-90">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIM for Sustainability */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
                alt="BIM sustainability"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-6">BIM-Enabled Sustainability Analysis</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our BIM workflows enable real-time sustainability analysis, allowing us to test and optimize designs for energy performance, daylighting, thermal comfort, and carbon footprint before construction begins.
              </p>

              <div className="space-y-4">
                {[
                  "Energy modeling and simulation",
                  "Daylighting and solar analysis",
                  "Material quantity optimization",
                  "Carbon footprint calculation",
                  "Water usage estimation",
                  "Lifecycle cost analysis"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Supporting Green Building Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We design to meet the requirements of leading sustainability frameworks worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["LEED", "BREEAM", "WELL Building", "Green Star"].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Ready to Build Sustainably?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's collaborate on engineering solutions that are good for your project and great for the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-100 transition-all"
            >
              Start Your Sustainable Project
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-green-600 transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;

