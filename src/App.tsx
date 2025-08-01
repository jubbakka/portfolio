import { Routes, Route } from 'react-router-dom';
//import Home from './pages/Home';
//import About from './pages/About';
//import NotFound from './pages/NotFound';
//import Projects from './pages/Projects';
//import Contact from './pages/Contact';
//import CV from './pages/CV';
import Navbar from './components/Navbar';
//import Footer from './components/Footer';

import './App.css'

function App() {

  return (
      <div className="min-h-screen bg-slate-900 dark:bg-gray-900 transition-colors duration-300">

          <Navbar />
          <main className="main">
                <Routes>

                </Routes>
            </main>

      </div>
  )
}

export default App;
