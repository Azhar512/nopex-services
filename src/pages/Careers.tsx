import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers | Nopex Services - Join Our Global Engineering Team";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Build your career with Nopex Services. We offer global opportunities for BIM coordinators, engineers, and project managers in a dynamic, innovative environment.");
    }
  }, []);

  const jobOpenings = [
    {
      title: "Senior BIM Coordinator",
      location: "Dubai, UAE",
      type: "Full-time",
      department: "BIM & Digital Engineering",
      description: "Lead BIM coordination across multidisciplinary projects, ensuring clash-free designs and seamless collaboration.",
      requirements: [
        "5+ years BIM coordination experience",
        "Proficiency in Revit, Navisworks, and BIM 360",
        "Strong project management skills",
        "Experience with large-scale infrastructure projects"
      ]
    },
    {
      title: "Civil Engineer",
      location: "Toronto, Canada",
      type: "Full-time",
      department: "Civil Engineering",
      description: "Design and coordinate civil infrastructure projects including roads, utilities, and site development.",
      requirements: [
        "Bachelor's in Civil Engineering",
        "P.Eng designation preferred",
        "AutoCAD Civil 3D expertise",
        "3+ years relevant experience"
      ]
    },
    {
      title: "MEP Design Engineer",
      location: "London, UK",
      type: "Full-time",
      department: "MEP Engineering",
      description: "Design mechanical, electrical, and plumbing systems for commercial and industrial buildings.",
      requirements: [
        "Degree in Mechanical or Electrical Engineering",
        "Revit MEP proficiency",
        "Energy modeling experience",
        "LEED certification preferred"
      ]
    },
    {
      title: "Project Manager",
      location: "Singapore",
      type: "Full-time",
      department: "Project Management",
      description: "Oversee project delivery, client relationships, and team coordination across global projects.",
      requirements: [
        "PMP certification preferred",
        "10+ years project management experience",
        "Engineering background",
        "International project experience"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white">
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
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Current Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our current job opportunities and find your next career move.
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-4 lg:mt-0 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors gap-2"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className="text-muted-foreground mb-4">{job.description}</p>

                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors gap-2"
          >
            Send Your Resume
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
