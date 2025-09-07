import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Star, Award, Calendar } from 'lucide-react';

// Experience Section
const Experience = ({ isDark }) => {
  const experiences = [
    {
      title: 'React.js Developer',
      company: 'Pixel Square Digital Pvt Ltd',
      period: '2024 - Present',
      type: 'Current Position',
      description: 'Developing modern web applications using React.js, TailwindCSS, and other cutting-edge technologies. Focus on creating responsive, user-friendly interfaces and maintaining clean, efficient code.',
      skills: ['React.js', 'TailwindCSS', 'JavaScript', 'Git'],
    },
    {
      title: 'Web Development Intern',
      company: 'Ford9 Solutions, Rahimabad Swat',
      period: '2023',
      type: 'Internship',
      description: 'Gained hands-on experience in web development, worked on real projects, and learned industry best practices. Collaborated with senior developers and contributed to client projects.',
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Team Collaboration'],
    },
    {
      title: 'Computer Science Graduate',
      company: 'Jahanzeb College, Saidu Sharif Swat (KPK)',
      period: '2020 - 2023',
      type: 'Education',
      description: 'Completed comprehensive computer science education with focus on programming fundamentals, data structures, algorithms, and web technologies.',
      skills: ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'Web Technologies'],
    },
  ];

  return (
    <motion.section
      id="experience"
      className={`py-20 ${
        isDark
          ? 'bg-gradient-to-br from-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-white'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent'
            }`}
          >
            Experience
          </h2>
          <motion.div
            className={`w-24 h-1 mx-auto rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400'
                : 'bg-gradient-to-r from-purple-600 to-cyan-600'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className={`absolute left-8 top-0 bottom-0 w-0.5 ${
                isDark
                  ? 'bg-gradient-to-b from-cyan-400 to-pink-400'
                  : 'bg-gradient-to-b from-purple-600 to-cyan-600'
              }`}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeInOut" }}
                className="relative flex items-start mb-12"
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                    isDark
                      ? 'bg-gray-900 border-cyan-400'
                      : 'bg-white border-purple-600'
                  }`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {exp.type === 'Current Position' ? (
                    <Briefcase className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} />
                  ) : exp.type === 'Internship' ? (
                    <Star className={`w-6 h-6 ${isDark ? 'text-pink-400' : 'text-cyan-600'}`} />
                  ) : (
                    <Award className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                  )}
                </motion.div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <motion.div
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                        : 'bg-white border-gray-200 hover:border-purple-400/50 shadow-lg hover:shadow-xl'
                    }`}
                    initial={{ opacity: 0, x: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-wrap items-center justify-between mb-3">
                      <h3
                        className={`text-xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          exp.type === 'Current Position'
                            ? 'bg-green-500/20 text-green-400'
                            : exp.type === 'Internship'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-purple-500/20 text-purple-400'
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className={`font-semibold ${
                          isDark ? 'text-cyan-400' : 'text-purple-600'
                        }`}
                      >
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p
                      className={`mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {exp.description}
                    </p>

                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    >
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className={`px-3 py-1 text-sm rounded-full ${
                            isDark
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + 0.5 + skillIndex * 0.1 
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;