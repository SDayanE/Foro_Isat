// Formulario para entrar. Por ahora solo es visual: al enviar va a "gracias".
import { Link, useNavigate } from "react-router-dom";

export default function Entrar() {
  const irA = useNavigate();

  function enviar(evento) {
    evento.preventDefault();
    irA("/gracias");
  }

  return (
    <section className="TarjetaFormulario">
      <div className="EncabezadoVista">
        <h1>Entrar</h1>
        <p>Usa tu usuario o tu correo.</p>
      </div>
      <form className="Formulario" onSubmit={enviar}>
        <label htmlFor="AccesoUsuario">Usuario o correo</label>
        <input id="AccesoUsuario" maxLength="150" autoComplete="username" required />
        <label htmlFor="AccesoClave">Contrasena</label>
        <input id="AccesoClave" type="password" maxLength="100" autoComplete="current-password" required />
        <div className="AccionesFormulario">
          <Link className="Boton BotonTexto" to="/registro">Crear cuenta</Link>
          <button className="Boton BotonPrimario" type="submit">Entrar</button>
        </div>
      </form>
    </section>
  );
}
