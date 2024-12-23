import React, { lazy, Suspense } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
// import About from './components/About';
// import Skills from './components/Skills';
// import WorkExp from './components/WorkExp';
// import Projects from './components/Projects';
// import Contactme from './components/contactme';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const WorkExp = lazy(() => import('./components/WorkExp'));
const Projects = lazy(() => import('./components/Projects'));
const Contactme = lazy(() => import('./components/contactme'));

function App() {
  return (
      <div className='App'>
        <Helmet>
          <title>Hemanth Sai Gokarakonda</title>
          <link rel="icon" href="%PUBLIC_URL%/custom-logo.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <header>
          <NavBar />
        </header>
        <main>
          <Home />
          <Suspense fallback={<div>Loading...</div>}>
            <About />
            <Skills />
            <WorkExp />
            <Projects />
            <Contactme />
          </Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default App;
