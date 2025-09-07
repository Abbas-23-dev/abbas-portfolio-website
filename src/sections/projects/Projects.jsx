import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github } from 'lucide-react';

const Projects = ({ isDark }) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce platform built with React.js, featuring product catalog, shopping cart, and payment integration.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'TailwindCSS', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'Firebase', 'Material-UI', 'Context API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with modern design and smooth animations.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'Framer Motion', 'TailwindCSS', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400'
                : 'bg-gradient-to-r from-purple-600 to-cyan-600'
            }`}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50'
                  : 'bg-white border-gray-200 hover:border-purple-400/50 shadow-lg hover:shadow-2xl'
              }`}
            >
              {project.featured && (
                <div
                  className={`absolute top-4 left-4 z-10 px-3 py-1 text-sm font-medium rounded-full ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-400 to-pink-400 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                  }`}
                >
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-gray-400" />
                </div>
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark
                      ? 'bg-gradient-to-br from-cyan-500/20 to-pink-500/20'
                      : 'bg-gradient-to-br from-purple-500/20 to-cyan-500/20'
                  }`}
                />
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDark
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                      isDark
                        ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium border transition-colors duration-300 ${
                      isDark
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;