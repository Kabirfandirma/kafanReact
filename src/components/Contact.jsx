import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Got a project or just want to say hi? Send me a message!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4 bg-blue-800 p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded bg-blue-700 border border-blue-600 focus:outline-none focus:border-yellow-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded bg-blue-700 border border-blue-600 focus:outline-none focus:border-yellow-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="px-4 py-3 rounded bg-blue-700 border border-blue-600 focus:outline-none focus:border-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-400 mt-2">Message sent successfully!</p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
          <div className="flex gap-6">
            <a
              href="mailto:yourmail@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Mail size={32} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Github size={32} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Twitter size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
