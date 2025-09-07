import React from 'react';
import { motion } from 'framer-motion';
import { Star, DollarSign } from 'lucide-react';

// Pricing Section
const Pricing = ({ isDark }) => {
  const plans = [
    {
      name: 'Basic',
      price: '$299',
      period: 'per project',
      description: 'Perfect for small websites and landing pages',
      features: [
        'Responsive Design',
        'Basic SEO Setup',
        '3 Revisions',
        '1 Month Support',
        'Mobile Optimized',
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Professional',
      price: '$599',
      period: 'per project',
      description: 'Ideal for business websites and web applications',
      features: [
        'Custom React Components',
        'Advanced Animations',
        'API Integration',
        'Unlimited Revisions',
        '3 Months Support',
        'Performance Optimization',
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: 'per project',
      description: 'For complex applications and ongoing partnerships',
      features: [
        'Full-Stack Development',
        'Database Integration',
        'Admin Dashboard',
        'Deployment & Hosting',
        '6 Months Support',
        'Source Code & Documentation',
        'Training & Consultation',
      ],
      popular: false,
      color: 'from-emerald-500 to-teal-500',
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

  // Animation variants for pricing cards (fade-in from bottom with stagger)
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9
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

  // Animation variants for card content
  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Animation variants for individual elements
  const elementVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for features list
  const featuresContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for popular badge
  const badgeVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.3
      }
    }
  };

  // Animation variants for icon
  const iconVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.1
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
      id="pricing"
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
            My Pricing
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
            variants={elementVariants}
          >
            Choose the perfect plan for your project needs
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: plan.popular ? 1.05 : 1.03 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? `${
                      isDark
                        ? 'bg-gray-800/70 border-cyan-400 shadow-lg shadow-cyan-400/20'
                        : 'bg-white border-purple-400 shadow-2xl shadow-purple-400/20'
                    } transform scale-105`
                  : isDark
                  ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                  : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <motion.div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 text-sm font-bold rounded-full ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-400 to-pink-400 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                  }`}
                  variants={badgeVariants}
                >
                  Most Popular
                </motion.div>
              )}

              <motion.div 
                className="text-center mb-8"
                variants={cardContentVariants}
              >
                <motion.div 
                  className={`inline-flex p-4 rounded-full bg-gradient-to-r ${plan.color} mb-4`}
                  variants={iconVariants}
                >
                  <DollarSign size={32} color="white" />
                </motion.div>
                
                <motion.h3
                  className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                  variants={elementVariants}
                >
                  {plan.name}
                </motion.h3>
                
                <motion.div 
                  className="mb-2"
                  variants={elementVariants}
                >
                  <span
                    className={`text-4xl font-bold ${
                      isDark ? 'text-cyan-400' : 'text-purple-600'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                </motion.div>
                
                <motion.p
                  className={`${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                  variants={elementVariants}
                >
                  {plan.description}
                </motion.p>
              </motion.div>

              <motion.ul 
                className="space-y-4 mb-8"
                variants={featuresContainerVariants}
              >
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center gap-3"
                    variants={featureVariants}
                  >
                    <div className={`p-1 rounded-full bg-gradient-to-r ${plan.color}`}>
                      <Star size={12} color="white" />
                    </div>
                    <span
                      className={`${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                    : isDark
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                variants={elementVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Pricing;