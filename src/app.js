import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import materiasRoutes from "./routes/materias.routers";
import authRoutes from "./routes/auth.routers";

const apiVer = "/api/v1";

// Creo la instancia del servidor express
const app = express();

// Express permite setear variables y luego recuperarlas
app.set("pkg", pkg);

// middlewares
app.use(express.json());
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

// rutas del Rest API
app.use(apiVer + "/materias", materiasRoutes);
app.use(apiVer + "/auth", authRoutes);

export default app;
