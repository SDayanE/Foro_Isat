// Pagina de aviso. Tambien se usa cuando una direccion no existe.
import { Link } from "react-router-dom";

export default function Gracias({ titulo = "Listo", texto = "Esto es un prototipo: el formulario funciona, pero todavia no se guarda nada. Mas adelante lo conectara el backend." }) {
  return (
    <section className="EstadoVacio">
      <h1>{titulo}</h1>
      <p>{texto}</p>
      <Link className="Boton BotonPrimario" to="/">Volver al inicio</Link>
    </section>
  );
}
