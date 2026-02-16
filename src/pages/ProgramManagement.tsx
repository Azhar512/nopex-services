import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardList, TrendingUp, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProgramManagement = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const capabilities = [
        { title: "Program Controls", description: "Staying on track. Rigorous schedule and cost management to prevent overruns and delays.", icon: <ClipboardList className="w-6 h-6" /> },
        { title: "Construction Management", description: "Boots on the ground. Site supervision and quality assurance to ensure design intent is realized.", icon: <Users className="w-6 h-6" /> },
        { title: "Cost Estimating", description: "Accurate forecasting. Detailed quantity takeoffs and pricing at every design stage.", icon: <BarChart3 className="w-6 h-6" /> },
        { title: "Risk Management", description: "Uncertainty mitigation. Identifying and mitigating risks before they become issues.", icon: <TrendingUp className="w-6 h-6" /> }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground" ref={containerRef}>
            <Navbar />
            <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80" alt="Program Management" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>
                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                            <span className="text-sm font-semibold tracking-wider uppercase">Services / Program Management</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Delivering Vision.<br />Managing Complexity.</h1>
                        <p className="text-xl sm:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                            We oversee the big picture. Our program management services ensure that massive infrastructure projects are delivered on time, within budget, and to the highest quality standards.
                        </p>
                    </motion.div>
                </div>
            </section>
            <section className="py-24 bg-background">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">Mastering Delivery</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Complex projects involve thousands of moving parts. Nopex Services acts as the conductor, synchronizing design, procurement, and construction activities. We bring clarity to chaos, acting as the owner's representative to drive success.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {["Program Management", "Construction Supervision", "Project Controls", "Procurement", "Health & Safety", "Quality Management"].map((sector) => (
                                    <div key={sector} className="flex items-center gap-3 p-4 bg-muted rounded-lg border border-border/50">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium text-foreground">{sector}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-lg overflow-hidden relative z-10">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" alt="Project Meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-2/3 h-1/2 bg-muted -z-0 rounded-lg" />
                            <div className="absolute -top-10 -right-10 w-2/3 h-1/2 border-2 border-primary/20 -z-0 rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-muted/30 border-y border-border/50">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Capabilities</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {capabilities.map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card p-8 rounded-xl border border-border/50 hover:shadow-lg transition-all text-left">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};
export default ProgramManagement;
