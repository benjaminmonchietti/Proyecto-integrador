
import { useState } from "react";

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
/>


function Alumnos() {
    const [contador, setContador] = useState(1);

    function aumentar() {
        setContador(contador + 1);
    }

    function disminuir() {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <h1>ALUMNOS</h1>

            <section
                className="card"
                style={{ maxWidth: "320px" }}
            >
                <img
                    src="..."
                    className="card-img-top"
                    alt="Imagen del alumno"
                />

                <div className="card-body">
                    <h4 className="card-title">
                        Card title
                    </h4>

                    <p className="card-text">
                        Some quick example text to build on the
                        card title and make up the bulk of the
                        card's content.
                    </p>

                    {/* Contador */}
                    <div className="contador">
                        <button
                            className="boton"
                            onClick={disminuir}
                        >
                            −
                        </button>

                        <div className="numero">
                            {contador}
                        </div>

                        <button
                            className="boton"
                            onClick={aumentar}
                        >
                            +
                        </button>
                    </div>

                    <br />

                    <a
                        href="#"
                        className="btn-solid theme-primary"
                    >
                        Go somewhere
                    </a>
                </div>
            </section>
        </>
    );
}

export default Alumnos;
