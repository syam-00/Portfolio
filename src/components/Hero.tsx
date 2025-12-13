import { Linkedin, Mail, Phone, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="order-2 md:order-1 space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                SYAM BABU
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 font-medium">
                Junior Developer | Web Developer
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Computer Science student passionate about web development and data analytics.
              Currently pursuing BTech while building modern web applications.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/syam-siddu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 text-blue-600"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:syambabu071@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 text-blue-600"
              >
                <Mail size={24} />
              </a>

              <a
                href="https://wa.me/917207814693"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 text-green-600"
              >
                <Phone size={24} />
              </a>

              <a
                href="tel:7207814693"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 text-blue-600"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="relative group">
  {/* Glow */}
  <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"></div>

  {/* Image */}
  <img
    src="/linkedin.jpg"
    alt="Syam Siddu"
    className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-white
               transition-all duration-500 ease-out
               group-hover:-translate-y-3
               group-hover:scale-105
               group-hover:rotate-1"
  />
</div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
