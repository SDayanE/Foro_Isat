// Pagina de inicio: las tarjetas de los temas con su cantidad de preguntas
import { Link } from "react-router-dom";
import { TEMAS, PREGUNTAS, plural } from "../../../datos/datos.js";

// Cuenta cuantas preguntas tiene un tema
function contar(nombre) {
  return PREGUNTAS.filter((p) => p.temas.includes(nombre)).length;
}

export default function Temas() {
  // Los temas con mas preguntas aparecen primero
  const ordenados = [...TEMAS].sort((a, b) => contar(b.nombre) - contar(a.nombre) || a.nombre.localeCompare(b.nombre));

  return (
    <section>
      <div className="EncabezadoVista">
        <h1>Temas</h1>
        <p>Elige un tema para ver sus preguntas.</p>
      </div>
      <div className="RejillaTemas">
        {ordenados.map((tema) => {
          const cantidad = contar(tema.nombre);
          return (
            <Link
              key={tema.id}
              className={cantidad === 0 ? "TarjetaTema SinPreguntas" : "TarjetaTema"}
              to={"/tema/" + tema.id}
            >
              <span className="NombreTema">{tema.nombre}</span>
              <span className="CantidadTema">
                {cantidad}<small>{cantidad === 1 ? "pregunta" : "preguntas"}</small>
              </span>
            </Link>
          );
        })}
      </div>
      <p className="NotaFormulario">
        <Link className="EnlaceVolver" to="/preguntas">Ver todas las preguntas</Link>
      </p>
    </section>
  );
}
