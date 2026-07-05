import { MapPin, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-400">
      <div className="max-w-6xl mx-auto px-6 py-10 font-sans flex flex-col md:flex-row justify-between gap-10">

        {/* Left */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-bold text-white text-2xl md:text-[28px]">
            NovaPact
          </h1>

          <p className="mt-3 leading-relaxed text-white text-base md:text-lg">
            NovaPact is a forward-thinking<br />
            ALU think tank revolutionizing education.
          </p>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <h1 className="font-bold mb-4 text-white text-2xl md:text-[28px]">
            Get in touch
          </h1>

          {/* Location */}
          <a
            href="https://www.google.com/maps/search/ALU+Rwanda+campus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start mb-3 space-x-2 text-white text-base md:text-lg"
          >
            <MapPin size={18} />
            <span>ALU, Rwanda</span>
          </a>

          {/* Email */}
          <a
            href="mailto:novapact@gmail.com"
            className="flex items-center justify-center md:justify-start mb-3 space-x-2 text-white text-base md:text-lg"
          >
            <Mail size={18} />
            <span>novapact@gmail.com</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/___thenovapact.6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start space-x-2 text-white text-base md:text-lg"
          >
            <FaInstagram size={18} />
            <span>NovaPact</span>
          </a>

        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/40 mx-4" />

      {/* Bottom */}
      <div className="text-center py-4 text-white text-sm md:text-base">
        © {currentYear} Copyright All Rights Reserved.
      </div>
    </footer>
  );
}