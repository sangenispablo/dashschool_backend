import { Schema, model } from "mongoose";

const notaSchema = new Schema(
  {
    alumno: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    profesor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    curso: {
      type: Schema.Types.ObjectId,
      ref: "Curso",
      required: true,
    },
    materia: {
      type: Schema.Types.ObjectId,
      ref: "Materia",
      required: true,
    },
    notas: [Number],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Nota", notaSchema);
