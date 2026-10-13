
"use client";

import { useState } from "react";
import "./global.css";

export default function CrearSesion() {
  const [nombre, setNombre] = useState("");
  const [gmail, setGmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("alumno");
  const [mensaje, setMensaje] = useState("");

  const registrarse = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre.trim() || !gmail.trim() || !contrasena) {
      setMensaje("Completá todos los campos.");
      return;
    }

    if (!gmail.toLowerCase().endsWith("@gmail.com")) {
      setMensaje("Ingresá una dirección de Gmail válida.");
      return;
    }

    if (contrasena.length < 8) {
      setMensaje("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    setMensaje(
      "Formulario completado correctamente. Falta conectar la base de datos."
    );
  };

  return (
    <main className="registro-fondo">
      <section className="registro-tarjeta">
        <h1>CREAR CUENTA</h1>
        <p className="registro-descripcion">
          Escuela Experimental ProA Despeñaderos
        </p>

        <form onSubmit={registrarse}>
          <label htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresá tu nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoComplete="name"
            required
          />

          <label htmlFor="gmail">Gmail</label>
          <input
            id="gmail"
            type="email"
            placeholder="ejemplo@gmail.com"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="contrasena">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            placeholder="Mínimo 8 caracteres"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            autoComplete="new-password"
            minLength={8}
            required
          />

          <label htmlFor="tipoUsuario">¿Qué rol tenés?</label>
          <select
            id="tipoUsuario"
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
            required
          >
            <option value="alumno">Alumno/a</option>
            <option value="directivo">Directora/or</option>
            <option value="preceptor">Preceptora/or</option>
            <option value="coordinador">Coordinadora/or</option>
          </select>

          <button type="submit">REGISTRARME</button>
        </form>

        {mensaje && (
          <p className="registro-mensaje" role="status">
            {mensaje}
          </p>
        )}

        <p className="registro-pie">
          ProA Despeñaderos · Sistema escolar
        </p>
      </section>
    </main>
  );
}