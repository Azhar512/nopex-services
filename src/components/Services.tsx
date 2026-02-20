import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      image: "https://images.unsplash.com/photo-1590486803033-148108661603?w=800&q=80",
      title: "Civil Engineering",
      description:
        "Site grading, drainage, stormwater, and utility design focused on real-world constructability and code compliance.",
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      title: "Structural Engineering",
      description:
        "Reliable steel, concrete, and rebar detailing that transforms concepts into safe, buildable structures.",
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
      title: "Architectural Design",
      description:
        "Functional and aesthetic building designs, floor plans, and permit sets aligned with modern construction standards.",
    },
    {
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      title: "MEP Design",
      description:
        "Integrated mechanical, electrical, and plumbing systems ensuring energy efficiency and seamless coordination.",
    },
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      title: "Shop Drawings",
      description:
        "Precision fabrication drawings for millwork, stone, tile, and metal — fabrication-ready and code-compliant.",
    },
  ];

  return (
    <section
      id="our-services"
      className="py-20 bg-background"
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
