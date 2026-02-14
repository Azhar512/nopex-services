import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SocialMedia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-[#1a4d4d] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Social Media</h1>
            <p className="text-xl opacity-90 max-w-3xl">Connect with us on social media for updates and insights.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                platform: "LinkedIn",
                icon: "Linkedin",
                handle: "@nopexservices",
                description: "Follow us for professional updates, project milestones, and career opportunities.",
                link: "https://www.linkedin.com/company/nopexservices"
              },
              {
                platform: "Instagram",
                icon: "Instagram",
                handle: "@nopexservices",
                description: "A behind-the-scenes look at our design process and project completions.",
                link: "https://www.instagram.com/nopexservices"
              },
              {
                platform: "Twitter / X",
                icon: "Twitter",
                handle: "@nopexservices",
                description: "Get real-time updates on industry trends and our latest thought leadership.",
                link: "https://twitter.com/nopexservices"
              },
              {
                platform: "Facebook",
                icon: "Facebook",
                handle: "Nopex Services",
                description: "Connect with our community and stay informed about our events.",
                link: "https://www.facebook.com/nopexservices"
              }
            ].map((social) => (
              <motion.div
                key={social.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-muted p-8 rounded-lg text-center flex flex-col items-center shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-2">{social.platform}</h3>
                <p className="text-primary font-semibold mb-4">{social.handle}</p>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">{social.description}</p>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
                >
                  Visit Profile
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              We use our social platforms to spark conversations about the future of engineering and digital design. Join our global network of innovators.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-muted text-foreground font-semibold rounded-md hover:bg-muted/80 transition-colors"
            >
              Sign up for our Newsletter
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default SocialMedia;
