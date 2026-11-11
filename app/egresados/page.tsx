"use client";
import Image from "next/image";

import { useState } from "react";
import { Users, ChevronDown } from "lucide-react";
import "../egresados/global.css";

const egresados2024: string[] = [
  "Alma Samira Arce",
  "Adrian Beas",
  "Trinidad Biasutto",
  "Luciano Bulchi Farias",
  "Victoria Castillo Pavessi",
  "Joaquin Cirione",
  "Lucia Coria",
  "Alvaro Valentín Espinoza",
  "Catalina Farias",
  "Milagros Analía Gil",
  "Mia Valentina Ledesma",
  "Ludmila Yasmin Martinez",
  "Lourdes Agustina Modolo",
  "Paola Irene Montiel Vega",
  "Lionel Andrés Rosales",
  "Camilo Salvador Ruano Calderon",
  "Julieta Marialis Vega Pereyra",
  "Maitena Yeri",
];

const egresados2025: string[] = [
  "Carolina Bassetto Martinez",
  "Renzo José Cabrera",
  "Indira Castillo Juarez",
  "Jose German Contreras Cena",
  "Rocio Magali Cordoba",
  "Tiago Ignacio Farias",
  "Octavio Alejandro Gomez",
  "Ciro Kuchen Pautasso",
  "Briana Marino Diez",
  "Maximo Pagan Grimas",
  "Valentin Perez Billani",
  "Thiago Agustin Rojo",
  "Octavio Sanchez Lombardi",
  "Francisco Santiago Scatolini Calderon",
  "Maciel Adrian Spalla Montoro",
  "Matías Santino Tabares",
  "Tiziano Zandivarez Ramirez",
];

const integrantes2026: string[] = [
  "Agustina Arregui Picca",
  "Alexis Sebastián Zarate pascua",
  "Ana Lourdes Benavidez",
  "Antonella Eileen Peralta",
  "Avril Emilia Rincón Vergara",
  "Bautista Nicolas Galetto",
  "Candelaria Galan Vergara",
  "Felipe Gaspar Pereyra Priselac",
  "Jazmín Zarate",
  "Jonas Altamira",
  "Julieta Anahí Escobar Heredia",
  "Magdalena Castognoviz Arjona",
  "Romulo Marco Santiago Calderon",
  "María Agustina Carrizo",
  "Matias Benjamín Mercado",
  "Máximo Acuña Oses",
  "Ramiro Benjamín Mochietti Romero",
  "Tiago Elian Martínez",
  "Tiara Luraschi",
  "Corina Magnotti Gonzalez",
  "Tomas Nicolás Ros",
];

type PromocionProps = {
  id: string;
  anio: string;
  imagen: string;
  alt: string;
  etiqueta: string;
  descripcion: string;
  tituloLista: string;
  nombres: string[];
  proxima?: boolean;
};

function TarjetaPromocion({
  id,
  anio,
  imagen,
  alt,
  etiqueta,
  descripcion,
  tituloLista,
  nombres,
  proxima = false,
}: PromocionProps) {
  const [abierta, setAbierta] = useState<boolean>(false);

  const textoBoton: string = abierta
    ? "Ocultar egresados"
    : proxima
      ? "Ver integrantes"
      : "Ver egresados";

  const cambiarEstado = () => {
    setAbierta((estadoAnterior) => !estadoAnterior);
  };

  return (
    <article className="tarjeta-promocion">

      <div className="imagen-contenedor">

        <img src={imagen} alt={alt} />

        <div className="etiqueta-imagen">
          {etiqueta}
        </div>

      </div>

      <div className="contenido-tarjeta">

        <span className="numero">
          {proxima ? "PRÓXIMA PROMOCIÓN" : "PROMOCIÓN"}
        </span>

        <h3>{anio}</h3>

        <p>{descripcion}</p>

        <button
          type="button"
          className="boton-egresados"
          onClick={cambiarEstado}
          aria-expanded={abierta}
          aria-controls={id}
        >
          <Users />

          <span>{textoBoton}</span>

          <ChevronDown
            className="flecha"
            style={{
              transform: abierta
                ? "rotate(180deg)"
                : "rotate(0deg)",
            }}
          />
        </button>

        <div
          id={id}
          className={`lista-egresados${abierta ? " abierta" : ""}`}
        >
          <h4>{tituloLista}</h4>

          <div className="nombres">

            {nombres.map((nombre, index) => (
              <div key={`${id}-${index}`}>
                {nombre}
              </div>
            ))}

          </div>

        </div>

      </div>

    </article>
  );
}

export default function Egresados() {
  return (
    <>

      <header className="hero">

        <div className="hero-contenido">

          <span className="hero-etiqueta">
            PROA DESPEÑADEROS
          </span>

          <h1>Egresados</h1>

          <p>
            Conocé las promociones que forman parte
            <br />
            de la historia de nuestra institución.
          </p>

        </div>

        <a href="../" className="btn-volver">
       
         <span>Volver</span>
        </a>


      </header>


      <main className="contenedor">

        <section className="introduccion">

          <span className="subtitulo">
            NUESTRA HISTORIA
          </span>

          <h2>
            Promociones que dejaron su huella
          </h2>

          <p>
            Cada promoción representa una parte importante
            de nuestra comunidad educativa. Conocé a quienes
            fueron protagonistas de cada generación.
          </p>

        </section>


        <section className="promociones">

        <TarjetaPromocion
          id="lista2024"
          anio="2024"
          imagen="/images/promo24.jpg"
          alt="Egresados promoción 2024"
          etiqueta="PROMO 2024"
          descripcion="Nuestra primera promoción de egresados, que dejó una huella muy especial en ProA Despeñaderos."
          tituloLista="Egresados · Promoción 2024"
          nombres={egresados2024}
        />

        <TarjetaPromocion
          id="lista2025"
          anio="2025"
          imagen="/images/promo25.jpg"
          alt="Egresados promoción 2025"
          etiqueta="PROMO 2025"
          descripcion="Una nueva generación que culminó su recorrido y pasó a formar parte de la historia de nuestra institución."
          tituloLista="Egresados · Promoción 2025"
          nombres={egresados2025}
        />

        <TarjetaPromocion
          id="lista2026"
          anio="2026"
          imagen="/images/promo26.jpg"
          alt="Integrantes promoción 2026"
          etiqueta="PROMO 2026"
          descripcion="Una nueva generación que continúa escribiendo su propia historia en ProA Despeñaderos."
          tituloLista="Integrantes · Promoción 2026"
          nombres={integrantes2026}
          proxima
        />

        </section>

      </main>


      <footer>

        <div>

          <strong>
            ProA Despeñaderos
          </strong>

          <p>
            Historias que dejan huella.
          </p>

        </div>

      </footer>

    </>
  );
}

