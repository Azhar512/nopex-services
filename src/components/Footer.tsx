import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a4d4d] text-white py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 mb-12">
          {/* Column 1 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  About NOPEX
                </Link>
              </li>
              <li>
                <Link to="/markets" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Markets
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <ul className="space-y-3">
              <li>
                <Link to="/careers" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/offices" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Offices
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <ul className="space-y-3">
              <li>
                <Link to="/without-limits" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Without Limits
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  News
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/social-media" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <ul className="space-y-3">
              <li>
                <Link to="/contract-vehicles" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Contract Vehicles
                </Link>
              </li>
              <li>
                <Link to="/supply-chain" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Our Supply Chain
                </Link>
              </li>
              <li>
                <Link to="/anti-human-trafficking" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Anti-Human Trafficking Policy
                </Link>
              </li>
              <li>
                <Link to="/modern-slavery" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Modern slavery statement
                </Link>
              </li>
              <li>
                <Link to="/recruitment-privacy" className="text-white hover:text-[#a8d96e] transition-colors text-base">
                  Recruitment Privacy Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo and Social Media - Right Side */}
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end">
            <img src="/logo.svg" alt="Nopex Logo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/70 text-sm leading-relaxed mb-6 lg:text-right">
              Designing a better world through integrated engineering, BIM, and sustainable design solutions.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/nopexservices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#a8d96e] transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#1a4d4d]" />
              </a>
              <a
                href="https://www.instagram.com/nopexservices/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#a8d96e] transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#1a4d4d]" />
              </a>
              <a
                href="https://www.linkedin.com/company/nopexservices/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#a8d96e] transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#1a4d4d]" />
              </a>
              <a
                href="https://twitter.com/nopexservices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#a8d96e] transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-[#1a4d4d]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">© 2025 NOPEX. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/terms-of-use" className="text-white hover:text-[#a8d96e] transition-colors">
                Terms of Use
              </Link>
              <span className="text-white/40">|</span>
              <Link to="/privacy-policy" className="text-white hover:text-[#a8d96e] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/40">|</span>
              <button 
                onClick={() => window.location.reload()} 
                className="text-white hover:text-[#a8d96e] transition-colors"
              >
                Reset my location
              </button>
              <span className="text-white/40">|</span>
              <Link to="/cookies-policy" className="text-white hover:text-[#a8d96e] transition-colors">
                Cookies Policy
              </Link>
              <span className="text-white/40">|</span>
              <button 
                onClick={() => {
                  // Simple cookie settings toggle
                  const current = localStorage.getItem('cookieSettings') || 'accepted';
                  const newSetting = current === 'accepted' ? 'declined' : 'accepted';
                  localStorage.setItem('cookieSettings', newSetting);
                  alert(`Cookie settings ${newSetting}`);
                }}
                className="text-white hover:text-[#a8d96e] transition-colors"
              >
                Cookie settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
