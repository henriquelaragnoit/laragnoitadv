import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TrabalhistaReclamante from './pages/TrabalhistaReclamante';
import AuxilioAcidente from './pages/AuxilioAcidente';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/trabalhista-reclamante" element={<TrabalhistaReclamante />} />
        <Route path="/auxilio-acidente" element={<AuxilioAcidente />} />
      </Routes>
    </Router>
  );
}

export default App;
