"use client";

import { useRouter } from "next/navigation";
import "./global.css";

export default function Usuarios() {
const router = useRouter();

return <main className="pagina-usuarios"> <h1>SELECCIONAR USUARIO</h1>

```
  <p className="subtitulo-usuarios">
    Seleccioná el tipo de usuario para continuar
  </p>

  <div className="contenedor-botones">
    <button onClick={() => router.push("/directivos")}>
      Directora/o
    </button>

    <button onClick={() => router.push("/preceptores")}>
      Preceptora/o
    </button>

    <button onClick={() => router.push("/coordinadores")}>
      Coordinadora/or
    </button>

    <button onClick={() => router.push("/alumnos")}>
      Alumnos/as
    </button>
  </div>
</main>
;
}
