import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  const handleMouseEnter = (item: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
    setCloseTimeout(timeout);
  };

  const scrollToSection = (section: string) => {
    const id = `#${section.toLowerCase().replace(/\s+/g, "-")}`;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const megaMenuContent: Record<string, any> = {
    "ABOUT US": {
      featured: {
        title: "Engineering Excellence. Delivered Globally.",
        description: "A collaborative workplace is core to our vision — designing a better world through precision engineering and digital integration.",
        cta: "Learn More About Us",
        link: "/about"
      },
      sections: [
        {
          title: "About us",
          description: "At NOPEX Services, we believe integrated engineering design creates opportunity for everyone.",
          links: [
            { name: "Who We Are", link: "/who-we-are" },
            { name: "Our Mission", link: "/our-mission" },
            { name: "Our Vision", link: "/our-vision" },
            { name: "Core Values", link: "/core-values" },
            { name: "Leadership & Expertise", link: "/leadership" },
            { name: "Sustainability", link: "/sustainability" }
          ]
        },
        {
          title: "Digital Engineering",
          description: "BIM and digital design are at the heart of how we deliver projects with precision and coordination.",
          links: [
            { name: "BIM Services", link: "/services" },
            { name: "Technical Excellence", link: "/services" },
            { name: "Software Ecosystem", link: "/services" }
          ]
        },
        {
          title: "Our Commitment",
          description: "We are committed to designing responsibly, sustainably, and with global standards in mind.",
          links: [
            { name: "Sustainability", link: "/sustainability" },
            { name: "Our Purpose", link: "/about" }
          ]
        }
      ]
    },
    "OUR WORK": {
      featured: {
        title: "Designing for Every Sector — Globally",
        description: "We deliver multidisciplinary engineering and BIM solutions across diverse markets worldwide.",
        cta: "View Our Capabilities",
        link: "/services"
      },
      sections: [
        {
          title: "Markets",
          description: "Delivering integrated engineering design across diverse sectors — from infrastructure and buildings to industrial and energy projects.",
          links: [
            { name: "Transportation", link: "/markets" },
            { name: "Energy", link: "/markets" },
            { name: "Water & Environment", link: "/markets" },
            { name: "Buildings", link: "/markets" },
            { name: "Industrial", link: "/markets" },
            { name: "Government & Infrastructure", link: "/markets" }
          ]
        },
        {
          title: "Services",
          description: "Comprehensive engineering design, drafting, and BIM solutions across all disciplines.",
          links: [
            { name: "Architecture & Design", link: "/services" },
            { name: "Civil Engineering", link: "/services" },
            { name: "Structural Engineering", link: "/services" },
            { name: "MEP Engineering", link: "/services" },
            { name: "BIM & Digital Engineering", link: "/services" }
          ]
        },
        {
          title: "Shop Drawings",
          description: "Precision fabrication drawings for millwork, stone, tile, and metal — fabrication-ready and code-compliant.",
          links: [
            { name: "Millwork & Joinery Drawings", link: "/shop-drawings" },
            { name: "Stone & Tile Drawings", link: "/shop-drawings" },
            { name: "Metal Fabrication Drawings", link: "/shop-drawings" },
            { name: "View All Shop Drawing Services", link: "/shop-drawings" }
          ]
        },
        {
          title: "Projects",
          description: "Explore our global portfolio of successfully delivered engineering and design projects.",
          links: [
            { name: "Midtown Commercial Complex", link: "/projects" },
            { name: "EV Charging Infrastructure", link: "/projects" },
            { name: "Industrial Plant Expansion", link: "/projects" },
            { name: "View All Projects", link: "/projects" }
          ]
        }
      ]
    },
    "INSIGHTS": {
      featured: {
        title: "The world of engineering is evolving.",
        description: "Our expertise is your asset.",
        cta: "Explore Our Insights",
        link: "/"
      },
      sections: [
        {
          title: "Thought Leadership",
          description: "Stay ahead with expert analysis on BIM trends, digital engineering, and multidisciplinary design best practices.",
          links: [
            { name: "BIM & Digital Engineering", link: "/bim-digital" },
            { name: "Engineering Trends", link: "/engineering-trends" },
            { name: "Industry Analysis", link: "/industry-analysis" },
            { name: "Articles", link: "/articles" },
            { name: "Publications", link: "/publications" }
          ]
        },
        {
          title: "Our Blog",
          description: "Our blog discusses the biggest challenges in integrated design, BIM coordination, and project delivery for today and tomorrow.",
          links: [
            { name: "Latest Posts", link: "/latest-posts" },
            { name: "Case Studies", link: "/projects" },
            { name: "Press Releases", link: "/latest-posts" }
          ]
        },
        {
          title: "Resources",
          description: "Access comprehensive resources including whitepapers, case studies, and industry reports on engineering design and BIM.",
          links: [
            { name: "Downloads", link: "/publications" },
            { name: "Research", link: "/industry-analysis" },
            { name: "Webinars", link: "/latest-posts" }
          ]
        }
      ]
    }
  };

  const navItems = ["ABOUT US", "OUR WORK", "INSIGHTS", "CAREERS", "NEWS", "CONTACT"];

  return (
    <>
      <style>{`
        .nopex-logo {
          position: relative;
          display: inline-flex;
          align-items: center;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 700;
          font-size: 1.75rem;
          letter-spacing: 0.02em;
        }

        .broken-n {
          position: relative;
          display: inline-block;
          font-weight: 800;
          background: linear-gradient(135deg, #00B4DB 0%, #00D4AA 30%, #FF6B35 70%, #F7931E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .broken-n::before {
          content: '';
          position: absolute;
          top: 20%;
          right: -2px;
          width: 4px;
          height: 30%;
          background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
          transform: skew(-10deg);
        }

        .broken-n::after {
          content: '';
          position: absolute;
          top: 60%;
          right: -4px;
          width: 3px;
          height: 25%;
          background: linear-gradient(135deg, #F7931E 0%, #FFD700 100%);
          clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
          transform: skew(-10deg);
        }

        .logo-rest {
          font-weight: 600;
          color: #2C3E50;
          margin-left: 2px;
        }

        .nopex-logo:hover .broken-n {
          background: linear-gradient(135deg, #00A8CC 0%, #00C4A0 30%, #FF5722 70%, #FF9800 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.3s ease;
        }

        .nopex-logo:hover .broken-n::before {
          background: linear-gradient(135deg, #FF5722 0%, #FF9800 50%, #FFC107 100%);
          transition: all 0.3s ease;
        }

        .nopex-logo:hover .broken-n::after {
          background: linear-gradient(135deg, #FF9800 0%, #FFC107 100%);
          transition: all 0.3s ease;
        }

        .nopex-logo:hover .logo-rest {
          color: #34495E;
          transition: color 0.3s ease;
        }
      `}</style>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""
          }`}
      >
        <div className="border-b border-border">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center gap-3 group"
              >
                <img src="/logo.svg" alt="Nopex Logo" className="h-10 w-10 transition-transform group-hover:rotate-12" />
                <div className="nopex-logo">
                  <span className="broken-n">N</span>
                  <span className="logo-rest">OPEX</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => {
                  const hasMegaMenu = megaMenuContent[item];
                  return (
                    <div
                      key={item}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {hasMegaMenu ? (
                        <button
                          className="text-xs font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1 py-2"
                        >
                          {item}
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      ) : (
                        <Link
                          to={item === "CAREERS" ? "/" : item === "NEWS" ? "/" : "/contact"}
                          className="text-xs font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1 py-2"
                        >
                          {item}
                        </Link>
                      )}

                      {/* Mega Menu Dropdown - AECOM Style */}
                      {hasMegaMenu && activeDropdown === item && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => handleMouseEnter(item)}
                          onMouseLeave={handleMouseLeave}
                          className="fixed top-16 left-0 right-0 bg-[#1a4d4d] shadow-2xl z-50"
                          style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}
                        >
                          <div className="max-w-[1400px] mx-auto px-6 py-12">
                            <div className="grid grid-cols-12 gap-8">
                              {/* Left Hero Section */}
                              <div className="col-span-3">
                                <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
                                    alt={megaMenuContent[item].featured.title}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">
                                  {megaMenuContent[item].featured.title}
                                </h3>
                                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                                  {megaMenuContent[item].featured.description}
                                </p>
                                <Link
                                  to={megaMenuContent[item].featured.link}
                                  onClick={() => setActiveDropdown(null)}
                                  className="inline-flex items-center px-6 py-3 bg-[#a8d96e] text-[#1a4d4d] font-semibold text-sm rounded-md hover:bg-[#96c75c] transition-colors gap-2"
                                >
                                  {megaMenuContent[item].featured.cta}
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>

                              {/* Middle Content Cards Section */}
                              <div className="col-span-5 space-y-8">
                                {megaMenuContent[item].sections.slice(0, 3).map((section: any, idx: number) => (
                                  <div key={idx} className="flex gap-4">
                                    {/* Thumbnail Image */}
                                    <div className="flex-shrink-0">
                                      <img
                                        src={`https://images.unsplash.com/photo-${idx === 0 ? '1486406146926-c627a92ad1ab' :
                                          idx === 1 ? '1581094271901-8022df4466f9' :
                                            '1541888946425-d81bb19240f5'
                                          }?w=120&h=80&q=80&fit=crop`}
                                        alt={section.title}
                                        className="w-[100px] h-[70px] object-cover rounded"
                                      />
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1">
                                      <Link
                                        to={section.links[0]?.link || '/'}
                                        onClick={() => setActiveDropdown(null)}
                                        className="inline-flex items-center text-[#a8d96e] font-semibold text-base mb-2 hover:text-[#96c75c] transition-colors gap-1"
                                      >
                                        {section.title}
                                        <ArrowRight className="w-4 h-4" />
                                      </Link>
                                      <p className="text-sm text-white/90 leading-relaxed">
                                        {section.description || section.links.slice(0, 3).map((l: any) => l.name).join(', ')}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Right Pill Buttons Section */}
                              <div className="col-span-4 flex items-center">
                                <div className="w-full space-y-3">
                                  {megaMenuContent[item].sections.flatMap((s: any) => s.links).slice(0, 6).map((link: any, idx: number) => (
                                    <Link
                                      key={idx}
                                      to={link.link}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-center justify-between px-6 py-3 border-2 border-[#a8d96e] rounded-full text-white font-medium text-sm hover:bg-[#a8d96e] hover:text-[#1a4d4d] transition-all group"
                                    >
                                      <span>{link.name}</span>
                                      <ArrowRight className="w-4 h-4 text-[#a8d96e] group-hover:text-[#1a4d4d] transition-colors" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
                <button className="text-foreground hover:text-primary transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
