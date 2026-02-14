import { useEffect } from "react";
import { motion } from "framer-motion";
import {
    Layout, Hammer, Ruler, Layers, Shield, Clock, ArrowRight,
    CheckCircle2, Building2, Factory, Hotel, GraduationCap,
    Stethoscope, ShoppingBag, Landmark, Home, Wrench, Users,
    FileCheck, Eye, Send
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ShopDrawings = () => {
    useEffect(() => {
        document.title = "Shop Drawing Services | Nopex Services - Precision Fabrication Drawings";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute("content", "High-precision shop drawing services for millwork, joinery, stone, tile, and metal fabrication. Nopex delivers fabrication-ready documents with 99.99% accuracy for global AEC projects.");
        }
    }, []);

    /* ─── Data ─── */

    const millworkServices = [
        { name: "Custom Millwork Shop Drawings", desc: "Bespoke designs with precise 2D and 3D detailing for millwork fabricators and interior contractors." },
        { name: "Casework Shop Drawings", desc: "Modular cabinetry and storage solutions tailored to architectural standards using AutoCAD." },
        { name: "Woodwork Shop Drawings", desc: "Accurate trims, decorative mouldings, and panelling details for carpentry teams and joinery shops." },
        { name: "Joinery Shop Drawings", desc: "High-quality CAD drawings for doors, partitions, and built-in furniture for interior contractors." },
        { name: "Cabinetry Shop Drawings", desc: "Kitchen, bathroom, and closet cabinetry with precise construction drawing data." },
        { name: "Kitchen Shop Drawings", desc: "Complete kitchen layouts combining shop drawing design and construction documentation for streamlined fabrication." },
        { name: "Staircase & Railing Drawings", desc: "Custom stairways and railing systems with AutoCAD shop drawings for fabricators and general contractors." },
        { name: "Furniture Shop Drawings", desc: "Bespoke furniture manufacturing drawings integrating interior design intent with fabrication accuracy." },
        { name: "Deck Shop Drawings", desc: "Structural clarity for decking contractors and landscape builders using CAD-based detailing." },
        { name: "Door & Window Drawings", desc: "Detailed 2D shop drawings meeting architectural standards for manufacturers and suppliers." }
    ];

    const stoneServices = [
        { name: "Tile Shop Drawings", desc: "Layout plans detailing joints, spacing, transitions, and material types for tiling contractors." },
        { name: "Stone Shop Drawings", desc: "Marble and granite fabrication drawings meeting engineering shop drawing requirements." },
        { name: "Terrazzo Shop Drawings", desc: "Precision patterns, aggregates, and layout plans for terrazzo flooring contractors." },
        { name: "Flooring Shop Drawings", desc: "Hardwood, tile, and mixed flooring solutions using 2D and 3D shop drawings tailored for construction." },
        { name: "Countertop Shop Drawings", desc: "Accurate cut-outs, edge profiles, and material details for kitchen and bath contractors." },
        { name: "Marble & Granite Drawings", desc: "Detailed integration of shop drawing and construction drawing data for high-end builders." },
        { name: "Backsplash & Wall Finish Drawings", desc: "Interior wall surface clarity with precise alignment to design intent." }
    ];

    const metalServices = [
        { name: "Structural Steel Drawings", desc: "Comprehensive detailing for beams, columns, and connections for structural steel contractors." },
        { name: "Fabrication Shop Drawings", desc: "Manufacturing instructions for metal components including weld locations and assembly guidance." },
        { name: "Railing & Handrail Drawings", desc: "Custom metal railing systems with precise connection details and material specifications." },
        { name: "Miscellaneous Metals", desc: "Ladders, platforms, supports, and miscellaneous steel elements with full fabrication data." }
    ];

    const components = [
        { title: "Material Specifications", desc: "Material type, grade, finish, and special treatments required for durability and compliance.", icon: Shield },
        { title: "Precise Dimensions", desc: "Exact measurements with fabrication tolerances for clean fitting and accurate output.", icon: Ruler },
        { title: "Fabrication Techniques", desc: "Instructions for cutting, bending, welding, or assembling as per CAD and engineering standards.", icon: Wrench },
        { title: "Connection Details", desc: "Screws, welds, bolts, adhesives — type, size, location, and spacing for each joint.", icon: Hammer },
        { title: "Installation Guidelines", desc: "On-site instructions including assembly sequence, tools required, and precautions.", icon: FileCheck },
        { title: "Section & Detail Views", desc: "2D and 3D views revealing internal components, hidden parts, and cross-sections.", icon: Eye }
    ];

    const sectors = [
        { name: "Corporate Offices", desc: "Interior fit-outs, partitions, and MEP coordination.", icon: Building2 },
        { name: "Commercial Complexes", desc: "Retail chains, malls, showrooms, and casinos.", icon: ShoppingBag },
        { name: "Hospitality Venues", desc: "Hotels, resorts, and event spaces.", icon: Hotel },
        { name: "Industrial Facilities", desc: "Warehouses, plants, and manufacturing units.", icon: Factory },
        { name: "Healthcare Facilities", desc: "Clinics, labs, hospitals, and medical offices.", icon: Stethoscope },
        { name: "Government Buildings", desc: "Civic, defence, and municipal infrastructure.", icon: Landmark },
        { name: "Educational Institutions", desc: "Schools, universities, and training centres.", icon: GraduationCap },
        { name: "Residential Projects", desc: "Luxury homes, apartments, and multi-family housing.", icon: Home }
    ];

    const processSteps = [
        { step: "01", title: "Project Brief & Discovery", desc: "We begin with a detailed discussion to gather drawings, dimensions, finishes, templates, and all project-specific details. RFIs are raised early to fill any gaps." },
        { step: "02", title: "Drafting & Development", desc: "Our team sets up your files and starts creating accurate, standards-compliant shop drawings tailored to your requirements using AutoCAD and Revit." },
        { step: "03", title: "Internal Quality Check", desc: "Our dedicated QC team and three-step quality check SOPs ensure all drawings meet accuracy, clarity, and compliance standards before the first draft reaches you." },
        { step: "04", title: "Revisions & Approval", desc: "We incorporate your feedback, make updates, and submit final drawings for approval — fabrication-ready and installation-ready." }
    ];

    const softwareStack = [
        { name: "AutoCAD", category: "Primary Drafting" },
        { name: "Revit", category: "BIM Modeling" },
        { name: "Chief Architect", category: "Architectural" },
        { name: "Bluebeam", category: "Review & Markup" },
        { name: "SketchUp", category: "3D Visualization" },
        { name: "SolidWorks", category: "Metal Detailing" }
    ];

    const whyChooseUs = [
        { stat: "20+", label: "Years of Global Experience", desc: "Decades of hands-on expertise across international AEC projects." },
        { stat: "99.99%", label: "Precision Rate", desc: "Meticulous attention to detail eliminating errors and rework." },
        { stat: "500+", label: "Projects Delivered", desc: "Successfully completed shop drawing projects worldwide." },
        { stat: "100%", label: "NDA Compliant", desc: "Your data is always safe with strict confidentiality protocols." }
    ];

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-32 pb-24 text-white overflow-hidden min-h-[600px] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
                        alt="Architectural Blueprints and Technical Drawings"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0d2e2e]/90" />
                </div>
                <div className="max-w-[1400px] mx-auto px-6 relative z-10" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/20" style={{ textShadow: 'none' }}>
                            <Layout className="w-5 h-5 text-[#a8d96e]" />
                            <span className="text-sm font-semibold tracking-wider text-white">SHOP DRAWING SERVICES</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
                            Precision Drafting.<br />Fabrication Ready.
                        </h1>
                        <p className="text-xl md:text-2xl leading-relaxed font-light text-white/95 max-w-3xl mx-auto mb-10">
                            Bridge the gap between design intent and on-site reality with technical shop drawings that ensure accuracy,
                            reduce rework, and accelerate your fabrication timeline.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ textShadow: 'none' }}>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-[#a8d96e] text-[#1a4d4d] font-semibold rounded-md hover:bg-[#96c75c] transition-all inline-flex items-center gap-2"
                            >
                                Request a Quote <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="#our-process"
                                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#1a4d4d] transition-all"
                            >
                                How We Work
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ WHAT ARE SHOP DRAWINGS ═══════════ */}
            <section className="py-20 bg-background">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">ABOUT SHOP DRAWINGS</div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-8">What Are Shop Drawings?</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Shop drawings are detailed fabrication-level documents that translate architectural and engineering
                                designs into precise instructions for manufacturers, fabricators, and installers. They include exact
                                dimensions, material specifications, connection details, and assembly sequences.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Unlike construction drawings that show the overall design intent, shop drawings zoom into individual
                                components — a custom-built staircase, a stone countertop, a steel beam connection — providing the
                                granular detail needed to fabricate and install them correctly the first time.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At <strong>Nopex Services</strong>, we deliver high-quality AutoCAD and Revit shop drawings with a 99.99% precision rate,
                                eliminating guesswork and ensuring every component fits perfectly on-site.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                                alt="Technical Drafting and Blueprints"
                                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                                <div className="text-3xl font-bold">99.99%</div>
                                <div className="text-sm font-medium opacity-90">Precision Rate</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ MILLWORK & JOINERY ═══════════ */}
            <section className="py-20 bg-muted">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                                alt="Millwork and Joinery Craftsmanship"
                                className="w-full h-[450px] object-cover rounded-2xl shadow-2xl mb-6"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80"
                                alt="Custom Kitchen Cabinets"
                                className="w-full h-[250px] object-cover rounded-2xl shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
                                <Ruler className="w-4 h-4" /> MILLWORK, WOODWORK & JOINERY
                            </div>
                            <h2 className="text-4xl font-bold mb-6">Millwork & Joinery Shop Drawings</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Our shop drawing services provide precise detailing for cabinetry, casework, doors, stairs, and
                                custom woodwork. Used by millwork manufacturers, joiners, and interior contractors, they ensure
                                accuracy in fabrication and installation. Each drawing includes dimensions, material specifications,
                                joinery methods, and finish details.
                            </p>
                            <div className="space-y-4">
                                {millworkServices.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        className="bg-background p-5 rounded-lg border border-border hover:shadow-md transition-shadow"
                                    >
                                        <h4 className="font-bold mb-1 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                            {s.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground ml-6">{s.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ STONE, TILE & SURFACE ═══════════ */}
            <section className="py-20 bg-background">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                                <Layers className="w-4 h-4" /> STONE, TILE & SURFACE FINISHES
                            </div>
                            <h2 className="text-4xl font-bold mb-6">Stone & Tile Shop Drawings</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                These architectural shop drawings guide the accurate placement of tiles, stone surfaces,
                                countertops, and flooring. Tile installers, surface finish contractors, shop fitters, and interior
                                teams use them to maintain design intent and avoid costly rework. Each drawing includes layout
                                plans, joint spacing, material types, and edge profiles.
                            </p>
                            <div className="space-y-4">
                                {stoneServices.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        className="bg-muted p-5 rounded-lg border border-border hover:shadow-md transition-shadow"
                                    >
                                        <h4 className="font-bold mb-1 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                            {s.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground ml-6">{s.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80"
                                alt="Stone and Tile Work"
                                className="w-full h-[450px] object-cover rounded-2xl shadow-2xl mb-6"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
                                alt="Stone Countertop Fabrication"
                                className="w-full h-[250px] object-cover rounded-2xl shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ METAL & FABRICATION ═══════════ */}
            <section className="py-20 bg-muted">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                                alt="Metal Fabrication Workshop"
                                className="w-full h-[450px] object-cover rounded-2xl shadow-2xl mb-6"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
                                alt="Structural Steel Work"
                                className="w-full h-[250px] object-cover rounded-2xl shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-6">
                                <Hammer className="w-4 h-4" /> METAL & FABRICATION
                            </div>
                            <h2 className="text-4xl font-bold mb-6">Metal & Fabrication Shop Drawings</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Our engineering shop drawings offer detailed instructions for manufacturing metal components
                                like railings, frames, and custom steelwork. Fabricators and structural contractors rely on these
                                CAD shop drawings for efficient production and on-site accuracy. They cover weld locations,
                                material specs, connection details, and assembly guidance.
                            </p>
                            <div className="space-y-4">
                                {metalServices.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        className="bg-background p-5 rounded-lg border border-border hover:shadow-md transition-shadow"
                                    >
                                        <h4 className="font-bold mb-1 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                            {s.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground ml-6">{s.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ TECHNICAL COMPONENTS ═══════════ */}
            <section className="py-20 bg-background">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">What's Included in Every Shop Drawing</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Every shop drawing package we deliver is fabrication-ready and includes these critical technical details.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {components.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="bg-muted p-8 rounded-xl hover:shadow-lg transition-shadow group"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                                    <c.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ SECTORS WE SERVE ═══════════ */}
            <section className="py-20 bg-gradient-to-br from-[#1a4d4d] to-[#0d3333] text-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Industries We Serve</h2>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Tailored shop drawing services for the unique demands of every sector.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {sectors.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all"
                            >
                                <s.icon className="w-10 h-10 mx-auto mb-4 text-[#a8d96e]" />
                                <h3 className="font-bold mb-2">{s.name}</h3>
                                <p className="text-sm text-white/70">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ OUR PROCESS ═══════════ */}
            <section id="our-process" className="py-20 bg-background">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">HOW WE WORK</div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Our 4-Step Shop Drawing Process</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                                From initial brief to final fabrication-ready drawings, our streamlined process ensures quality,
                                speed, and zero surprises.
                            </p>
                            <div className="space-y-8">
                                {processSteps.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="w-14 h-14 border-2 border-primary rounded-full flex items-center justify-center flex-shrink-0 font-bold text-primary text-lg">
                                            {s.step}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">{s.title}</h4>
                                            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                                alt="Engineering Team Reviewing Drawings"
                                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ SOFTWARE STACK ═══════════ */}
            <section className="py-20 bg-muted">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Software Proficiency</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Industry-leading tools powering every shop drawing we deliver.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {softwareStack.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="bg-background p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-shadow border border-border"
                            >
                                <h3 className="font-bold mb-1">{t.name}</h3>
                                <p className="text-xs text-muted-foreground">{t.category}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ PROFESSIONALS WE SERVE ═══════════ */}
            <section className="py-20 bg-background">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                                alt="Professionals Collaborating"
                                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold mb-8">Professionals We Serve</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Trusted by industry leaders across the AEC sector, Nopex collaborates with a wide range
                                of professionals who rely on accurate shop drawings to bring their designs, components,
                                and products to life.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Fabricators", "Manufacturers", "Installers", "General Contractors",
                                    "Architects", "Suppliers", "Millwork Specialists", "Interior Fit-Out Teams",
                                    "Developers", "Furniture Makers"
                                ].map((p, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                                        <Users className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span className="font-medium text-sm">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════ WHY CHOOSE NOPEX ═══════════ */}
            <section className="py-20 bg-muted">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Nopex for Shop Drawings?</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We understand the challenges in the AEC industry and offer solutions that cater to every stage
                            of your project — from concept to construction.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {whyChooseUs.map((w, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center p-8 bg-background rounded-xl shadow-md"
                            >
                                <div className="text-4xl font-bold text-primary mb-3">{w.stat}</div>
                                <h3 className="text-lg font-semibold mb-2">{w.label}</h3>
                                <p className="text-sm text-muted-foreground">{w.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Standards Compliant", desc: "All drawings adhere to regional building codes, safety norms, and industry best practices." },
                            { icon: Clock, title: "On-Time Delivery", desc: "No delays. No excuses. Dependable, deadline-focused delivery every single time." },
                            { icon: Send, title: "End-to-End Support", desc: "Continuous assistance throughout the project lifecycle — from draft to final delivery." }
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-background p-8 rounded-xl shadow-md flex gap-5"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <v.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ CTA ═══════════ */}
            <section className="py-24 bg-primary text-primary-foreground">
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Streamline Your Fabrication Process?
                    </h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
                        Partner with Nopex Services for precision shop drawings that eliminate errors,
                        reduce rework, and get your project built right — the first time.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-10 py-5 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all text-lg"
                        >
                            Get Started Today
                        </Link>
                        <Link
                            to="/services"
                            className="px-10 py-5 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all text-lg"
                        >
                            Explore All Services
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ShopDrawings;
