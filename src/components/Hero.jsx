import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white px-4"
    >
      {/* Name & Intro */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Hi, I’m <span className="text-yellow-400">Kabiru Almustapha</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg md:text-2xl max-w-2xl"
      >
        I’m a creative Graphic Designer & Web Developer passionate about
        building stunning, functional designs that make brands shine.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <a
          href="#portfolio"
          className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-blue-900 transition-all"
        >
          Hire Me
        </a>
      </motion.div>

      {/* Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-12"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
