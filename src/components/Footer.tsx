
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-sky-950 to-blue-900/50 border-t border-sky-400/20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-sky-400 text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-sky-400" />
                <span>contact@clouddetector.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-sky-400" />
                <span>+91-XXXX-XXXXXX</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-sky-400" />
                <span>Sriharikota, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-sky-400 text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-gray-300 hover:text-sky-300 transition-colors">
                About Us
              </Link>
              <Link to="/mission" className="block text-gray-300 hover:text-sky-300 transition-colors">
                Mission
              </Link>
              <Link to="/portals" className="block text-gray-300 hover:text-sky-300 transition-colors">
                Portals
              </Link>
              <Link to="/news" className="block text-gray-300 hover:text-sky-300 transition-colors">
                Recent News
              </Link>
            </div>
          </div>

          {/* Boulder & Landslide Detector Section */}
          <div>
            <h3 className="text-sky-400 text-xl font-bold mb-6">Cloud Motion Predictor</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are building a state-of-the-art cloud motion forecasting system using a Conditional Spatio-Temporal Latent Diffusion Model
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sky-400/20 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} LDRP-ITR. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-sky-400/5 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
    </footer>
  );
};

export default Footer;
