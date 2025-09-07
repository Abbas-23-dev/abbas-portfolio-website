import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

// Footer Component
const Footer = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 ${
        isDark
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-t border-gray-700'
          : 'bg-gradient-to-br from-gray-50 to-white border-t border-gray-200'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div
              className={`text-2xl font-bold ${
                isDark
                  ? 'bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent'
              }`}
            >
              Muhammad Abbas
            </div>
            <p
              className={`mt-2 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              React.js Developer • Creating Beautiful Web Experiences
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p
              className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              © 2024 Muhammad Abbas. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className={`p-3 rounded-full transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700 shadow-lg shadow-cyan-400/20'
                  : 'bg-white text-purple-600 hover:bg-gray-50 shadow-lg shadow-purple-400/20'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;