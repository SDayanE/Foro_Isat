// Una pregunta completa con sus respuestas. La pregunta sale de la direccion (/pregunta/3)
import { Link, useNavigate, useParams } from "react-router-dom";
import { PREGUNTAS, idDelTema, plural } from "../datos.js";

export default function Pregunta() {
  const { id } = useParams();
  const irA = useNavigate();
  const pregunta = PREGUNTAS.find((p) => p.id === Number(id));

  if (!pregunta) {
    return (
      <section className="EstadoVacio">
        <h2>Esa pregunta no existe</h2>
        <Link className="Boton BotonSecundario" to="/preguntas">Ver todas las preguntas</Link>
      </section>
    );
  }

  const claseEstado = pregunta.estado === "Resuelta" ? "EstadoResuelta" : "EstadoAbierta";

  // Al enviar la respuesta vamos a la pagina "gracias" (todavia no se guarda nada)
  function responder(evento) {
    evento.preventDefault();
    irA("/gracias");
  }

  return (
    <>
      <Link className="EnlaceVolver" to="/preguntas">‹ Volver a las preguntas</Link>

      <article className="ContenidoDetalle">
        <div className="DetalleMeta">
          <strong className="NombreUsuario">{pregunta.usuario}</strong>
          <span>{pregunta.hace}</span>
          <span className={"EstadoPregunta " + claseEstado}>{pregunta.estado}</span>
        </div>
        <h1 className="TituloDetallePagina">{pregunta.titulo}</h1>
        <p className="CuerpoDetalle">{pregunta.cuerpo}</p>
        <div className="EtiquetasPregunta">
          {pregunta.temas.map((tema) => (
            <Link key={tema} className="Etiqueta" to={"/tema/" + idDelTema(tema)}>{tema}</Link>
          ))}
        </div>
        <div className="AccionesDetalle">
          <Link className="AccionReporte" to="/reportar">Reportar</Link>
        </div>
      </article>

      <section className="SeccionRespuestas">
        <div className="TituloRespuestas">
          <h2>Respuestas</h2>
          <span>{plural(pregunta.respuestas.length, "respuesta", "respuestas")}</span>
        </div>

        <div className="ListaRespuestas">
          {pregunta.respuestas.length === 0 && <p className="RespuestaVacia">Todavia no hay respuestas.</p>}
          {pregunta.respuestas.map((r, numero) => (
            <article key={numero} className="TarjetaRespuesta">
              <div className="MetaRespuesta">
                <strong className="NombreUsuario">{r.usuario}</strong>
                <span>{r.hace}</span>
              </div>
              <p className="TextoRespuesta">{r.contenido}</p>
            </article>
          ))}
        </div>

        <form className="FormularioRespuesta" onSubmit={responder}>
          <label htmlFor="CampoRespuesta">Tu respuesta</label>
          <textarea id="CampoRespuesta" rows="3" minLength="5" maxLength="2500" placeholder="Escribe tu respuesta" required></textarea>
          <div className="AccionesRespuesta"><button className="Boton BotonPrimario" type="submit">Responder</button></div>
        </form>
      </section>
    </>
  );
}
