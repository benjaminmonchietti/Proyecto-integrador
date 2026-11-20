
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import "./global.css";

type Curso = {
  id: number;
  nombre: string;
  anio: number;
  division: string;
};

type Materia = {
  id: number;
  nombre: string;
  descripcion: string | null;
};

type CursoMateria = {
  id: number;
  curso_id: number;
  materia_id: number;
  anio_lectivo: number;
};

export default function Preceptores() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [cursoMaterias, setCursoMaterias] = useState<CursoMateria[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarDatos() {
      setCargando(true);
      setError("");

      const [cursosRes, materiasRes, asignacionesRes] = await Promise.all([
        supabase.from("cursos").select("*").order("anio"),
        supabase.from("materias").select("*").order("nombre"),
        supabase.from("curso_materias").select("*").order("anio_lectivo"),
      ]);

      if (cursosRes.error || materiasRes.error || asignacionesRes.error) {
        setError(
          cursosRes.error?.message ||
          materiasRes.error?.message ||
          asignacionesRes.error?.message ||
          "No se pudieron cargar los datos."
        );
      } else {
        setCursos(cursosRes.data || []);
        setMaterias(materiasRes.data || []);
        setCursoMaterias(asignacionesRes.data || []);
      }

      setCargando(false);
    }

    cargarDatos();
  }, []);
  
  return (
    <>
      <div className="app">
        <aside className="sidebar" id="sidebar">
          <div className="brand">
            <img className="proa-logo" src="/logo.jpg" alt="Logo de Colegios PROA" />
            <div>
              <strong>Colegios PROA</strong>
              <span>Gestión institucional</span>
            </div>
          </div>

          <div className="menu-label">PANEL DE PRECEPTORES</div>

          <nav className="nav" aria-label="Navegación principal">
            <button className="nav-item active" data-page="inicio"><span>⌂</span> Inicio</button>
            <button className="nav-item" data-page="estudiantes"><span>♙</span> Estudiantes</button>
            <button className="nav-item" data-page="asistencia"><span>✓</span> Asistencia</button>
            <button className="nav-item" data-page="comunicados"><span>✉</span> Comunicados</button>
            <button className="nav-item" data-page="emails"><span>＠</span> Emails a familias</button>
            <button className="nav-item" data-page="informes"><span>▤</span> Informes</button>
          </nav>

          <div className="sidebar-footer">
            <div className="avatar">C</div>
            <div>
              <strong>Preceptoría</strong>
              <span>Gestión de preceptoría</span>
            </div>
          </div>
        </aside>

        <main className="main">
          <header className="topbar">
            <button className="menu-toggle" id="menuToggle" aria-label="Abrir menú">☰</button>
            <div className="breadcrumb">
              Institución <span>/</span> <strong id="currentPage">Inicio</strong>
            </div>
            <div className="topbar-right">
              <span className="status-dot"></span> Panel de preceptoría
            </div>
          </header>

          <div className="content">
            <section className="page active" id="page-inicio">
              <div className="welcome">
                <div>
                  <p className="eyebrow">PANEL INSTITUCIONAL</p>
                  <h1>Bienvenida, Preceptora</h1>
                  <p>Gestioná las tareas de la institución desde un solo lugar.</p>
                </div>
                <div className="date-box">
                  <span>Fecha de hoy</span>
                  <strong id="today"></strong>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon blue">♙</div>
                  <span>Estudiantes registrados</span>
                  <strong id="totalStudents">0</strong>
                  <small>En el sistema local</small>
                </div>
                <div className="stat-card">
                  <div className="stat-icon green">✓</div>
                  <span>Presentes hoy</span>
                  <strong id="totalPresent">0</strong>
                  <small>Asistencia registrada</small>
                </div>
                <div className="stat-card">
                  <div className="stat-icon orange">!</div>
                  <span>Ausentes hoy</span>
                  <strong id="totalAbsent">0</strong>
                  <small>Asistencia registrada</small>
                </div>
                <div className="stat-card">
                  <div className="stat-icon purple">✉</div>
                  <span>Comunicados</span>
                  <strong id="totalNews">0</strong>
                  <small>Publicaciones guardadas</small>
                </div>
              </div>

              <div className="section-heading">
                <div>
                  <h2>Accesos rápidos</h2>
                  <p>Elegí una tarea para comenzar.</p>
                </div>
              </div>

              <div className="quick-grid">
                <button className="quick-card" data-go="estudiantes">
                  <span className="quick-icon blue">♙</span>
                  <strong>Estudiantes</strong>
                  <span>Agregar y consultar estudiantes.</span>
                  <b>Ingresar →</b>
                </button>
                <button className="quick-card" data-go="asistencia">
                  <span className="quick-icon green">✓</span>
                  <strong>Asistencia</strong>
                  <span>Registrar presentes y ausentes.</span>
                  <b>Ingresar →</b>
                </button>
                <button className="quick-card" data-go="comunicados">
                  <span className="quick-icon orange">✉</span>
                  <strong>Comunicados</strong>
                  <span>Publicar novedades de la institución.</span>
                  <b>Ingresar →</b>
                </button>
                <button className="quick-card" data-go="informes">
                  <span className="quick-icon purple">▤</span>
                  <strong>Informes</strong>
                  <span>Consultar y exportar reportes.</span>
                  <b>Ingresar →</b>
                </button>
              </div>

              <div className="panel">
                <h2>Acerca de este panel</h2>
                <p className="muted">
                  Versión de demostración: los datos se guardan en este navegador. Para que funcione entre varias computadoras se necesita conectar un backend y una base de datos con inicio de sesión y permisos.
                </p>
              </div>
            </section>

            <section className="page" id="page-estudiantes">
              <div className="page-heading">
                <div>
                  <p className="eyebrow">ADMINISTRACIÓN</p>
                  <h1>Estudiantes</h1>
                  <p>Administrá el listado institucional.</p>
                </div>
                <button className="btn btn-primary" id="openStudent">+ Agregar estudiante</button>
              </div>

              <div className="panel">
                <div className="course-tabs" id="studentCourseTabs" aria-label="Filtrar estudiantes por curso"></div>
                <div className="toolbar">
                  <input type="search" id="studentSearch" placeholder="Buscar por nombre, DNI o curso" aria-label="Buscar estudiantes" />
                  <div className="toolbar-actions">
                    <button className="btn btn-light" id="exportStudents">Exportar CSV</button>
                  </div>
                </div>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Nombre completo</th>
                        <th>DNI</th>
                        <th>Curso</th>
                        <th>Email familiar</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody id="studentsBody"></tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="page" id="page-asistencia">
              <div className="page-heading">
                <div>
                  <p className="eyebrow">CONTROL DE ASISTENCIA</p>
                  <h1>Asistencia por curso</h1>
                  <p>Seleccioná un año, marcá la asistencia de cada estudiante y cada cambio se guarda automáticamente.</p>
                </div>
              </div>

              <div className="panel">
                <div className="section-heading">
                  <div>
                    <h2>Seleccionar curso</h2>
                    <p>Cada año tiene su propia lista y su propio registro.</p>
                  </div>
                </div>
                <div className="course-tabs" id="attendanceCourseTabs" aria-label="Cursos disponibles"></div>
                <div className="filters">
                  <label>
                    Fecha de asistencia
                    <input type="date" id="attendanceDate" />
                  </label>
                  <label>
                    Curso seleccionado
                    <select id="attendanceCourse" aria-label="Curso"></select>
                  </label>
                </div>
              </div>

              <div className="panel">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow" id="attendanceCourseLabel">1.º AÑO</p>
                    <h2>Planilla de asistencia</h2>
                    <p id="attendanceCourseDetail">Seleccioná el estado de cada estudiante.</p>
                  </div>
                  <button className="btn btn-light" id="markAllPresent">Marcar todos presentes</button>
                </div>
                <div className="attendance-summary" id="attendanceSummary"></div>
                <div className="toolbar">
                  <input type="search" id="attendanceSearch" placeholder="Buscar estudiante dentro del curso" aria-label="Buscar estudiante" />
                  <div className="toolbar-actions">
                    <button className="btn btn-light" id="printAttendance">Imprimir planilla</button>
                    <button className="btn btn-primary" id="saveAttendance">Confirmar registros del curso</button>
                  </div>
                </div>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>N.º</th>
                        <th>Estudiante</th>
                        <th>Estado de asistencia</th>
                      </tr>
                    </thead>
                    <tbody id="attendanceBody"></tbody>
                  </table>
                </div>
                <p className="hint" id="attendanceSaveHint">Guardado automático activado: cada cambio se guarda inmediatamente en este navegador.</p>
              </div>
            </section>

            <section className="page" id="page-comunicados">
              <div className="page-heading">
                <div>
                  <p className="eyebrow">COMUNICACIÓN</p>
                  <h1>Comunicados</h1>
                  <p>Creá y consultá avisos institucionales.</p>
                </div>
              </div>

              <div className="panel">
                <h2>Nuevo comunicado</h2>
                <form id="newsForm" className="form-grid" style={{ marginTop: "18px" }}>
                  <label>
                    Título
                    <input name="title" required maxLength={120} placeholder="Título del comunicado" />
                  </label>
                  <label>
                    Tipo
                    <select name="type">
                      <option>General</option>
                      <option>Familias</option>
                      <option>Estudiantes</option>
                      <option>Docentes</option>
                      <option>Urgente</option>
                    </select>
                  </label>
                  <label className="full-width">
                    Contenido
                    <textarea name="content" required rows={5} placeholder="Escribí el comunicado..."></textarea>
                  </label>
                  <div className="form-actions full-width">
                    <button className="btn btn-primary" type="submit">Publicar comunicado</button>
                  </div>
                </form>
              </div>

              <div className="panel">
                <h2>Comunicados publicados</h2>
                <div id="newsList"></div>
              </div>
            </section>

            <section className="page" id="page-emails">
              <div className="page-heading">
                <div>
                  <p className="eyebrow">COMUNICACIÓN CON LAS FAMILIAS</p>
                  <h1>Emails a familias</h1>
                  <p>Prepará un correo para una familia o para las familias de un curso.</p>
                </div>
              </div>

              <div className="panel">
                <h2>Enviar correo a un curso</h2>
                <p className="muted">Completá los correos familiares en Estudiantes. Se abrirá tu aplicación de correo con los destinatarios en copia oculta (CCO).</p>

                <form id="familyEmailForm" className="form-grid" style={{ marginTop: "18px" }}>
                  <label>
                    Curso
                    <select id="emailCourse" name="course">
                      <option value="1">1.º año</option>
                      <option value="2">2.º año</option>
                      <option value="3">3.º año</option>
                      <option value="4">4.º año</option>
                      <option value="5">5.º año</option>
                      <option value="6">6.º año</option>
                    </select>
                  </label>
                  <label>
                    Asunto
                    <input name="subject" required maxLength={150} placeholder="Asunto del correo" />
                  </label>
                  <label className="full-width">
                    Mensaje
                    <textarea name="message" required rows={6} placeholder="Escribí el mensaje para las familias..."></textarea>
                  </label>
                  <div className="form-actions full-width">
                    <button className="btn btn-primary" type="submit">Abrir correo para las familias</button>
                  </div>
                </form>
                <p className="hint">Esta versión abre el programa de correo configurado en la computadora; no envía mensajes sin revisión. La preceptora debe revisar y presionar Enviar.</p>
              </div>

              <div className="panel">
                <h2>Correos familiares registrados</h2>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Correo familiar</th>
                        <th>Acción</th>
                      </tr>
                    </thead>
                    <tbody id="familyEmailsBody"></tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="page" id="page-informes">
              <div className="page-heading">
                <div>
                  <p className="eyebrow">ESTADÍSTICAS</p>
                  <h1>Informes institucionales</h1>
                  <p>Resumen de estudiantes, asistencia y comunicados.</p>
                </div>
                <button className="btn btn-primary" onClick={() => window.print()}>Imprimir / Guardar PDF</button>
              </div>

              <div className="panel">
                <h2>Reporte general</h2>
                <p className="report-summary" id="reportDate"></p>
                <div id="reportContent"></div>
              </div>
            </section>

            <footer className="footer">Panel de Gestión Institucional · PROA Despeñaderos · Versión de demostración</footer>
          </div>
        </main>
      </div>

      <dialog className="modal" id="studentModal">
        <h2 id="modalTitle">Agregar estudiante</h2>
        <p className="muted">Completá los datos del estudiante.</p>
        <form id="studentForm" className="form-grid" style={{ marginTop: "20px" }}>
          <input type="hidden" name="id" />
          <label>
            Nombre y apellido
            <input name="name" required maxLength={100} />
          </label>
          <label>
            DNI
            <input name="dni" inputMode="numeric" pattern="[0-9]{7,9}" title="Ingresá entre 7 y 9 números" />
          </label>
          <label className="full-width">
            Curso
            <select name="course" required>
              <option value="1">1.º año</option>
              <option value="2">2.º año</option>
              <option value="3">3.º año</option>
              <option value="4">4.º año</option>
              <option value="5">5.º año</option>
              <option value="6">6.º año</option>
            </select>
          </label>
          <div className="form-actions full-width">
            <button type="button" className="btn btn-light" id="cancelStudent">Cancelar</button>
            <button className="btn btn-primary" type="submit">Guardar estudiante</button>
          </div>
        </form>
      </dialog>

      <div className="toast" id="toast" role="status"></div>
    </>
  );
}
