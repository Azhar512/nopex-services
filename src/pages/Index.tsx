import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// ... other imports
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Insights from "@/components/Insights";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Nopex Services | Engineering Excellence & BIM Design";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Nopex Services delivers integrated engineering design, drafting, and project documentation that shape resilient, efficient, and sustainable environments.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Insights />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
