import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Briefcase, Award } from 'lucide-react';

// About Section
const About = ({ isDark }) => {
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

  // Animation variants for left side card (fade-in from left)
  const leftCardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for right side items (fade-in from left with stagger)
  const rightItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -80,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for header section (fade-in from left)
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for info items
  const infoItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -40,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for icon
  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for underline
  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: 96, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="about"
      className={`py-20 ${
        isDark
          ? 'bg-gradient-to-br from-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-white'
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent'
            }`}
          >
            About Me
          </h2>
          <motion.div
            className={`w-24 h-1 mx-auto rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400'
                : 'bg-gradient-to-r from-purple-600 to-cyan-600'
            }`}
            variants={underlineVariants}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={leftCardVariants}
          >
            <div
              className={`p-8 rounded-2xl ${
                isDark
                  ? 'bg-gray-800/50 border border-gray-700'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <motion.div
                variants={iconVariants}
              >
                <User className={`w-12 h-12 mb-4 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} />
              </motion.div>
              
              <motion.h3
                className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
                variants={infoItemVariants}
              >
                Muhammad Abbas
              </motion.h3>
              
              <motion.p
                className={`text-lg mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
                variants={infoItemVariants}
              >
                I'm a passionate React.js Developer from Rawalpindi (Bahria Town Phase 7, Islamabad)
                with a strong foundation in modern web technologies. I graduated from Jahanzeb College,
                Saidu Sharif Swat (KPK) and completed my internship at Ford9 Solutions, Rahimabad Swat.
              </motion.p>
              
              <motion.div 
                className="space-y-3"
                variants={containerVariants}
              >
                <motion.div variants={infoItemVariants} className="flex items-center gap-3">
                  <MapPin className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    Bahria Town Phase 7, Islamabad
                  </span>
                </motion.div>
                <motion.div variants={infoItemVariants} className="flex items-center gap-3">
                  <Briefcase className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    Pixel Square Digital Pvt Ltd
                  </span>
                </motion.div>
                <motion.div variants={infoItemVariants} className="flex items-center gap-3">
                  <Award className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    Jahanzeb College, Saidu Sharif Swat
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div
              variants={rightItemVariants}
              className={`p-6 rounded-xl ${
                isDark
                  ? 'bg-gray-800/30 border border-gray-700'
                  : 'bg-white border border-gray-200 shadow-md'
              }`}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <h4
                className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-cyan-400' : 'text-purple-600'
                }`}
              >
                What I Do
              </h4>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                I specialize in creating modern, responsive web applications using React.js,
                TailwindCSS, and the latest web technologies. My focus is on clean code,
                beautiful UI/UX, and optimal performance.
              </p>
            </motion.div>

            <motion.div
              variants={rightItemVariants}
              className={`p-6 rounded-xl ${
                isDark
                  ? 'bg-gray-800/30 border border-gray-700'
                  : 'bg-white border border-gray-200 shadow-md'
              }`}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <h4
                className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-pink-400' : 'text-cyan-600'
                }`}
              >
                My Approach
              </h4>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                I believe in writing maintainable, scalable code and creating user experiences
                that are both beautiful and functional. Every project is an opportunity to
                learn and implement the best practices.
              </p>
            </motion.div>

            <motion.div
              variants={rightItemVariants}
              className={`p-6 rounded-xl ${
                isDark
                  ? 'bg-gray-800/30 border border-gray-700'
                  : 'bg-white border border-gray-200 shadow-md'
              }`}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <h4
                className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`}
              >
                Always Learning
              </h4>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                Technology evolves rapidly, and I stay updated with the latest trends,
                tools, and best practices in the React ecosystem and web development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;