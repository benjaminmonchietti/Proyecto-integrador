"use client";
import "../historia/global.css";
import { useEffect } from "react";
import {
  GraduationCap,
  ArrowLeft,
  BookOpen,
  Flag,
  Users,
  Lightbulb,
  School,
  Quote,
} from "lucide-react";

export default function Historia() {
  useEffect(() => {
    // Inicialización de Lucide reemplazada por componentes React
  }, []);

  return (
    <html lang="es">

      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Historia - ProA Despeñaderos</title>

        <link rel="stylesheet" href="historia.css" />
      </head>

      <body>

        {/* ENCABEZADO */}
        <header className="header">
          <div className="logo">
          </div>
          <div className="logo-icon">
          </div>
          <GraduationCap />
          

          <div>
              <h2>ProA Despeñaderos</h2>
              <span>Escuela Experimental</span>
          </div>

          <a href="../" className="btn-volver">
          <ArrowLeft/>
            Volver
          </a>

        </header>


        {/* PORTADA */}
        <section className="hero">

          <div className="hero-contenido">

            <span className="etiqueta">
              NUESTRA INSTITUCIÓN
            </span>

            <h1>Historia del Colegio</h1>

            <p>
              Conocé los comienzos, el crecimiento y la trayectoria
              de la Escuela Experimental ProA Despeñaderos.
            </p>

          </div>

        </section>


        {/* HISTORIA */}
        <main className="historia">

          <section className="historia-contenido">

            <div className="titulo-seccion">
              <BookOpen />

              <div>
                <span>CONOCIENDO NUESTRAS RAÍCES</span>
                <h2>Nuestra historia</h2>
              </div>
            </div>


            {/* BLOQUE 1 */}
            <article className="historia-card">

              <div className="icono">
                <Flag />
              </div>

              <div className="texto">
                <h3>Los comienzos</h3>

                <p>
                  La Escuela Experimental ProA Despeñaderos nació
                  con el objetivo de brindar una propuesta educativa
                  innovadora, orientada al desarrollo de nuevas
                  tecnologías y al aprendizaje basado en proyectos.
                </p>

                <p>
                  Desde sus comienzos, la institución buscó generar
                  un espacio donde los estudiantes pudieran desarrollar
                  sus conocimientos, habilidades y creatividad.
                </p>
              </div>

            </article>


            {/* BLOQUE 2 */}
            <article className="historia-card">

              <div className="icono">
                <Users />
              </div>

              <div className="texto">
                <h3>Crecimiento de la institución</h3>

                <p>
                  Con el paso de los años, la comunidad educativa fue
                  creciendo y sumando nuevos estudiantes, docentes y
                  proyectos.
                </p>

                <p>
                  La institución se convirtió en un espacio de
                  encuentro, aprendizaje y participación para los
                  jóvenes de Despeñaderos y localidades cercanas.
                </p>
              </div>

            </article>


            {/* BLOQUE 3 */}
            <article className="historia-card">

              <div className="icono">
                <Lightbulb />
              </div>

              <div className="texto">
                <h3>Una educación innovadora</h3>

                <p>
                  Uno de los principales objetivos de ProA es preparar
                  a sus estudiantes para los desafíos del futuro.
                </p>

                <p>
                  A través de proyectos interdisciplinarios, tecnología
                  y trabajo colaborativo, los estudiantes tienen la
                  posibilidad de aplicar los conocimientos adquiridos
                  en situaciones reales.
                </p>
              </div>

            </article>


            {/* BLOQUE 4 */}
            <article className="historia-card">

              <div className="icono">
                <School />
              </div>

              <div className="texto">
                <h3>La escuela en la actualidad</h3>

                <p>
                  Actualmente, ProA Despeñaderos continúa formando
                  estudiantes y desarrollando proyectos que buscan
                  generar un impacto positivo en la comunidad.
                </p>

                <p>
                  La institución sigue creciendo y construyendo su
                  historia junto a estudiantes, docentes, familias
                  y toda la comunidad educativa.
                </p>
              </div>

            </article>


            {/* FRASE FINAL */}
            <section className="frase">

              <Quote />

              <p>
                “Cada generación deja una huella y forma parte de la
                historia que seguimos construyendo juntos.”
              </p>

            </section>

          </section>

        </main>


        {/* PIE DE PÁGINA */}
        <footer>

          <div className="footer-contenido">

            <div>
              <h3>ProA Despeñaderos</h3>
              <p>Escuela Experimental</p>
            </div>

            <div className="footer-iconos">

              <GraduationCap />
              <BookOpen />
              <Users />

            </div>

          </div>

          <p className="copyright">
            © 2026 ProA Despeñaderos - Todos los derechos reservados
          </p>

        </footer>

      </body>

    </html>
  );
}