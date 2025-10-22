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
        <Route path="/Trabalhista-Reclamante" element={<TrabalhistaReclamante />} />
        <Route path="/Auxilio-Acidente" element={<AuxilioAcidente />} />
      </Routes>
    </Router>
  );
}

export default App;
