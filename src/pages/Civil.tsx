import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, DraftingCompass, Droplets, Map, Truck, FileBarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Civil = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const capabilities = [
        {
            title: "Site Development & Grading",
            description: "Optimizing land use. We provide precise grading plans, earthwork analysis, and site layout designs to minimize costs and ensure proper drainage.",
            icon: <Map className="w-6 h-6" />
        },
        {
            title: "Stormwater Management",
            description: "Sustainable water solutions. Hydrology studies, drainage system design, retention/detention basins, and SWPPP documentation.",
            icon: <Droplets className="w-6 h-6" />
        },
        {
            title: "Utility Infrastructure",
            description: "Connecting the essentials. Design and coordination of water, sewer, and dry utility networks, including conflict resolution with existing systems.",
            icon: <DraftingCompass className="w-6 h-6" />
        },
        {
            title: "Roadway & Pavement Design",
            description: "Efficient access. Complete geometric design for roadways, parking lots, and access driveways, ensuring improved traffic flow and safety.",
            icon: <Truck className="w-6 h-6" />
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground" ref={containerRef}>
            <Navbar />

            {/* ═══════════ HERO ═══════════ */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1600&q=80"
                        alt="Civil Engineering"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                            <span className="text-sm font-semibold tracking-wider uppercase">Services / Civil Engineering</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                            Laying the Foundation<br />for Success.
                        </h1>
                        <p className="text-xl sm:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                            We engineer the ground beneath your project. From complex site grading to sustainable stormwater solutions, our civil designs ensure stability, compliance, and efficiency.
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
                                Comprehensive Civil Design
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Civil engineering is the backbone of infrastructure. Our team delivers precise, constructable designs that navigate technical constraints and regulatory requirements. We use advanced 3D modeling to visualize terrain and infrastructure, identifying potential issues before construction begins.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Whether it's a new land development, municipal infrastructure upgrade, or industrial facility site plan, Nopex Services provides the technical expertise to get your project out of the ground.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {["Land Development", "Municipal Infrastructure", "Transportation", "Water Resources", "Environmental", "Urban Planning"].map((sector) => (
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
                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                                    alt="Site Plan Analysis"
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
                            Delivering accurate, code-compliant civil engineering documentation for projects of all scales.
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
                            <h2 className="text-3xl font-bold mb-6">Precision Tools for Civil Design</h2>
                            <p className="text-lg text-white/90 mb-8">
                                We leverage the power of Civil 3D and other advanced software to simulate site conditions and optimize earthworks.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["AutoCAD Civil 3D", "InfraWorks", "HydroCAD", "Bluebeam", "Storm and Sanitary Analysis", "ArcGIS"].map((sw) => (
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
                                Start Your Project
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

export default Civil;
