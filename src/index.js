import app from "./app";
import dbConnect from "./database";

// Me conecto a la base de datos
dbConnect();

// Arranco el servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando en el puerto ${app.get("port")}`);
});
