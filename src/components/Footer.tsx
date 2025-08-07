import React from 'react';
import { Heart, Linkedin, Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Vikas Fadatare
              </h3>
              <p className="text-gray-300 leading-relaxed">
               I’m a passionate Java developer with expertise in designing, optimizing, and maintaining high-performance backend systems.             
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4 mb-4">
                <a 
                  href="https://www.linkedin.com/in/vikas-fadatare/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/vikasfadatare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://x.com/vikasfadatare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="mailto:vikas1.java.developer@gmail.com"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Always open to interesting conversations and collaboration opportunities!
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Vikas Fadatare. All rights reserved.
              </p>
              {/*<p className="text-gray-400 text-sm flex items-center">*/}
              {/*  Made with <Heart size={16} className="text-red-500 mx-1" /> and lots of ☕*/}
              {/*</p>*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;