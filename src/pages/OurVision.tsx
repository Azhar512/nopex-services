import { motion } from "framer-motion";
import { Eye, Lightbulb, Rocket, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurVision = () => {
  const visionPillars = [
    {
      icon: Globe2,
      title: "Global Leadership",
      description: "To be the most trusted partner for integrated engineering design and BIM solutions worldwide.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Digital Innovation",
      description: "Pioneer the future of digital engineering through advanced BIM, AI, and automation technologies.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Sustainable Growth",
      description: "Drive sustainable practices that reduce environmental impact while delivering exceptional value.",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,217,110,0.1),transparent_50%)]" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <Eye className="w-5 h-5 text-[#a8d96e]" />
              <span className="text-sm font-semibold tracking-wider">OUR VISION</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Shaping the Future of Engineering Design
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90">
              To be the global leader in integrated engineering design and BIM innovation — empowering clients to build smarter, faster, and more sustainably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement Detail */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold mb-8">
                A World Built on Precision & Innovation
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                We envision a future where every infrastructure project, every building, and every industrial facility is designed with unparalleled precision, coordinated through intelligent digital workflows, and delivered with zero compromise on quality or sustainability.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                By 2030, Nopex Services will be recognized as the go-to partner for Fortune 500 companies, leading contractors, and visionary developers seeking integrated, BIM-enabled engineering solutions that transform the built environment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Future of engineering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars of Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Three Pillars of Our Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our vision is built on three fundamental commitments that drive every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full">
                  <div className={`w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey to 2030</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A roadmap of innovation, growth, and global impact.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2025",
                title: "Digital Transformation",
                description: "Implement AI-powered design automation and advanced clash detection systems across all disciplines.",
                progress: 75
              },
              {
                year: "2027",
                title: "Global Expansion",
                description: "Establish dedicated design centers in 5 new countries, serving 50+ nations with local expertise.",
                progress: 45
              },
              {
                year: "2030",
                title: "Industry Leadership",
                description: "Become the #1 choice for Fortune 500 companies seeking integrated BIM and engineering design solutions.",
                progress: 20
              }
            ].map((goal, index) => (
              <motion.div
                key={goal.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0 w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">{goal.year}</span>
                  </div>
                  
                  <div className="flex-1 bg-muted p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-3">{goal.title}</h3>
                    <p className="text-muted-foreground mb-4">{goal.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-primary to-[#a8d96e]"
                      />
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">{goal.progress}% Progress</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d4d] to-[#2a5d5d] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Building Tomorrow, Today
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Our vision isn't just about growing our business — it's about transforming how the world designs, builds, and maintains the built environment. Through innovation, collaboration, and unwavering commitment to excellence, we're creating a legacy of engineering that will shape generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="px-8 py-4 bg-[#a8d96e] text-[#1a4d4d] font-semibold rounded-md hover:bg-[#96c75c] transition-all"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#1a4d4d] transition-all"
              >
                Join Our Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurVision;

