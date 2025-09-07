import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

// Contact Section
const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: 'Email',
      value: 'muhammad.abbas@example.com',
      href: 'mailto:muhammad.abbas@example.com',
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+92 XXX XXXXXXX',
      href: 'tel:+92XXXXXXXXX',
    },
    {
      icon: <MapPin />,
      label: 'Location',
      value: 'Bahria Town Phase 7, Islamabad',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Github />,
      name: 'GitHub',
      href: 'https://github.com/muhammad-abbas',
      color: 'hover:text-gray-400',
    },
    {
      icon: <Linkedin />,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/muhammad-abbas',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Mail />,
      name: 'Email',
      href: 'mailto:muhammad.abbas@example.com',
      color: 'hover:text-red-400',
    },
  ];

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

  // Animation variants for header (fade-in from bottom)
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
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

  // Animation variants for left side (fade-in from bottom)
  const leftSideVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      x: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for right side (fade-in from bottom)
  const rightSideVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      x: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for contact info items
  const contactItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for form elements
  const formElementVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
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
      id="contact"
      className={`py-20 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-white to-gray-50'
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
            Get In Touch
          </h2>
          <motion.div
            className={`w-24 h-1 mx-auto rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400'
                : 'bg-gradient-to-r from-purple-600 to-cyan-600'
            }`}
            variants={underlineVariants}
          />
          <motion.p
            className={`mt-4 text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
            variants={formElementVariants}
          >
            Let's discuss your next project and bring your ideas to life
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={leftSideVariants}
            className="space-y-8"
          >
            <div>
              <motion.h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
                variants={formElementVariants}
              >
                Let's Start a Conversation
              </motion.h3>
              <motion.p
                className={`text-lg mb-8 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
                variants={formElementVariants}
              >
                I'm always excited to work on new projects and collaborate with amazing people.
                Whether you have a project in mind or just want to say hello, I'd love to hear from you!
              </motion.p>
            </div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={contactItemVariants}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      isDark
                        ? 'bg-gray-800 text-cyan-400'
                        : 'bg-purple-100 text-purple-600'
                    }`}
                  >
                    {React.cloneElement(info.icon, { size: 20 })}
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {info.label}
                    </p>
                    <a
                      href={info.href}
                      className={`${
                        isDark
                          ? 'text-gray-300 hover:text-cyan-400'
                          : 'text-gray-600 hover:text-purple-600'
                      } transition-colors duration-300`}
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="pt-8"
              variants={formElementVariants}
            >
              <h4
                className={`text-lg font-semibold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
              >
                Follow Me
              </h4>
              <motion.div 
                className="flex gap-4"
                variants={containerVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    } ${social.color}`}
                    variants={contactItemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {React.cloneElement(social.icon, { size: 20 })}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={rightSideVariants}
          >
            <motion.form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl border ${
                isDark
                  ? 'bg-gray-800/50 border-gray-700'
                  : 'bg-white border-gray-200 shadow-lg'
              }`}
              variants={containerVariants}
            >
              <motion.div 
                className="grid md:grid-cols-2 gap-6 mb-6"
                variants={containerVariants}
              >
                <motion.div variants={formElementVariants}>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-400'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDark ? 'focus:ring-cyan-400' : 'focus:ring-purple-500'
                    }`}
                  />
                </motion.div>
                <motion.div variants={formElementVariants}>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-400'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDark ? 'focus:ring-cyan-400' : 'focus:ring-purple-500'
                    }`}
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="mb-6"
                variants={formElementVariants}
              >
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-400'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    isDark ? 'focus:ring-cyan-400' : 'focus:ring-purple-500'
                  }`}
                />
              </motion.div>

              <motion.div 
                className="mb-6"
                variants={formElementVariants}
              >
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 resize-none ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-400'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    isDark ? 'focus:ring-cyan-400' : 'focus:ring-purple-500'
                  }`}
                />
              </motion.div>

              <motion.button
                type="submit"
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'
                    : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40'
                }`}
                variants={formElementVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;