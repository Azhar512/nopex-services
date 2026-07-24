import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Navbar />

      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-sm font-bold text-[#aecc53] uppercase tracking-wider mb-2">Legal</h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00353e] tracking-tight mb-4">Terms of Service</h2>
          <p className="text-gray-500 text-sm">Updated on August 12, 2025</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 border-y py-8 border-gray-200">
          <div>
            <p className="font-bold text-gray-700 text-sm">Effective Date</p>
            <p className="text-gray-600">August 2025</p>
          </div>
          <div>
            <p className="font-bold text-gray-700 text-sm">Provider</p>
            <p className="text-gray-600">Nopex Services</p>
          </div>
          <div>
            <p className="font-bold text-gray-700 text-sm">Address</p>
            <p className="text-gray-600">San Francisco, CA | Lahore, PK</p>
          </div>
          <div>
            <p className="font-bold text-gray-700 text-sm">Contact</p>
            <p className="text-gray-600">info@nopexservices.com • +1 (415) 949-1414</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-10 text-gray-600">
            Welcome to Nopex Services ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our drafting and design services and our website. By engaging with us, you agree to these Terms.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">1. Scope of Services</h3>
              <div className="space-y-4">
                <p>We provide drafting and design services tailored to your needs. Deliverables may include, but are not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full plan sets (cover page, site plan, floor plans, elevations, sections, roof plans, etc.)</li>
                  <li>Representational electrical, plumbing, and mechanical plans</li>
                  <li>Special requests or atypical deliverables (must be confirmed in writing)</li>
                </ul>
                <p>We are not responsible for uncommunicated deliverables. Additional requests after work begins require a formal change order and may incur extra costs.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">2. Revisions (Design Iterations)</h3>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conceptual Phase: Up to 3 complimentary revisions (1 if project value is under $2,000)</li>
                  <li>Construction Drawings: 1 complimentary round; extra revisions at $120/hour</li>
                  <li>City Redline Revisions: Included at no cost</li>
                  <li>Substantial changes are treated as change orders and billed separately</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">3. Change Orders</h3>
              <div className="space-y-4">
                <p>Changes to project scope require a signed Change Order Form. No changes proceed until approved in writing and any additional deposit is paid.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">4. Design Approval</h3>
              <div className="space-y-4">
                <p>You may approve designs via email, verbal confirmation, signed forms, or our digital approval system. Approval means you've reviewed all materials and agree to proceed.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">5. Client Responsibility</h3>
              <div className="space-y-4">
                <p>You must provide accurate site and project information. We are not liable for inaccuracies from incomplete or incorrect information you provide.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">6. Professional Services</h3>
              <div className="space-y-4">
                <p>We are not a licensed architectural or engineering firm. If a professional stamp is needed, we can coordinate with a licensed third party, billed separately.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">7. Code Compliance</h3>
              <div className="space-y-4">
                <p>We design to meet broadly applicable codes, such as the International Residential Code (IRC). Final compliance with local codes is your responsibility unless otherwise agreed in writing.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">8. Construction Responsibility and Liability</h3>
              <div className="space-y-4">
                <p>We do not manage construction and are not liable for construction defects, delays, or issues. Contractors are responsible for following plans and codes.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">9. Limitation of Liability</h3>
              <div className="space-y-4">
                <p>Our total liability is limited to the total amount you paid us for services. We are not liable for consequential, incidental, or special damages.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">10. Pricing and Payment</h3>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deposit: 50% of estimated project value</li>
                  <li>Final Payment: Due upon project completion</li>
                  <li>Additional fees apply for revisions, site visits, or expedited services</li>
                  <li>Down payments are non-refundable once work begins</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">11. Timeline and Delivery</h3>
              <div className="space-y-4">
                <p>Typical turnaround is 8 weeks from deposit, or 2-3 weeks for expedited service. Unresponsiveness for 30+ days may result in proceeding with the latest design direction.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">12. Refund and Cancellation Policy</h3>
              <div className="space-y-4">
                <p>All sales of pre-designed plans and other digital products are final. Due to the digital nature of these products, no refunds, returns, or exchanges will be issued once a purchase is completed.</p>
                <p>For custom drafting and design services, payments are non-refundable after work begins. If a custom project is canceled, you will be billed for hours worked at $120/hour.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">13. Debt Collection</h3>
              <div className="space-y-4">
                <p>Unpaid invoices may incur interest, legal fees, and collection actions, including property liens where permitted.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">14. Client Conduct</h3>
              <div className="space-y-4">
                <p>You agree to maintain professional communication. Harassment or abuse may result in termination.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">15. Dispute Resolution</h3>
              <div className="space-y-4">
                <p>Disputes will first be addressed through mediation in Washington County, Utah, then binding arbitration if unresolved.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">16. Intellectual Property</h3>
              <div className="space-y-4">
                <p>We retain ownership of all designs and materials. You receive a limited license to use them for the agreed project after full payment.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00353e] mb-4">17. General Provisions</h3>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>This is the entire agreement between us.</li>
                  <li>Modifications must be in writing and signed by both parties.</li>
                  <li>If a provision is unenforceable, the rest remain valid.</li>
                  <li>We are not liable for delays caused by events beyond our control (force majeure).</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600 leading-relaxed">
            <p className="font-bold text-gray-900 mb-2">Contact Us</p>
            <p>Nopex Services</p>
            <p>San Francisco, CA | Lahore, PK</p>
            <p className="mt-2">Phone: +1 (415) 949-1414 / 04235970024</p>
            <p>
              Email:{" "}
              <a href="mailto:info@nopexservices.com" className="text-[#00353e] hover:underline font-medium">
                info@nopexservices.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
