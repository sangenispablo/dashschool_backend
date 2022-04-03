import { Schema, model } from "mongoose";

const materiaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    abreviatura: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Materia", materiaSchema);
