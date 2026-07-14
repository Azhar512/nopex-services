import { motion } from "framer-motion";
import { BarChart3, TrendingUp, DollarSign, Users, Globe2, Building } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IndustryAnalysis = () => {
  const marketData = [
    {
      icon: DollarSign,
      title: "Global AEC Market Size",
      value: "$10.5 Trillion",
      growth: "+5.2% CAGR",
      year: "2024-2030",
      description: "The global architecture, engineering, and construction market continues steady growth driven by infrastructure investment and urbanization."
    },
    {
      icon: TrendingUp,
      title: "BIM Market Growth",
      value: "$15.8 Billion",
      growth: "+14.5% CAGR",
      year: "2024-2030",
      description: "Building Information Modeling adoption accelerating as mandatory BIM regulations expand globally."
    },
    {
      icon: Users,
      title: "Engineering Services",
      value: "$1.8 Trillion",
      growth: "+6.1% CAGR",
      year: "2024-2029",
      description: "Demand for specialized engineering design services growing across infrastructure and building sectors."
    },
    {
      icon: Globe2,
      title: "Offshore Design Market",
      value: "$125 Billion",
      growth: "+8.3% CAGR",
      year: "2024-2028",
      description: "Global design collaboration and offshore engineering services expanding as firms optimize costs and access global talent."
    }
  ];

  const regionalInsights = [
    {
      region: "North America",
      marketSize: "$1.8T",
      growth: "4.8%",
      trends: [
        "Infrastructure Investment and Jobs Act driving $1.2T in projects",
        "Net-zero building codes adoption accelerating",
        "Labor shortage pushing automation and BIM adoption",
        "Modular construction gaining market share"
      ],
      opportunities: [
        "Transportation infrastructure modernization",
        "Data center and tech facility boom",
        "Green building retrofits",
        "Water infrastructure upgrades"
      ]
    },
    {
      region: "Middle East",
      marketSize: "$875B",
      growth: "7.2%",
      trends: [
        "Saudi Vision 2030 mega-projects (NEOM, The Line)",
        "Expo 2030 Riyadh infrastructure development",
        "Smart city initiatives across GCC nations",
        "Mandatory BIM implementation for public projects"
      ],
      opportunities: [
        "Mixed-use and hospitality developments",
        "Industrial and petrochemical facilities",
        "Renewable energy infrastructure",
        "Airport and transportation hubs"
      ]
    },
    {
      region: "Asia-Pacific",
      marketSize: "$4.2T",
      growth: "6.5%",
      trends: [
        "Rapid urbanization driving residential demand",
        "Belt and Road Initiative infrastructure",
        "Southeast Asia manufacturing expansion",
        "Green building certification momentum"
      ],
      opportunities: [
        "High-rise residential and commercial",
        "Industrial parks and logistics centers",
        "Transit-oriented developments",
        "Smart city infrastructure"
      ]
    }
  ];

  const sectorsAnalysis = [
    {
      sector: "Transportation",
      value: "$2.4T",
      keyDrivers: "Aging infrastructure, EV charging networks, autonomous vehicle infrastructure",
      outlook: "Very Strong"
    },
    {
      sector: "Energy & Utilities",
      value: "$1.9T",
      keyDrivers: "Renewable energy transition, grid modernization, hydrogen infrastructure",
      outlook: "Strong"
    },
    {
      sector: "Commercial Buildings",
      value: "$1.5T",
      keyDrivers: "Office-to-residential conversions, data centers, mixed-use developments",
      outlook: "Moderate"
    },
    {
      sector: "Industrial",
      value: "$1.2T",
      keyDrivers: "Reshoring manufacturing, warehouse automation, cleanroom facilities",
      outlook: "Strong"
    },
    {
      sector: "Water & Wastewater",
      value: "$745B",
      keyDrivers: "Aging infrastructure, climate resilience, advanced treatment technologies",
      outlook: "Very Strong"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E")'
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
              <BarChart3 className="w-5 h-5 text-[#a8d96e]" />
              <span className="text-sm font-semibold tracking-wider">INDUSTRY ANALYSIS 2024</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              AEC Industry Outlook & Market Intelligence
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90">
              Data-driven insights into global construction, engineering markets, and emerging opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Overview Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Global Market Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key market segments and growth projections shaping the AEC industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketData.map((market, index) => (
              <motion.div
                key={market.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <market.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{market.title}</h3>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-2xl sm:text-4xl font-bold text-primary">{market.value}</span>
                      <span className="text-green-600 font-semibold">{market.growth}</span>
                      <span className="text-sm text-muted-foreground">{market.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{market.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Analysis */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Regional Market Analysis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep-dive into key regional markets and growth opportunities.
            </p>
          </div>

          <div className="space-y-12">
            {regionalInsights.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{region.region}</h3>
                    <div className="flex items-baseline gap-4">
                      <span className="text-2xl font-bold text-primary">{region.marketSize}</span>
                      <span className="text-green-600 font-semibold">{region.growth} Growth</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">
                    {index === 0 ? "Mature Market" : index === 1 ? "High Growth" : "Emerging"}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Trends</h4>
                    <ul className="space-y-3">
                      {region.trends.map((trend, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{trend}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Growth Opportunities</h4>
                    <ul className="space-y-3">
                      {region.opportunities.map((opp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{opp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Analysis */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Sector-by-Sector Analysis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Market size, key drivers, and outlook for major AEC sectors.
            </p>
          </div>

          <div className="space-y-6">
            {sectorsAnalysis.map((sector, index) => (
              <motion.div
                key={sector.sector}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted p-6 rounded-lg flex items-center gap-6 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0">
                  <Building className="w-12 h-12 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{sector.sector}</h3>
                    <span className="text-2xl font-bold text-primary">{sector.value}</span>
                  </div>
                  <p className="text-muted-foreground mb-3">{sector.keyDrivers}</p>
                  <div className={`inline-px-4 py-1 rounded-full text-sm font-semibold ${
                    sector.outlook === "Very Strong" ? "bg-green-100 text-green-700" :
                    sector.outlook === "Strong" ? "bg-blue-100 text-blue-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    Outlook: {sector.outlook}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Recommendations */}
      <section className="py-20 bg-gradient-to-br from-[#1a4d4d] to-[#0d3333] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Strategic Recommendations</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Actionable insights for navigating the evolving AEC landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Invest in Digital Capabilities",
                description: "Firms with advanced BIM and digital engineering capabilities are capturing premium project opportunities and commanding higher margins."
              },
              {
                title: "Geographic Diversification",
                description: "Balance portfolio across mature and high-growth markets to optimize risk and capture emerging opportunities in Middle East and Asia-Pacific."
              },
              {
                title: "Specialize & Scale",
                description: "Deep expertise in high-growth sectors (data centers, renewable energy, water infrastructure) combined with scalable delivery models wins."
              }
            ].map((rec, index) => (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{rec.title}</h3>
                <p className="opacity-90 leading-relaxed">{rec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Need Custom Market Research?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our market intelligence team can provide tailored analysis for your specific sector, region, or project type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all"
            >
              Request Custom Analysis
            </Link>
            <Link
              to="/engineering-trends"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all"
            >
              View Engineering Trends
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryAnalysis;

