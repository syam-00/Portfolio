import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_waags9f',
        'template_tou7533',
        formRef.current,
        'EeHWRfkYJ3r6noaSm'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert('Failed to send message');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Feel free to reach out for collaborations or opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* LEFT SIDE */}
          <div className="space-y-4">
            <a href="mailto:syambabu071@gmail.com" className="flex gap-4 p-4 bg-white rounded-lg shadow-md">
              <Mail className="text-blue-600" />
              <span>syambabu071@gmail.com</span>
            </a>

            <a href="tel:7207814693" className="flex gap-4 p-4 bg-white rounded-lg shadow-md">
              <Phone className="text-green-600" />
              <span>+91 7207814693</span>
            </a>

            <a
              href="https://www.linkedin.com/in/syam-siddu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 bg-white rounded-lg shadow-md"
            >
              <Linkedin className="text-blue-600" />
              <span>linkedin.com/in/syam-siddu</span>
            </a>

            <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md">
              <MapPin className="text-orange-600" />
              <span>Vishakhapatnam, Andhra Pradesh</span>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-lg resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
