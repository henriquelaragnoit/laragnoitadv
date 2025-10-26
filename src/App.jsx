import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TrabalhistaReclamante from './pages/TrabalhistaReclamante';
import Home from './pages/Home';
import AuxilioAcidente from './pages/AuxilioAcidente';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/trabalhista-reclamante" element={<TrabalhistaReclamante />} />
        <Route path="/auxilio-acidente" element={<AuxilioAcidente />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;