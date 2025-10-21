import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Offices = () => {
  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "123 Engineering Plaza, Suite 500, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@nopexservices.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM EST",
      timezone: "Eastern Time",
      services: ["Headquarters", "BIM Services", "Project Management", "Client Relations"]
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "45 Thames Street, Level 12, London EC4M 9AH",
      phone: "+44 20 7123 4567",
      email: "london@nopexservices.com",
      hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT",
      timezone: "Greenwich Mean Time",
      services: ["European Operations", "MEP Engineering", "Sustainability Consulting", "BIM Coordination"]
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Sheikh Zayed Road, Tower 2, Floor 25, Dubai 00000",
      phone: "+971 4 123 4567",
      email: "dubai@nopexservices.com",
      hours: "Sun-Thu: 8:00 AM - 6:00 PM GST",
      timezone: "Gulf Standard Time",
      services: ["Middle East Hub", "Infrastructure Design", "BIM Services", "Project Delivery"]
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Marina Bay Sands, Tower 1, Level 15, Singapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@nopexservices.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
      timezone: "Singapore Time",
      services: ["Asia-Pacific Operations", "Digital Engineering", "Smart City Solutions", "BIM Innovation"]
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "100 King Street West, Suite 2000, Toronto, ON M5X 1C7",
      phone: "+1 (416) 123-4567",
      email: "toronto@nopexservices.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM EST",
      timezone: "Eastern Time",
      services: ["North American Operations", "Civil Engineering", "Environmental Consulting", "BIM Services"]
    },
    {
      city: "Sydney",
      country: "Australia",
      address: "Level 30, 1 Macquarie Place, Sydney NSW 2000",
      phone: "+61 2 1234 5678",
      email: "sydney@nopexservices.com",
      hours: "Mon-Fri: 8:30 AM - 5:30 PM AEST",
      timezone: "Australian Eastern Time",
      services: ["Oceania Operations", "Infrastructure Design", "Sustainability", "BIM Coordination"]
    }
  ];

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
              Our Global Presence
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              With offices across six continents, we're positioned to serve clients worldwide 
              with local expertise and global capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Global Offices</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Global Team Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Project Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Office Locations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the Nopex Services office nearest to you and connect with our local team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{office.city}</h3>
                  <p className="text-primary font-semibold">{office.country}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">{office.hours}</p>
                      <p className="text-xs text-muted-foreground">{office.timezone}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Services Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {office.services.map((service, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center text-primary font-semibold text-sm hover:gap-3 gap-2 transition-all group"
                >
                  Contact This Office
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact the office nearest to you or reach out to our global team for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all"
            >
              Get in Touch
            </Link>
            <Link
              to="/careers"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offices;
