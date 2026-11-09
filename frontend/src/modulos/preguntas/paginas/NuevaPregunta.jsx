// Formulario para hacer una pregunta. Por ahora solo es visual.
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEMAS } from "../../../datos/datos.js";

export default function NuevaPregunta() {
  const irA = useNavigate();
  // Lista de los temas marcados. Empieza vacia.
  const [elegidos, setElegidos] = useState([]);
  const [error, setError] = useState("");

  // Marca o desmarca un tema (maximo 5)
  function alternarTema(nombre) {
    if (elegidos.includes(nombre)) {
      setElegidos(elegidos.filter((t) => t !== nombre)); // lo quita
      setError("");
    } else if (elegidos.length >= 5) {
      setError("Elige maximo 5 temas.");
    } else {
      setElegidos([...elegidos, nombre]); // lo agrega
      setError("");
    }
  }

  function enviar(evento) {
    evento.preventDefault();
    if (elegidos.length === 0) {
      setError("Elige al menos un tema.");
      return;
    }
    irA("/gracias");
  }

  return (
    <section className="TarjetaFormulario TarjetaAncha">
      <div className="EncabezadoVista">
        <h1>Nueva pregunta</h1>
        <p>Explica que intentaste y que resultado obtuviste.</p>
      </div>
      <form className="Formulario" onSubmit={enviar}>
        <label htmlFor="CampoTitulo">Titulo</label>
        <input id="CampoTitulo" minLength="12" maxLength="180" placeholder="Ej. ¿Como relaciono dos tablas en MySQL?" required />
        <label htmlFor="CampoCuerpo">Descripcion</label>
        <textarea id="CampoCuerpo" rows="5" minLength="20" maxLength="4000" placeholder="Estoy intentando..., ya probe..., pero ocurre que..." required></textarea>
        <fieldset className="GrupoTemas">
          <legend>Temas <small>Elige de 1 a 5.</small></legend>
          <div className="ListaTemasFormulario">
            {TEMAS.map((tema) => (
              <label key={tema.id} className="ChipTema">
                <input type="checkbox" checked={elegidos.includes(tema.nombre)} onChange={() => alternarTema(tema.nombre)} />
                <span>{tema.nombre}</span>
              </label>
            ))}
          </div>
        </fieldset>
        {error !== "" && <p className="ErrorFormulario" role="alert">{error}</p>}
        <div className="AccionesFormulario">
          <Link className="Boton BotonSecundario" to="/">Cancelar</Link>
          <button className="Boton BotonPrimario" type="submit">Publicar</button>
        </div>
      </form>
    </section>
  );
}
