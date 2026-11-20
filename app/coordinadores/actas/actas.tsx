
"use client";

import { useMemo, useState } from "react";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Plus,
  Search,
  Bell,
  Users,
  ClipboardList,
  Upload,
  Trash2,
  Menu,
  X,
  ChevronRight,
  School,
  FileUp,
} from "lucide-react";

import "./actas.css";

type Acta = {
  id: number;
  titulo: string;
  curso: string;
  fecha: string;
  descripcion: string;
  archivo: string;
};

type Nota = {
  id: number;
  alumno: string;
  curso: string;
  motivo: string;
  fecha: string;
  descripcion: string;
  tipo: string;
};

const cursos = [
  "1° Año",
  "2° Año",
  "3° Año",
  "4° Año",
  "5° Año",
  "6° Año",
];

const fechaActual = () => new Date().toISOString().slice(0, 10);

export default function Coordinacion() {
  const [seccion, setSeccion] = useState("inicio");
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [actas, setActas] = useState<Acta[]>([]);
  const [notas, setNotas] = useState<Nota[]>([]);

  const [mostrarActa, setMostrarActa] = useState(false);
  const [mostrarNota, setMostrarNota] = useState(false);

  const [archivo, setArchivo] = useState<File | null>(null);

  const [nuevaActa, setNuevaActa] = useState({
    titulo: "",
    curso: "",
    fecha: fechaActual(),
    descripcion: "",
  });

  const [nuevaNota, setNuevaNota] = useState({
    alumno: "",
    curso: "",
    motivo: "",
    fecha: fechaActual(),
    descripcion: "",
    tipo: "Observación",
  });

  const actasFiltradas = useMemo(
    () =>
      actas.filter((a) =>
        `${a.titulo} ${a.curso} ${a.descripcion}`
          .toLowerCase()
          .includes(busqueda.toLowerCase())
      ),
    [actas, busqueda]
  );

  const notasFiltradas = useMemo(
    () =>
      notas.filter((n) =>
        `${n.alumno} ${n.curso} ${n.motivo} ${n.descripcion}`
          .toLowerCase()
          .includes(busqueda.toLowerCase())
      ),
    [notas, busqueda]
  );

  function guardarActa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setActas((prev) => [
      {
        ...nuevaActa,
        id: Date.now(),
        archivo: archivo?.name || "",
      },
      ...prev,
    ]);

    setNuevaActa({
      titulo: "",
      curso: "",
      fecha: fechaActual(),
      descripcion: "",
    });

    setArchivo(null);
    setMostrarActa(false);
  }

  function guardarNota(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setNotas((prev) => [
      {
        ...nuevaNota,
        id: Date.now(),
      },
      ...prev,
    ]);

    setNuevaNota({
      alumno: "",
      curso: "",
      motivo: "",
      fecha: fechaActual(),
      descripcion: "",
      tipo: "Observación",
    });

    setMostrarNota(false);
  }

  function cambiarSeccion(nombre: string) {
    setSeccion(nombre);
    setBusqueda("");
    setMenuAbierto(false);
  }

  const menu = [
    {
      id: "inicio",
      nombre: "Inicio",
      icono: LayoutDashboard,
    },
    {
      id: "actas",
      nombre: "Actas institucionales",
      icono: FileText,
    },
    {
      id: "convivencia",
      nombre: "Cuaderno de convivencia",
      icono: BookOpen,
    },
  ];

  return (
    <div className="coordinacion">

      {/* SIDEBAR */}

      <aside className={`sidebar ${menuAbierto ? "sidebar-open" : ""}`}>

        <div className="sidebar-header">
          <div className="logo-coordinacion">
            <School size={27} />
          </div>

          <div>
            <h1>Coordinación</h1>
            <span>Panel institucional</span>
          </div>

          <button
            className="close-menu"
            onClick={() => setMenuAbierto(false)}
          >
            <X />
          </button>
        </div>

        <div className="sidebar-menu">
          <p className="menu-label">MENÚ PRINCIPAL</p>

          {menu.map((item) => {
            const Icon = item.icono;

            return (
              <button
                key={item.id}
                className={`menu-item ${
                  seccion === item.id ? "active" : ""
                }`}
                onClick={() => cambiarSeccion(item.id)}
              >
                <Icon size={19} />
                <span>{item.nombre}</span>

                {seccion === item.id && (
                  <ChevronRight size={17} />
                )}
              </button>
            );
          })}
        </div>

        <div className="sidebar-footer">
          <strong>Espacio de Coordinación</strong>
          <p>Gestión y seguimiento institucional.</p>
        </div>

      </aside>

      {menuAbierto && (
        <div
          className="overlay-menu"
          onClick={() => setMenuAbierto(false)}
        />
      )}

      {/* CONTENIDO PRINCIPAL */}

      <main className="main-content">

        {/* HEADER */}

        <header className="topbar">

          <div className="topbar-left">

            <button
              className="open-menu"
              onClick={() => setMenuAbierto(true)}
            >
              <Menu />
            </button>

            <div>
              <span className="institution-label">
                INSTITUCIÓN EDUCATIVA
              </span>

              <h2>
                {seccion === "inicio"
                  ? "Panel principal"
                  : seccion === "actas"
                  ? "Actas institucionales"
                  : "Cuaderno de convivencia"}
              </h2>
            </div>

          </div>

          <div className="topbar-right">
            <span>Administración escolar</span>

            <div className="notification-icon">
              <Bell size={19} />
            </div>

            <div className="user-avatar">C</div>
          </div>

        </header>

        <div className="page-container">

          {/* INICIO */}

          {seccion === "inicio" && (
            <>

              <section className="welcome-banner">

                <span className="banner-label">
                  SISTEMA DE GESTIÓN ESCOLAR
                </span>

                <h2>Bienvenida al área de Coordinación</h2>

                <p>
                  Desde este espacio podés administrar las actas
                  institucionales y realizar el seguimiento del
                  cuaderno de convivencia escolar.
                </p>

                <div className="banner-buttons">

                  <button
                    className="btn-white"
                    onClick={() => {
                      setSeccion("actas");
                      setMostrarActa(true);
                    }}
                  >
                    <Plus size={17} />
                    Nueva acta
                  </button>

                  <button
                    className="btn-outline"
                    onClick={() => {
                      setSeccion("convivencia");
                      setMostrarNota(true);
                    }}
                  >
                    <Plus size={17} />
                    Nueva nota
                  </button>

                </div>

              </section>

              {/* ESTADÍSTICAS */}

              <div className="stats-grid">

                <div className="stat-card">
                  <div className="stat-icon">
                    <FileText />
                  </div>
                  <span>Total registrado</span>
                  <h3>{actas.length}</h3>
                  <p>Actas institucionales</p>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <BookOpen />
                  </div>
                  <span>Total registrado</span>
                  <h3>{notas.length}</h3>
                  <p>Notas de convivencia</p>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <Users />
                  </div>
                  <span>Organización</span>
                  <h3>{cursos.length}</h3>
                  <p>Cursos disponibles</p>
                </div>

              </div>

              {/* ACCESOS RÁPIDOS */}

              <h3 className="section-title">Accesos rápidos</h3>

              <div className="quick-grid">

                <button
                  className="quick-card"
                  onClick={() => cambiarSeccion("actas")}
                >
                  <div className="quick-icon">
                    <ClipboardList size={29} />
                  </div>

                  <div>
                    <h4>Actas institucionales</h4>
                    <p>Crear y consultar actas.</p>
                  </div>

                  <ChevronRight />
                </button>

                <button
                  className="quick-card"
                  onClick={() => cambiarSeccion("convivencia")}
                >
                  <div className="quick-icon">
                    <BookOpen size={29} />
                  </div>

                  <div>
                    <h4>Cuaderno de convivencia</h4>
                    <p>Registrar notas y observaciones.</p>
                  </div>

                  <ChevronRight />
                </button>

              </div>

              {/* MOVIMIENTOS */}

              <section className="content-card recent-section">

                <h3>Últimos movimientos</h3>

                {[
                  ...actas.map((a) => ({
                    titulo: a.titulo,
                    fecha: a.fecha,
                    tipo: "Acta",
                  })),
                  ...notas.map((n) => ({
                    titulo: `${n.alumno} - ${n.motivo}`,
                    fecha: n.fecha,
                    tipo: "Convivencia",
                  })),
                ]
                  .sort((a, b) => b.fecha.localeCompare(a.fecha))
                  .slice(0, 5)
                  .map((registro, i) => (
                    <div className="recent-item" key={i}>
                      <div className="recent-icon">
                        {registro.tipo === "Acta" ? (
                          <FileText size={18} />
                        ) : (
                          <BookOpen size={18} />
                        )}
                      </div>

                      <div className="recent-info">
                        <strong>{registro.titulo}</strong>
                        <span>{registro.tipo}</span>
                      </div>

                      <span className="recent-date">
                        {registro.fecha}
                      </span>
                    </div>
                  ))}

                {actas.length === 0 && notas.length === 0 && (
                  <p className="empty-text">
                    Todavía no hay registros cargados.
                  </p>
                )}

              </section>

            </>
          )}

          {/* ACTAS */}

          {seccion === "actas" && (
            <>

              <div className="page-heading">
                <div>
                  <h2>Actas institucionales</h2>
                  <p>Administración y archivo de actas.</p>
                </div>

                <button
                  className="btn-primary"
                  onClick={() => setMostrarActa(true)}
                >
                  <Plus size={18} />
                  Cargar nueva acta
                </button>
              </div>

              <div className="search-box">
                <Search size={19} />

                <input
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar acta por título, curso o descripción..."
                />
              </div>

              <section className="content-card">

                <div className="card-heading">
                  <h3>Registro de actas</h3>
                  <span>{actasFiltradas.length} registros</span>
                </div>

                {actasFiltradas.length === 0 ? (
                  <div className="empty-state">
                    <FileText size={42} />
                    <h4>No hay actas para mostrar</h4>
                    <p>Cargá una nueva acta para comenzar.</p>
                  </div>
                ) : (
                  actasFiltradas.map((acta) => (
                    <div className="record-item" key={acta.id}>

                      <div className="record-icon">
                        <FileText size={23} />
                      </div>

                      <div className="record-info">
                        <h4>{acta.titulo}</h4>
                        <span>
                          {acta.curso} · {acta.fecha}
                        </span>
                        <p>{acta.descripcion}</p>

                        {acta.archivo && (
                          <small>
                            <FileUp size={14} />
                            {acta.archivo}
                          </small>
                        )}
                      </div>

                      <button
                        className="delete-button"
                        onClick={() =>
                          setActas((prev) =>
                            prev.filter((a) => a.id !== acta.id)
                          )
                        }
                        title="Eliminar acta"
                      >
                        <Trash2 size={19} />
                      </button>

                    </div>
                  ))
                )}

              </section>

            </>
          )}

          {/* CUADERNO DE CONVIVENCIA */}

          {seccion === "convivencia" && (
            <>

              <div className="page-heading">
                <div>
                  <h2>Cuaderno de convivencia</h2>
                  <p>Registro y seguimiento de situaciones escolares.</p>
                </div>

                <button
                  className="btn-primary"
                  onClick={() => setMostrarNota(true)}
                >
                  <Plus size={18} />
                  Nueva nota
                </button>
              </div>

              <div className="search-box">
                <Search size={19} />

                <input
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar por alumno, curso o motivo..."
                />
              </div>

              <section className="content-card">

                <div className="card-heading">
                  <h3>Registro de convivencia</h3>
                  <span>{notasFiltradas.length} registros</span>
                </div>

                {notasFiltradas.length === 0 ? (
                  <div className="empty-state">
                    <BookOpen size={42} />
                    <h4>No hay notas registradas</h4>
                    <p>Las nuevas observaciones aparecerán aquí.</p>
                  </div>
                ) : (
                  notasFiltradas.map((nota) => (
                    <div className="record-item" key={nota.id}>

                      <div className="record-icon">
                        <Users size={23} />
                      </div>

                      <div className="record-info">

                        <div className="record-title">
                          <h4>{nota.alumno}</h4>
                          <span className="type-badge">
                            {nota.tipo}
                          </span>
                        </div>

                        <span>
                          {nota.curso} · {nota.fecha}
                        </span>

                        <strong>{nota.motivo}</strong>

                        <p>{nota.descripcion}</p>

                      </div>

                      <button
                        className="delete-button"
                        onClick={() =>
                          setNotas((prev) =>
                            prev.filter((n) => n.id !== nota.id)
                          )
                        }
                        title="Eliminar nota"
                      >
                        <Trash2 size={19} />
                      </button>

                    </div>
                  ))
                )}

              </section>

            </>
          )}

          <footer className="page-footer">
            Sistema de Gestión Escolar · Área de Coordinación
          </footer>

        </div>
      </main>

      {/* MODAL ACTAS */}

      {mostrarActa && (
        <div className="modal-overlay">

          <form className="modal" onSubmit={guardarActa}>

            <div className="modal-header">
              <div>
                <span>GESTIÓN DOCUMENTAL</span>
                <h3>Nueva acta institucional</h3>
              </div>

              <button
                type="button"
                className="close-button"
                onClick={() => setMostrarActa(false)}
              >
                <X />
              </button>
            </div>

            <div className="form-group">
              <label>Título del acta *</label>
              <input
                required
                value={nuevaActa.titulo}
                onChange={(e) =>
                  setNuevaActa({
                    ...nuevaActa,
                    titulo: e.target.value,
                  })
                }
                placeholder="Ej: Reunión de equipo docente"
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Curso *</label>
                <select
                  required
                  value={nuevaActa.curso}
                  onChange={(e) =>
                    setNuevaActa({
                      ...nuevaActa,
                      curso: e.target.value,
                    })
                  }
                >
                  <option value="">Seleccionar</option>
                  {cursos.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                  <option value="Institucional">Institucional</option>
                </select>
              </div>

              <div className="form-group">
                <label>Fecha *</label>
                <input
                  required
                  type="date"
                  value={nuevaActa.fecha}
                  onChange={(e) =>
                    setNuevaActa({
                      ...nuevaActa,
                      fecha: e.target.value,
                    })
                  }
                />
              </div>

            </div>

            <div className="form-group">
              <label>Descripción del acta *</label>
              <textarea
                required
                rows={5}
                value={nuevaActa.descripcion}
                onChange={(e) =>
                  setNuevaActa({
                    ...nuevaActa,
                    descripcion: e.target.value,
                  })
                }
                placeholder="Escribí el contenido, acuerdos y temas tratados..."
              />
            </div>

            <div className="form-group">
              <label>Adjuntar documento (PDF o Word)</label>

              <label className="file-upload">
                <Upload size={23} />
                <div>
                  <strong>Seleccionar archivo</strong>
                  <p>{archivo?.name || "PDF o DOCX"}</p>
                </div>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setArchivo(e.target.files?.[0] || null)
                  }
                />
              </label>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={() => setMostrarActa(false)}
              >
                Cancelar
              </button>

              <button type="submit" className="btn-primary">
                Guardar acta
              </button>
            </div>

          </form>
        </div>
      )}

      {/* MODAL CONVIVENCIA */}

      {mostrarNota && (
        <div className="modal-overlay">

          <form className="modal" onSubmit={guardarNota}>

            <div className="modal-header">
              <div>
                <span>SEGUIMIENTO ESCOLAR</span>
                <h3>Nueva nota de convivencia</h3>
              </div>

              <button
                type="button"
                className="close-button"
                onClick={() => setMostrarNota(false)}
              >
                <X />
              </button>
            </div>

            <div className="form-group">
              <label>Nombre del estudiante *</label>
              <input
                required
                value={nuevaNota.alumno}
                onChange={(e) =>
                  setNuevaNota({
                    ...nuevaNota,
                    alumno: e.target.value,
                  })
                }
                placeholder="Nombre y apellido"
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Curso *</label>
                <select
                  required
                  value={nuevaNota.curso}
                  onChange={(e) =>
                    setNuevaNota({
                      ...nuevaNota,
                      curso: e.target.value,
                    })
                  }
                >
                  <option value="">Seleccionar</option>
                  {cursos.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Fecha *</label>
                <input
                  required
                  type="date"
                  value={nuevaNota.fecha}
                  onChange={(e) =>
                    setNuevaNota({
                      ...nuevaNota,
                      fecha: e.target.value,
                    })
                  }
                />
              </div>

            </div>

            <div className="form-group">
              <label>Tipo de registro *</label>
              <select
                value={nuevaNota.tipo}
                onChange={(e) =>
                  setNuevaNota({
                    ...nuevaNota,
                    tipo: e.target.value,
                  })
                }
              >
                <option>Observación</option>
                <option>Seguimiento</option>
                <option>Reconocimiento</option>
                <option>Intervención</option>
                <option>Acuerdo</option>
              </select>
            </div>

            <div className="form-group">
              <label>Motivo *</label>
              <input
                required
                value={nuevaNota.motivo}
                onChange={(e) =>
                  setNuevaNota({
                    ...nuevaNota,
                    motivo: e.target.value,
                  })
                }
                placeholder="Motivo del registro"
              />
            </div>

            <div className="form-group">
              <label>Descripción y observaciones *</label>
              <textarea
                required
                rows={5}
                value={nuevaNota.descripcion}
                onChange={(e) =>
                  setNuevaNota({
                    ...nuevaNota,
                    descripcion: e.target.value,
                  })
                }
                placeholder="Describir la situación, intervención y acuerdos..."
              />
            </div>

            <div className="privacy-notice">
              Este registro contiene información confidencial.
              Debe ser redactado de manera objetiva y respetuosa.
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={() => setMostrarNota(false)}
              >
                Cancelar
              </button>

              <button type="submit" className="btn-primary">
                Guardar nota
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
}
