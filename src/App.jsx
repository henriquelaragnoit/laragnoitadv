import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TrabalhistaReclamante from './pages/TrabalhistaReclamante';
import AuxilioAcidente from './pages/AuxilioAcidente';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router basename="/laragnoitadv">
      <Navbar />
      <Routes>
        <Route path="" element={<TrabalhistaReclamante />} />
        <Route path="auxilio-acidente" element={<AuxilioAcidente />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;