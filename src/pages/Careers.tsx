import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Users, Briefcase, GraduationCap, DollarSign, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import careersData from "@/data/careers.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers | Nopex Services - Join Our Global Engineering Team";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Build your career with Nopex Services. We offer global opportunities for BIM coordinators, engineers, and project managers in a dynamic, innovative environment.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#00353e] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Join Our Global Team
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Be part of a dynamic engineering team that's shaping the future through innovative design,
              BIM technology, and sustainable solutions across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Why Choose Nopex Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer more than just a job – we provide opportunities for growth, innovation, and global impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-background rounded-lg shadow-lg"
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Global Impact</h3>
              <p className="text-muted-foreground">
                Work on projects that span continents and make a real difference in communities worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-background rounded-lg shadow-lg"
            >
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible working arrangements and comprehensive benefits that support your personal and professional growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-background rounded-lg shadow-lg"
            >
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Global Opportunities</h3>
              <p className="text-muted-foreground">
                Work from our offices worldwide or remotely, with opportunities for international assignments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job opportunities and find your next career move.
            </p>
          </div>

          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {careersData.map((job: any, index: number) => (
                <AccordionItem 
                  key={index} 
                  value={`job-${index}`} 
                  className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden px-2"
                >
                  <AccordionTrigger className="hover:no-underline py-6 px-4">
                    <div className="flex flex-col md:flex-row md:items-center text-left gap-4 w-full pr-4">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                          {job.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="shrink-0 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">
                        View Details
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-4 pb-8">
                    <div className="pt-6 border-t border-gray-100 grid lg:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        {/* Profile Section */}
                        {job.profile && job.profile.length > 0 && (
                          <div>
                            <h4 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                              <Target className="w-5 h-5 mr-2 text-primary" />
                              Target Profile
                            </h4>
                            <div className="space-y-3">
                              {job.profile.map((item: string, i: number) => (
                                <p key={i} className="text-gray-600 leading-relaxed text-sm">{item}</p>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Responsibilities Section */}
                        {job.responsibilities && job.responsibilities.length > 0 && (
                          <div>
                            <h4 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                              <Briefcase className="w-5 h-5 mr-2 text-primary" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-3">
                              {job.responsibilities.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="space-y-8">
                        {/* Requirements Section */}
                        {job.requirements && job.requirements.length > 0 && (
                          <div>
                            <h4 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                              <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                              Technical & Niche Requirements
                            </h4>
                            <ul className="space-y-3">
                              {job.requirements.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Compensation Section */}
                        {job.compensation && job.compensation.length > 0 && (
                          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                              <DollarSign className="w-5 h-5 mr-2 text-primary" />
                              Compensation & Incentives
                            </h4>
                            <ul className="space-y-3">
                              {job.compensation.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 font-medium text-sm">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="pt-6">
                          <a
                            href="mailto:hr@nopexservices.com"
                            className="inline-flex items-center px-8 py-4 bg-[#00353e] text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 w-full justify-center"
                          >
                            Apply for this Position
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
          </p>
          <a
            href="mailto:hr@nopexservices.com"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Send Your Resume
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
