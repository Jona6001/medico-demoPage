import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MediCare</h3>
          <p>Tu salud es nuestra prioridad. Atención médica de calidad para toda la familia.</p>
          <div className="social-links">
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
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
            <li><a href="#servicios">Cardiología</a></li>
            <li><a href="#servicios">Neurología</a></li>
            <li><a href="#servicios">Pediatría</a></li>
            <li><a href="#servicios">Ortopedia</a></li>
            <li><a href="#servicios">Emergencias</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="footer-contact-list">
            <li><i className="fas fa-map-marker-alt icon"></i> Durango, Durango</li>
            <li><i className="fas fa-phone-alt icon"></i> +55 (618) 123-4567</li>
            <li><i className="fas fa-envelope icon"></i> info@medicare.com</li>
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
