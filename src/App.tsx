import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import WhoWeAre from "./pages/WhoWeAre";
import OurMission from "./pages/OurMission";
import OurVision from "./pages/OurVision";
import CoreValues from "./pages/CoreValues";
import Leadership from "./pages/Leadership";
import Sustainability from "./pages/Sustainability";
import Markets from "./pages/Markets";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import BIMDigital from "./pages/BIMDigital";
import EngineeringTrends from "./pages/EngineeringTrends";
import IndustryAnalysis from "./pages/IndustryAnalysis";
import Articles from "./pages/Articles";
import Publications from "./pages/Publications";
import LatestPosts from "./pages/LatestPosts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/our-vision" element={<OurVision />} />
            <Route path="/core-values" element={<CoreValues />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bim-digital" element={<BIMDigital />} />
            <Route path="/engineering-trends" element={<EngineeringTrends />} />
            <Route path="/industry-analysis" element={<IndustryAnalysis />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/latest-posts" element={<LatestPosts />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
