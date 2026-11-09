// Pagina de un tema: sus preguntas. El tema sale de la direccion (/tema/sql)
import { Link, useParams } from "react-router-dom";
import { TEMAS, PREGUNTAS, plural } from "../datos.js";
import TarjetaPregunta from "../componentes/TarjetaPregunta.jsx";

export default function Tema() {
  const { temaId } = useParams(); // lee la parte ":temaId" de la direccion
  const tema = TEMAS.find((t) => t.id === temaId);

  if (!tema) {
    return (
      <section className="EstadoVacio">
        <h2>Ese tema no existe</h2>
        <Link className="Boton BotonSecundario" to="/">Volver a los temas</Link>
      </section>
    );
  }

  const lista = PREGUNTAS.filter((p) => p.temas.includes(tema.nombre));

  return (
    <section>
      <Link className="EnlaceVolver" to="/">‹ Volver a los temas</Link>
      <div className="EncabezadoVista">
        <h1>{tema.nombre}</h1>
        <p>{plural(lista.length, "pregunta", "preguntas")}</p>
      </div>

      <div className="ListaPreguntas">
        {lista.map((p) => <TarjetaPregunta key={p.id} pregunta={p} />)}
      </div>

      {lista.length === 0 && (
        <div className="EstadoVacio">
          <h2>Aun no hay preguntas en este tema</h2>
          <p>Puedes publicar la primera con el boton Preguntar.</p>
          <Link className="Boton BotonSecundario" to="/">Volver a los temas</Link>
        </div>
      )}
    </section>
  );
}
