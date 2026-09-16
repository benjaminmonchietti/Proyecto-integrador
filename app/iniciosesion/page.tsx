"use client";
import "../iniciosesion/global.css";
import { useState } from "react";

export default function InicioSesion() {
  const [mensaje, setMensaje] = useState("");

  const aceptar = () => {
    setMensaje("Datos ingresados correctamente.");
  };

  return (
    <>
      <h1>INICIAR SESION</h1>

      <h2>ingrese su mail</h2>

      <input
        type="text"
        id="ingrese un mail"
      />

      <h2>ingresar contraseña</h2>

      <input
        type="text"
        id="ingrese la contraseña"
      />

      <button onClick={aceptar}>
        aceptar
      </button>

      <p id="mensaje2">{mensaje}</p>
    </>
  );
}

