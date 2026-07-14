import { motion } from "framer-motion";
import { Award, Users, Zap, Shield, Heart, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CoreValues = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      subtitle: "Uncompromising Quality in Every Detail",
      description: "We hold ourselves to the highest standards of technical accuracy, design quality, and professional delivery. Excellence isn't just a goal — it's embedded in every calculation, every drawing, and every client interaction.",
      color: "from-amber-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
    },
    {
      icon: Users,
      title: "Collaboration",
      subtitle: "Stronger Together, Across Borders",
      description: "Engineering is a team sport. We foster open communication, knowledge sharing, and seamless coordination across disciplines, time zones, and cultures to deliver unified solutions.",
      color: "from-blue-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
    },
    {
      icon: Zap,
      title: "Innovation",
      subtitle: "Pioneering Digital Engineering",
      description: "We embrace cutting-edge technology — from BIM and automation to AI-driven design tools — ensuring our clients benefit from the most advanced and efficient workflows available.",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
    },
    {
      icon: Shield,
      title: "Integrity",
      subtitle: "Transparency, Trust, Accountability",
      description: "We operate with honesty and ethical responsibility. Our clients trust us with their projects, and we honor that trust through transparent communication and accountability at every stage.",
      color: "from-teal-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
    },
    {
      icon: Heart,
      title: "Sustainability",
      subtitle: "Designing for a Better Tomorrow",
      description: "We are committed to sustainable design practices that minimize environmental impact, optimize resource efficiency, and contribute to a healthier planet for future generations.",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80"
    },
    {
      icon: Compass,
      title: "Client Success",
      subtitle: "Your Vision, Our Mission",
      description: "We measure our success by yours. Every project is approached with a client-first mindset, ensuring we deliver solutions that align with your goals, timelines, and budgets.",
      color: "from-red-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-8">
              Our Core Values
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90">
              The principles that guide our work, shape our culture, and define who we are as a global engineering partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="space-y-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl mb-6 shadow-lg`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold mb-3">{value.title}</h2>
                  <p className="text-xl text-primary font-semibold mb-6">{value.subtitle}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Values in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values aren't just words on a page — they're lived every day through the way we work, collaborate, and deliver for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "98%",
                label: "Client Satisfaction Rate",
                description: "Our commitment to excellence and client success drives exceptional outcomes."
              },
              {
                stat: "500+",
                label: "Projects Delivered",
                description: "Innovation and collaboration powering successful deliveries worldwide."
              },
              {
                stat: "30+",
                label: "Countries Served",
                description: "Global reach built on integrity and sustainable practices."
              }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 rounded-lg text-center"
              >
                <div className="text-3xl sm:text-5xl font-bold text-primary mb-3">{item.stat}</div>
                <div className="text-xl font-semibold mb-3">{item.label}</div>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Statement */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team culture"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-6">Living Our Values Every Day</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Nopex Services, our core values shape everything we do — from how we recruit and develop talent, to how we approach client relationships and technical challenges.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                These values create a culture of accountability, continuous improvement, and mutual respect. They unite our global teams and ensure that no matter where in the world a project is delivered, it carries the same hallmark of quality, innovation, and integrity.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all"
              >
                Join Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d4d] to-[#0d3333] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Values-Driven Engineering Excellence
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience the difference of working with a partner whose values align with yours.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-[#a8d96e] text-[#1a4d4d] font-semibold rounded-md hover:bg-[#96c75c] transition-all"
          >
            See Our Work
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoreValues;

