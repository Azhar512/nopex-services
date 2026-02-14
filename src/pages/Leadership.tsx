import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Leadership = () => {
  const leaders = [
    {
      name: "Michael Chen, PE",
      role: "Chief Executive Officer & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      expertise: "Civil Engineering, Infrastructure",
      years: "20+ years",
      bio: "Michael founded Nopex Services with a vision to revolutionize engineering design through BIM integration. A licensed Professional Engineer with extensive experience in large-scale infrastructure projects across North America and the Middle East."
    },
    {
      name: "Sarah Martinez, AIA",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      expertise: "Architectural Design, BIM Strategy",
      years: "18+ years",
      bio: "Sarah leads operations and BIM strategy implementation across all disciplines. An award-winning architect passionate about digital transformation in the built environment."
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "VP of Structural Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      expertise: "Structural Analysis, Seismic Design",
      years: "15+ years",
      bio: "Dr. Kumar holds a Ph.D. in Structural Engineering and specializes in high-rise buildings and complex structural systems. He leads our global structural design team."
    },
    {
      name: "Jennifer Wu, P.Eng",
      role: "VP of MEP Engineering",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      expertise: "MEP Systems, Energy Efficiency",
      years: "16+ years",
      bio: "Jennifer oversees all mechanical, electrical, and plumbing design services. She's a recognized expert in sustainable building systems and LEED certification."
    },
    {
      name: "David Thompson, PE",
      role: "Director of Civil Engineering",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      expertise: "Site Development, Utilities",
      years: "14+ years",
      bio: "David leads our civil engineering division, specializing in site grading, drainage design, and municipal infrastructure projects."
    },
    {
      name: "Fatima Al-Said",
      role: "Director of BIM & Digital Innovation",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
      expertise: "BIM Management, Digital Twins",
      years: "12+ years",
      bio: "Fatima drives our digital transformation initiatives, implementing cutting-edge BIM workflows and exploring AI applications in engineering design."
    }
  ];

  const expertise = [
    {
      icon: Award,
      title: "Industry Excellence",
      stats: "25+ Industry Awards",
      description: "Our leadership team consistently earns recognition for technical innovation and BIM implementation excellence."
    },
    {
      icon: Briefcase,
      title: "Global Delivery",
      stats: "500+ Projects Completed",
      description: "Successfully delivered complex engineering and design solutions for clients across three continents."
    },
    {
      icon: GraduationCap,
      title: "Academic Depth",
      stats: "Advanced Credentials",
      description: "Our leaders hold PE, AIA, and LEED professional certifications from top-tier global institutions."
    },
    {
      icon: Users2,
      title: "Global Talent",
      stats: "150+ Professionals",
      description: "A diverse, integrated team operating from our strategic hubs in San Francisco and Lahore."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt="Leadership"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-8">
              Leadership & Expertise
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90">
              Meet the visionary leaders and technical experts driving innovation in global engineering design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 rounded-lg text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <div className="text-3xl font-bold text-primary mb-3">{item.stats}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seasoned professionals with decades of combined experience in engineering, architecture, and digital innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-muted rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                      <p className="text-sm text-[#a8d96e] font-semibold">{leader.role}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between text-sm mb-4">
                      <span className="font-semibold text-primary">{leader.expertise}</span>
                      <span className="text-muted-foreground">{leader.years}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Unmatched Technical Depth</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our leadership team brings together deep technical expertise across all major engineering disciplines. Each leader is a recognized specialist in their field, with hands-on experience managing complex, high-value projects worldwide.
              </p>

              <div className="space-y-4">
                {[
                  "Licensed Professional Engineers (PE) across multiple jurisdictions",
                  "Certified BIM professionals and Autodesk experts",
                  "LEED Accredited Professionals and sustainability specialists",
                  "Published researchers and industry thought leaders"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Technical expertise"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Advisory Board</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic advisors provide guidance on industry trends, technology adoption, and global expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Elizabeth Park",
                title: "Former Dean, School of Engineering",
                specialty: "Academic & Research Guidance"
              },
              {
                name: "James Sullivan",
                title: "Ex-VP, Major Construction Firm",
                specialty: "Industry Relations & Strategy"
              },
              {
                name: "Amira Hassan",
                title: "Technology Innovation Leader",
                specialty: "Digital Transformation & AI"
              }
            ].map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted p-8 rounded-lg text-center"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users2 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advisor.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{advisor.title}</p>
                <p className="text-sm font-semibold text-primary">{advisor.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d4d] to-[#0d3333] text-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Work with Industry Leaders
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Partner with a team led by the best minds in engineering and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#a8d96e] text-[#1a4d4d] font-semibold rounded-md hover:bg-[#96c75c] transition-all"
            >
              Start a Project
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#1a4d4d] transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;

