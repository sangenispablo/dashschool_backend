import express from "express";
import morgan from "morgan";
import cors from "cors";
import pkg from "../package.json";

// import de la variables de configuracion
import config from "./config";

// import de rutas
import authRoutes from "./routes/auth.routers";
import userRoutes from "./routes/user.routers";
import materiasRoutes from "./routes/materias.routers";
import cursosRoutes from "./routes/cursos.routers";
import notasRoutes from "./routes/notas.routers";

// import para crear el super user al inicio
import { createSuperUser } from "./libs/initialSetup";

// const para definir la version del api
const apiVer = "/api/v1";

// Creo la instancia del servidor express
const app = express();

// Creo el superUser si no existe
createSuperUser();

// Express permite setear variables y luego recuperarlas
app.set("pkg", pkg);

// middlewares
app.use(cors(config.corsOptions));
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
app.use(apiVer + "/notas", notasRoutes);
app.use(apiVer + "/materias", materiasRoutes);
app.use(apiVer + "/cursos", cursosRoutes);
app.use(apiVer + "/auth", authRoutes);
app.use(apiVer + "/users", userRoutes);

export default app;
