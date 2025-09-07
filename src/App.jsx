import React, { useState } from 'react'
// import Header from './sections/header/Header';
import Header from './sections/header/Header'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Skills from './sections/skills/Skills'
import Experience from './sections/experience/Experience'
import Projects from './sections/projects/Projects'
import Pricing from './sections/pricing/Pricing'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import useTheme from './hooks/useTheme'
import FloatingParticles from './components/common/FloatingParticles'
// import Header from './sections/header/Header'

const App = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <FloatingParticles isDark={isDark} />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Skills isDark={isDark} />
      <Experience isDark={isDark} />
      <Projects isDark={isDark} />
      <Pricing isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
};


export default App
