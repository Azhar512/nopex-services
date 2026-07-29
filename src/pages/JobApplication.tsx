import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Upload, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import careersData from "@/data/careers.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  // Find the specific job using the index from the URL
  const jobIndex = parseInt(jobId || "0", 10);
  const job = careersData[jobIndex];

  useEffect(() => {
    if (!job) {
      navigate("/careers");
      return;
    }
    
    document.title = `Apply for ${job.title} | Nopex Services`;
    window.scrollTo(0, 0);
  }, [job, navigate]);

  if (!job) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-[#00353e] text-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <Link 
            to="/careers" 
            className="inline-flex items-center text-white/70 hover:text-[#aecc53] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Apply for {job.title}
            </h1>
            <div className="flex items-center text-lg text-white/80 gap-2">
              <MapPin className="w-5 h-5 text-[#aecc53]" />
              <span>{job.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 flex-grow bg-muted/30">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="mb-8 border-b pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit Your Application</h2>
              <p className="text-gray-600">Please fill out the form below and attach your resume. Our HR team will review your application and get back to you.</p>
            </div>

            <form 
              action="https://formsubmit.co/hr@nopexservices.com" 
              method="POST" 
              encType="multipart/form-data"
              className="space-y-6"
            >
              {/* Hidden configuration fields for FormSubmit */}
              <input type="hidden" name="_subject" value={`New Job Application: ${job.title} - ${job.location}`} />
              <input type="hidden" name="_next" value={window.location.origin + "/careers"} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="Job Title" value={job.title} />
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-900">Full Name *</label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    className="bg-gray-50 border-gray-200 focus-visible:ring-[#00353e]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-900">Email Address *</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-gray-50 border-gray-200 focus-visible:ring-[#00353e]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-900">Phone Number *</label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  required 
                  className="bg-gray-50 border-gray-200 focus-visible:ring-[#00353e]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="cover_letter" className="text-sm font-semibold text-gray-900">Cover Letter (Optional)</label>
                <Textarea 
                  id="cover_letter" 
                  name="cover_letter" 
                  placeholder="Tell us why you are a great fit for this role..." 
                  className="min-h-[150px] bg-gray-50 border-gray-200 focus-visible:ring-[#00353e]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="resume" className="text-sm font-semibold text-gray-900 block">Upload Resume (PDF, DOCX) *</label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="resume" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500">MAX. 5MB</p>
                    </div>
                    <input id="resume" name="attachment" type="file" className="hidden" accept=".pdf,.doc,.docx" required />
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto px-8 py-6 text-lg bg-[#aecc53] hover:bg-[#9cbd42] text-[#00353e] font-bold shadow-lg flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </Button>
                <p className="text-xs text-gray-500 mt-4 text-center sm:text-left">
                  By submitting this form, you agree to our recruitment privacy policy and terms of service.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobApplication;
