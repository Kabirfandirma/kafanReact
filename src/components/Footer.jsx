import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Kabiru Almustapha. All rights
          reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-yellow-400 transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/mprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://twitter.com/myprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com/myprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
