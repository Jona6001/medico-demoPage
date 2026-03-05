import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <picture className="hero-bg">
          <source media="(min-width: 768px)" srcSet="/images/hero_desktop.webp" type="image/webp" />
          <Image src="/images/hero_mobile.webp" alt="Atención médica familiar en clínica moderna" width={400} height={300} priority />
        </picture>
        <div className="hero-container">
          <div className="hero-content">
            <h1>Atención Médica para tu familia</h1>
            <p>La salud y el bienestar de nuestros pacientes y su equipo de atención médica siempre serán nuestra prioridad, por lo que seguimos las mejores prácticas de limpieza.</p>
            <div className="features">
              <div className="feature">
                <i className="fas fa-stethoscope"></i>
                <span>Exámenes</span>
              </div>
              <div className="feature">
                <i className="fas fa-prescription-bottle-alt"></i>
                <span>Recetas</span>
              </div>
              <div className="feature">
                <i className="fas fa-heartbeat"></i>
                <span>Cardiología</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="container">
          <div className="cards-container">
            <div className="card card-1">
              <i className="fas fa-ambulance card-icon"></i>
              <h3>Casos de Emergencia</h3>
              <p>No dude en contactar a nuestro personal de recepción en cualquier momento.</p>
            </div>
            <div className="card card-2">
              <i className="fas fa-user-md card-icon"></i>
              <h3>Horario de Doctores</h3>
              <p>Médicos calificados disponibles las 24 horas, consulte nuestro horario.</p>
            </div>
            <div className="card card-3">
              <i className="fas fa-clock card-icon"></i>
              <h3>Horario de Atención</h3>
              <p>Lunes - Viernes 8:00 - 19:00 hrs</p>
            </div>
            <div className="card card-4">
              <i className="fas fa-map-marker-alt card-icon"></i>
              <h3>Ubicación y Direcciones</h3>
              <p>2507 Beverley Rd Brooklyn, Nueva York 11794 Estados Unidos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <Image src="/images/about.webp" alt="Sobre Nuestra Clínica" width={500} height={350} />
            </div>
            <div className="about-text">
              <h2>Sobre Nuestra Clínica</h2>
              <p>Somos un centro médico comprometido con brindar la más alta calidad en atención médica para toda la familia. Con más de 15 años de experiencia, nuestro equipo de profesionales altamente calificados está dedicado a su bienestar.</p>
              <p>Nuestra misión es proporcionar atención compasiva y personalizada utilizando tecnología médica de vanguardia en un ambiente cálido y acogedor.</p>
              <div className="about-features">
                <div className="about-feature">
                  <i className="fas fa-user-md"></i>
                  <div>
                    <h4>Equipo Profesional</h4>
                    <p>Personal médico altamente calificado y experimentado.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <i className="fas fa-hospital"></i>
                  <div>
                    <h4>Instalaciones Modernas</h4>
                    <p>Equipamiento médico de última generación.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <i className="fas fa-heart"></i>
                  <div>
                    <h4>Atención Personalizada</h4>
                    <p>Tratamiento adaptado a las necesidades de cada paciente.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h4>Seguridad y Confianza</h4>
                    <p>Protocolos estrictos de higiene y seguridad.</p>
                  </div>
                </div>
              </div>
              <a href="#contacto" className="btn-primary">Conoce Más Sobre Nosotros</a>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctores" className="doctors-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Doctores Especialistas</h2>
            <p>Contamos con un equipo de profesionales altamente calificados</p>
          </div>
          <div className="doctors-container">
            {/* Aquí puedes mapear doctores desde un array o API */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Servicios Médicos</h2>
            <p>Ofrecemos una amplia gama de servicios para cuidar de su salud</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-heart"></i>
              <h3>Cardiología</h3>
              <p>Especialistas en el cuidado del corazón y sistema cardiovascular.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-brain"></i>
              <h3>Neurología</h3>
              <p>Diagnóstico y tratamiento de enfermedades del sistema nervioso.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-baby"></i>
              <h3>Pediatría</h3>
              <p>Cuidado especializado para la salud de sus hijos.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-bone"></i>
              <h3>Ortopedia</h3>
              <p>Tratamiento de lesiones y enfermedades del sistema musculoesquelético.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-eye"></i>
              <h3>Oftalmología</h3>
              <p>Cuidado integral de la visión y salud ocular.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-tooth"></i>
              <h3>Odontología</h3>
              <p>Servicios dentales completos para toda la familia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Testimonios de Nuestros Pacientes</h2>
            <p>Lo que nuestros pacientes dicen sobre nuestra atención</p>
          </div>
          <div className="testimonials-container">
            {/* Aquí puedes mapear testimonios desde un array o API */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Contáctenos</h2>
            <p>Estamos aquí para responder sus preguntas</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Dirección</h3>
                  <p>2507 Beverley Rd Brooklyn, Nueva York 11794 Estados Unidos.</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Teléfono</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>info@medicare.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Horario</h3>
                  <p>Lunes - Viernes 8:00 - 19:00 hrs</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form id="contactForm">
                <div className="form-group">
                  <input type="text" placeholder="Nombre" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Mensaje" rows={5} required></textarea>
                </div>
                <button className="btn-primary" type="submit">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Botón de WhatsApp Flotante */}
      <a href="https://wa.me/15551234567?text=Hola,%20me%20gustaría%20agendar%20una%20cita" className="whatsapp-float" target="_blank">
        <i className="fab fa-whatsapp"></i>
      </a>

      <Footer />
    </>
  );
}
