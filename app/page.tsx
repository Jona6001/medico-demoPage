import Image from "next/image";

export default function Home() {
  const servicios = [
    { icon: "fas fa-heart", titulo: "Cardiología", descripcion: "Especialistas en el cuidado del corazón y sistema cardiovascular." },
    { icon: "fas fa-brain", titulo: "Neurología", descripcion: "Diagnóstico y tratamiento de enfermedades del sistema nervioso." },
    { icon: "fas fa-baby", titulo: "Pediatría", descripcion: "Cuidado especializado para la salud de sus hijos." },
    { icon: "fas fa-bone", titulo: "Ortopedia", descripcion: "Tratamiento de lesiones y enfermedades del sistema musculoesquelético." },
    { icon: "fas fa-eye", titulo: "Oftalmología", descripcion: "Cuidado integral de la visión y salud ocular." },
    { icon: "fas fa-tooth", titulo: "Odontología", descripcion: "Servicios dentales completos para toda la familia." },
  ];

  const doctores = [
    {
      nombre: "Dr. Alejandro Torres",
      especialidad: "Medicina Familiar",
      bio: "15 años de experiencia en prevención y seguimiento integral.",
      foto: "/images/m_alejandro.webp",
    },
    {
      nombre: "Dr. Miguel Méndez",
      especialidad: "Cardiología",
      bio: "Enfoque en diagnóstico temprano y control de riesgo cardiovascular.",
      foto: "/images/m_miguel.webp",
    },
    {
      nombre: "Dra. Sofía Ruiz",
      especialidad: "Pediatría",
      bio: "Atención cercana para el crecimiento y desarrollo saludable de niños.",
      foto: "/images/m_sofia.webp",
    },
  ];

  const testimonios = [
    { nombre: "María G.", texto: "La atención fue rápida, humana y muy profesional. Me sentí acompañada en todo momento.", detalle: "Paciente de medicina familiar", foto: "/images/maria.png" },
    { nombre: "Roberto R.", texto: "Excelente equipo médico y muy buenas instalaciones. Recomiendo totalmente la clínica.", detalle: "Paciente de cardiología", foto: "/images/roberto.png" },
    { nombre: "Laura P.", texto: "El proceso para agendar cita fue sencillo y el trato de todo el personal fue increíble.", detalle: "Paciente de pediatría", foto: "/images/laura.png" },
  ];

  return (
    <>
      <section id="inicio" className="hero-section">
        <picture className="hero-bg">
          <source media="(min-width: 768px)" srcSet="/images/doctorPatient.jpg" type="image/webp" />
          <Image src="/images/doctorMovil.png" alt="Atención médica familiar en clínica moderna" width={400} height={300} priority />
        </picture>
        <div className="hero-container">
          <div className="hero-content">
            <h1>Atención médica confiable para toda tu familia</h1>
            <p>
              Combinamos experiencia clínica, tecnología y trato humano para que tú y los tuyos reciban
              atención de calidad en cada consulta.
            </p>
            <div className="features">
              <div className="feature">
                <i className="fas fa-stethoscope icon"></i>
                <span>Chequeos</span>
              </div>
              <div className="feature">
                <i className="fas fa-pills icon"></i>
                <span>Recetas</span>
              </div>
              <div className="feature">
                <i className="fas fa-user-md icon"></i>
                <span>Especialistas</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#contacto" className="btn-primary">Agendar cita</a>
              <a href="#servicios" className="btn-secondary">Ver servicios</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="container">
          <div className="cards-container">
            <div className="card card-1">
              <i className="fas fa-ambulance card-icon"></i>
              <h3>Casos de Emergencia</h3>
              <p>Atención inmediata y derivación segura cuando cada minuto cuenta.</p>
            </div>
            <div className="card card-2">
              <i className="fas fa-user-doctor card-icon"></i>
              <h3>Doctores disponibles</h3>
              <p>Equipo médico calificado en consulta general y especialidades clave.</p>
            </div>
            <div className="card card-3">
              <i className="fas fa-clock card-icon"></i>
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes de 8:00 a 19:00 hrs y sábados con cita previa.</p>
            </div>
            <div className="card card-4">
              <i className="fas fa-map-marker-alt card-icon"></i>
              <h3>Ubicación</h3>
              <p>Durango, Durango, México.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <Image src="/images/about.webp" alt="Sobre Nuestra Clínica" width={500} height={350} />
            </div>
            <div className="about-text">
              <h2>Sobre Nuestra Clínica</h2>
              <p>
                Somos un centro médico comprometido con brindar atención integral y personalizada.
                Nuestro enfoque une prevención, diagnóstico oportuno y tratamiento efectivo.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <i className="fas fa-user-doctor icon"></i>
                  <div>
                    <h4>Equipo Profesional</h4>
                    <p>Personal médico altamente calificado y con trato cercano.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <i className="fas fa-hospital icon"></i>
                  <div>
                    <h4>Instalaciones Modernas</h4>
                    <p>Espacios cómodos y equipamiento actualizado para tu seguridad.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <i className="fas fa-heart icon"></i>
                  <div>
                    <h4>Atención Personalizada</h4>
                    <p>Tratamientos adaptados a cada etapa de la vida.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <i className="fas fa-shield-alt icon"></i>
                  <div>
                    <h4>Seguridad y Confianza</h4>
                    <p>Protocolos claros de higiene, control y seguimiento clínico.</p>
                  </div>
                </div>
              </div>
              <a href="#contacto" className="btn-primary">Conoce más sobre nosotros</a>
            </div>
          </div>
        </div>
      </section>

      <section id="doctores" className="doctors-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Doctores Especialistas</h2>
            <p>Profesionales comprometidos con una atención clara, humana y efectiva.</p>
          </div>
          <div className="doctors-container">
            {doctores.map((doctor) => (
              <article key={doctor.nombre} className="doctor-card">
                <Image
                  src={doctor.foto}
                  alt={`${doctor.nombre} - ${doctor.especialidad}`}
                  width={400}
                  height={250}
                  className="doctor-image"
                />
                <div className="doctor-info">
                  <p className="doctor-specialty">{doctor.especialidad}</p>
                  <h3>{doctor.nombre}</h3>
                  <p className="doctor-bio">{doctor.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Servicios Médicos</h2>
            <p>Una oferta integral para prevenir, diagnosticar y tratar a tiempo.</p>
          </div>
          <div className="services-grid">
            {servicios.map((servicio) => (
              <article key={servicio.titulo} className="service-card">
                <i className={`${servicio.icon} service-icon`}></i>
                <h3>{servicio.titulo}</h3>
                <p>{servicio.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Testimonios de Nuestros Pacientes</h2>
            <p>Historias reales de confianza y buenos resultados.</p>
          </div>
          <div className="testimonials-container">
            {testimonios.map((testimonio) => (
              <article key={testimonio.nombre} className="testimonial-card">
                <div className="testimonial-content">
                  <p>{testimonio.texto}</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <Image
                      src={testimonio.foto}
                      alt={`Paciente ${testimonio.nombre}`}
                      width={60}
                      height={60}
                      className="author-avatar-image"
                    />
                  </div>
                  <div className="author-info">
                    <h4>{testimonio.nombre}</h4>
                    <p>{testimonio.detalle}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Contáctanos</h2>
            <p>Estamos listos para ayudarte a programar tu próxima consulta.</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt icon"></i>
                <div>
                  <h3>Dirección</h3>
                  <p>Durango, Durango, México.</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt icon"></i>
                <div>
                  <h3>Teléfono</h3>
                  <p>+55 (618) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope icon"></i>
                <div>
                  <h3>Email</h3>
                  <p>info@medicare.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-calendar-alt icon"></i>
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

      <a
        href="https://wa.me/55181234567?text=Hola, Me gustaria agendar una cita"
        className="whatsapp-float"
        target="_blank"
      >
        <i className="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
    </>
  );
}
