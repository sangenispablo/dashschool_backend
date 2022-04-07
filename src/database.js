import mongoose from "mongoose";
import config from "./config";

const DB_URI = config.mongoUri;

const dbConnect = () => {
  mongoose
    .connect(DB_URI)
    .then((db) => console.log(`Mongo conectado a ${db.connection.name}`))
    .catch((error) => console.log(error));
};

export default dbConnect;
