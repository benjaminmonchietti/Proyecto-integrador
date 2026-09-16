<nav>
    <Link href="/cooperadora">Cooperadora</Link>
    <Link href="/">Productos</Link>
    <Link href="/contacto">Contacto</Link>
</nav>


"use client";

import "../cooperadora/global.css";

export default function Cooperadora() {
  return (
    <>
      <header>

        <div>
          <h2>Escuela PRoA</h2>
          <p>Cooperadora Escolar</p>
        </div>

        <nav>
          <a href="/">Inicio</a>
          <a href="#cooperadora">Cooperadora</a>
          <a href="#requisitos">Requisitos</a>
          <a href="#contacto">Contacto</a>
        </nav>

      </header>


      <section className="inicio">

        <h1>Cooperadora Escolar</h1>

        <p>
          La cooperadora ayuda a la escuela en diferentes necesidades
          y actividades que se realizan durante el año.
        </p>

      </section>


      <section id="cooperadora">

        <h2>¿Qué es la cooperadora?</h2>

        <p>
          Es un grupo formado por familias y personas de la comunidad
          educativa que colaboran con la institución.
        </p>

        <p>
          La colaboración permite ayudar con materiales, actividades,
          proyectos y algunas mejoras que necesita la escuela.
        </p>

      </section>


      <section className="gris">

        <h2>¿En qué ayuda?</h2>

        <div className="contenedor">

          <div className="tarjeta">

            <h3>Materiales</h3>

            <p>
              Compra de materiales para clases, talleres y
              diferentes proyectos de los estudiantes.
            </p>

          </div>


          <div className="tarjeta">

            <h3>Actividades</h3>

            <p>
              Colaboración con eventos, proyectos y actividades
              que se realizan en la escuela.
            </p>

          </div>


          <div className="tarjeta">

            <h3>Mejoras</h3>

            <p>
              Ayuda para mantener y mejorar los espacios
              utilizados por alumnos y docentes.
            </p>

          </div>

        </div>

      </section>


      <section>

        <h2>Aporte a la cooperadora</h2>

        <p>
          Las familias pueden colaborar con un aporte para ayudar
          a cubrir las diferentes necesidades de la institución.
        </p>

        <p>
          El monto y la forma de pago son comunicados por la escuela
          y pueden consultarse cuando sea necesario.
        </p>

      </section>


      <section id="requisitos" className="gris">

        <h2>Requisitos y documentación</h2>

        <p>
          Para algunos trámites puede ser necesario presentar
          documentación del estudiante o del adulto responsable.
        </p>

        <ul>
          <li>DNI del responsable</li>
          <li>Ficha correspondiente</li>
          <li>Documentación del estudiante</li>
          <li>Formularios de la institución</li>
        </ul>

      </section>


      <section>

        <h2>Preguntas frecuentes</h2>

        <details>

          <summary>¿Es obligatorio pagar la cooperadora?</summary>

          <p>
            La participación y colaboración de las familias en la cooperadora
            es voluntaria. Cada familia puede decidir si desea realizar un
            aporte y colaborar con las actividades que se llevan adelante
            durante el año.
          </p>

        </details>


        <details>

          <summary>¿Para qué se utiliza el dinero de la cooperadora?</summary>

          <p>
            El dinero recaudado se utiliza para colaborar con diferentes
            necesidades de la escuela. Puede destinarse a la compra de
            materiales, actividades, proyectos, mantenimiento y mejoras
            de los espacios que utilizan los estudiantes.
          </p>

        </details>


        <details>

          <summary>¿Cómo puedo colaborar con la cooperadora?</summary>

          <p>
            Se puede colaborar realizando los aportes correspondientes,
            participando en actividades y acompañando las propuestas de
            la cooperadora. También se pueden acercar ideas o propuestas
            que puedan ayudar a mejorar la escuela.
          </p>

        </details>


        <details>

          <summary>¿Dónde puedo consultar el monto del aporte?</summary>

          <p>
            El monto del aporte puede variar y es informado por la
            institución. Para conocer el valor actualizado, las fechas
            y las formas de pago disponibles, se puede consultar
            directamente con la escuela o con la cooperadora.
          </p>

        </details>


        <details>

          <summary>¿Quiénes pueden formar parte de la cooperadora?</summary>

          <p>
            Pueden participar las familias, tutores y otros integrantes
            de la comunidad educativa que quieran colaborar con la escuela.
            La participación permite acompañar diferentes proyectos y
            necesidades que aparecen durante el ciclo lectivo.
          </p>

        </details>


        <details>

          <summary>¿Qué documentación necesito para realizar un trámite?</summary>

          <p>
            La documentación depende del trámite que se quiera realizar.
            En algunos casos puede solicitarse el DNI del responsable,
            documentación del estudiante, fichas o formularios entregados
            por la institución.
          </p>

        </details>


        <details>

          <summary>¿Dónde puedo hacer consultas sobre la cooperadora?</summary>

          <p>
            Ante cualquier duda sobre los aportes, documentación,
            actividades o requisitos, se puede consultar directamente
            con la institución. De esta manera se obtiene información
            actualizada y correspondiente al ciclo lectivo.
          </p>

        </details>

      </section>


      <footer id="contacto">

        <h3>Cooperadora Escuela PRoA</h3>

        <p>Despeñaderos, Córdoba</p>

        <p>despenaderos.ds@escuelaproa.edu.ar</p>

        <p>© 2026 Escuela PRoA</p>

      </footer>
    </>
  );
}

