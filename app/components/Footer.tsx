import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MediCare</h3>
          <p>Su salud es nuestra prioridad. Brindamos atención médica de calidad para toda la familia.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#doctores">Doctores</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Servicios</h3>
          <ul>
            <li><a href="#">Cardiología</a></li>
            <li><a href="#">Neurología</a></li>
            <li><a href="#">Pediatría</a></li>
            <li><a href="#">Ortopedia</a></li>
            <li><a href="#">Emergencias</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Brooklyn, Nueva York</li>
            <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
            <li><i className="fas fa-envelope"></i> info@medicare.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MediCare. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
