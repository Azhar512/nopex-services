import { motion } from "framer-motion";
import { TrendingUp, Zap, Brain, Sparkles, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EngineeringTrends = () => {
  const trends = [
    {
      icon: Brain,
      title: "AI & Machine Learning in Design",
      date: "2024 Trend",
      description: "Artificial intelligence is revolutionizing engineering design through generative design, automated code checking, and predictive analytics.",
      impact: "High",
      adoption: "Emerging",
      keyPoints: [
        "Generative design algorithms optimizing structural systems",
        "AI-powered clash detection and resolution",
        "Machine learning for energy performance prediction",
        "Automated code compliance checking"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      icon: Sparkles,
      title: "Digital Twins & Real-Time Monitoring",
      date: "2024 Trend",
      description: "Virtual replicas of physical assets enabling predictive maintenance, operations optimization, and lifecycle management.",
      impact: "Very High",
      adoption: "Growing",
      keyPoints: [
        "IoT sensors integrated with BIM models",
        "Real-time performance monitoring",
        "Predictive maintenance algorithms",
        "Operations cost reduction of 20-30%"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    },
    {
      icon: Zap,
      title: "Modular & Prefabricated Construction",
      date: "2024 Trend",
      description: "Off-site manufacturing and modular construction methods are transforming project delivery timelines and quality control.",
      impact: "High",
      adoption: "Mainstream",
      keyPoints: [
        "50% faster construction timelines",
        "Enhanced quality control in factory settings",
        "Reduced on-site waste by 60%",
        "BIM-enabled fabrication workflows"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
    },
    {
      icon: Globe,
      title: "Net Zero & Carbon Neutral Design",
      date: "2024 Trend",
      description: "Regulatory pressure and client demand driving net-zero energy buildings and carbon-neutral infrastructure projects.",
      impact: "Critical",
      adoption: "Accelerating",
      keyPoints: [
        "Embodied carbon calculations in BIM",
        "Renewable energy integration strategies",
        "Circular economy material selection",
        "Lifecycle carbon assessments"
      ],
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80"
    },
    {
      icon: Shield,
      title: "Cybersecurity in Engineering",
      date: "2024 Trend",
      description: "As projects become more digital and connected, protecting intellectual property and data integrity is paramount.",
      impact: "High",
      adoption: "Essential",
      keyPoints: [
        "Secure BIM data sharing protocols",
        "Blockchain for supply chain verification",
        "Zero-trust architecture for project networks",
        "IP protection in global collaboration"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      icon: TrendingUp,
      title: "Advanced Robotics & Automation",
      date: "2024 Trend",
      description: "Robotic construction, automated surveying, and drone inspection are enhancing safety, speed, and precision.",
      impact: "High",
      adoption: "Growing",
      keyPoints: [
        "Autonomous construction robots",
        "Drone-based site surveying and inspection",
        "Automated rebar tying and bricklaying",
        "Real-time progress tracking with computer vision"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
    }
  ];

  const statistics = [
    { number: "73%", label: "of firms investing in AI", source: "McKinsey 2024" },
    { number: "45%", label: "faster with modular construction", source: "Industry Report" },
    { number: "$12T", label: "digital twin market by 2030", source: "Markets & Markets" },
    { number: "Net Zero", label: "by 2050 commitment", source: "Global AEC Industry" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)',
          }} />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider">ENGINEERING TRENDS 2024</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              The Future of Engineering is Now
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90">
              Explore the technologies, methodologies, and innovations reshaping the AEC industry in 2024 and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-12 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.source}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">
              Engineering at an Inflection Point
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The engineering and construction industry is undergoing its most significant transformation in decades. Digital technologies, sustainability imperatives, and changing workforce dynamics are converging to reshape how we design and build. Here are the six most impactful trends defining 2024.
            </p>
          </div>
        </div>
      </section>

      {/* Trends Detail */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="space-y-20">
            {trends.map((trend, index) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <trend.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-1">{trend.date}</div>
                      <div className="flex gap-3 text-xs">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                          Impact: {trend.impact}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                          {trend.adoption}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl sm:text-4xl font-bold mb-4">{trend.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {trend.description}
                  </p>
                  
                  <div className="bg-background p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">Key Developments:</h3>
                    <ul className="space-y-3">
                      {trend.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={trend.image}
                        alt={trend.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means for You */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">What This Means for Your Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Nopex Services, we're not just following trends — we're implementing them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Adopter Advantage",
                description: "We invest in emerging technologies so you benefit from cutting-edge capabilities without the learning curve or implementation risk."
              },
              {
                title: "Future-Proof Designs",
                description: "Our designs leverage these trends to ensure your project remains relevant, efficient, and valuable for decades to come."
              },
              {
                title: "Competitive Edge",
                description: "Partnering with us means accessing innovation that gives you a measurable advantage in project delivery and operations."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d4d] to-[#0d3333] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Stay Ahead of Industry Trends
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Subscribe to our monthly insights newsletter for the latest engineering trends, BIM innovations, and project success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-md text-gray-900"
            />
            <button className="px-8 py-4 bg-[#a8d96e] text-[#1a4d4d] font-semibold rounded-md hover:bg-[#96c75c] transition-all whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore More Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "BIM & Digital Engineering", link: "/bim-digital", desc: "Deep dive into BIM technologies" },
              { title: "Industry Analysis", link: "/industry-analysis", desc: "Market trends and forecasts" },
              { title: "Latest Articles", link: "/articles", desc: "Read our latest thought leadership" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="block p-8 bg-muted rounded-lg hover:shadow-lg transition-all group"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EngineeringTrends;

