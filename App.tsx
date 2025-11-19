import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkHistory from './pages/Experience'; // Maps to WorkHistory component logic
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work-history" element={<WorkHistory />} />
            <Route path="/projects" element={<Projects />} />
            {/* Fallback for old link just in case, though nav uses projects now */}
            <Route path="/experience" element={<WorkHistory />} /> 
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;