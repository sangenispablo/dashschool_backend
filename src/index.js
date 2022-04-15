import app from "./app";
import dbConnect from "./database";
import { config } from "dotenv";

// Ejecuto config para que pueda meterme en el .env
config();

// Me conecto a la base de datos
dbConnect();

const PORT = process.env.SERVER_PORT || 4000;

// Arranco el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
