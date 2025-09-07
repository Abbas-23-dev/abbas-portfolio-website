import React from 'react';
import { motion } from 'framer-motion';
import { Code, MessageSquare } from 'lucide-react';
import useTypingEffect from '../../hooks/useTypingEffect';

// Hero Section
const Hero = ({ isDark }) => {
  const typingTexts = [
    "I am a React.js Developer",
    "I love clean code",
    "I build amazing UIs",
    "I create digital experiences"
  ];
  const displayText = useTypingEffect(typingTexts, 100);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Animation variants for hero content (fade-in from bottom)
  const heroContentVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for image (fade-in from bottom)
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for buttons
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for background elements
  const backgroundVariants = {
    hidden: { 
      opacity: 0,
      scale: 0
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  return (
    <motion.section
      id="home"
      className={`min-h-screen  w-full flex items-center justify-center relative overflow-hidden pt-20 md:pt-0 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900'
          : 'bg-gradient-to-br from-white via-purple-50 to-cyan-50'
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Mobile Layout - Image First, then Text */}
        <div className="block lg:hidden">
          {/* Mobile Profile Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                className={`absolute -inset-3 rounded-full blur-xl ${
                  isDark
                    ? 'bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20'
                    : 'bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20'
                }`}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />
              <motion.img
                src="./images/abbasnobg.png"
                alt="Muhammad Abbas"
                className={`relative z-10 w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-full border-3 ${
                  isDark
                    ? 'border-cyan-400/30 shadow-xl shadow-cyan-400/20'
                    : 'border-purple-600/30 shadow-xl shadow-purple-600/20'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Mobile Text Content */}
          <motion.div
            variants={heroContentVariants}
            className="text-center"
          >
            <motion.h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
                isDark
                  ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent'
              }`}
              variants={textVariants}
              whileHover={{ scale: 1.02 }}
            >
              Muhammad Abbas
            </motion.h1>

            <motion.div 
              className="h-12 sm:h-14 flex items-center justify-center mb-4"
              variants={textVariants}
            >
              <motion.h2
                className={`text-lg sm:text-xl md:text-2xl font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {displayText}
                <motion.span
                  className={isDark ? 'text-cyan-400' : 'text-purple-600'}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.h2>
            </motion.div>

            <motion.p
              className={`text-base sm:text-lg mb-6 px-2 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
              variants={textVariants}
            >
              React.js Developer from Rawalpindi, crafting beautiful and modern web experiences
              with clean code and innovative design.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
              variants={containerVariants}
            >
              <motion.button
                className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                  isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'
                    : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40'
                }`}
                variants={buttonVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center justify-center gap-2">
                  <Code size={18} />
                  View My Work
                </span>
              </motion.button>

              <motion.button
                className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold border-2 transition-all duration-300 text-sm sm:text-base ${
                  isDark
                    ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                    : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
                variants={buttonVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageSquare size={18} />
                  Get In Touch
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop/Tablet Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Desktop Text Content */}
          <motion.div
            variants={heroContentVariants}
            className="text-center lg:text-left"
          >
            <motion.h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
                isDark
                  ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent'
              }`}
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
            >
              Muhammad Abbas
            </motion.h1>

            <motion.div 
              className="h-16 flex items-center justify-center lg:justify-start"
              variants={textVariants}
            >
              <motion.h2
                className={`text-xl md:text-2xl lg:text-3xl font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {displayText}
                <motion.span
                  className={isDark ? 'text-cyan-400' : 'text-purple-600'}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.h2>
            </motion.div>

            <motion.p
              className={`text-lg md:text-xl mb-8 max-w-2xl ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              } mx-auto lg:mx-0`}
              variants={textVariants}
            >
              React.js Developer from Rawalpindi, crafting beautiful and modern web experiences
              with clean code and innovative design.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={containerVariants}
            >
              <motion.button
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'
                    : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40'
                }`}
                variants={buttonVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center gap-2">
                  <Code size={20} />
                  View My Work
                </span>
              </motion.button>

              <motion.button
                className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${
                  isDark
                    ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                    : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
                variants={buttonVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center gap-2">
                  <MessageSquare size={20} />
                  Get In Touch
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Desktop Profile Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className={`absolute -inset-4 rounded-full blur-2xl ${
                  isDark
                    ? 'bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20'
                    : 'bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20'
                }`}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />
              <motion.img
                src="./images/abbasnobg.png"
                alt="Muhammad Abbas"
                className={`relative z-10 w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain rounded-full border-4 ${
                  isDark
                    ? 'border-cyan-400/30 shadow-2xl shadow-cyan-400/20'
                    : 'border-purple-600/30 shadow-2xl shadow-purple-600/20'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute top-20 left-4 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 rounded-full ${
            isDark ? 'bg-cyan-400/10' : 'bg-purple-400/10'
          }`}
          variants={backgroundVariants}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-4 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 rounded-full ${
            isDark ? 'bg-pink-400/10' : 'bg-cyan-400/10'
          }`}
          variants={backgroundVariants}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;