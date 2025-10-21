import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Insights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const insights = [
    {
      date: "October 15, 2024",
      title:
        "NOPEX Services expands BIM capabilities with new digital twin services",
      category: "NEWS",
    },
    {
      date: "September 28, 2024",
      title:
        "NOPEX awarded multidisciplinary design contracts for two major infrastructure projects",
      category: "NEWS",
    },
    {
      date: "September 10, 2024",
      title: "How integrated BIM coordination reduces construction conflicts by 40%",
      category: "INSIGHTS",
    },
  ];

  return (
    <section id="innovation" className="py-20 bg-background" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold mb-8"
            >
              Digital Engineering Powering Tomorrow
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Our technical experts and visionaries harness the power of BIM and integrated design to deliver transformative outcomes for engineering and construction organizations worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/services" className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all group">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* News Sidebar */}
          <div>
            <h3 className="text-xl font-bold mb-6">News</h3>
            <div className="space-y-6">
              {insights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-border pb-6"
                >
                  <div className="text-xs text-muted-foreground mb-2">
                    {item.date}
                  </div>
                  <h4 className="text-sm font-semibold text-primary hover:underline cursor-pointer leading-snug mb-2">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
