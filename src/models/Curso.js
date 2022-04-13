import { Schema, model } from "mongoose";

const cursoSchema = new Schema(
  {
    nombre: {
      type: String,
      unique: true,
    },
    nivel: {
      type: String,
      enum: ["Inicial", "Primaria", "Secundaria"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Curso", cursoSchema);
