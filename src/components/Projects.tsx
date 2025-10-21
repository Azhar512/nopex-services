import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      title: "Midtown Commercial Complex",
      category: "FLORIDA, USA",
      description: "Architecture | Structural | MEP | BIM Coordination",
    },
    {
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      title: "EV Charging Infrastructure Rollout",
      category: "ONTARIO, CANADA",
      description: "Energy | Electrical | Civil",
    },
    {
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      title: "Industrial Plant Expansion",
      category: "TEXAS, USA",
      description: "Structural | Industrial | Fabrication Drawings",
    },
    {
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      title: "Water Treatment Facility Upgrade",
      category: "DOHA, QATAR",
      description: "Civil | MEP | BIM",
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-xs font-bold text-secondary mb-2 tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
