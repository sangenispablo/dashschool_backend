import mongoose from "mongoose";

const DB_URI = `mongodb://localhost:27017/schoolDB`;

const dbConnect = () => {
  mongoose
    .connect(DB_URI)
    .then((db) => console.log("DB Connected"))
    .catch((error) => console.log(error));
};

export default dbConnect;
