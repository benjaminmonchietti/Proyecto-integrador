"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../supabase/supabase";

export default function InicioSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const aceptar = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Correo o contraseña incorrectos");
      return;
    }

    alert("Inicio de sesión correcto");

    router.push("/directivos");
  };

  return (
    <>
      <h1>INICIAR SESION</h1>

      <h2>Ingrese su mail</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h2>Ingrese contraseña</h2>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={aceptar}>
        Aceptar
      </button>
    </>
  );
}

