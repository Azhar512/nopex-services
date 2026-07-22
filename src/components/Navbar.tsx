import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, ArrowRight, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import servicesData from "@/data/services.json";

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

  const megaMenuSections = [
    { id: "civil", title: "Civil Engineering" },
    { id: "structural", title: "Structural Engineering" },
    { id: "architectural", title: "Architectural Services" },
    { id: "mep", title: "MEP Engineering" },
    { id: "bim", title: "BIM & Revit Modeling" }
  ].map(disc => ({
    title: disc.title,
    link: `/services/${disc.id}`,
    links: servicesData
      .filter(s => s.discipline === disc.id)
      .map(s => ({
        name: s.name,
        link: `/services/${disc.id}/${s.slug}`
      }))
  }));

  const megaMenuContent: Record<string, any> = {
    "SERVICES": {
      featured: {
        title: "Integrated Engineering Excellence",
        description: "Comprehensive engineering design, drafting, and BIM solutions across all disciplines.",
        cta: "View All Services",
        link: "/services"
      },
      sections: megaMenuSections
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="text-3xl font-black tracking-tighter text-[#000000]">
                NOPEX
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center h-full">
              <div className="flex space-x-1">
                {navItems.map((navItem) => {
                  const item = navItem.name;
                  const hasMegaMenu = navItem.hasMegaMenu;
                  return (
                    <div
                      key={item}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {hasMegaMenu ? (
                        <button
                          className="px-4 py-2 text-sm font-bold text-[#000000] hover:text-gray-500 transition-colors flex items-center gap-1"
                        >
                          {item}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item ? 'rotate-180' : ''}`} />
                        </button>
                      ) : (
                        <Link
                          to={navItem.link}
                          className="px-4 py-2 text-sm font-bold text-[#000000] hover:text-gray-500 transition-colors flex items-center"
                        >
                          {item}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="flex items-center gap-6 ml-8 pl-8 border-l border-gray-200">
                <a href="tel:1-800-555-0199" className="text-sm font-bold text-[#000000] hover:text-gray-500 transition-colors">
                  1-800-555-0199
                </a>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 bg-[#00353e] text-white font-bold text-sm hover:bg-gray-800 transition-colors"
                >
                  Get a Quote
                </Link>
                <button className="text-[#000000] hover:text-gray-500 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-2 text-[#000000] hover:text-gray-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown - Desktop (Full Width) */}
        <AnimatePresence>
          {activeDropdown === "SERVICES" && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              onMouseEnter={() => handleMouseEnter("SERVICES")}
              onMouseLeave={handleMouseLeave}
              className="absolute top-full left-0 right-0 bg-[#00353e] border-t border-[#00353e] shadow-2xl z-50"
              style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
            >
              <div className="max-w-[1400px] mx-auto px-6 py-12">
                <div className="grid grid-cols-5 gap-8">
                  {megaMenuContent["SERVICES"].sections.map((section: any, idx: number) => (
                    <div key={idx} className="flex flex-col">
                      <Link
                        to={section.link}
                        onClick={() => setActiveDropdown(null)}
                        className="text-2xl font-serif text-white hover:text-[#aecc53] transition-colors mb-6 pb-4 border-b border-white/20"
                      >
                        {section.title}
                      </Link>
                      <div className="flex flex-col space-y-3">
                        {section.links.map((link: any, lIdx: number) => (
                          <Link
                            key={lIdx}
                            to={link.link}
                            onClick={() => setActiveDropdown(null)}
                            className="text-base text-[#aecc53] hover:text-white transition-colors"
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
        </AnimatePresence>
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
