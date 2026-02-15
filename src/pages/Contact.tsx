import { useEffect, useState } from "react";
// ... other imports
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details (min 10 characters)"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Nopex Services - Get in Touch for Engineering Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Contact Nopex Services for integrated engineering and BIM design solutions. Reach out to our teams in San Francisco or Lahore.");
    }
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);
    toast.success("Message sent successfully! Our team will contact you soon.");
    reset();
    setIsSubmitting(false);
  };

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
              Let's Design Something Extraordinary Together
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Have an engineering or design project in mind? Get in touch with our global team to discuss how we can deliver integrated, BIM-enabled design solutions that ensure your project's success from concept to completion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-2 text-foreground">
                      First Name *
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      id="firstName"
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${errors.firstName ? "border-destructive" : "border-border"
                        }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-destructive">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-2 text-foreground">
                      Last Name *
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      id="lastName"
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${errors.lastName ? "border-destructive" : "border-border"
                        }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-destructive">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${errors.email ? "border-destructive" : "border-border"
                      }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2 text-foreground">
                    Company
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2 text-foreground">
                    Service of Interest *
                  </label>
                  <select
                    {...register("service")}
                    id="service"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${errors.service ? "border-destructive" : "border-border"
                      }`}
                  >
                    <option value="">Select a service</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="structural">Structural Engineering</option>
                    <option value="architecture">Architecture & Design</option>
                    <option value="mep">MEP Engineering</option>
                    <option value="industrial">Industrial & Fabrication</option>
                    <option value="bim">BIM & Digital Engineering</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Project Details *
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground ${errors.message ? "border-destructive" : "border-border"
                      }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team is ready to discuss your engineering and design needs. Reach out to us through any of the channels below, and we'll get back to you promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@nopexservices.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@nopexservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+14159491414" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        US: +1 (415) 949-1414
                      </a>
                      <a href="tel:04235970024" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        PK: 04235970024
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Global Offices</h3>
                    <p className="text-muted-foreground">
                      United States (San Francisco)<br />
                      Pakistan (Lahore)
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 p-6 bg-muted rounded-lg">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  * Times shown are EST. We serve clients globally across all time zones.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with Nopex Services for globally coordinated engineering and BIM design solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@nopexservices.com"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all"
            >
              Email Us Directly
            </a>
            <a
              href="tel:+14159491414"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all"
            >
              Call US Office
            </a>
            <a
              href="tel:04235970024"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all"
            >
              Call PK Office
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

