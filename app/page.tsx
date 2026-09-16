"use client";

import { useEffect, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ChevronDown,
  School,
  Users,
  Lightbulb,
  Share2,
  User,
  Monitor,
  BookOpen,
  Cpu,
  Recycle,
  Code2,
  FlaskConical,
  UserRound,
  Mail,
  Phone,
  Camera,
} from "lucide-react";

import Computadoras from "../public/images/computadoras.png";
import Imagen1 from "../public/images/images (1).png";
import Escuela from "../public/images/escuela.png";
import EscuelaProA from "../public/images/Escuela-ProA.png";

import "./globals.css";

function App() {






  const [indice, setIndice] = useState(0);

  const slides = [
    {
      imagen: Computadoras,
      alt: "../sistema-escolar/public/computadoras.png",
    },
    {
      imagen: Imagen1,
      alt: "../sistema-escolar/public/Escuela-ProA.png",
    },
    {
      imagen: Escuela,
      alt: "../sistema-escolar/public/images(1).png",
    },
    {
      imagen: EscuelaProA,
      alt: "../sistema-escolar/public/escuela.png",
    },
  ];


  const siguiente = () => {
    setIndice((actual) => {

      if (actual >= slides.length - 1) {
        return 0;
      }

      return actual + 1;

    });
  };


  const anterior = () => {
    setIndice((actual) => {

      if (actual === 0) {
        return slides.length - 1;
      }

      return actual - 1;

    });
  };


  // Cambio automático cada 5 segundos

  useEffect(() => {

    const intervalo = setInterval(() => {
      siguiente();
    }, 5000);

    return () => {
      clearInterval(intervalo);
    };

  }, []);


  return (
    <>



      <header className="header">

        <div className="logo-container">

          <div className="logo">
            <GraduationCap />
          </div>

          <div className="nombre-institucion">

            <h1>
              ProA Despeñaderos
            </h1>

            <p>
              Escuela Experimental ProA
            </p>

          </div>

        </div>




        <nav className="menu">

          <div className="dropdown">

            <button className="menu-btn">

              Menú

              <ChevronDown />

            </button>


            <div className="dropdown-content">

              <a href="#institucion">

                <School />

                Institución

              </a>


              <a href="#autoridades">

                <Users />

                Autoridades y contactos

              </a>


              <a href="#proyectos">

                <Lightbulb />

                Proyectos

              </a>


              <a href="#egresados">

                <GraduationCap />

                Nuestros egresados

              </a>


              <a href="#redes">

                <Share2 />

                Redes

              </a>


              {/* ================= SUBMENÚ ================= */}

              <div className="submenu">

                <span>

                  <User />

                  Sesión

                  <ChevronRight />

                </span>


                <div className="submenu-content">

                  <a href="/iniciosesion">
                    Iniciar sesión
                  </a>

                  <a href="/crearsesion">
                    Crear sesión
                  </a>

                </div>

              </div>

            </div>

          </div>

        </nav>

      </header>


      <main>


        
        
        <section className="inicio" id="institucion">
        <div className="inicio-texto">

            <span className="etiqueta">
              ESCUELA EXPERIMENTAL
            </span>


            <h2>

              Bienvenidos a ProA Despeñaderos



            </h2>


            <p>

              Conocé nuestra institución, nuestros proyectos,
              espacios y la comunidad educativa que forma parte
              de ProA Despeñaderos.

            </p>
        




            <div className="botones">

              <a
                href="#espacios"
                className="btn principal"
              >
                Conocer nuestros espacios
              </a>


              <a
                href="#inauguracion"
                className="btn secundario"
              >
                Nuestra historia
              </a>

            </div>

        </div>
              <div className="carrusel">

        {slides.map((slide, index) => (
        <div
          key={index}
          className={indice === index ? "slide active" : "slide"}
        >
        <img
          src={slide.imagen.src}
          alt={slide.alt}
          className="imagen-carrusel"
        />
        </div>
      ))}

        {/* Flecha izquierda */}
        <button
          className="flecha izquierda"
          onClick={anterior}
        >
          <ChevronLeft />
        </button>

        {/* Flecha derecha */}
        <button
          className="flecha derecha"
          onClick={siguiente}
        >
          <ChevronRight />
        </button>

      </div>
        </section>


        {/* ================= ESPACIOS ================= */}

        <section
          className="espacios"
          id="espacios"
        >

          <div className="titulo-seccion">

            <span>
              INFRAESTRUCTURA
            </span>

            <h2>
              Nuestros espacios
            </h2>

            <p>

              Conocé los diferentes espacios disponibles
              dentro de nuestra institución.

            </p>

          </div>


          <div className="tarjetas">


            {/* LABORATORIO */}

            <article className="tarjeta">

              <div className="icono">
                <Monitor />
              </div>

              <h3>
                Laboratorio
              </h3>

              <p>

                Espacio destinado al desarrollo de actividades
                tecnológicas y proyectos educativos.

              </p>

              <span className="disponible">
                Disponible
              </span>

            </article>


            {/* AULAS */}

            <article className="tarjeta">

              <div className="icono">
                <BookOpen />
              </div>

              <h3>
                Aulas
              </h3>

              <p>

                Espacios preparados para el aprendizaje,
                trabajo grupal y actividades escolares.

              </p>

              <span className="disponible">
                Disponible
              </span>

            </article>


            {/* ESPACIO COMÚN */}

            <article className="tarjeta">

              <div className="icono">
                <Users />
              </div>

              <h3>
                Espacio común
              </h3>

              <p>

                Lugar destinado para reuniones,
                actividades y encuentros de la comunidad.

              </p>

              <span className="disponible">
                Disponible
              </span>

            </article>


            {/* ESPACIO TECNOLÓGICO */}

            <article className="tarjeta">

              <div className="icono">
                <Cpu />
              </div>

              <h3>
                Espacio tecnológico
              </h3>

              <p>

                Área destinada al desarrollo de proyectos
                relacionados con programación y tecnología.

              </p>

              <span className="disponible">
                Disponible
              </span>

            </article>

          </div>

        </section>


        {/* ================= INAUGURACIÓN ================= */}

        <section
          className="inauguracion"
          id="inauguracion"
        >

          <div className="imagen-inauguracion">

            <img
              src="https://prensa.cba.gov.ar/wp-content/uploads/2022/06/DSC_0706.jpg"
              alt="Inauguración de la institución"
            />

            <div className="fecha">

              <strong>
                2022
              </strong>

              <span>
                Inauguración
              </span>

            </div>

          </div>


          <div className="texto-inauguracion">

            <span className="etiqueta">
              NUESTRA HISTORIA
            </span>


            <h2>
              Un espacio creado para aprender y crecer
            </h2>


            <p>

              En el año 2022 se inauguró el edificio de nuestra
              institución, dando comienzo a una nueva etapa para
              la comunidad educativa de ProA Despeñaderos.

            </p>


            <p>

              Desde entonces, el colegio se convirtió en un
              espacio donde los estudiantes pueden desarrollar
              sus conocimientos, proyectos y habilidades,
              acompañados por docentes y toda la comunidad
              educativa.

            </p>


            <a
              href="/historia"
              className="btn principal"
            >
              Conocer más
            </a>

          </div>

        </section>


        {/* ================= PROYECTOS ================= */}

        <section
          className="proyectos"
          id="proyectos"
        >

          <div className="titulo-seccion">

            <span>
              COMUNIDAD
            </span>

            <h2>
              Proyectos institucionales
            </h2>

            <p>

              Conocé algunos de los proyectos y actividades
              desarrollados por nuestros estudiantes.

            </p>

          </div>


          <div className="proyectos-grid">


            <article className="proyecto">

              <Recycle />

              <h3>
                Reciclaje
              </h3>

              <p>

                Proyectos relacionados con el cuidado del
                ambiente y el reciclaje.

              </p>

            </article>


            <article className="proyecto">

              <Code2 />

              <h3>
                Tecnología
              </h3>

              <p>

                Desarrollo de soluciones tecnológicas
                para diferentes problemáticas.

              </p>

            </article>


            <article className="proyecto">

              <FlaskConical />

              <h3>
                Ciencia
              </h3>

              <p>

                Experimentos y proyectos científicos
                realizados por los estudiantes.

              </p>

            </article>

          </div>


          <div className="btn proyectos">

            <a
              href="/proyectos"
              className="btn azul"
            >
              Ver proyectos
            </a>

          </div>

        </section>


        {/* ================= EGRESADOS ================= */}

        <section
          className="egresados"
          id="egresados"
        >

          

            <h1>

              Un espacio para recordar y compartir los logros
              de quienes formaron parte de nuestra institución.

            </h1>

        <div>
  
            <a 
              href="/egresados"
              className= "btn blanco">
              Ver egresados
            </a>

          </div>

        </section>


        {/* ================= AUTORIDADES ================= */}

        <section
          className="autoridades"
          id="autoridades"
        >

          <div className="titulo-seccion">

            <span>
              INSTITUCIÓN
            </span>

            <h2>
              Autoridades y contactos
            </h2>

          </div>


          <div className="contactos">


            <div className="contacto">

              <UserRound />

              <h3>
                Dirección
              </h3>

              <p>
                Argentina 734, Despeñaderos, Córdoba
              </p>

            </div>


            <div className="contacto">

              <Mail />

              <h3>
                Email
              </h3>

              <p>
                despenaderos.ds@escuelasproa.edu.ar
              </p>

                <div className="directivo">
                  <a
                    href="/directivos"
                    className="btn blanco"
                  >
                Ver más
              </a>
        </div>


            </div>


            <div className="contacto">

              <Phone />

              <h3>
                Teléfono
              </h3>

              <p>
                (03547) 492000
              </p>

            </div>

  

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer id="redes">

        <div className="footer-contenido">


          {/* INFORMACIÓN */}

          <div className="footer-info">

            <div className="logo-footer">

              <GraduationCap />

            </div>


            <div>

              <h3>
                ProA Despeñaderos
              </h3>

              <p>

                Página institucional creada para brindar
                información y facilitar el acceso a la
                comunidad educativa.

              </p>

            </div>

          </div>


          {/* CREADORES */}

          <div className="creadores">

            <h3>
              Creadores
            </h3>

            <p>
              Página desarrollada por Juli y Benja
            </p>

            <p>

              Contacto:

              <strong>
                ig: promo.26proa
              </strong>

            </p>

          </div>


          {/* REDES */}

          <div className="redes-sociales">

            <h3>
              Seguinos
            </h3>


            <div className="redes-iconos">


              <a
                href="https://www.instagram.com/proadespenaderos/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >

                <Camera />

              </a>


              <a
                href="https://facebook.com/proa.despenaderos"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >

                <Share2 />

              </a>


              <a
                href="mailto:despenaderos.ds@escuelasproa.edu.ar"
                aria-label="Email"
              >

                <Mail />

              </a>

            </div>

          </div>

        </div>


        {/* FOOTER INFERIOR */}

        <div className="footer-bottom">

          <p>

            © 2026 ProA Despeñaderos.
            Todos los derechos reservados.

          </p>

        </div>

      </footer>

    </>
  );
}


export default App;