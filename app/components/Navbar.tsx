import React from "react";

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-container">
      <div className="nav-logo">
        <i className="fas fa-heartbeat"></i>
        <span>MediCare</span>
      </div>
      <ul className="nav-menu">
        <li><a href="#inicio" className="nav-link">Inicio</a></li>
        <li><a href="#nosotros" className="nav-link">Nosotros</a></li>
        <li><a href="#doctores" className="nav-link">Doctores</a></li>
        <li><a href="#servicios" className="nav-link">Servicios</a></li>
        <li><a href="#testimonios" className="nav-link">Testimonios</a></li>
        <li><a href="#contacto" className="nav-link">Contacto</a></li>
      </ul>
      <div className="nav-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  </nav>
);

export default Navbar;
