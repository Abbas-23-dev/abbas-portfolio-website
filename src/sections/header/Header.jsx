// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import ThemeToggle from '../../components/common/ThemeToggle';


// // Header Component
// const Header = ({ isDark, toggleTheme }) => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Pricing', href: '#pricing' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <motion.header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? isDark
//             ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10'
//             : 'bg-white/95 backdrop-blur-md shadow-lg shadow-purple-500/10'
//           : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <motion.div
//             className={`text-2xl font-bold ${
//               isDark
//                 ? 'bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent'
//                 : 'bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent'
//             }`}
//             whileHover={{ scale: 1.05 }}
//           >
//             Muhammad Abbas
//           </motion.div>

//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <motion.button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href)}
//                 className={`relative transition-colors duration-300 ${
//                   isDark
//                     ? 'text-gray-300 hover:text-cyan-400'
//                     : 'text-gray-700 hover:text-purple-600'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 {item.name}
//                 <motion.div
//                   className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${
//                     isDark
//                       ? 'from-cyan-400 to-pink-400'
//                       : 'from-purple-600 to-cyan-600'
//                   }`}
//                   initial={{ width: 0 }}
//                   whileHover={{ width: '100%' }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             ))}
//           </div>

//           <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
//         </div>
//       </nav>
//     </motion.header>
//   );
// };
// export default Header;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../../components/common/ThemeToggle';

// Header Component
const Header = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(true);
      }
    };

    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.burger-button')) {
        setIsMobileMenuOpen(true);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full max-w-7xl z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10'
              : 'bg-white/95 backdrop-blur-md shadow-lg shadow-purple-500/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className={`text-xl sm:text-2xl font-bold ${
                isDark
                  ? 'bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Muhammad Abbas
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative transition-colors duration-300 ${
                    isDark
                      ? 'text-gray-300 hover:text-cyan-400'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${
                      isDark
                        ? 'from-cyan-400 to-pink-400'
                        : 'from-purple-600 to-cyan-600'
                    }`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Right Side - Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              
              {/* Mobile Menu Button */}
              <motion.button
                className={`md:hidden burger-button p-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100/50'
                }`}
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Mobile Menu */}
            <motion.div
              className={`mobile-menu fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50 md:hidden ${
                isDark
                  ? 'bg-gray-900/95 backdrop-blur-md border-r border-gray-700/50'
                  : 'bg-white/95 backdrop-blur-md border-r border-gray-200/50'
              } shadow-2xl`}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: 'spring',
                damping: 25,
                stiffness: 200 
              }}
            >
              {/* Mobile Menu Header */}
              <div className="p-6 border-b border-opacity-20 border-gray-300">
                <motion.div
                  className={`text-xl font-bold ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent'
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Navigation
                </motion.div>
              </div>

              {/* Mobile Menu Items */}
              <div className="px-6 py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left py-4 px-4 rounded-lg mb-2 transition-all duration-300 ${
                      isDark
                        ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className={`w-2 h-2 rounded-full ${
                          isDark
                            ? 'bg-gradient-to-r from-cyan-400 to-pink-400'
                            : 'bg-gradient-to-r from-purple-600 to-cyan-600'
                        }`}
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-lg font-medium">{item.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  className={`text-sm ${
                    isDark ? 'text-gray-500' : 'text-gray-400'
                  } text-center`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  © 2025 Muhammad Abbas
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;