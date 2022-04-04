import mongoose from "mongoose";
import config from "./config";

const DB_URI = config.MONGO_URI;

const dbConnect = () => {
  mongoose
    .connect(DB_URI)
    .then((db) => console.log("MongoDB Conectado"))
    .catch((error) => console.log(error));
};

export default dbConnect;
