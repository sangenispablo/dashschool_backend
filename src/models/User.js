<<<<<<< HEAD
import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";
=======
import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
>>>>>>> 3b593b8d96e67f1ee1b6992be4660c893c055a5e

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
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
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
