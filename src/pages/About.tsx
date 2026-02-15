import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Nopex Services - Global Engineering Excellence";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Learn about Nopex Services, a global leader in engineering design and BIM consultancy dedicated to transforming ideas into intelligent solutions.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Engineering Excellence. Delivered Globally.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">
              WHO WE ARE
            </h2>
            <p className="text-xl text-foreground mb-6 leading-relaxed">
              Nopex Services is a global engineering design and BIM consultancy dedicated to transforming ideas into intelligent, buildable solutions. We deliver complete Civil, Structural, Architectural, MEP, and Industrial design services — seamlessly integrated through Building Information Modeling (BIM) for enhanced collaboration, coordination, and constructability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to completion, our multidisciplinary teams work with contractors, developers, architects, and engineering firms worldwide to produce technically sound, code-compliant, and sustainable designs that bring projects to life with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower construction and engineering organizations worldwide with innovative, data-driven, and coordinated design solutions that drive efficiency, reduce cost, and accelerate project delivery.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be recognized globally as a trusted engineering and BIM partner — setting the standard for quality, collaboration, and digital transformation in the built environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description: "Honesty, accountability, and reliability form the foundation of everything we do."
              },
              {
                title: "Innovation",
                description: "We embrace the latest tools and technologies to deliver future-ready solutions."
              },
              {
                title: "Precision",
                description: "Every design is developed with accuracy, compliance, and constructability in focus."
              },
              {
                title: "Partnership",
                description: "We collaborate deeply with clients and stakeholders to achieve shared success."
              },
              {
                title: "Sustainability",
                description: "Our approach integrates environmental responsibility and long-term performance in every project."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border-l-4 border-primary"
              >
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">Leadership & Expertise</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl">
            With a global network of engineers, architects, and BIM specialists, Nopex Services combines technical expertise with localized understanding. Our leaders bring decades of multidisciplinary experience across commercial, residential, industrial, and infrastructure projects — managing design documentation and coordination for clients in the U.S., Canada, the Middle East, Europe, and Asia-Pacific.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
            By integrating design intelligence, project data, and construction realities, we deliver outcomes that are as functional as they are visionary.
          </p>
        </div>
      </section>

      {/* Digital Engineering & BIM */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">Digital Engineering & BIM Services</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-4xl">
            At Nopex Services, BIM and digital design are at the heart of how we deliver projects. We model, coordinate, and simulate every element to ensure alignment between disciplines and eliminate design conflicts before construction begins.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our BIM Expertise Includes:</h3>
              <ul className="space-y-3">
                {[
                  "BIM modeling and coordination for architectural, structural, and MEP systems",
                  "Clash detection and constructability reviews using Navisworks and Revit",
                  "3D, 4D, and 5D BIM integration (model + schedule + cost)",
                  "BIM Execution Plans (BEPs) and model setup by LOD (100–500)",
                  "Scan-to-BIM and as-built documentation",
                  "Digital twin development for facility management",
                  "Common Data Environment (CDE) setup and model sharing protocols"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Software Ecosystem:</h3>
              <div className="flex flex-wrap gap-3">
                {["Revit", "Navisworks", "AutoCAD", "Civil 3D", "Tekla", "Dynamo", "BIM 360", "InfraWorks", "SolidWorks", "Inventor", "HAP", "Elite"].map((software) => (
                  <span key={software} className="px-4 py-2 bg-muted rounded-full text-sm font-semibold">
                    {software}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mt-8 leading-relaxed">
                Our Digital Engineering team works collaboratively across time zones, providing centralized coordination that improves efficiency, reduces RFIs, and accelerates delivery — regardless of project location or scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Global Sustainability Commitment</h2>
            <p className="text-lg mb-6 leading-relaxed opacity-90">
              We are committed to designing responsibly and sustainably. Our engineers integrate energy modeling, water reuse strategies, and low-carbon materials to achieve performance-driven designs that align with LEED, BREEAM, WELL, and ASHRAE standards.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              From renewable energy systems to resilient infrastructure, sustainability is embedded in everything we design.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            We Design, Model, and Deliver Worldwide.
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Partner with Nopex Services for globally coordinated engineering and BIM design solutions that turn complex challenges into simple, constructable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Request a Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

