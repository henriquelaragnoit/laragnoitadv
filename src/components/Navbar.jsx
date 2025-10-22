import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="navbar" aria-label="Barra de navegação">
      <Link to="/" className="navbar-logo" tabIndex={0} aria-label="Página inicial">
        <img src={logo} alt="Laragnoit Advogados" className="navbar-logo-img" />
        <span className="navbar-logo-text">Laragnoit Advogados</span>
      </Link>
     
    </header>
  );
};

function navClass(active) {
  return active ? 'navbar-link active' : 'navbar-link';
}

export default Navbar;
