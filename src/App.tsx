import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {AnimatePresence} from 'framer-motion';
import {Toaster} from "./components/ui/toaster.tsx";
import {inject} from '@vercel/analytics';

import './App.css'
import './i18n'; // Import your i18n configuration
function App() {
    inject();
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-900 dark:bg-gray-900 transition-colors duration-300">
                <div
                    className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 dark:opacity-20"/>

                <div className="relative z-10">
                    <Navbar/>

                    <main role="main">
                        <AnimatePresence mode="wait">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/projects" element={<Projects/>}/>
                                <Route path="/cv" element={<CV/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </AnimatePresence>
                    </main>

                    <Footer/>
                </div>
                <Toaster/>
            </div>
        </BrowserRouter>
    )
}

export default App;
