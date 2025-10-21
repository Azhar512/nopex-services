import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sitemap = () => {
  const siteMap = {
    "Company": [
      { name: "About NOPEX", link: "/about" },
      { name: "Who We Are", link: "/who-we-are" },
      { name: "Our Mission", link: "/our-mission" },
      { name: "Our Vision", link: "/our-vision" },
      { name: "Core Values", link: "/core-values" },
      { name: "Leadership", link: "/leadership" },
      { name: "Sustainability", link: "/sustainability" }
    ],
    "Services": [
      { name: "Our Services", link: "/services" },
      { name: "Architecture & Design", link: "/services" },
      { name: "Civil Engineering", link: "/services" },
      { name: "Structural Engineering", link: "/services" },
      { name: "MEP Engineering", link: "/services" },
      { name: "BIM & Digital Engineering", link: "/bim-digital" },
      { name: "Industrial & Fabrication", link: "/services" }
    ],
    "Markets": [
      { name: "Markets", link: "/markets" },
      { name: "Transportation", link: "/markets" },
      { name: "Energy", link: "/markets" },
      { name: "Water & Environment", link: "/markets" },
      { name: "Buildings", link: "/markets" },
      { name: "Industrial", link: "/markets" },
      { name: "Government & Infrastructure", link: "/markets" }
    ],
    "Projects": [
      { name: "Case Studies", link: "/case-studies" },
      { name: "Projects", link: "/projects" },
      { name: "Midtown Commercial Complex", link: "/case-studies" },
      { name: "Metropolitan Transit Hub", link: "/case-studies" },
      { name: "Industrial Manufacturing Plant", link: "/case-studies" },
      { name: "Smart Hospital Complex", link: "/case-studies" }
    ],
    "Insights": [
      { name: "BIM & Digital", link: "/bim-digital" },
      { name: "Engineering Trends", link: "/engineering-trends" },
      { name: "Industry Analysis", link: "/industry-analysis" },
      { name: "Articles", link: "/articles" },
      { name: "Publications", link: "/publications" },
      { name: "Latest Posts", link: "/latest-posts" }
    ],
    "Careers": [
      { name: "Careers", link: "/careers" },
      { name: "Current Openings", link: "/careers" },
      { name: "Why Work With Us", link: "/careers" },
      { name: "Global Opportunities", link: "/careers" }
    ],
    "Contact": [
      { name: "Contact Us", link: "/contact" },
      { name: "Offices", link: "/offices" },
      { name: "Global Locations", link: "/offices" },
      { name: "Get in Touch", link: "/contact" }
    ],
    "Legal": [
      { name: "Terms of Use", link: "/terms-of-use" },
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Cookies Policy", link: "/cookies-policy" },
      { name: "Anti-Human Trafficking Policy", link: "/anti-human-trafficking" },
      { name: "Modern Slavery Statement", link: "/modern-slavery" },
      { name: "Recruitment Privacy Notice", link: "/recruitment-privacy" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Site Map
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Navigate through all sections of our website to find the information you need quickly and easily.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Site Map */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(siteMap).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.link}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
            <p className="text-muted-foreground">Most visited pages on our website</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/services"
              className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Our Services
              </h3>
              <p className="text-muted-foreground">
                Comprehensive engineering design, drafting, and BIM solutions
              </p>
            </Link>

            <Link
              to="/case-studies"
              className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Case Studies
              </h3>
              <p className="text-muted-foreground">
                Explore our portfolio of successfully delivered projects
              </p>
            </Link>

            <Link
              to="/contact"
              className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Contact Us
              </h3>
              <p className="text-muted-foreground">
                Get in touch with our global team for your next project
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;
