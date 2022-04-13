import { Schema, model } from "mongoose";

const notaSchema = new Schema(
  {
    alumno: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    profesor: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    curso: {
      type: Schema.Types.ObjectId,
      ref: "Curso",
    },
    materia: {
      type: Schema.Types.ObjectId,
      ref: "Materia",
    },
    notas: [
      {
        valor: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Nota", notaSchema);
