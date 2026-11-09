// Una pregunta dentro de una lista. Recibe la pregunta como "pregunta".
import { Link } from "react-router-dom";
import { idDelTema, plural } from "../../datos/datos.js";

export default function TarjetaPregunta({ pregunta }) {
  const claseEstado = pregunta.estado === "Resuelta" ? "EstadoResuelta" : "EstadoAbierta";

  return (
    <article className="TarjetaPregunta">
      <div className="MetaPregunta">
        <span className="NombreUsuario">{pregunta.usuario}</span>
        <span>{pregunta.hace}</span>
        <span className={"EstadoPregunta " + claseEstado}>{pregunta.estado}</span>
      </div>
      <h2 className="TituloPregunta">
        <Link to={"/pregunta/" + pregunta.id}>{pregunta.titulo}</Link>
      </h2>
      <p className="ExtractoPregunta">{pregunta.cuerpo}</p>
      <div className="PiePregunta">
        <div className="EtiquetasPregunta">
          {/* .map repite el bloque una vez por cada tema de la pregunta */}
          {pregunta.temas.map((tema) => (
            <Link key={tema} className="Etiqueta" to={"/tema/" + idDelTema(tema)}>{tema}</Link>
          ))}
        </div>
        <Link className="AccionPregunta" to={"/pregunta/" + pregunta.id}>
          {plural(pregunta.respuestas.length, "respuesta", "respuestas")}
        </Link>
      </div>
    </article>
  );
}
