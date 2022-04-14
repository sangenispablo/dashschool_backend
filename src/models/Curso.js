import { Schema, model } from "mongoose";

const cursoSchema = new Schema(
  {
    nombre: {
      type: String,
      unique: true,
    },
    nivel: {
      type: String,
      enum: ["inicial", "primaria", "secundaria"],
      default: "secundaria",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Curso", cursoSchema);
