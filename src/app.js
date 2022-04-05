import express from "express";
import morgan from "morgan";
import cors from "cors";
<<<<<<< HEAD
=======

>>>>>>> 04997bf9adb75b58a931b791ecbf753d128ef441
import pkg from "../package.json";
import config from "./config";

<<<<<<< HEAD
import config from "./config";
// import de rutas
=======
import { createRoles } from "./libs/inicialSetup";
<<<<<<< HEAD
>>>>>>> a9435b39a69bfa8b02421bb28fee32f937429c7a
=======

>>>>>>> 04997bf9adb75b58a931b791ecbf753d128ef441
import materiasRoutes from "./routes/materias.routers";
import authRoutes from "./routes/auth.routers";
import userRoutes from "./routes/user.routers";

const apiVer = "/api/v1";

// Creo la instancia del servidor express
const app = express();

<<<<<<< HEAD
// defino el puerto que va a escuchar
app.set("port", config.serverPort || 4000);
=======
// Creo los roles la primera vez
createRoles();

>>>>>>> a9435b39a69bfa8b02421bb28fee32f937429c7a
// Express permite setear variables y luego recuperarlas
app.set("port", config.API_PORT);
app.set("pkg", pkg);
// middlewares
app.use(cors());
app.use(express.json());
<<<<<<< HEAD
app.use(cors());
=======
>>>>>>> a9435b39a69bfa8b02421bb28fee32f937429c7a
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

<<<<<<< HEAD
const pathRoot = "/api/v1";

// rutas para materias
app.use(pathRoot + "/materias", materiasRoutes);
=======
// rutas del Rest API
app.use(apiVer + "/materias", materiasRoutes);
app.use(apiVer + "/auth", authRoutes);
app.use(apiVer + "/users", userRoutes);
>>>>>>> a9435b39a69bfa8b02421bb28fee32f937429c7a

export default app;
