import app from "./app";
import dbConnect from "./database";

// Me conecto a la base de datos
dbConnect();

// Arranco el servidor
app.listen(app.get("port"), () => {
<<<<<<< HEAD
  console.log(`Servidor escuchando en puerto 4000 ${app.get("port")}`);
=======
  console.log(`Servidor escuchando en puerto ${app.get("port")}`);
>>>>>>> 3b593b8d96e67f1ee1b6992be4660c893c055a5e
});
