// Todas las preguntas. Aqui funciona el buscador:
// lo que se escribio llega en la direccion (#/preguntas?q=texto)
import { Link, useSearchParams } from "react-router-dom";
import { PREGUNTAS, plural } from "../../../datos/datos.js";
import TarjetaPregunta from "../../../compartido/componentes/TarjetaPregunta.jsx";

// Pasa el texto a minusculas y le quita las tildes (asi "logica" encuentra "Logica")
function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function Preguntas() {
  const [parametros] = useSearchParams();
  const buscado = parametros.get("q") || "";

  // Nos quedamos solo con las preguntas que contienen el texto buscado
  // (en titulo, descripcion, usuario, temas o respuestas)
  const lista = PREGUNTAS.filter((p) => {
    const textoDePregunta = [p.titulo, p.cuerpo, p.usuario, ...p.temas, ...p.respuestas.map((r) => r.contenido)].join(" ");
    return normalizar(textoDePregunta).includes(normalizar(buscado));
  });

  return (
    <section>
      <Link className="EnlaceVolver" to="/">‹ Volver a los temas</Link>
      <div className="EncabezadoVista">
        <h1>{buscado === "" ? "Todas las preguntas" : "Resultados para «" + buscado + "»"}</h1>
        <p>{plural(lista.length, "pregunta", "preguntas")}</p>
      </div>

      <div className="ListaPreguntas">
        {lista.map((p) => <TarjetaPregunta key={p.id} pregunta={p} />)}
      </div>

      {lista.length === 0 && (
        <div className="EstadoVacio">
          <h2>Sin resultados</h2>
          <p>Prueba con otras palabras.</p>
          <Link className="Boton BotonSecundario" to="/preguntas">Ver todas las preguntas</Link>
        </div>
      )}
    </section>
  );
}
