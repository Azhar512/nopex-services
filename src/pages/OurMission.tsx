import { motion } from "framer-motion";
import { Target, Zap, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurMission = () => {
  const pillars = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every line, every detail — designed with accuracy, reviewed with rigor, and delivered with confidence."
    },
    {
      icon: Zap,
      title: "Integrated Innovation",
      description: "We harness BIM and digital tools to create coordinated, clash-free designs that streamline construction."
    },
    {
      icon: Shield,
      title: "Quality & Compliance",
      description: "Code-compliant, constructable designs that meet international standards and local requirements."
    },
    {
      icon: Heart,
      title: "Client-Centered Excellence",
      description: "Your success is our mission. We collaborate closely to understand your vision and deliver solutions that exceed expectations."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&q=80"
            alt="Mission background"
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
            <h1 className="text-6xl lg:text-7xl font-bold mb-8">
              Our Mission
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed font-light">
              To deliver integrated engineering design, drafting, and BIM solutions that empower our clients to build with precision, efficiency, and confidence — anywhere in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Detail */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-6">
                Engineering a Better Built Environment
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Nopex Services, our mission goes beyond producing drawings. We are committed to creating intelligent, sustainable, and constructable design solutions that enable infrastructure, buildings, and industrial facilities to be delivered on time, on budget, and to the highest standards of quality.
              </p>
            </motion.div>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"
                alt="Engineering work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold">Precision Matters</h3>
                <p className="text-sm opacity-90">Every project, every detail</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold">Global Collaboration</h3>
                <p className="text-sm opacity-90">Connected teams, unified vision</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">The Four Pillars of Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do — from initial design to final deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-6">How We Deliver on Our Mission</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multidisciplinary Integration</h3>
                    <p className="text-muted-foreground">Civil, Structural, Architectural, MEP, and Industrial teams work in sync through BIM coordination.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
                    <p className="text-muted-foreground">We understand regional codes, standards, and construction practices across North America, Middle East, Europe, and Asia-Pacific.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technology-Driven Workflows</h3>
                    <p className="text-muted-foreground">Revit, AutoCAD, Navisworks, BIM 360 — we use industry-leading tools for quality and efficiency.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collaborative Partnerships</h3>
                    <p className="text-muted-foreground">We work as an extension of your team, ensuring seamless communication and aligned objectives.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Team working"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Let's Turn Your Vision Into Reality
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Partner with a team that's committed to precision, innovation, and your project's success.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#a8d96e] text-[#1a4d4d] font-semibold rounded-md hover:bg-[#96c75c] transition-all"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurMission;

