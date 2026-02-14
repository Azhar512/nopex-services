import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Architecture & Design",
      subtitle: "Creative. Practical. Buildable.",
      description: "Our architectural design team produces conceptual, permit, and construction drawings that combine aesthetics with performance.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
      capabilities: [
        "Architectural planning and design",
        "3D modeling and rendering",
        "Code and ADA compliance analysis",
        "Permit and IFC drawing preparation",
        "Coordination with structural and MEP teams",
        "BIM integration for spatial and visualization accuracy"
      ],
      deliverables: "Plans, elevations, sections, 3D visuals, and BIM models"
    },
    {
      title: "Civil Engineering",
      subtitle: "Foundation of Every Successful Project",
      description: "We provide civil design solutions that form the foundation of every successful project. From site grading to drainage and utility design, we ensure accuracy, compliance, and constructability.",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80",
      capabilities: [
        "Site grading, stormwater, and utility design",
        "Roadway and parking layouts",
        "Erosion control and SWPPP documentation",
        "Utility relocation and conflict resolution",
        "Quantity take-offs and cost estimation"
      ],
      software: "AutoCAD Civil 3D, InfraWorks, HydroCAD, Bluebeam"
    },
    {
      title: "Structural Engineering",
      subtitle: "Integrity and Efficiency",
      description: "Our structural design and detailing services deliver the integrity and efficiency that modern projects demand. We translate design intent into detailed documentation ready for fabrication and construction.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
      capabilities: [
        "Structural steel and concrete design",
        "Rebar detailing and shop drawings",
        "Connection design and structural analysis",
        "Load calculation reports and modeling",
        "Foundation design and coordination with civil works"
      ],
      software: "Tekla, Revit Structure, STAAD Pro, RISA"
    },
    {
      title: "MEP Engineering",
      subtitle: "Building Performance & Comfort",
      description: "Our MEP specialists design coordinated systems that drive building performance, comfort, and safety. We deliver detailed, code-compliant solutions across HVAC, plumbing, and electrical disciplines.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
      capabilities: [
        "HVAC design and duct sizing",
        "Electrical layouts and load schedules",
        "Plumbing, drainage, and fire protection systems",
        "Lighting and power distribution design",
        "Energy modeling and life-cycle analysis"
      ],
      software: "Revit MEP, HAP, Elite, AutoCAD, Navisworks"
    },
    {
      title: "Industrial & Fabrication Design",
      subtitle: "Manufacturing Precision",
      description: "Supporting the manufacturing and industrial sector with design precision and 3D fabrication detailing.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
      capabilities: [
        "Process and mechanical system layouts",
        "Equipment foundations and piping detailing",
        "Fabrication and GA drawings",
        "Bill of Materials (BOMs) and shop documentation",
        "Conveyor, platform, and frame detailing"
      ],
      software: "SolidWorks, AutoCAD Mechanical, Inventor"
    },
    {
      title: "Shop Drawings",
      subtitle: "Fabrication-Ready Precision",
      description: "Accurate, fabrication-ready drawings that bring your projects to life. We deliver millwork, rebar, framing, and steel detailing with precision and speed.",
      capabilities: [
        "Structural steel and rebar shop drawings",
        "Millwork and joinery details",
        "Rough framing and panelization drawings",
        "CNC-compatible 2D and 3D outputs"
      ]
    },
    {
      title: "BIM & Digital Engineering",
      subtitle: "Eliminating Conflict, Delivering Certainty",
      description: "Integrating technology to eliminate conflict and deliver certainty. Our BIM team connects every discipline through intelligent 3D modeling, enabling collaboration, clash detection, and cost visibility across all project phases.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      capabilities: [
        "BIM modeling and coordination (LOD 100–500)",
        "Clash detection and constructability checks",
        "3D–5D BIM integration (model, schedule, cost)",
        "Scan-to-BIM and as-built model creation",
        "BIM Execution Plans (BEPs) and standards setup",
        "Digital twin development for lifecycle management",
        "Common Data Environment (CDE) setup"
      ],
      software: "Revit, Navisworks, BIM 360, Tekla, Civil 3D, Dynamo, InfraWorks",
      deliverables: "Coordinated BIM models, clash reports, BEP documents, and 5D data outputs"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Engineering Design, Drafting & BIM Solutions
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              At Nopex Services, we combine engineering precision with digital innovation to deliver designs that are practical, coordinated, and construction-ready. Our full-service approach ensures discipline integration, code compliance, and BIM-enabled collaboration across every phase of a project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.title} className={index % 2 === 0 ? "py-20 bg-background" : "py-20 bg-muted"}>
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {service.image && (
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 0 ? "" : "lg:order-2"}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              )}
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={!service.image ? "lg:col-span-2 max-w-4xl mx-auto" : ""}
              >
                <h2 className="text-4xl font-bold mb-3">{service.title}</h2>
                <p className="text-xl text-primary font-semibold mb-6">{service.subtitle}</p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <h3 className="text-xl font-bold mb-4">Core Capabilities:</h3>
                <ul className="space-y-3 mb-6">
                  {service.capabilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {service.software && (
                  <div className="mb-4">
                    <span className="font-semibold">Software: </span>
                    <span className="text-muted-foreground">{service.software}</span>
                  </div>
                )}

                {service.deliverables && (
                  <div>
                    <span className="font-semibold">Deliverables: </span>
                    <span className="text-muted-foreground">{service.deliverables}</span>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            From Design to Digital Delivery — We Lead with Precision.
          </h2>
          <div className="flex gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all"
            >
              Request a Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/markets"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all"
            >
              Explore Our Markets
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

