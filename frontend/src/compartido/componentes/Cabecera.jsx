// Parte de arriba: logo, buscador y botones. Se ve en todas las paginas.
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cabecera() {
  // useState guarda lo que la persona escribe en el buscador
  const [texto, setTexto] = useState("");
  const irA = useNavigate(); // sirve para cambiar de pagina desde el codigo

  function buscar(evento) {
    evento.preventDefault(); // evita que el formulario recargue la pagina
    irA("/preguntas?q=" + encodeURIComponent(texto.trim()));
  }

  return (
    <header className="Cabecera">
      <div className="CabeceraInterior">
        <Link className="Marca" to="/" aria-label="ISAT, volver a los temas">
          <span className="MarcaTexto">ISAT<span className="MarcaPunto">.</span></span>
        </Link>

        <form className="Buscador" onSubmit={buscar} role="search">
          <label className="SoloLectores" htmlFor="CampoBusqueda">Buscar preguntas, temas o usuarios</label>
          <svg className="IconoBusqueda" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M13 13l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          </svg>
          <input
            id="CampoBusqueda"
            type="search"
            placeholder="Buscar preguntas, temas o usuarios"
            autoComplete="off"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <button type="submit" className="BotonBuscar">Buscar</button>
        </form>

        <nav className="AccionesCabecera" aria-label="Cuenta">
          <Link className="Boton BotonTexto" to="/entrar">Entrar</Link>
          <Link className="Boton BotonSecundario" to="/registro">Registrarse</Link>
          <Link className="Boton BotonPrimario" to="/nueva-pregunta">Preguntar</Link>
        </nav>
      </div>
    </header>
  );
}
