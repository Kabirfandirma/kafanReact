import { motion } from "framer-motion";
import profilePic from "../assets/Profile.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <img
            src={profilePic}
            alt="Kabiru Almustapha"
            className="rounded-2xl w-64 h-64 object-cover shadow-lg"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-900">About Me</h2>
          <p className="text-gray-700 mb-4 text-lg">
            I am Kabiru Almustapha, a passionate Graphic Designer and Web
            Developer. I create visually stunning designs and functional web
            solutions that help brands stand out. I love combining creativity
            with technology to build experiences people love.
          </p>

          <p className="text-gray-700 text-lg">
            My skills range from graphic design, UI/UX, branding, to web
            development using React, Tailwind CSS, and modern tools.
          </p>

          {/* Skills */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg text-center font-semibold">
              Graphic Design
            </div>
            <div className="bg-yellow-100 text-yellow-900 px-4 py-2 rounded-lg text-center font-semibold">
              Web Development
            </div>
            <div className="bg-green-100 text-green-900 px-4 py-2 rounded-lg text-center font-semibold">
              UI/UX Design
            </div>
            <div className="bg-purple-100 text-purple-900 px-4 py-2 rounded-lg text-center font-semibold">
              Branding
            </div>
            <div className="bg-pink-100 text-pink-900 px-4 py-2 rounded-lg text-center font-semibold">
              Adobe Suite
            </div>
            <div className="bg-indigo-100 text-indigo-900 px-4 py-2 rounded-lg text-center font-semibold">
              React & Tailwind
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
