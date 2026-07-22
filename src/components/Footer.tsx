import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#00353e] text-white py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/civil" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">Civil Engineering</Link></li>
              <li><Link to="/services/structural" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">Structural Engineering</Link></li>
              <li><Link to="/services/architectural" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">Architectural Services</Link></li>
              <li><Link to="/services/mep" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">MEP Engineering</Link></li>
              <li><Link to="/services/bim" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">BIM & Revit Modeling</Link></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/about/how-we-work" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">How We Work</Link></li>
              <li><Link to="/about/quality-safety" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">Quality & Safety</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/projects" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">Projects</Link></li>
              <li><Link to="/insights" className="text-white/80 hover:text-[#aecc53] transition-colors text-sm">Insights</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="flex flex-col items-start lg:items-end">
            <img src="/logo.svg" alt="Nopex Logo" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/80 text-sm leading-relaxed mb-4 lg:text-right">
              Multi-Disciplinary Engineering, Delivered With Precision.
            </p>
            <div className="text-white/80 text-sm leading-relaxed mb-6 lg:text-right">
              <p>San Francisco, CA | Lahore, PK</p>
              <p>US: <a href="tel:+14159491414" className="hover:text-[#aecc53]">+1 (415) 949-1414</a></p>
              <p>PK: <a href="tel:04235970024" className="hover:text-[#aecc53]">04235970024</a></p>
              <p>Email: <a href="mailto:info@nopexservices.com" className="hover:text-[#aecc53]">info@nopexservices.com</a></p>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/nopexservices/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#aecc53] transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#00353e]" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">© {new Date().getFullYear()} Nopex Services | All Rights Reserved</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/terms-of-use" className="text-white/80 hover:text-[#aecc53] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-white/40">|</span>
              <Link to="/privacy-policy" className="text-white/80 hover:text-[#aecc53] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
