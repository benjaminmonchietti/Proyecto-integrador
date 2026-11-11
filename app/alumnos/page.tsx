"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./global.css";

type Seccion = {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
};

const secciones: Seccion[] = [
  {
    id: "actas",
    titulo: "Actas",
    descripcion: "Consultá tus actas académicas.",
    icono: "📄",
  },
  {
    id: "asistencias",
    titulo: "Faltas y asistencias",
    descripcion: "Revisá tu historial de asistencia.",
    icono: "📅",
  },
  {
    id: "materias",
    titulo: "Materias",
    descripcion: "Consultá tus espacios curriculares.",
    icono: "📚",
  },
  {
    id: "pendientes",
    titulo: "Aprendizajes pendientes",
    descripcion: "Revisá tus aprendizajes pendientes.",
    icono: "📝",
  },
];

export default function Alumnos() {
  const [email, setEmail] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let activo = true;

    async function obtenerUsuario() {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        setError("Falta configurar Supabase en el archivo .env.local.");
        setCargando(false);
        return;
      }

      const supabase = createClient(supabaseUrl, supabaseAnonKey);

      if (!activo) return;

      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        setError("Iniciá sesión para acceder al portal.");
      } else {
        setEmail(data.user.email ?? "");
      }

      setCargando(false);
    }

    obtenerUsuario();

    return () => {
      activo = false;
    };
  }, []);

  if (cargando) {
    return <main className="alumnos">Cargando portal...</main>;
  }

  if (error) {
    return (
      <main className="alumnos">
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="alumnos">
      <header className="alumnos-header">
        <div className="alumnos-logo">🎓</div>
        <div>
          <h1>ProA Despeñaderos</h1>
          <p>Portal del Alumno</p>
        </div>
      </header>

      <section className="alumnos-bienvenida">
        <span>MI ESPACIO ACADÉMICO</span>
        <h2>¡Bienvenido/a!</h2>
        <p>
          Desde acá podés consultar tu información escolar.
        </p>
        <div className="alumnos-cuenta">
          Sesión iniciada como: <strong>{email}</strong>
        </div>
      </section>

      <section className="alumnos-grid">
        {secciones.map((seccion) => (
          <button
            className="alumnos-card"
            key={seccion.id}
            onClick={() =>
              window.location.assign(
                `/alumnos/${seccion.id}`
              )
            }
          >
            <span className="alumnos-icono">
              {seccion.icono}
            </span>
            <h3>{seccion.titulo}</h3>
            <p>{seccion.descripcion}</p>
            <span className="alumnos-ver">Consultar →</span>
          </button>
        ))}
      </section>

      <footer className="alumnos-footer">
        ProA Despeñaderos · Información académica privada
      </footer>
    </main>
  );
}
