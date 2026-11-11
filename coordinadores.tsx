
import "./coordinadores.css";

export default function Coordinadores() {
  return (
    <>
      <header className="site-header">
        <div className="container header-content">
          <a
            className="brand"
            href="#inicio"
            aria-label="PROA Despeñaderos, inicio"
          >
            <span className="brand-mark">P</span>
            <span className="brand-name">
              PROA <small>Despeñaderos</small>
            </span>
          </a>

          <nav aria-label="Navegación principal">
            <a href="#rol">El rol</a>
            <a href="#tareas">Responsabilidades</a>
            <a href="#documentacion">Documentación</a>
            <a className="nav-documents" href="carga-documentos.html">
              Cargar actas ↗
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-content">
            <p className="eyebrow">Escuela PROA · Despeñaderos</p>

            <h1>
              El trabajo que nos ayuda a{" "}
              <span>crecer en equipo.</span>
            </h1>

            <p className="hero-description">
              Conocé qué hacen los coordinadores y cómo acompañan la
              organización, la enseñanza y la vida cotidiana de nuestra
              comunidad educativa.
            </p>

            <div className="hero-actions">
              <a className="button button-light" href="#rol">
                Conocer su rol <span aria-hidden="true">↓</span>
              </a>

              <a
                className="button button-outline"
                href="carga-documentos.html"
              >
                Ir a la carga de documentos{" "}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div
            className="hero-decoration decoration-one"
            aria-hidden="true"
          ></div>

          <div
            className="hero-decoration decoration-two"
            aria-hidden="true"
          ></div>
        </section>

        <section className="section intro-section" id="rol">
          <div className="container intro-grid">
            <div>
              <p className="eyebrow eyebrow-blue">¿Quiénes son?</p>
              <h2>Un nexo importante dentro de la escuela</h2>
            </div>

            <div className="intro-copy">
              <p>
                Los coordinadores cumplen un papel clave en el funcionamiento
                de la escuela. Acompañan y organizan distintas actividades,
                trabajan junto con docentes y directivos y ayudan a que la
                comunicación entre los integrantes de la comunidad educativa
                sea clara y fluida.
              </p>

              <p>
                Su tarea también consiste en escuchar, orientar y colaborar
                ante situaciones que aparecen en el día a día, buscando
                soluciones mediante el diálogo y el trabajo en equipo.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section responsibilities-section"
          id="tareas"
        >
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow eyebrow-blue">
                Su trabajo cotidiano
              </p>

              <h2>¿Qué hacen los coordinadores?</h2>

              <p>
                Algunas de las tareas que pueden formar parte de su función
                son:
              </p>
            </div>

            <div className="cards-grid">
              <article className="info-card">
                <span className="card-number">01</span>
                <div className="card-icon" aria-hidden="true">
                  ↗
                </div>
                <h3>Organización y planificación</h3>
                <p>
                  Colaboran en la organización de actividades, reuniones y
                  propuestas institucionales.
                </p>
              </article>

              <article className="info-card">
                <span className="card-number">02</span>
                <div className="card-icon" aria-hidden="true">
                  ◎
                </div>
                <h3>Acompañamiento</h3>
                <p>
                  Orientan y acompañan a docentes y estudiantes según las
                  necesidades de la escuela.
                </p>
              </article>

              <article className="info-card">
                <span className="card-number">03</span>
                <div className="card-icon" aria-hidden="true">
                  ↔
                </div>
                <h3>Comunicación</h3>
                <p>
                  Facilitan el intercambio de información entre los distintos
                  integrantes de la comunidad educativa.
                </p>
              </article>

              <article className="info-card">
                <span className="card-number">04</span>
                <div className="card-icon" aria-hidden="true">
                  ▤
                </div>
                <h3>Seguimiento y documentación</h3>
                <p>
                  Colaboran con el registro, el seguimiento y la organización
                  de la documentación institucional.
                </p>
              </article>
            </div>

            <p className="note">
              Las responsabilidades específicas pueden variar según la
              organización y las necesidades de la institución.
            </p>
          </div>
        </section>

        <section className="section community-section">
          <div className="container community-grid">
            <div className="community-symbol" aria-hidden="true">
              <span className="symbol-circle circle-a"></span>
              <span className="symbol-circle circle-b"></span>
              <span className="symbol-circle circle-c"></span>
              <span className="symbol-center">PROA</span>
            </div>

            <div className="community-copy">
              <p className="eyebrow eyebrow-blue">
                Una tarea compartida
              </p>

              <h2>La escuela se construye entre todos</h2>

              <p>
                La coordinación no es un trabajo aislado: requiere diálogo,
                compromiso y colaboración. Cuando cada integrante puede
                aportar y comunicarse, es más fácil construir un espacio
                educativo organizado, participativo y cercano.
              </p>
            </div>
          </div>
        </section>

        <section className="documents-section" id="documentacion">
          <div className="container documents-content">
            <div>
              <p className="eyebrow">Espacio de trabajo</p>

              <h2>¿Necesitás cargar documentación?</h2>

              <p>
                Ingresá al espacio destinado a la carga y organización de
                actas y otros documentos institucionales.
              </p>
            </div>

            <a
              className="button button-light"
              href="carga-documentos.html"
            >
              Ir a la carga de documentos{" "}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <a className="brand brand-footer" href="#inicio">
            <span className="brand-mark">P</span>
            <span className="brand-name">
              PROA <small>Despeñaderos</small>
            </span>
          </a>

          <p>Educación, tecnología y trabajo en equipo.</p>
        </div>
      </footer>
    </>
  );
}
