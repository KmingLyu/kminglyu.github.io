import React from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Experience from './components/Experience.jsx';
import Publish from './components/Publish.jsx';
import Skills from './components/Skills.jsx';
import Programming from './components/Programming.jsx';
import Achievements from './components/Achievements.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Experience />
        <Publish />
        <Skills />
        <Programming />
        <Achievements />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default App;
