import mongoose from "mongoose";
import config from "./config";

<<<<<<< HEAD
const DB_URI = config.mongoUri;
=======
const DB_URI = config.MONGO_URI;
>>>>>>> 04997bf9adb75b58a931b791ecbf753d128ef441

const dbConnect = () => {
  mongoose
    .connect(DB_URI)
<<<<<<< HEAD
    .then((db) => console.log(`Mongo esta conectado a ${db.connection.name}`))
=======
    .then((db) => console.log("MongoDB Conectado"))
>>>>>>> 04997bf9adb75b58a931b791ecbf753d128ef441
    .catch((error) => console.log(error));
};

export default dbConnect;
