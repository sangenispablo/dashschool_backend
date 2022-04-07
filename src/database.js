import mongoose from "mongoose";
import config from "./config";

<<<<<<< HEAD
const DB_URI = config.mongoUri;
=======
<<<<<<< HEAD
const DB_URI = config.mongoUri;
=======
const DB_URI = config.MONGO_URI;
>>>>>>> 04997bf9adb75b58a931b791ecbf753d128ef441
>>>>>>> 3b593b8d96e67f1ee1b6992be4660c893c055a5e

const dbConnect = () => {
  mongoose
    .connect(DB_URI)
<<<<<<< HEAD
    .then((db) => console.log(`Mongo conectado a ${db.connection.name}`))
=======
<<<<<<< HEAD
    .then((db) => console.log(`Mongo esta conectado a ${db.connection.name}`))
=======
    .then((db) => console.log("MongoDB Conectado"))
>>>>>>> 04997bf9adb75b58a931b791ecbf753d128ef441
>>>>>>> 3b593b8d96e67f1ee1b6992be4660c893c055a5e
    .catch((error) => console.log(error));
};

export default dbConnect;
