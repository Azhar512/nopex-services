import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Building, Layers, Ruler, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Architecture = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const capabilities = [
        {
            title: "Conceptual & Schematic Design",
            description: "Translating vision into form. We develop initial massing, spatial layouts, and aesthetic concepts that align with client goals and site context.",
            icon: <Building className="w-6 h-6" />
        },
        {
            title: "Design Development & Documentation",
            description: "Refining concepts into detailed plans. Our team produces comprehensive drawing sets including floor plans, elevations, sections, and schedules.",
            icon: <Layers className="w-6 h-6" />
        },
        {
            title: "BIM Modeling & Visualization",
            description: "Building virtually before building reality. We create LOD 300-400 Revit models for visualization, clash detection, and quantity extraction.",
            icon: <Ruler className="w-6 h-6" />
        },
        {
            title: "Code Compliance & Permitting",
            description: "Navigating regulatory landscapes. We ensure all designs meet IBC, ADA, and local zoning requirements for smooth approval processes.",
            icon: <FileCheck className="w-6 h-6" />
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground" ref={containerRef}>
            <Navbar />

            {/* ═══════════ HERO ═══════════ */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80"
                        alt="Architecture"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                            <span className="text-sm font-semibold tracking-wider uppercase">Services / Architecture</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                            Designing Spaces with<br />Purpose and Precision.
                        </h1>
                        <p className="text-xl sm:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                            Our architectural design services bridge the gap between creative vision and constructability, delivering coordinated, high-performance designs for the modern world.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ OVERVIEW ═══════════ */}
            <section className="py-24 bg-background">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
                                Integrated Architectural Design
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                At Nopex Services, architecture is more than aesthetics—it’s about functionality, sustainability, and technical excellence. We operate as an extension of your team, providing architectural support that integrates seamlessly with structural and MEP disciplines.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                From residential developments to large-scale commercial complexes, our architects and BIM specialists use the latest technology to deliver accurate, code-compliant, and fabrication-ready documentation.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {["Residential", "Commercial", "Healthcare", "Education", "Hospitality", "Mixed-Use"].map((sector) => (
                                    <div key={sector} className="flex items-center gap-3 p-4 bg-muted rounded-lg border border-border/50">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium text-foreground">{sector}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] rounded-lg overflow-hidden relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                                    alt="Architectural Blueprint"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-2/3 h-1/2 bg-muted -z-0 rounded-lg" />
                            <div className="absolute -top-10 -right-10 w-2/3 h-1/2 border-2 border-primary/20 -z-0 rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ CAPABILITIES ═══════════ */}
            <section className="py-24 bg-muted/30 border-y border-border/50">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Core Capabilities</h2>
                        <p className="text-lg text-muted-foreground">
                            We cover the full spectrum of architectural design, from initial sketches to construction administration support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {capabilities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card p-8 rounded-xl border border-border/50 hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ SOFTWARE ═══════════ */}
            <section className="py-20 bg-background">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-[#1a4d4d] text-white p-12 rounded-2xl overflow-hidden relative">
                        <div className="relative z-10 max-w-xl">
                            <h2 className="text-3xl font-bold mb-6">Powered by Advanced Technology</h2>
                            <p className="text-lg text-white/90 mb-8">
                                We utilize industry-leading software to ensure precision and interoperability across all project phases.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Revit", "AutoCAD", "SketchUp", "Rhino", "Lumion", "3ds Max", "Bluebeam"].map((sw) => (
                                    <span key={sw} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/10">
                                        {sw}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative z-10">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-white text-[#1a4d4d] font-bold rounded-lg hover:bg-gray-100 transition-all"
                            >
                                Consult with an Architect
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Architecture;
