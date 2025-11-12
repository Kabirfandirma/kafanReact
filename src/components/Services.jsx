import { motion } from "framer-motion";
import { Monitor, PenTool, Layers, Code } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <PenTool size={32} />,
      title: "Graphic Design",
      desc: "Creating stunning visuals, branding, and marketing materials that stand out.",
    },
    {
      icon: <Monitor size={32} />,
      title: "UI/UX Design",
      desc: "Designing user-friendly interfaces with intuitive experiences for web & mobile.",
    },
    {
      icon: <Code size={32} />,
      title: "Web Development",
      desc: "Building responsive, modern websites using React, Tailwind, and best practices.",
    },
    {
      icon: <Layers size={32} />,
      title: "Branding",
      desc: "Crafting unique brand identities that leave a lasting impression.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">My Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I offer a range of creative services to help your brand shine online
          and offline.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="bg-blue-50 hover:bg-blue-100 transition-all p-6 rounded-2xl shadow-lg flex flex-col items-center text-center gap-4"
          >
            <div className="text-blue-600 mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
