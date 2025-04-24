

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/footerlogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1F386B] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Mission */}
        <div className="space-y-4">
          <img src={logo} alt="School Logo" className="w-72 rounded-2xl" />
          <p className="text-sm opacity-80">
          N.M. PUBLIC SCHOOL is a team devoted towards bringing excellence in academics and co.curricular engagements of the students.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="transition-transform transform hover:scale-110">
              <Facebook size={20} />
            </a>
            <a href="#" className="transition-transform transform hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="#" className="transition-transform transform hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="#" className="transition-transform transform hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <div className="h-1 w-12 bg-white mb-4"></div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Admission Procedure
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Enquiry
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Result
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Gallary
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <div className="h-1 w-12 bg-white mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li>📍 N.M. PUBLIC SCHOOL, ViII-SAINI, Post- Baidpura, Greater Noida,G.B. Nagar Pincode.: 203207</li>
            <a href="tel:+918800380838">📞 +91-8800380838, +91-9312887978</a>
            <br />
            <a href="mailto:nmps_grnoida@rediffmail.com">📧 nmps_grnoida@rediffmail.com</a>
          </ul>
        </div>

        {/* Map Embed */}
        <div>
          <h3 className="font-semibold mb-2">Find Us</h3>
          <div className="h-1 w-12 bg-white mb-4"></div>
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <iframe
              className="h-40 sm:h-32 lg:h-32"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3702279719867!2d77.49041831500877!3d28.56842072567254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced4f03b0e029%3A0x24967b0d1bcaddc4!2sN%20M%20Public%20School!5e0!3m2!1sen!2sin!4v1703401234567!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-span-full bg-[#17305A] py-6 px-6 text-center">
          <h4 className="text-white font-semibold text-lg mb-2">
            Student’s Code of Conduct and Discipline Policy
          </h4>
          <p className="text-sm text-white opacity-80 leading-relaxed max-w-2xl mx-auto font-bold">
            School discipline is the system of rules, punishments, and behavioral strategies appropriate to the regulation of
            children or adolescents and the maintenance of order in schools. Its aim is to control the students’ actions and behavior.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/30 mt-12 pt-6 text-center text-xs opacity-75">
        © {new Date().getFullYear()} *****. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
