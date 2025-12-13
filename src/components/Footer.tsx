import { Heart, Linkedin, Mail, Github, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center space-y-6">

          {/* SOCIAL ICONS */}
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/syam-siddu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:syambabu071@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transition-all"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://github.com/syam-00"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
            >
              <Github size={20} />
            </a>

            <a
              href="https://wa.me/917207814693"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-all"
            >
              <Phone size={20} />
            </a>

            <a
              href="https://www.instagram.com/mr__.sidduu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition-all"
            >
              <Instagram size={20} />
            </a>

            <a
              href="tel:7207814693"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* TEXT */}
          <p className="text-gray-400 text-center flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500 fill-current" /> by SYAM BABU | SIDDU
          </p>

          <p className="text-gray-500 text-sm">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
