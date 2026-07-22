import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* The Problem / Empathy Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-8 leading-tight">
              Siloed engineering costs you time, money, and momentum.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              When your civil, structural, and MEP teams operate in isolation, the result is inevitable: <strong>clashing designs, endless RFIs, blown budgets, and missed deadlines</strong>. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Navigating multiple specialized firms creates communication bottlenecks that put your entire project at risk. You don't just need engineers—you need a unified engine.
            </p>
            <div className="p-8 bg-gray-50 border-l-4 border-gray-900 rounded-r-lg">
              <p className="text-xl font-bold text-[#000000] italic">
                "We needed a firm that could see the whole picture, not just their piece of the puzzle."
              </p>
            </div>
          </motion.div>

          {/* The Solution Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#00353e] text-white p-10 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Subtle background accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#004a55] rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <div className="text-sm font-bold text-[#aecc53] uppercase tracking-widest mb-4">
                The Nopex Solution
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#aecc53]">
                Flawless integration under one BIM-driven roof.
              </h3>
              
              <ul className="space-y-6 mb-12">
                {[
                  "100% Coordinated Designs: Civil, Structural, Architectural, and MEP aligned from day one.",
                  "Zero Clashes: Advanced 3D BIM modeling detects and resolves issues before they reach the site.",
                  "Single Point of Contact: Eliminate the friction of managing multiple specialized vendors.",
                  "Accelerated Timelines: Parallel workflows mean we deliver faster without sacrificing precision."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#aecc53] shrink-0 mt-0.5" />
                    <span className="text-lg text-white leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00353e] text-white font-bold text-sm hover:bg-gray-800 transition-colors gap-2 w-full sm:w-auto"
              >
                Explore Our Integrated Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
