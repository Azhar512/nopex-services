import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
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
              Terms of Use
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Please read these terms and conditions carefully before using our website and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold mb-6">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of the materials on Nopex Services' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">3. Disclaimer</h2>
            <p className="text-muted-foreground mb-6">
              The materials on Nopex Services' website are provided on an 'as is' basis. Nopex Services makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-3xl font-bold mb-6">4. Limitations</h2>
            <p className="text-muted-foreground mb-6">
              In no event shall Nopex Services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Nopex Services' website, even if Nopex Services or a Nopex Services authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>

            <h2 className="text-3xl font-bold mb-6">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground mb-6">
              The materials appearing on Nopex Services' website could include technical, typographical, or photographic errors. Nopex Services does not warrant that any of the materials on its website are accurate, complete, or current. Nopex Services may make changes to the materials contained on its website at any time without notice. However, Nopex Services does not make any commitment to update the materials.
            </p>

            <h2 className="text-3xl font-bold mb-6">6. Links</h2>
            <p className="text-muted-foreground mb-6">
              Nopex Services has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Nopex Services of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-3xl font-bold mb-6">7. Modifications</h2>
            <p className="text-muted-foreground mb-6">
              Nopex Services may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-3xl font-bold mb-6">8. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-2">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <p className="text-muted-foreground">
                Email: info@nopexservices.com<br />
                Phone: +1 (415) 949-1414<br />
                Address: 18 Bartol Street, San Francisco CA 94133
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
