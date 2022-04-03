import express from "express";
import morgan from "morgan";
import cors from "cors";
import pkg from "../package.json";

import config from "./config";
// import de rutas
import materiasRoutes from "./routes/materias.routers";

// Creo la instancia del servidor express
const app = express();

// defino el puerto que va a escuchar
app.set("port", config.serverPort || 4000);
// Express permite setear variables y luego recuperarlas
app.set("pkg", pkg);
// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// ruta por defecto para que si alguien entra a la url le muestre datos de la aplicacion
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

const pathRoot = "/api/v1";

// rutas para materias
app.use(pathRoot + "/materias", materiasRoutes);

export default app;
