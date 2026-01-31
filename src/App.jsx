import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';

function App() {
    return (
        <Router>
            <div className="min-h-screen relative">
                <Background />
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projetos" element={<AllProjects />} />
                </Routes>

                {/* Simple Footer */}
                <footer className="py-8 text-center text-gray-600 text-xs uppercase tracking-widest border-t border-white/5">
                    &copy; {new Date().getFullYear()} Concept Digital. Todos os Direitos Reservados.
                </footer>
            </div>
        </Router>
    );
}

export default App;
