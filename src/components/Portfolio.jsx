import { motion } from "framer-motion";

// Example project images
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

export default function Portfolio() {
  const projects = [
    { image: project1, title: "Brand Identity Design", link: "#" },
    { image: project2, title: "E-commerce Website", link: "#" },
    { image: project3, title: "UI/UX Mobile App", link: "#" },
    { image: project4, title: "Social Media Graphics", link: "#" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">My Portfolio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of my latest projects showcasing my design and
          development skills.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-900 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
