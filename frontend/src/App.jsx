// Aqui se decide que pagina se muestra segun la direccion.
// Cada <Route> es una pagina; el ":id" y ":temaId" son partes que cambian.
import { Routes, Route } from "react-router-dom";
import Cabecera from "./componentes/Cabecera.jsx";
import Temas from "./paginas/Temas.jsx";
import Tema from "./paginas/Tema.jsx";
import Preguntas from "./paginas/Preguntas.jsx";
import Pregunta from "./paginas/Pregunta.jsx";
import Entrar from "./paginas/Entrar.jsx";
import Registro from "./paginas/Registro.jsx";
import NuevaPregunta from "./paginas/NuevaPregunta.jsx";
import Reportar from "./paginas/Reportar.jsx";
import Gracias from "./paginas/Gracias.jsx";

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
