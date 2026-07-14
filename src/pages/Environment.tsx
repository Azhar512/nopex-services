import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Leaf, Recycle, Sun, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Environment = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const capabilities = [
        { title: "Environmental Impact Assessment", description: "Analyzing effects. Comprehensive studies to understand and mitigate the environmental impact of development.", icon: <ShieldCheck className="w-6 h-6" /> },
        { title: "Remediation & Restoration", description: "Healing the land. Strategies for cleaning up contaminated sites and restoring natural habitats.", icon: <Recycle className="w-6 h-6" /> },
        { title: "Sustainability & Resilience", description: "Future-proofing. Design strategies that reduce carbon footprint and withstand climate change.", icon: <Leaf className="w-6 h-6" /> },
        { title: "Permitting & Compliance", description: "Navigating regulations. Expert guidance through complex environmental regulatory frameworks.", icon: <Sun className="w-6 h-6" /> }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground" ref={containerRef}>
            <Navbar />
            <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80" alt="Environmental Services" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                            <span className="text-sm font-semibold tracking-wider uppercase">Services / Environment</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Designing for a<br />Sustainable Future.</h1>
                        <p className="text-xl sm:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                            We balance human development with ecological stewardship, delivering solutions that protect our planet and communities.
                        </p>
                    </motion.div>
                </div>
            </section>
            <section className="py-24 bg-background">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">Environmental Stewardship</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Environmental challenges require science-based solutions. Our team of environmental engineers and scientists works to minimize risk and maximize sustainability across all project phases.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {["Air Quality", "Ecology", "Noise & Vibration", "Waste Management", "Climate Change Adaptation", "ESG Advisory"].map((sector) => (
                                    <div key={sector} className="flex items-center gap-3 p-4 bg-muted rounded-lg border border-border/50">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium text-foreground">{sector}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-lg overflow-hidden relative z-10">
                                <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80" alt="Nature and Infrastructure" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-2/3 h-1/2 bg-muted -z-0 rounded-lg" />
                            <div className="absolute -top-10 -right-10 w-2/3 h-1/2 border-2 border-primary/20 -z-0 rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-muted/30 border-y border-border/50">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Capabilities</h2>
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
                </div>
            </section>
            <Footer />
        </div>
    );
};
export default Environment;
