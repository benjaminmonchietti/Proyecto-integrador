
"use client";

import { useState } from "react";
import "../crearsesion/global.css";

export default function InicioSesion() {
  const [mensaje, setMensaje] = useState("");

  const aceptar = () => {
    setMensaje("Datos ingresados correctamente.");
  };

  return (
    <>
      <h1>REGISTRARSE</h1>

      <h2>ingrese su mail</h2>

      <input
        type="text"
        id="...@escuelasproa.edu.ar"
      />

      <h2>ingresar contraseña</h2>

      <input
        type="text"
        id="contraseña"
      />

      <h2>Nombre</h2>

      <input
        type="text"
        id="Nombre completo"
      />

      <button onClick={aceptar}>
        aceptar
      </button>

      <p id="mensaje2">{mensaje}</p>
    </>
  );
}

