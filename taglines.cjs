const fs = require('fs');

const rawData = fs.readFileSync('src/data/services.json', 'utf8');
const services = JSON.parse(rawData);

// Generate unique taglines based on name
const generateTagline = (name, discipline) => {
  const generic = "Engineering the foundation for tomorrow's developments.";
  
  if (name.includes("Site Development")) return "Laying the groundwork for scalable, sustainable development.";
  if (name.includes("Stormwater")) return "Innovative solutions for water management and environmental protection.";
  if (name.includes("Transportation")) return "Connecting communities with safe, efficient infrastructure.";
  if (name.includes("Steel Detailing")) return "Precision detailing for flawless structural fabrication.";
  if (name.includes("Seismic")) return "Upgrading structures to withstand the test of time and nature.";
  if (name.includes("Interior Design")) return "Crafting functional, aesthetic spaces that inspire.";
  if (name.includes("3D Rendering")) return "Bringing your visionary designs to life in photorealistic detail.";
  if (name.includes("Mechanical") || name.includes("HVAC")) return "Optimizing indoor climates for comfort and energy efficiency.";
  if (name.includes("Electrical")) return "Empowering facilities with resilient and intelligent power systems.";
  if (name.includes("Plumbing")) return "Engineered fluid systems that are safe, reliable, and efficient.";
  if (name.includes("Fire Protection")) return "Safeguarding lives and assets with advanced fire safety designs.";
  if (name.includes("Process & Piping")) return "Streamlining complex industrial processes for maximum throughput.";
  if (name.includes("Scan to BIM")) return "Capturing reality to build intelligent, data-rich 3D models.";
  if (name.includes("Clash Detection")) return "Resolving conflicts digitally before they occur on-site.";
  if (name.includes("4D")) return "Adding the dimensions of time and cost to your BIM strategy.";
  
  switch(discipline) {
    case 'civil': return "Building the infrastructure of tomorrow, today.";
    case 'structural': return "Ensuring strength, stability, and safety in every design.";
    case 'architectural': return "Where visionary aesthetics meet pragmatic design.";
    case 'mep': return "Integrating intelligent systems for high-performance buildings.";
    case 'industrial': return "Engineering efficient, high-capacity facilities for the future.";
    case 'bim': return "Digital precision driving real-world construction excellence.";
    default: return generic;
  }
};

const updatedServices = services.map(service => {
  return {
    ...service,
    tagline: generateTagline(service.name, service.discipline)
  };
});

fs.writeFileSync('src/data/services.json', JSON.stringify(updatedServices, null, 2));
console.log("Successfully added taglines to services.json!");
