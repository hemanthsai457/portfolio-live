import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import WorkExp from './components/WorkExp';
import Projects from './components/Projects';
import Contactme from './components/contactme';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
      <div className='App'>
        <Helmet>
          <title>Hemanth Sai Gokarakonda</title>
          <link rel="icon" href="%PUBLIC_URL%/custom-logo.ico" />
        </Helmet>
            <NavBar />
            <Home />
            <About />
            <Skills />
            <WorkExp />
            <Projects />
            <Contactme />
            <Footer />
      </div>
  );
}

export default App;
