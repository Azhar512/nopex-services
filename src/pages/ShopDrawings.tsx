import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout, Hammer, Ruler, Layers, Shield, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ShopDrawings = () => {
    useEffect(() => {
        document.title = "Shop Drawing Services | Nopex Services - Precision Fabrication Data";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute("content", "High-precision shop drawing services for millwork, stone, and metal fabrication. We deliver fabrication-ready documents with 99.99% accuracy.");
        }
    }, []);

    const drawingServices = [
        {
            icon: Ruler,
            title: "Millwork & Joinery",
            description: "Precise shop drawings for cabinetry, casework, doors, and custom woodwork tailored for interior contractors.",
            features: ["Custom Millwork", "Kitchen & Closet Units", "Staircase Details"]
        },
        {
            icon: Layers,
            title: "Stone & Surface",
            description: "Accurate layout plans for tile, marble, and granite installations to ensure perfect alignment and zero rework.",
            features: ["Tiling Layouts", "Countertop Profiles", "Terrazzo Patterns"]
        },
        {
            icon: Hammer,
            title: "Metal Fabrication",
            description: "Detailed manufacturing instructions for structural steel, railings, and custom frames with weld specifications.",
            features: ["Steel Shop Drawings", "Connection Details", "Assembly Guidance"]
        }
    ];

    const processSteps = [
        { title: "Discovery", description: "In-depth project brief and RFI phase to align on standards." },
        { title: "Drafting", description: "Developing standards-compliant drawings tailored to your needs." },
        { title: "Quality Check", description: "Rigorous 3-step QC process to ensure 99.99% precision." },
        { title: "Approval", description: "Final updates and submission of fabrication-ready packages." }
    ];

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a4d4d] via-[#2a5d5d] to-[#1a4d4d] text-white">
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
                            <Layout className="w-5 h-5 text-[#a8d96e]" />
                            <span className="text-sm font-semibold tracking-wider">SHOP DRAWING SERVICES</span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                            Precision Drafting.<br />Fabrication Ready.
                        </h1>
                        <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90 max-w-4xl mx-auto">
                            Bridge the gap between design and construction with technical shop drawings that ensure accuracy on-site and efficient manufacturing.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-background">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-5xl font-bold mb-8">What are Shop Drawings?</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                                Shop drawings are the critical link between architectural intent and actual construction. They provide the precise dimensions, fabrication data, and installation instructions needed for unique project components.
                            </p>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                At Nopex Services, we deliver high-quality AutoCAD and Revit shop drawings that eliminate "guesswork" and ensure every component fits perfectly the first time.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                                alt="Shop Drawings Drafting"
                                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-muted">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">Specialized Drafting Expertise</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Dedicated solutions for manufacturers, fabricators, and interior contractors.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {drawingServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-background p-8 rounded-xl shadow-lg border border-border group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Components Section */}
            <section className="py-20 bg-background">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Comprehensive Technical Details</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Material Specs", desc: "Grades, finishes, and treatments." },
                                    { title: "Tolerances", desc: "Exact measurements for fitting." },
                                    { title: "Connection Data", desc: "Welds, bolts, and adhesives." },
                                    { title: "Assembly Info", desc: "Sequential installation guides." }
                                ].map((item, id) => (
                                    <div key={id} className="p-6 bg-muted rounded-lg">
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#1a4d4d] text-white p-12 rounded-2xl">
                            <h3 className="text-3xl font-bold mb-8">Our Process</h3>
                            <div className="space-y-8">
                                {processSteps.map((step, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <div className="w-10 h-10 border-2 border-[#a8d96e] rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[#a8d96e]">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">{step.title}</h4>
                                            <p className="text-white/80">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Eliminate Guesswork on Your Next Project
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Partner with Nopex Services for precision shop drawings that streamline your fabrication process.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all"
                        >
                            Request a Quote
                        </Link>
                        <Link
                            to="/projects"
                            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all overflow-hidden relative group"
                        >
                            <span className="relative z-10">View Our Work</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ShopDrawings;
