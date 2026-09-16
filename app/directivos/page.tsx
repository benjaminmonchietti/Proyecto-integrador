import "../directivos/global.css";

export default function Directivos() {
  return (
    <>
      <div>
        <h1>Directivos</h1>
      </div>

      <div className="Directivos">

        <article className="directivo-card">

          <div className="foto-container">
            <img
              src="/img/ana.jpeg"
              alt="Ana Ines Urban"
            />
          </div>

          <div className="directivo-info">
            <h3>Ana Ines Urban</h3>
            <span className="cargo">Directora</span>

            <div className="contacto">
              <p>Teléfono: 123456789</p>
              <p>Email: directora@gmail.com</p>
            </div>
          </div>

        </article>


        <article className="directivo-card">

          <div className="foto-container">
            <img
              src="/images/gaby.jpeg"
              alt="Gabriela Nieva Rodriguez"
            />
          </div>

          <div className="directivo-info">
            <h3>Gabriela Nieva Rodriguez</h3>
            <span className="cargo">Preceptora</span>

            <div className="contacto">
              <p>Teléfono: 123456789</p>
              <p>Email: preceptora@gmail.com</p>
            </div>
          </div>

        </article>


        <article className="directivo-card">

          <div className="foto-container">
            <img
              src="/images/itati.jpeg"
              alt="Itati Carranza"
            />
          </div>

          <div className="directivo-info">
            <h3>Itati Carranza</h3>
            <span className="cargo">Coordinadora</span>

            <div className="contacto">
              <p>Teléfono: 123456789</p>
              <p>Email: coordinadora@gmail.com</p>
            </div>
          </div>

        </article>


        <article className="directivo-card">

          <div className="foto-container">
            <img
              src="/images/yani.jpeg"
              alt="Yanina Adan"
            />
          </div>

          <div className="directivo-info">
            <h3>Yanina Adan</h3>
            <span className="cargo">Secretaria</span>

            <div className="contacto">
              <p>Teléfono: 123456789</p>
              <p>Email: secretaria@gmail.com</p>
            </div>
          </div>

        </article>

      </div>
    </>
  );
}

