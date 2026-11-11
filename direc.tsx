
"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import "./direc.css";

type Estado = "Planificado" | "En desarrollo" | "Finalizado" | "Pausado";

type Proyecto = {
  id: number;
  curso: string;
  titulo: string;
  objetivo: string;
  materias: string;
  docente: string;
  fechaInicio: string;
  fechaFin: string;
  estado: Estado;
  avance: number;
  observaciones: string;
  proximasTareas: string;
};

const cursos = [
  "1.º año",
  "2.º año",
  "3.º año",
  "4.º año",
  "5.º año",
  "6.º año",
];

const estados: Estado[] = [
  "Planificado",
  "En desarrollo",
  "Finalizado",
  "Pausado",
];

const nuevoProyecto = (curso = "1.º año"): Omit<Proyecto, "id"> => ({
  curso,
  titulo: "",
  objetivo: "",
  materias: "",
  docente: "",
  fechaInicio: "",
  fechaFin: "",
  estado: "Planificado",
  avance: 0,
  observaciones: "",
  proximasTareas: "",
});

function leerProyectos(): Proyecto[] {
  try {
    const datos = localStorage.getItem("proa-direc-proyectos");

    if (!datos) return [];

    const proyectos = JSON.parse(datos);

    return Array.isArray(proyectos) ? proyectos : [];
  } catch {
    return [];
  }
}

function fechaVisible(fecha: string) {
  if (!fecha) return "Sin definir";

  const partes = fecha.split("-");

  return partes.length === 3
    ? `${partes[2]}/${partes[1]}/${partes[0]}`
    : fecha;
}

export default function Direc() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [cargado, setCargado] = useState(false);
  const [cursoActivo, setCursoActivo] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [modalAbierto, setModalAbierto] = useState(false);
  const [editando, setEditando] = useState<number | null>(null);
  const [form, setForm] = useState<Omit<Proyecto, "id">>(
    nuevoProyecto()
  );
  const [mensaje, setMensaje] = useState("");

  // Cargar los proyectos guardados al iniciar.
  useEffect(() => {
    setProyectos(leerProyectos());
    setCargado(true);
  }, []);

  // Guardar solamente después de haber terminado la carga inicial.
  useEffect(() => {
    if (!cargado) return;

    localStorage.setItem(
      "proa-direc-proyectos",
      JSON.stringify(proyectos)
    );
  }, [proyectos, cargado]);

  const filtrados = useMemo(() => {
    const termino = busqueda.toLowerCase().trim();

    return proyectos.filter((p) => {
      const coincideCurso =
        cursoActivo === "Todos" || p.curso === cursoActivo;

      const texto = [
        p.titulo,
        p.objetivo,
        p.materias,
        p.docente,
        p.curso,
      ]
        .join(" ")
        .toLowerCase();

      return coincideCurso && texto.includes(termino);
    });
  }, [proyectos, cursoActivo, busqueda]);

  const enDesarrollo = proyectos.filter(
    (p) => p.estado === "En desarrollo"
  ).length;

  const finalizados = proyectos.filter(
    (p) => p.estado === "Finalizado"
  ).length;

  const planificados = proyectos.filter(
    (p) => p.estado === "Planificado"
  ).length;

  const promedio = proyectos.length
    ? Math.round(
        proyectos.reduce((total, p) => total + p.avance, 0) /
          proyectos.length
      )
    : 0;

  function abrirNuevo(curso?: string) {
    setEditando(null);

    setForm(
      nuevoProyecto(
        curso ||
          (cursoActivo === "Todos" ? "1.º año" : cursoActivo)
      )
    );

    setMensaje("");
    setModalAbierto(true);
  }

  function abrirEdicion(proyecto: Proyecto) {
    const { id, ...datos } = proyecto;

    setEditando(id);
    setForm(datos);
    setMensaje("");
    setModalAbierto(true);
  }

  function actualizar<K extends keyof Omit<Proyecto, "id">>(
    campo: K,
    valor: Omit<Proyecto, "id">[K]
  ) {
    setForm((actual) => ({ ...actual, [campo]: valor }));
  }

  function guardar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      form.fechaInicio &&
      form.fechaFin &&
      form.fechaFin < form.fechaInicio
    ) {
      setMensaje(
        "La fecha de cierre no puede ser anterior al inicio."
      );
      return;
    }

    const proyecto: Proyecto = {
      ...form,
      id: editando ?? Date.now(),
      avance:
        form.estado === "Finalizado"
          ? 100
          : Math.min(99, Math.max(0, Number(form.avance) || 0)),
    };

    if (editando !== null) {
      setProyectos((actuales) =>
        actuales.map((p) =>
          p.id === editando ? proyecto : p
        )
      );
    } else {
      setProyectos((actuales) => [...actuales, proyecto]);
    }

    setMensaje("");
    setModalAbierto(false);
    setEditando(null);
  }

  function eliminar(id: number) {
    if (!window.confirm("¿Seguro que querés eliminar este proyecto?")) {
      return;
    }

    setProyectos((actuales) =>
      actuales.filter((p) => p.id !== id)
    );

    setMensaje("Proyecto eliminado.");
  }

  function cambiarEstado(id: number, estado: Estado) {
    setProyectos((actuales) =>
      actuales.map((p) =>
        p.id === id
          ? {
              ...p,
              estado,
              avance:
                estado === "Finalizado" ? 100 : p.avance,
            }
          : p
      )
    );
  }

  return (
    <div className="direc-app">
      <aside className="direc-sidebar">
        <div className="direc-brand">
          <div className="direc-logo">P</div>
          <div>
            <strong>PROA</strong>
            <span>Despeñaderos</span>
          </div>
        </div>

        <div className="direc-menu-title">MENÚ PRINCIPAL</div>

        <button
          className={`direc-nav ${
            cursoActivo === "Todos" ? "activo" : ""
          }`}
          onClick={() => setCursoActivo("Todos")}
        >
          <span className="direc-nav-icon">▦</span>
          Panel general
        </button>

        <div className="direc-menu-title">CURSOS</div>

        {cursos.map((curso, i) => (
          <button
            key={curso}
            className={`direc-nav ${
              cursoActivo === curso ? "activo" : ""
            }`}
            onClick={() => setCursoActivo(curso)}
          >
            <span className="direc-nav-icon">{i + 1}</span>
            {curso}
            <span className="direc-nav-count">
              {proyectos.filter((p) => p.curso === curso).length}
            </span>
          </button>
        ))}

        <div className="direc-sidebar-bottom">
          <div className="direc-user-icon">D</div>
          <div>
            <strong>Dirección</strong>
            <span>Gestión institucional</span>
          </div>
        </div>
      </aside>

      <main className="direc-main">
        <header className="direc-header">
          <div>
            <div className="direc-overline">
              GESTIÓN INSTITUCIONAL
            </div>
            <h1>Planificación de proyectos</h1>
            <p>
              Organización y seguimiento académico de los seis cursos.
            </p>
          </div>

          <button
            className="direc-button direc-button-primary"
            onClick={() => abrirNuevo()}
          >
            <span>＋</span> Nuevo proyecto
          </button>
        </header>

        {mensaje && (
          <div className="direc-message" role="status">
            <span>{mensaje}</span>
            <button
              onClick={() => setMensaje("")}
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
        )}

        <section className="direc-banner">
          <div>
            <span className="direc-banner-label">
              ESCUELA PROA · DESPEÑADEROS
            </span>
            <h2>Seguimiento de proyectos escolares</h2>
            <p>
              Consultá las planificaciones, controlá los avances y
              registrá las observaciones de cada curso.
            </p>
          </div>
          <div className="direc-banner-mark">P</div>
        </section>

        <section className="direc-stats">
          <article className="direc-stat">
            <div className="direc-stat-symbol symbol-blue">▤</div>
            <span>Total de proyectos</span>
            <strong>{proyectos.length}</strong>
            <small>Todos los cursos</small>
          </article>

          <article className="direc-stat">
            <div className="direc-stat-symbol symbol-orange">◷</div>
            <span>En desarrollo</span>
            <strong>{enDesarrollo}</strong>
            <small>En ejecución</small>
          </article>

          <article className="direc-stat">
            <div className="direc-stat-symbol symbol-green">✓</div>
            <span>Finalizados</span>
            <strong>{finalizados}</strong>
            <small>Completados</small>
          </article>

          <article className="direc-stat">
            <div className="direc-stat-symbol symbol-purple">◫</div>
            <span>Avance general</span>
            <strong>{promedio}%</strong>
            <small>{planificados} planificados</small>
          </article>
        </section>

        <section className="direc-section">
          <div className="direc-section-heading">
            <div>
              <h2>Planificación por curso</h2>
              <p>Elegí el año que querés consultar.</p>
            </div>

            {cursoActivo !== "Todos" && (
              <button
                className="direc-text-button"
                onClick={() => setCursoActivo("Todos")}
              >
                Ver todos
              </button>
            )}
          </div>

          <div className="direc-courses">
            {cursos.map((curso, i) => {
              const lista = proyectos.filter(
                (p) => p.curso === curso
              );

              const completados = lista.filter(
                (p) => p.estado === "Finalizado"
              ).length;

              return (
                <button
                  key={curso}
                  className={`direc-course-card ${
                    cursoActivo === curso ? "curso-seleccionado" : ""
                  }`}
                  onClick={() => setCursoActivo(curso)}
                >
                  <div
                    className={`direc-course-number color-${i + 1}`}
                  >
                    {i + 1}
                  </div>

                  <div className="direc-course-info">
                    <strong>{curso}</strong>
                    <span>
                      {lista.length}{" "}
                      {lista.length === 1 ? "proyecto" : "proyectos"}
                    </span>

                    <div className="direc-course-track">
                      <div
                        style={{
                          width: `${
                            lista.length
                              ? (completados / lista.length) * 100
                              : 0
                          }%`,
                        }}
                      />
                    </div>
                  </div>

                  <span className="direc-chevron">›</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="direc-section direc-projects-section">
          <div className="direc-section-heading">
            <div>
              <h2>
                {cursoActivo === "Todos"
                  ? "Todos los proyectos"
                  : `Proyectos de ${cursoActivo}`}
              </h2>
              <p>
                {filtrados.length}{" "}
                {filtrados.length === 1
                  ? "proyecto encontrado"
                  : "proyectos encontrados"}
              </p>
            </div>
          </div>

          <div className="direc-toolbar">
            <label className="direc-search">
              <span>⌕</span>
              <input
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por proyecto, docente o materia..."
              />

              {busqueda && (
                <button
                  type="button"
                  onClick={() => setBusqueda("")}
                  aria-label="Limpiar búsqueda"
                >
                  ×
                </button>
              )}
            </label>

            <button
              className="direc-button direc-button-light"
              onClick={() => abrirNuevo()}
            >
              ＋ Agregar proyecto
            </button>
          </div>

          <div className="direc-table-container">
            <table className="direc-table">
              <thead>
                <tr>
                  <th>PROYECTO</th>
                  <th>CURSO</th>
                  <th>DOCENTE</th>
                  <th>CIERRE</th>
                  <th>ESTADO</th>
                  <th>AVANCE</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>

              <tbody>
                {filtrados.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <strong className="direc-project-name">
                        {p.titulo}
                      </strong>
                      <span className="direc-project-subtitle">
                        {p.materias || "Materias sin especificar"}
                      </span>
                    </td>

                    <td>{p.curso}</td>
                    <td>{p.docente || "Sin asignar"}</td>
                    <td>{fechaVisible(p.fechaFin)}</td>

                    <td>
                      <select
                        className={`direc-status status-${p.estado
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        value={p.estado}
                        aria-label={`Estado de ${p.titulo}`}
                        onChange={(e) =>
                          cambiarEstado(
                            p.id,
                            e.target.value as Estado
                          )
                        }
                      >
                        {estados.map((estado) => (
                          <option key={estado} value={estado}>
                            {estado}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td>
                      <div className="direc-progress">
                        <div className="direc-progress-track">
                          <div
                            style={{ width: `${p.avance}%` }}
                          />
                        </div>
                        <span>{p.avance}%</span>
                      </div>
                    </td>

                    <td>
                      <div className="direc-actions">
                        <button
                          onClick={() => abrirEdicion(p)}
                          title="Editar"
                          aria-label={`Editar ${p.titulo}`}
                        >
                          ✎
                        </button>
                        <button
                          onClick={() => eliminar(p.id)}
                          title="Eliminar"
                          aria-label={`Eliminar ${p.titulo}`}
                        >
                          ×
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filtrados.length === 0 && (
                  <tr>
                    <td colSpan={7}>
                      <div className="direc-empty">
                        <div className="direc-empty-icon">▤</div>
                        <h3>No hay proyectos para mostrar</h3>
                        <p>
                          Agregá un proyecto para comenzar el seguimiento
                          de este curso.
                        </p>
                        <button
                          className="direc-button direc-button-primary"
                          onClick={() => abrirNuevo()}
                        >
                          Crear proyecto
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="direc-footer">
          PROA Despeñaderos · Sistema de planificación y seguimiento académico
        </footer>
      </main>

      {modalAbierto && (
        <div
          className="direc-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setModalAbierto(false);
            }
          }}
        >
          <section
            className="direc-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="direc-modal-title"
          >
            <header className="direc-modal-header">
              <div>
                <span className="direc-overline">
                  REGISTRO ACADÉMICO
                </span>
                <h2 id="direc-modal-title">
                  {editando === null
                    ? "Nuevo proyecto"
                    : "Editar proyecto"}
                </h2>
                <p>
                  Completá los datos para registrar el seguimiento.
                </p>
              </div>

              <button
                className="direc-modal-close"
                onClick={() => setModalAbierto(false)}
                aria-label="Cerrar formulario"
              >
                ×
              </button>
            </header>

            <form onSubmit={guardar}>
              <div className="direc-form-grid">
                <label>
                  Curso *
                  <select
                    value={form.curso}
                    onChange={(e) =>
                      actualizar("curso", e.target.value)
                    }
                  >
                    {cursos.map((curso) => (
                      <option key={curso} value={curso}>
                        {curso}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Nombre del proyecto *
                  <input
                    required
                    value={form.titulo}
                    onChange={(e) =>
                      actualizar("titulo", e.target.value)
                    }
                    placeholder="Nombre del proyecto"
                  />
                </label>

                <label className="direc-full">
                  Objetivo
                  <textarea
                    rows={3}
                    value={form.objetivo}
                    onChange={(e) =>
                      actualizar("objetivo", e.target.value)
                    }
                    placeholder="¿Qué se busca lograr con el proyecto?"
                  />
                </label>

                <label>
                  Materias involucradas
                  <input
                    value={form.materias}
                    onChange={(e) =>
                      actualizar("materias", e.target.value)
                    }
                    placeholder="Ej. Programación, Matemática"
                  />
                </label>

                <label>
                  Docente responsable
                  <input
                    value={form.docente}
                    onChange={(e) =>
                      actualizar("docente", e.target.value)
                    }
                    placeholder="Nombre del docente"
                  />
                </label>

                <label>
                  Fecha de inicio
                  <input
                    type="date"
                    value={form.fechaInicio}
                    onChange={(e) =>
                      actualizar("fechaInicio", e.target.value)
                    }
                  />
                </label>

                <label>
                  Fecha prevista de cierre
                  <input
                    type="date"
                    min={form.fechaInicio || undefined}
                    value={form.fechaFin}
                    onChange={(e) =>
                      actualizar("fechaFin", e.target.value)
                    }
                  />
                </label>

                <label>
                  Estado del proyecto
                  <select
                    value={form.estado}
                    onChange={(e) => {
                      const estado = e.target.value as Estado;

                      setForm((actual) => ({
                        ...actual,
                        estado,
                        avance:
                          estado === "Finalizado"
                            ? 100
                            : actual.avance,
                      }));
                    }}
                  >
                    {estados.map((estado) => (
                      <option key={estado} value={estado}>
                        {estado}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Porcentaje de avance:{" "}
                  {form.estado === "Finalizado" ? 100 : form.avance}%
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={
                      form.estado === "Finalizado"
                        ? 100
                        : form.avance
                    }
                    disabled={form.estado === "Finalizado"}
                    onChange={(e) =>
                      actualizar("avance", Number(e.target.value))
                    }
                  />
                </label>

                <label className="direc-full">
                  Observaciones de dirección
                  <textarea
                    rows={3}
                    value={form.observaciones}
                    onChange={(e) =>
                      actualizar("observaciones", e.target.value)
                    }
                    placeholder="Avances, dificultades, acuerdos y observaciones..."
                  />
                </label>

                <label className="direc-full">
                  Próximas tareas
                  <textarea
                    rows={2}
                    value={form.proximasTareas}
                    onChange={(e) =>
                      actualizar("proximasTareas", e.target.value)
                    }
                    placeholder="Acciones pendientes y próximos pasos..."
                  />
                </label>
              </div>

              <div className="direc-form-footer">
                <button
                  type="button"
                  className="direc-button direc-button-light"
                  onClick={() => {
                    setModalAbierto(false);
                    setMensaje("");
                  }}
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="direc-button direc-button-primary"
                >
                  Guardar proyecto
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
