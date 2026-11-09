// Formulario para crear cuenta. Por ahora solo es visual.
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Registro() {
  const irA = useNavigate();
  // Guardamos las dos contrasenas para comprobar que sean iguales
  const [clave, setClave] = useState("");
  const [clave2, setClave2] = useState("");
  const [error, setError] = useState("");

  function enviar(evento) {
    evento.preventDefault();
    if (clave !== clave2) {
      setError("Las contrasenas no coinciden.");
      return;
    }
    irA("/gracias");
  }

  return (
    <section className="TarjetaFormulario">
      <div className="EncabezadoVista">
        <h1>Crear cuenta</h1>
        <p>Tu cuenta tendra el rol de aprendiz.</p>
      </div>
      <form className="Formulario" onSubmit={enviar}>
        <label htmlFor="RegistroUsuario">Usuario <small>De 3 a 50 caracteres: letras, numeros, punto, guion o guion bajo.</small></label>
        <input id="RegistroUsuario" minLength="3" maxLength="50" pattern="[A-Za-z0-9._\-]{3,50}" title="De 3 a 50 caracteres: letras, numeros, punto, guion o guion bajo" autoComplete="username" required />
        <label htmlFor="RegistroCorreo">Correo electronico</label>
        <input id="RegistroCorreo" type="email" maxLength="150" autoComplete="email" required />
        <label htmlFor="RegistroClave">Contrasena <small>Minimo 8 caracteres.</small></label>
        <input id="RegistroClave" type="password" minLength="8" maxLength="100" autoComplete="new-password" required value={clave} onChange={(e) => setClave(e.target.value)} />
        <label htmlFor="RegistroClave2">Confirmar contrasena</label>
        <input id="RegistroClave2" type="password" minLength="8" maxLength="100" autoComplete="new-password" required value={clave2} onChange={(e) => setClave2(e.target.value)} />
        {error !== "" && <p className="ErrorFormulario" role="alert">{error}</p>}
        <p className="NotaFormulario">Version visual: este formulario todavia no guarda nada. Eso lo hara el backend mas adelante.</p>
        <div className="AccionesFormulario">
          <Link className="Boton BotonTexto" to="/entrar">Ya tengo cuenta</Link>
          <button className="Boton BotonPrimario" type="submit">Crear cuenta</button>
        </div>
      </form>
    </section>
  );
}
