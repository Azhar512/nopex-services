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
import ShopDrawings from "./pages/ShopDrawings";
import EngineeringTrends from "./pages/EngineeringTrends";
import IndustryAnalysis from "./pages/IndustryAnalysis";
import Articles from "./pages/Articles";
import Publications from "./pages/Publications";
import LatestPosts from "./pages/LatestPosts";
import CaseStudies from "./pages/CaseStudies";
import Careers from "./pages/Careers";
import Offices from "./pages/Offices";
import Sitemap from "./pages/Sitemap";
import WithoutLimits from "./pages/WithoutLimits";
import News from "./pages/News";
import Blog from "./pages/Blog";
import SocialMedia from "./pages/SocialMedia";
import ContractVehicles from "./pages/ContractVehicles";
import SupplyChain from "./pages/SupplyChain";
import AntiHumanTrafficking from "./pages/AntiHumanTrafficking";
import ModernSlavery from "./pages/ModernSlavery";
import RecruitmentPrivacy from "./pages/RecruitmentPrivacy";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
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
          <Route path="/shop-drawings" element={<ShopDrawings />} />
          <Route path="/engineering-trends" element={<EngineeringTrends />} />
          <Route path="/industry-analysis" element={<IndustryAnalysis />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/latest-posts" element={<LatestPosts />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/without-limits" element={<WithoutLimits />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/contract-vehicles" element={<ContractVehicles />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/anti-human-trafficking" element={<AntiHumanTrafficking />} />
          <Route path="/modern-slavery" element={<ModernSlavery />} />
          <Route path="/recruitment-privacy" element={<RecruitmentPrivacy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
