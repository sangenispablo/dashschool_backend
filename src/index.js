import app from "./app";
import "./database";

app.listen(4000, () => {
  console.log("Servidor escuchando en puerto 4000");
});
