"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <i className="fas fa-heartbeat icon"></i>
          <span>Tu clinica</span>
        </div>
        <ul id="main-navigation" className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#inicio" className="nav-link" onClick={handleCloseMenu}>Inicio</a></li>
          <li><a href="#nosotros" className="nav-link" onClick={handleCloseMenu}>Nosotros</a></li>
          <li><a href="#doctores" className="nav-link" onClick={handleCloseMenu}>Doctores</a></li>
          <li><a href="#servicios" className="nav-link" onClick={handleCloseMenu}>Servicios</a></li>
          <li><a href="#testimonios" className="nav-link" onClick={handleCloseMenu}>Testimonios</a></li>
          <li><a href="#contacto" className="nav-link" onClick={handleCloseMenu}>Contacto</a></li>
        </ul>
        <button
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
