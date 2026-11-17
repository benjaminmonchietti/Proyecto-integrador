
"use client";

import Link from "next/link";
import "./global.css";

const secciones = [
  {
    id: "actas",
    titulo: "Actas",
    descripcion: "Consultá tus actas académicas.",
    icono: "📄",
  },
  {
    id: "faltas",
    titulo: "Faltas",
    descripcion: "Revisá tus inasistencias.",
    icono: "📅",
  },
  {
    id: "asistencias",
    titulo: "Asistencias",
    descripcion: "Consultá tu historial de asistencia.",
    icono: "✅",
  },
  {
    id: "materias",
    titulo: "Materias",
    descripcion: "Conocé tus espacios curriculares.",
    icono: "📚",
  },
  {
    id: "pendientes",
    titulo: "Aprendizajes pendientes",
    descripcion: "Revisá tus contenidos pendientes.",
    icono: "📝",
  },
];

export default function AlumnosPage() {
  return (
    <main className="alumnos">

      <header className="alumnos-bienvenida">
        <span>PROA DESPEÑADEROS</span>
        <h1>Portal del Alumno</h1>
        <p>
          Bienvenido a tu espacio académico.
          Consultá tu información escolar.
        </p>
      </header>

      <section className="alumnos-grid">

        {secciones.map((seccion) => (
          <article
            className="alumnos-card"
            key={seccion.id}
          >
            <span className="alumnos-icono">
              {seccion.icono}
            </span>

            <h2>{seccion.titulo}</h2>

            <p>{seccion.descripcion}</p>

            <Link
              href={`/alumnos/consulta?seccion=${seccion.id}`}
              className="alumnos-boton"
            >
              Consultar →
            </Link>

          </article>
        ))}

      </section>

      <footer className="alumnos-footer">
        ProA Despeñaderos · Portal académico
      </footer>

    </main>
  );
}
