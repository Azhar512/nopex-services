const fs = require('fs');

const rawData = fs.readFileSync('src/data/services.json', 'utf8');
const services = JSON.parse(rawData);

// Base data templates by discipline
const disciplineTemplates = {
  civil: {
    sectors: ["Commercial Development", "Residential Subdivisions", "Municipal Infrastructure", "Industrial Parks", "Public Works"],
    faqs: [
      { q: "What is your approach to local permitting?", a: "We maintain close relationships with local municipalities and stay updated on zoning laws to expedite the permitting process and ensure compliance." },
      { q: "Do you provide sustainable site design?", a: "Yes, we integrate low-impact development (LID) strategies and sustainable stormwater management into our civil designs." }
    ],
    baseDeliverables: ["Site Plans", "Grading & Drainage Plans", "Utility Layouts", "Erosion Control Plans"]
  },
  structural: {
    sectors: ["Commercial Buildings", "High-Rise Residential", "Industrial Facilities", "Healthcare", "Education"],
    faqs: [
      { q: "Which structural design codes do you follow?", a: "We strictly adhere to IBC, ASCE 7, ACI 318, AISC, and local building codes, ensuring safety and compliance." },
      { q: "Can you coordinate with our architectural Revit models?", a: "Absolutely. We work natively in Revit and integrate our structural models directly with architectural and MEP models for clash-free design." }
    ],
    baseDeliverables: ["Structural Framing Plans", "Foundation Plans", "Detail Sections", "BIM Structural Models"]
  },
  architectural: {
    sectors: ["Corporate Workspaces", "Retail", "Hospitality", "Healthcare", "Mixed-Use Developments"],
    faqs: [
      { q: "Do you handle the complete design process?", a: "Yes, from Schematic Design (SD) and Design Development (DD) through Construction Documents (CD) and administration." },
      { q: "How do you ensure the design meets our budget?", a: "We provide value engineering and continuous cost estimation feedback during the design phases." }
    ],
    baseDeliverables: ["Floor Plans & Elevations", "Reflected Ceiling Plans", "3D Renderings", "Construction Document Sets"]
  },
  mep: {
    sectors: ["Commercial Buildings", "Data Centers", "Hospitals", "Laboratories", "High-Rise Residential"],
    faqs: [
      { q: "Do you perform clash detection for MEP systems?", a: "Yes, we use Navisworks and Revit to perform rigorous clash detection between MEP, structural, and architectural elements." },
      { q: "Are your designs energy efficient?", a: "We prioritize energy-efficient designs that comply with ASHRAE standards and support LEED certification." }
    ],
    baseDeliverables: ["HVAC Layouts", "Electrical Panel Schedules", "Plumbing Riser Diagrams", "Fire Protection Plans"]
  },
  industrial: {
    sectors: ["Manufacturing Plants", "Warehousing", "Food & Beverage", "Pharmaceuticals", "Automotive"],
    faqs: [
      { q: "Can you design process piping systems?", a: "Yes, we specialize in complex process piping, P&ID development, and equipment layout for industrial applications." },
      { q: "Do you upgrade existing facilities?", a: "We offer comprehensive retrofit and facility upgrade engineering, minimizing downtime during installation." }
    ],
    baseDeliverables: ["Piping & Instrumentation Diagrams (P&ID)", "Equipment Layout Plans", "Material Handling Schematics", "3D Plant Models"]
  },
  bim: {
    sectors: ["General Contractors", "Architecture Firms", "MEP Consultants", "Real Estate Developers", "Facility Managers"],
    faqs: [
      { q: "What Level of Development (LOD) do you provide?", a: "We provide BIM modeling from LOD 100 (conceptual) up to LOD 500 (as-built and facility management)." },
      { q: "Which BIM software do you use?", a: "Our primary tools include Autodesk Revit, Navisworks, AutoCAD Civil 3D, ReCap, and BIM 360 for cloud collaboration." }
    ],
    baseDeliverables: ["3D Coordinated Models (RVT/NWD)", "Clash Detection Reports", "Quantity Takeoffs (5D)", "Construction Sequencing (4D)"]
  }
};

const enrichedServices = services.map(service => {
  const tpl = disciplineTemplates[service.discipline] || disciplineTemplates.bim;
  
  return {
    ...service,
    description: `At Nopex Services, our ${service.name} solutions are designed to deliver unparalleled accuracy and efficiency. Leveraging modern technology and industry best practices, we ensure that every aspect of ${service.name.toLowerCase()} aligns seamlessly with your overall project goals. Our dedicated team works closely with stakeholders to reduce risks, optimize costs, and accelerate project timelines.`,
    deliverables: [
      ...tpl.baseDeliverables,
      service.name + " Specific Analysis",
      "Comprehensive Technical Documentation",
      "Quality Assurance Reports"
    ],
    sectors: tpl.sectors,
    faqs: tpl.faqs
  };
});

fs.writeFileSync('src/data/services.json', JSON.stringify(enrichedServices, null, 2));
console.log('Successfully enriched services.json!');
