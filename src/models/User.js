import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      enum: ["admin", "alumno", "profesor"],
      default: "alumno",
    },
    profile: {
      apellido: String,
      nombre: String,
      domicilio: String,
      localidad: String,
      telefonos: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Estos metodos estaticos sirven para encriptar/comparar las contraseñas
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
userSchema.statics.comparePassword = async (receivedPassword, password) => {
  return await bcrypt.compare(receivedPassword, password);
};

export default model("User", userSchema);
