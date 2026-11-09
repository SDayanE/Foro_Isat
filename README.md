# Foro Web Isar de ADSO

Foro de preguntas y respuestas para los aprendices del Tecnólogo en Análisis y Desarrollo de Software (SENA, Centro Agroindustrial Regional Quindío). Los aprendices publican dudas técnicas clasificadas por temas, otros aprendices las responden y cualquiera puede reportar una publicación inapropiada. El único perfil de usuario es el aprendiz, que se crea al registrarse.

- **Autor y responsable:** Dayan Estiven Sánchez Orrego (proyecto individual)
- **Instructor:** Giam Carlos Acosta Franco
- **Documento base:** Plan técnico y estándares de construcción (GA7-220501096-AA1-EV01)
- **Evidencia que respalda este repositorio:** GA7-220501096-AA1-EV02 (control de versiones y gestión del repositorio)

## Estado actual

| Parte | Estado |
| --- | --- |
| Base de datos MySQL (`foro`, siete tablas) | Modelo definido; script pendiente de ejecutar en MySQL |
| Frontend React + Vite | Prototipo funcionando con datos de ejemplo (`datos.js`) |
| Backend Node.js + Express + API REST | Pendiente (tareas T-03 a T-13 del backlog) |

## Requerimientos funcionales

| ID | Requerimiento | Descripción |
| --- | --- | --- |
| RF-01 | Autenticación de usuarios | Registro (siempre con rol aprendiz) y entrada con usuario o correo y contraseña |
| RF-02 | Consulta de temas | Temas con su cantidad de preguntas y vista de las preguntas de cada tema |
| RF-03 | Gestión de preguntas | Listar, ver, publicar, editar y eliminar; de 1 a 5 temas; búsqueda sin distinguir mayúsculas ni tildes |
| RF-04 | Respuestas | Responder una pregunta (5 a 2500 caracteres) y ver sus respuestas |
| RF-05 | Reporte de preguntas | Reportar una pregunta con uno de cinco motivos |

## Tecnologías

React 18, Vite 5 y react-router-dom 6 (HashRouter) en el frontend; Node.js con Express y mysql2 en el backend (pendiente); MySQL con motor InnoDB. Control de versiones con Git y GitHub.

## Estructura del repositorio

```
Foro-Isat/
├── frontend/          # React + Vite, organizado por módulos (sección 2.3 del plan técnico)
│   ├── src/
│   │   ├── compartido/
│   │   │   ├── componentes/   # Cabecera.jsx, TarjetaPregunta.jsx
│   │   │   └── paginas/       # Gracias.jsx
│   │   ├── modulos/
│   │   │   ├── autenticacion/paginas/   # Entrar.jsx, Registro.jsx (RF-01)
│   │   │   ├── temas/paginas/           # Temas.jsx, Tema.jsx (RF-02)
│   │   │   ├── preguntas/paginas/       # Preguntas.jsx, Pregunta.jsx, NuevaPregunta.jsx (RF-03, RF-04)
│   │   │   └── reportes/paginas/        # Reportar.jsx (RF-05)
│   │   ├── datos/datos.js     # datos de ejemplo (se elimina al conectar la API)
│   │   ├── App.jsx            # todas las rutas
│   │   ├── main.jsx           # punto de entrada
│   │   └── estilos.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/           # Node.js + Express (sección 2.2 del plan técnico, pendiente)
├── database/
│   └── esquema.sql    # script DDL de las siete tablas
├── docs/              # plan técnico, estrategia de ramas y evidencias
├── .github/
│   └── pull_request_template.md
├── .gitignore
└── README.md
```

## Requisitos

| Herramienta | Versión | Para qué |
| --- | --- | --- |
| Node.js | 18 o superior (anotar la usada con `node -v`) | Ejecutar el frontend (y el backend cuando exista) |
| npm | Incluido con Node.js | Instalar las dependencias |
| Git | Cualquier versión reciente | Control de versiones |
| MySQL | 8 (solo para la base de datos) | Ejecutar `database/esquema.sql`, motor InnoDB |

## Instalación y ejecución

1. Clonar el repositorio y entrar a la carpeta del frontend:
   ```bash
   git clone hhttps://github.com/SDayanE/Foto_Isat.git
   cd Foro-Isat/frontend
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir `http://localhost:5173`. Las rutas usan `#` (por ejemplo `#/preguntas`), así que funcionan sin configurar el servidor.
5. Para generar la versión de producción: `npm run build`.
6. Base de datos (opcional por ahora): crear la base `foro` y ejecutar `database/esquema.sql` en MySQL.

El backend todavía no existe; cuando se cree tendrá su propio `.env` a partir de `.env.example` (el `.env` nunca se sube).

## Estrategia de control de versiones

Se usa la estrategia definida en la sección 5 del plan técnico: dos ramas de larga duración y tres tipos de ramas cortas de trabajo diario.

| Rama | Tipo | Para qué sirve | Reglas |
| --- | --- | --- | --- |
| `main` | Larga duración | Versión estable; de aquí salen las entregas | No se trabaja directamente. Solo recibe cambios desde `develop`; cada versión se etiqueta (v0.1, v0.2) |
| `develop` | Larga duración | Integración de lo terminado y revisado | No se trabaja directamente. Recibe pull requests de las ramas de tarea |
| `feature/<id>-<modulo>-<tarea>` | Corta | Funcionalidad nueva | Sale de `develop` y vuelve a `develop`. Ej.: `feature/t-05-preguntas-crud` |
| `fix/<id>-<modulo>-<error>` | Corta | Corregir un error | Sale de `develop`. Ej.: `fix/t-04-temas-conteo-incorrecto` |
| `docs/<tema>` | Corta | Solo documentación y gestión del proyecto | Ej.: `docs/gestion-proyecto` |

No hay rama de despliegue porque el plan técnico deja la publicación en internet fuera del alcance de esta versión (T-23, prioridad Won't). Las ramas cortas se eliminan al integrarse.

### Mensajes de commit

Forma: `tipo(modulo): descripcion corta`. La descripción empieza con verbo en infinitivo, va en español sin tildes, sin punto final y con máximo 72 caracteres. Un commit hace una sola cosa.

| Tipo | Cuándo | Ejemplo |
| --- | --- | --- |
| feat | Se agrega algo nuevo | `feat(preguntas): agregar formulario de nueva pregunta` |
| fix | Se corrige un error | `fix(temas): corregir conteo de preguntas por tema` |
| docs | Solo documentación | `docs(readme): explicar como ejecutar el frontend` |
| style | Formato o estilos | `style(estilos): ajustar espacio de las tarjetas` |
| refactor | Reorganizar sin cambiar lo que hace | `refactor(frontend): mover archivos a carpetas por modulo` |
| chore | Configuración y dependencias | `chore(repo): agregar gitignore` |

### Flujo de trabajo y aprobaciones

1. Cada tarea del backlog (T-NN) es un *issue* en GitHub y una tarjeta en el tablero.
2. Se crea la rama desde `develop` con el ID de la tarea y la tarjeta pasa a *En progreso*.
3. El autor ejecuta lint y formato y prueba el cambio antes de abrir el pull request.
4. Se abre el pull request contra `develop` con la plantilla (`Closes #n`) y la tarjeta pasa a *En revisión*.
5. El revisor aplica la lista de verificación del plan técnico (sección 5.3) dentro de las 24 horas siguientes.
6. Con **una aprobación** y sin comentarios abiertos se integra con *merge commit* (no *squash*, para conservar los commits de la rama) y se elimina la rama.
7. Cuando `develop` reúne lo planeado para el sprint, se abre un pull request `develop` → `main` y se crea la etiqueta de versión.

Como el proyecto es individual, el autor revisa su propio pull request con la lista de verificación y deja constancia en el comentario del PR. Cuando es posible, un compañero o el instructor da una segunda mirada como colaborador del repositorio. Se bloquea cualquier PR con credenciales en el código, SQL concatenado, rutas que modifican datos sin autorización, incumplimiento de las reglas de dominio o `node_modules` y `.env` incluidos.

### Cómo se resuelven los problemas desde el backlog

El backlog tiene 23 tareas priorizadas con MoSCoW y repartidas en cuatro sprints de dos semanas. Un defecto encontrado se registra como *issue* con la etiqueta `bug`, se prioriza contra el resto del backlog y se corrige en una rama `fix/` que sigue el mismo flujo de revisión. Lo que no cabe en el sprint vuelve al backlog con una nota del motivo.

## Versiones

| Versión | Contenido previsto |
| --- | --- |
| v0.1 | Estructura del repositorio, frontend organizado por módulos y script de la base de datos |
| v0.2 | API de temas y preguntas conectada al frontend |

## Retroalimentación recibida

| Fecha | Origen | Observación | Cómo se atendió |
| --- | --- | --- | --- |
| 26/10/26 | Sesión sincrónica | La estructura del repositorio y la ramificación deben coincidir con el plan técnico | Se adoptó tal cual la estrategia de la sección 5 y la estructura de la sección 2 |
