import { useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, GitBranch, Box, Layers, Database, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BIMDigital = () => {
  useEffect(() => {
    document.title = "BIM & Digital Engineering | Nopex Services - Integrated Design";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Transform your projects with Nopex Services' intelligent 3D modeling, clash-free BIM coordination, and data-driven digital engineering solutions.");
    }
  }, []);

  const bimServices = [
    {
      icon: Cpu,
      title: "3D BIM Modeling",
      description: "Intelligent 3D models across all disciplines — Architecture, Structure, MEP, and Industrial — fully coordinated and clash-free.",
      features: ["Revit Family Creation", "LOD 100-500 Modeling", "Parametric Design"]
    },
    {
      icon: GitBranch,
      title: "BIM Coordination",
      description: "Multi-disciplinary coordination ensuring zero conflicts before construction begins, saving time and cost overruns.",
      features: ["Clash Detection", "Navisworks Coordination", "Weekly Coordination Reports"]
    },
    {
      icon: Layers,
      title: "4D/5D BIM",
      description: "Time and cost dimensions integrated into your BIM model for advanced project scheduling and budgeting.",
      features: ["Construction Sequencing", "Cost Estimation", "Schedule Integration"]
    },
    {
      icon: Database,
      title: "BIM Data Management",
      description: "Centralized data repositories, version control, and model management using BIM 360 and ACC platforms.",
      features: ["BIM 360 Setup", "CDE Management", "Model Federation"]
    },
    {
      icon: Box,
      title: "Digital Twins",
      description: "Virtual replicas of physical assets for facility management, operations optimization, and predictive maintenance.",
      features: ["As-Built BIM Models", "FM Integration", "IoT Data Connection"]
    },
    {
      icon: Cloud,
      title: "Cloud Collaboration",
      description: "Real-time collaboration platforms enabling seamless communication between global project teams.",
      features: ["BIM 360 Design", "ACC Implementation", "Mobile Access"]
    }
  ];

  const technologies = [
    { name: "Autodesk Revit", category: "Modeling" },
    { name: "Navisworks", category: "Coordination" },
    { name: "BIM 360 / ACC", category: "Collaboration" },
    { name: "Dynamo", category: "Automation" },
    { name: "Civil 3D", category: "Civil Engineering" },
    { name: "Robot Structural", category: "Analysis" },
    { name: "AutoCAD", category: "Drafting" },
    { name: "Rhino + Grasshopper", category: "Parametric Design" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <Cpu className="w-5 h-5 text-[#a8d96e]" />
              <span className="text-sm font-semibold tracking-wider">BIM & DIGITAL ENGINEERING</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              The Future is Digital.<br />The Future is BIM.
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90">
              Transform your projects with intelligent 3D modeling, clash-free coordination, and data-driven decision making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold mb-8">
                What is Building Information Modeling (BIM)?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                BIM is an intelligent, 3D model-based process that provides architecture, engineering, and construction professionals with the insights and tools to efficiently plan, design, construct, and manage buildings and infrastructure.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Nopex Services, we leverage BIM to deliver coordinated, clash-free designs that reduce errors, minimize rework, and accelerate project delivery — all while enhancing collaboration across global teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
                alt="BIM Technology"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BIM Services Grid */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our BIM & Digital Engineering Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end BIM solutions that transform how you design, build, and operate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bimServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose BIM?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven benefits that directly impact your bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "40%", label: "Fewer Design Errors", description: "Through clash detection and coordination" },
              { stat: "30%", label: "Faster Project Delivery", description: "With streamlined workflows and collaboration" },
              { stat: "20%", label: "Cost Savings", description: "By reducing rework and change orders" },
              { stat: "50%", label: "Better Collaboration", description: "Real-time coordination across teams" }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-muted rounded-lg"
              >
                <div className="text-5xl font-bold text-primary mb-3">{benefit.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.label}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d4d] to-[#0d3333] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Technology Stack</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Industry-leading software and platforms powering our BIM services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-all"
              >
                <h3 className="font-bold mb-2">{tech.name}</h3>
                <p className="text-sm text-[#a8d96e]">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="BIM Project"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">
                CASE STUDY
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Midtown Complex: 40% Reduction in RFIs Through BIM
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our BIM coordination services on this $250M mixed-use development identified over 3,000 clashes before construction, resulting in dramatic reductions in Requests for Information and change orders.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "3,200+ clashes resolved in pre-construction",
                  "40% reduction in RFIs during construction",
                  "6 weeks saved on project schedule",
                  "Full MEP coordination across 45 floors"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all"
              >
                View More Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Leverage BIM for Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how our BIM and digital engineering expertise can transform your project delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BIMDigital;

