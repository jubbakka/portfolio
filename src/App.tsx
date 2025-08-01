import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css'

function App() {

  return (
      <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
          <Footer />
      </div>
  )
}

export default App
