// Todos los datos de ejemplo estan aqui. Cuando haya backend, esto se reemplaza
// por informacion que llega del servidor.

// Los temas. "id" es lo que aparece en la direccion (#/tema/sql)
export const TEMAS = [
  { id: "apis", nombre: "APIs" },
  { id: "backend", nombre: "Backend" },
  { id: "bases-de-datos", nombre: "Bases de datos" },
  { id: "frontend", nombre: "Frontend" },
  { id: "git", nombre: "Git" },
  { id: "html-css", nombre: "HTML y CSS" },
  { id: "javascript", nombre: "JavaScript" },
  { id: "logica", nombre: "Logica" },
  { id: "python", nombre: "Python" },
  { id: "sql", nombre: "SQL" },
];

// Las preguntas. "temas" guarda los nombres de los temas de cada pregunta.
export const PREGUNTAS = [
  {
    id: 1,
    titulo: "¿Cuando conviene usar async/await en lugar de then()?",
    cuerpo: "Estoy empezando a consumir una API y veo ejemplos con .then() y otros con async/await. ¿Hay alguna regla para decidir cual usar?",
    estado: "Abierta",
    hace: "hace 24 min",
    usuario: "laura.dev",
    temas: ["JavaScript", "APIs", "Logica"],
    respuestas: [
      { usuario: "mateo.codes", hace: "hace 15 min", contenido: "Las dos usan promesas. async/await suele ser mas facil de leer cuando hay varias llamadas seguidas, y los errores se manejan con try/catch." },
    ],
  },
  {
    id: 2,
    titulo: "¿Por que necesito una tabla intermedia en una relacion muchos a muchos?",
    cuerpo: "Una publicacion puede tener varias etiquetas y una etiqueta puede estar en muchas publicaciones. ¿Como se representa eso en MySQL?",
    estado: "Resuelta",
    hace: "hace 1 h",
    usuario: "dayana_sql",
    temas: ["Bases de datos", "SQL"],
    respuestas: [
      { usuario: "andres.db", hace: "hace 54 min", contenido: "Crea una tabla como contenido_etiquetas con contenido_id y etiquetas_id. Juntos forman la clave primaria, asi no se repite la misma etiqueta en una publicacion." },
      { usuario: "niko.dev", hace: "hace 42 min", contenido: "Para consultarlo haces un JOIN entre las tres tablas." },
    ],
  },
  {
    id: 3,
    titulo: "Mi diseno se desborda en el celular pero en el computador se ve bien",
    cuerpo: "Hice una tarjeta con CSS Grid. Cuando la pantalla baja de 500 px aparece una barra de desplazamiento horizontal. ¿Que debo revisar primero?",
    estado: "Abierta",
    hace: "hace 2 h",
    usuario: "pixelconcafe",
    temas: ["Frontend", "HTML y CSS"],
    respuestas: [],
  },
  {
    id: 4,
    titulo: "¿Como resuelvo un conflicto de merge en Git sin perder cambios?",
    cuerpo: "Dos personas modificamos el mismo archivo y Git muestra un conflicto. No quiero perder los cambios de ninguna rama.",
    estado: "Resuelta",
    hace: "hace 5 h",
    usuario: "santi_git",
    temas: ["Git"],
    respuestas: [
      { usuario: "vale.builds", hace: "hace 4 h", contenido: "Abre el archivo, busca las marcas del conflicto y deja la version correcta. Luego usa git add y termina el merge." },
    ],
  },
  {
    id: 5,
    titulo: "Diferencia entre INNER JOIN y LEFT JOIN",
    cuerpo: "Si tengo usuarios y publicaciones, ¿como consulto tambien a los usuarios que todavia no han publicado nada?",
    estado: "Abierta",
    hace: "hace 8 h",
    usuario: "maria.query",
    temas: ["Bases de datos", "SQL"],
    respuestas: [
      { usuario: "joaquin_db", hace: "hace 6 h", contenido: "INNER JOIN solo muestra lo que coincide en las dos tablas. LEFT JOIN muestra todo lo de la tabla izquierda; si no hay coincidencia, queda NULL. Usa usuarios LEFT JOIN contenido." },
    ],
  },
  {
    id: 6,
    titulo: "¿Como organizo los archivos de un proyecto pequeno de JavaScript?",
    cuerpo: "Estoy pasando de un solo HTML a separar estilos y logica. ¿Que estructura sencilla me recomiendan?",
    estado: "Abierta",
    hace: "hace 12 h",
    usuario: "devprincipiante",
    temas: ["JavaScript", "Frontend"],
    respuestas: [],
  },
  {
    id: 7,
    titulo: "No entiendo cuando termina una funcion recursiva",
    cuerpo: "Veo una funcion que se llama a si misma, pero me cuesta encontrar el caso base. ¿Como lo identifico?",
    estado: "Abierta",
    hace: "hace 18 h",
    usuario: "logica_en_proceso",
    temas: ["Logica", "Python"],
    respuestas: [
      { usuario: "cata.alg", hace: "hace 15 h", contenido: "El caso base es la situacion mas simple, que se resuelve sin volver a llamar la funcion. Cada llamada debe acercarse a ese caso." },
    ],
  },
];

// Ayuda: "1 pregunta" o "3 preguntas"
export function plural(numero, uno, varios) {
  return numero + " " + (numero === 1 ? uno : varios);
}

// Ayuda: busca el id de un tema a partir de su nombre (para armar los enlaces)
export function idDelTema(nombre) {
  return TEMAS.find((t) => t.nombre === nombre).id;
}
