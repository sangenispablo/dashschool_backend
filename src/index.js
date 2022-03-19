import app from "./app";
import dbConnect from "./database";

// Me conecto a la base de datos
dbConnect();

// Arranco el servidor
app.listen(4000, () => {
  console.log("Servidor escuchando en puerto 4000");
});
