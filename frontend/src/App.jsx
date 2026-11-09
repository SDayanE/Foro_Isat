// Aqui se decide que pagina se muestra segun la direccion.
// Cada <Route> es una pagina; el ":id" y ":temaId" son partes que cambian.
import { Routes, Route } from "react-router-dom";
import Cabecera from "./compartido/componentes/Cabecera.jsx";
import Temas from "./modulos/temas/paginas/Temas.jsx";
import Tema from "./modulos/temas/paginas/Tema.jsx";
import Preguntas from "./modulos/preguntas/paginas/Preguntas.jsx";
import Pregunta from "./modulos/preguntas/paginas/Pregunta.jsx";
import Entrar from "./modulos/autenticacion/paginas/Entrar.jsx";
import Registro from "./modulos/autenticacion/paginas/Registro.jsx";
import NuevaPregunta from "./modulos/preguntas/paginas/NuevaPregunta.jsx";
import Reportar from "./modulos/reportes/paginas/Reportar.jsx";
import Gracias from "./compartido/paginas/Gracias.jsx";

export default function App() {
  return (
    <>
      {/* La cabecera va fuera de las rutas: se ve en todas las paginas */}
      <Cabecera />
      <main className="Principal">
        <Routes>
          <Route path="/" element={<Temas />} />
          <Route path="/tema/:temaId" element={<Tema />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/pregunta/:id" element={<Pregunta />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/nueva-pregunta" element={<NuevaPregunta />} />
          <Route path="/reportar" element={<Reportar />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="*" element={<Gracias titulo="Pagina no encontrada" texto="Esa direccion no existe." />} />
        </Routes>
      </main>
    </>
  );
}
