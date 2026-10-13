
import "../directivos/global.css";

const directivos = [
  {
    nombre: "Ana Inés Urban",
    cargo: "Directora",
    imagen: "/images/directora.jpg",
    funciones: [
      "Dirigir y organizar el funcionamiento general de la institución.",
      "Coordinar al equipo docente y acompañar sus tareas.",
      "Promover una educación de calidad y una buena convivencia escolar.",
      "Mantener el vínculo entre la escuela, las familias y la comunidad."
    ],
    telefono: "3513077563",
    email: "aiurban@escuelasproa.edu.ar"
  },
  {
    nombre: "Gabriela Nieva Rodríguez",
    cargo: "Preceptora",
    imagen: "/images/gaby.jpeg",
    funciones: [
      "Acompañar a los estudiantes durante la jornada escolar.",
      "Registrar y realizar el seguimiento de la asistencia.",
      "Colaborar con la organización de las actividades escolares.",
      "Orientar a los estudiantes y favorecer la convivencia."
    ],
    telefono: "3518196993",
    email: "gdlnievasrodriguez@escuelasproa.edu.ar"
  },
  {
    nombre: "Natalia María Rodríguez",
    cargo: "Preceptora",
    imagen: "/images/nati.jpg",
    funciones: [
      "Acompañar a los estudiantes durante la jornada escolar.",
      "Registrar y realizar el seguimiento de la asistencia.",
      "Colaborar con la organización de las actividades escolares.",
      "Orientar a los estudiantes y favorecer la convivencia."
    ],
    telefono: "3547560972",
    email: "nmrodriguez@escuelasproa.edu.ar"
  },
  {
    nombre: "Itatí Carranza",
    cargo: "Coordinadora",
    imagen: "/images/itati.jpeg",
    funciones: [
      "Coordinar actividades y proyectos institucionales.",
      "Colaborar en la organización y planificación escolar.",
      "Facilitar la comunicación entre los integrantes de la escuela.",
      "Realizar el seguimiento de las tareas y propuestas de su área."
    ],
    telefono: "3547526692",
    email: "micarranza@escuelasproa.edu.ar"
  },
  {
    nombre: "Yanina Adán",
    cargo: "Secretaria",
    imagen: "/images/yani.jpeg",
    funciones: [
      "Organizar y mantener actualizada la documentación escolar.",
      "Gestionar trámites y tareas administrativas.",
      "Colaborar con la elaboración y el registro de documentación institucional.",
      "Brindar información administrativa a las familias y al personal."
    ],
    telefono: "3547463670",
    email: "yadan@escuelasproa.edu.ar"
  }
];

export default function Directivos() {
  return (
    <div className="directivos-page">
      <header className="header">
        <a href="../" className="logo-escuela">
          <span className="logo-letra">P</span>

          <span className="logo-texto">
            <strong>ProA Despeñaderos</strong>
            <small>Escuela Experimental</small>
          </span>
        </a>

        <a href="../" className="btn-volver">
          <span aria-hidden="true">←</span>
          Volver al inicio
        </a>
      </header>

      <main>
        <section className="directivos-intro">
          <span className="intro-etiqueta">
            NUESTRA INSTITUCIÓN
          </span>

          <h1>Equipo directivo</h1>

          <p>
            Conocé a las personas que forman parte de nuestra
            institución, sus responsabilidades y el trabajo
            que realizan cada día para acompañar a nuestra
            comunidad educativa.
          </p>

          <div className="intro-linea"></div>
        </section>

        <section className="directivos-grid">
          {directivos.map((persona) => (
            <article
              className="directivo-card"
              key={persona.nombre}
            >
              <div className="directivo-superior">
                <div className="foto-container">
                  <img
                    src={persona.imagen}
                    alt={`Foto de ${persona.nombre}`}
                    loading="lazy"
                  />
                </div>

                <div className="directivo-info">
                  <span className="cargo">
                    {persona.cargo}
                  </span>

                  <h2>{persona.nombre}</h2>

                  <p className="directivo-descripcion">
                    Área de gestión y acompañamiento institucional
                  </p>
                </div>
              </div>

              <div className="directivo-funciones">
                <h3>Funciones principales</h3>

                <ul>
                  {persona.funciones.map((funcion, indice) => (
                    <li key={indice}>{funcion}</li>
                  ))}
                </ul>
              </div>

              {/* CONTACTO */}
              <div className="directivo-contacto">
                <h3>Contacto</h3>

                <a href={`tel:${persona.telefono}`}>
                  <span className="contacto-icono">T</span>

                  <span className="contacto-dato">
                    <small>Teléfono</small>
                    <span>{persona.telefono}</span>
                  </span>
                </a>

                <a href={`mailto:${persona.email}`}>
                  <span className="contacto-icono">@</span>

                  <span className="contacto-dato">
                    <small>Correo electrónico</small>
                    <span>{persona.email}</span>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="directivos-cierre">
          <h2>Una comunidad que crece en equipo</h2>

          <p>
            Cada integrante cumple un papel importante en la
            construcción de una escuela comprometida con el
            aprendizaje, la participación y el desarrollo
            de sus estudiantes.
          </p>
        </section>
      </main>

      <footer className="directivos-footer">
        <p>ProA Despeñaderos · Escuela Experimental</p>
      </footer>
    </div>
  );
}

