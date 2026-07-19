import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, ArrowRight, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpandedSection(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

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

  const megaMenuContent: Record<string, any> = {
    "SERVICES": {
      featured: {
        title: "Integrated Engineering Excellence",
        description: "Comprehensive engineering design, drafting, and BIM solutions across all disciplines.",
        cta: "View All Services",
        link: "/services"
      },
      sections: [
        {
          title: "Civil Engineering",
          link: "/services/civil",
          links: [
            { name: "Site Development & Grading", link: "/services/civil/site-development" },
            { name: "Site / Civil Engineering Design", link: "/services/civil/site-civil-engineering" },
            { name: "Stormwater Management", link: "/services/civil/stormwater-drainage" },
            { name: "Water & Wastewater", link: "/services/civil/water-wastewater" },
            { name: "Transportation & Roadway", link: "/services/civil/transportation" },
            { name: "Civil Permitting", link: "/services/civil/permitting" }
          ]
        },
        {
          title: "Structural Engineering",
          link: "/services/structural",
          links: [
            { name: "Structural Building Design", link: "/services/structural/building-design" },
            { name: "Structural Steel Detailing", link: "/services/structural/steel-detailing" },
            { name: "Rebar Detailing", link: "/services/structural/rebar-detailing" },
            { name: "Precast & Concrete Detailing", link: "/services/structural/precast-detailing" },
            { name: "Seismic Retrofit", link: "/services/structural/seismic-retrofit" },
            { name: "Condition Assessment", link: "/services/structural/condition-assessment" }
          ]
        },
        {
          title: "Architectural Services",
          link: "/services/architectural",
          links: [
            { name: "Design & Development", link: "/services/architectural/design-development" },
            { name: "Construction Documents", link: "/services/architectural/construction-documents" },
            { name: "Interior Design", link: "/services/architectural/interior-design" },
            { name: "3D Rendering", link: "/services/architectural/3d-rendering" },
            { name: "Façade Design", link: "/services/architectural/facade-design" },
            { name: "Sustainable Design", link: "/services/architectural/sustainable-design" }
          ]
        },
        {
          title: "MEP Engineering",
          link: "/services/mep",
          links: [
            { name: "Mechanical (HVAC)", link: "/services/mep/mechanical" },
            { name: "Electrical Engineering", link: "/services/mep/electrical" },
            { name: "Plumbing Engineering", link: "/services/mep/plumbing" },
            { name: "Fire Protection", link: "/services/mep/fire-protection" },
            { name: "MEP Coordination", link: "/services/mep/mep-coordination" },
            { name: "Shop Drawings", link: "/services/mep/shop-drawings" }
          ]
        },
        {
          title: "BIM & Revit Modeling",
          link: "/services/bim",
          links: [
            { name: "3D BIM Modeling", link: "/services/bim/3d-modeling" },
            { name: "Scan to BIM", link: "/services/bim/scan-to-bim" },
            { name: "CAD to BIM Conversion", link: "/services/bim/cad-to-bim" },
            { name: "Clash Detection", link: "/services/bim/clash-detection" },
            { name: "Revit Family Creation", link: "/services/bim/revit-family-creation" },
            { name: "4D Scheduling & 5D Cost", link: "/services/bim/4d-5d" }
          ]
        }
      ]
    }
  };

  const navItems = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/services", hasMegaMenu: true },
    { name: "INDUSTRIES", link: "/industries" },
    { name: "PROJECTS", link: "/projects" },
    { name: "INSIGHTS", link: "/insights" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" }
  ];

  return (
    <>
      <style>{`
        .nopex-logo {
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          line-height: 1;
          text-decoration: none;
          letter-spacing: 1.5px;
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
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center gap-2 sm:gap-3 group"
              >
                <img src="/logo.svg" alt="Nopex Logo" className="h-8 w-8 sm:h-10 sm:w-10 transition-transform group-hover:rotate-12" />
                <div className="nopex-logo">
                  <span className="broken-n">N</span>
                  <span className="logo-rest">OPEX</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((navItem) => {
                  const item = navItem.name;
                  const hasMegaMenu = navItem.hasMegaMenu;
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
                          to={navItem.link}
                          className="text-xs font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1 py-2"
                        >
                          {item}
                        </Link>
                      )}

                      {/* Mega Menu Dropdown - Desktop */}
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
                              {/* Content Section (6 Columns) */}
                              <div className="col-span-12 grid grid-cols-6 gap-6">
                                {megaMenuContent[item].sections.map((section: any, idx: number) => (
                                  <div key={idx} className="space-y-3">
                                    <Link
                                      to={section.link}
                                      onClick={() => setActiveDropdown(null)}
                                      className="block font-bold text-[#a8d96e] text-sm hover:text-[#96c75c] transition-colors mb-4 border-b border-[#2d6e6e] pb-2"
                                    >
                                      {section.title}
                                    </Link>
                                    <div className="flex flex-col space-y-2">
                                      {section.links.map((link: any, lIdx: number) => (
                                        <Link
                                          key={lIdx}
                                          to={link.link}
                                          onClick={() => setActiveDropdown(null)}
                                          className="text-xs text-white/80 hover:text-white transition-colors"
                                        >
                                          {link.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                      )}
                    </div>
                  );
                })}
                <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
                  <a href="tel:1-800-555-0199" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    1-800-555-0199
                  </a>
                  <Link
                    to="/contact"
                    className="px-4 py-2 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Get a Quote
                  </Link>
                  <button className="text-foreground hover:text-primary transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] z-50 bg-background shadow-2xl overflow-y-auto lg:hidden"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <img src="/logo.svg" alt="Nopex Logo" className="h-8 w-8" />
                <div className="nopex-logo" style={{ fontSize: '1.2rem' }}>
                  <span className="broken-n">N</span>
                  <span className="logo-rest">OPEX</span>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Items */}
            <div className="py-4">
              {navItems.map((navItem) => {
                const item = navItem.name;
                const hasMegaMenu = navItem.hasMegaMenu;
                const isExpanded = mobileExpandedSection === item;

                if (!hasMegaMenu) {
                  return (
                    <Link
                      key={item}
                      to={navItem.link}
                      className="block px-6 py-4 text-sm font-semibold text-foreground hover:text-primary hover:bg-muted transition-colors border-b border-border/50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  );
                }

                return (
                  <div key={item} className="border-b border-border/50">
                    <button
                      onClick={() => setMobileExpandedSection(isExpanded ? null : item)}
                      className="flex items-center justify-between w-full px-6 py-4 text-sm font-semibold text-foreground hover:text-primary hover:bg-muted transition-colors"
                    >
                      {item}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-muted"
                        >
                          {megaMenuContent[item].sections.map((section: any, sIdx: number) => (
                            <div key={sIdx} className="px-6 py-3">
                              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{section.title}</p>
                              {section.links.map((link: any, lIdx: number) => (
                                <Link
                                  key={lIdx}
                                  to={link.link}
                                  className="block py-2 pl-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="p-6 border-t border-border">
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
