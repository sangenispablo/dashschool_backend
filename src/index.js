import app from "./app";
import dbConnect from "./database";

// Me conecto a la base de datos
dbConnect();

// Arranco el servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando en puerto 4000 ${app.get("port")}`);
});
