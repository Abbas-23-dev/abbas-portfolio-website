import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Sun, Moon } from 'react-feather';
import { Sun, Moon } from 'lucide-react';

// Theme Toggle Component
const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 ${
        isDark
          ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700 shadow-lg shadow-cyan-400/20'
          : 'bg-white text-purple-600 hover:bg-gray-50 shadow-lg shadow-purple-400/20'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;