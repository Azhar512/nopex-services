import { motion } from "framer-motion";
import { Users, Globe, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhoWeAre = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Delivered", icon: Target },
    { number: "30+", label: "Countries Served", icon: Globe },
    { number: "200+", label: "Team Members", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-2xl opacity-90">
              A Global Force in Engineering Design & BIM Innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-6">Engineering Excellence Across Borders</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nopex Services is a global engineering design and BIM consultancy dedicated to transforming ideas into intelligent, buildable solutions. We deliver complete Civil, Structural, Architectural, MEP, and Industrial design services — seamlessly integrated through Building Information Modeling (BIM) for enhanced collaboration, coordination, and constructability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From concept to completion, our multidisciplinary teams work with contractors, developers, architects, and engineering firms worldwide to produce technically sound, code-compliant, and sustainable designs that bring projects to life with precision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#a8d96e]" />
                <div className="text-3xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with digital innovation to deliver outcomes that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Multidisciplinary Excellence",
                description: "Our integrated teams span Civil, Structural, Architectural, MEP, and Industrial design — all coordinated through advanced BIM workflows.",
                image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80"
              },
              {
                title: "Global Reach, Local Expertise",
                description: "Operating across continents with teams in the U.S., Canada, Middle East, Europe, and Asia-Pacific, we understand regional codes and construction practices.",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
              },
              {
                title: "Digital-First Approach",
                description: "We leverage BIM 360, Revit, Navisworks, and the latest digital tools to ensure clash-free, coordinated designs ready for construction.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Ready to Work with a Global Leader?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how our multidisciplinary expertise can bring precision and innovation to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;

