// Punto de entrada: aqui React se conecta con el div "root" del index.html
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./estilos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* HashRouter: las direcciones quedan como #/preguntas y funcionan sin configurar el servidor */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
