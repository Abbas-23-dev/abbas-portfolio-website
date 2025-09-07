import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Palette, Globe, Database, Smartphone } from 'lucide-react';

// Skills Section
const Skills = ({ isDark }) => {
  const skills = [
    { name: 'React.js', level: 95, icon: <Code />, color: 'from-blue-400 to-cyan-400' },
    { name: 'JavaScript', level: 90, icon: <Zap />, color: 'from-yellow-400 to-orange-400' },
    { name: 'TailwindCSS', level: 88, icon: <Palette />, color: 'from-teal-400 to-blue-400' },
    { name: 'HTML/CSS', level: 92, icon: <Globe />, color: 'from-orange-400 to-red-400' },
    { name: 'Node.js', level: 80, icon: <Database />, color: 'from-green-400 to-emerald-400' },
    { name: 'MongoDB', level: 75, icon: <Database />, color: 'from-green-500 to-teal-500' },
    { name: 'Git/GitHub', level: 85, icon: <Code />, color: 'from-gray-400 to-gray-600' },
    { name: 'Responsive Design', level: 93, icon: <Smartphone />, color: 'from-purple-400 to-pink-400' },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-white to-gray-50'
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent'
            }`}
          >
            Technical Skills
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400'
                : 'bg-gradient-to-r from-purple-600 to-cyan-600'
            }`}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-gray-200 hover:border-purple-400/50 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                  {React.cloneElement(skill.icon, { size: 24, color: 'white' })}
                </div>
                <span
                  className={`text-sm font-semibold ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {skill.level}%
                </span>
              </div>
              
              <h3
                className={`text-lg font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
              >
                {skill.name}
              </h3>
              
              <div
                className={`h-2 rounded-full ${
                  isDark ? 'bg-gray-700' : 'bg-gray-200'
                }`}
              >
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;