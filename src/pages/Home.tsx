import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Journey } from '../components/Journey/Journey';
import { Experience } from '../components/Experience/Experience';
import { FaceViz } from '../components/FaceViz/FaceViz';
import { ComputerVision } from '../components/ComputerVision/ComputerVision';
import { Automation } from '../components/Automation/Automation';
import { Projects } from '../components/Projects/Projects';
import { Skills } from '../components/Skills/Skills';
import { Internships } from '../components/Internships/Internships';
import { Contact } from '../components/Contact/Contact';

export const Home: React.FC = () => {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <About />
      <Journey />
      <Experience />
      <FaceViz />
      <ComputerVision />
      <Automation />
      <Projects />
      <Skills />
      <Internships />
      <Contact />
    </main>
  );
};
