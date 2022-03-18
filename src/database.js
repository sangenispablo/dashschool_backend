import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/schoolDB")
  .then((db) => console.log("DB Connected"))
  .catch((error) => console.log(error));
