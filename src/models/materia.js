import { Schema, model } from "mongoose";

const materiaSchema = new Schema(
  {
    nombre: {
      type: String,
      unique: true,
      required: true,
    },
    abreviatura: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Materia", materiaSchema);
