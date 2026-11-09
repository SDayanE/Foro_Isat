// Formulario para reportar una publicacion. Por ahora solo es visual.
import { Link, useNavigate } from "react-router-dom";

export default function Reportar() {
  const irA = useNavigate();

  function enviar(evento) {
    evento.preventDefault();
    irA("/gracias");
  }

  return (
    <section className="TarjetaFormulario">
      <div className="EncabezadoVista">
        <h1>Reportar publicacion</h1>
        <p>Indica por que necesita revision.</p>
      </div>
      <form className="Formulario" onSubmit={enviar}>
        <label htmlFor="CampoMotivo">Motivo</label>
        <select id="CampoMotivo" defaultValue="" required>
          <option value="">Selecciona un motivo</option>
          <option>Spam o autopromocion</option>
          <option>Contenido ofensivo</option>
          <option>Informacion peligrosa o privada</option>
          <option>No corresponde al tema</option>
          <option>Otro motivo</option>
        </select>
        <div className="AccionesFormulario">
          <Link className="Boton BotonSecundario" to="/preguntas">Cancelar</Link>
          <button className="Boton BotonPrimario" type="submit">Enviar reporte</button>
        </div>
      </form>
    </section>
  );
}
