import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Markets = () => {
  useEffect(() => {
    document.title = "Markets | Nopex Services - Engineering Across Diverse Sectors";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Nopex Services provides multidisciplinary engineering and BIM solutions across diverse markets including Transportation, Energy, Water, Buildings, Industrial, and Government.");
    }
  }, []);

  const markets = [
    {
      title: "Transportation",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80",
      description: "We shape connected, efficient, and resilient transportation systems. Our civil and structural design teams develop roads, bridges, corridors, and transit networks that improve mobility, safety, and sustainability for growing communities.",
      expertise: [
        "Highway and roadway design",
        "Grading, drainage, and stormwater management",
        "Utility relocation and coordination",
        "Traffic control and signage design",
        "Bridge geometry and structural detailing",
        "BIM coordination for multi-agency infrastructure"
      ]
    },
    {
      title: "Energy",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
      description: "Powering the future through smart, reliable, and sustainable energy design. From renewable systems to transmission networks, we support energy developers and utilities in planning and implementing safe, scalable, and efficient solutions.",
      expertise: [
        "Solar and wind power plant design",
        "Battery Energy Storage Systems (BESS)",
        "EV charging infrastructure",
        "Substation civil and structural packages",
        "Electrical layouts and grounding systems",
        "BIM integration for energy infrastructure"
      ]
    },
    {
      title: "Water & Environment",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      description: "We help communities manage water responsibly and sustainably. Our engineers design treatment systems, pumping stations, and drainage networks that protect resources and support resilient growth.",
      expertise: [
        "Stormwater and sanitary drainage systems",
        "Water distribution and utility networks",
        "Pumping stations and treatment plant design",
        "Erosion control and LID systems",
        "Flood mitigation and watershed studies",
        "Environmental compliance documentation"
      ]
    },
    {
      title: "Buildings",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      description: "We bring architecture and engineering together to create spaces that perform beautifully and efficiently. Our multidisciplinary design teams work across commercial, institutional, and residential developments, delivering high-performing and sustainable buildings.",
      expertise: [
        "Architectural and structural coordination",
        "MEP design and BIM modeling",
        "Permit, tender, and IFC drawings",
        "Healthcare, education, and commercial facilities",
        "Fire protection and life safety systems",
        "Energy modeling and LEED/BREEAM compliance"
      ]
    },
    {
      title: "Industrial",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
      description: "We design industrial facilities that enhance productivity and safety. From manufacturing plants to material-handling systems, our industrial design services support process efficiency and operational performance.",
      expertise: [
        "Process and plant layouts",
        "Equipment foundations and access platforms",
        "Utility piping and mechanical detailing",
        "Fabrication and installation drawings",
        "Warehouse and logistics facility design",
        "Digital twins for asset management"
      ]
    },
    {
      title: "Government & Public Infrastructure",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
      description: "We partner with government agencies and public-sector clients to deliver infrastructure that serves communities efficiently and sustainably. From schools and municipal buildings to stormwater systems and renewable infrastructure, we bring clarity, accountability, and excellence to every project.",
      expertise: [
        "Municipal infrastructure design",
        "Public buildings and facilities",
        "Stormwater management systems",
        "Renewable energy infrastructure",
        "Code compliance and permitting",
        "Multi-agency coordination"
      ]
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
              Designing for Every Sector — Globally
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              At Nopex Services, we deliver multidisciplinary engineering and BIM solutions across diverse markets — from infrastructure and buildings to industrial and energy projects. Our integrated approach connects design innovation with real-world constructability, enabling clients worldwide to plan, design, and deliver with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Markets Sections */}
      {markets.map((market, index) => (
        <section key={market.title} className={index % 2 === 0 ? "py-20 bg-background" : "py-20 bg-muted"}>
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 0 ? "" : "lg:order-2"}
              >
                <img
                  src={market.image}
                  alt={market.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6">{market.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {market.description}
                </p>

                <h3 className="text-xl font-bold mb-4">Expertise Includes:</h3>
                <ul className="space-y-3">
                  {market.expertise.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transforming Design, Delivering Impact.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Explore how Nopex Services supports diverse markets through integrated design and BIM innovation.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all"
            >
              View Our Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Markets;

