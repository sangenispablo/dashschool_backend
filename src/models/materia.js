import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

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

// cargo el plugin de mongoosePaginate
materiaSchema.plugin(mongoosePaginate);
// exporto el modelo y le llamo Materia
export default model("Materia", materiaSchema);
