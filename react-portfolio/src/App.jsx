import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
