import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuracion basica de Vite para usar React. No hace falta tocarla.
export default defineConfig({
  plugins: [react()],
});
