import { request, response } from "express";
import jwt from "jsonwebtoken";

<<<<<<< HEAD
// importo el modelo de usuario y role
import User from "../models/User";
import Role from "../models/Role";

// import config por que dentro tengo secret
=======
// importe el modelo de usuario y role
import User from "../models/User";
import Role from "../models/Role";
// import secret
>>>>>>> 3b593b8d96e67f1ee1b6992be4660c893c055a5e
import config from "../config";

export const register = async (req = request, res = response) => {
  const { email, password, roles } = req.body;
  const newUser = new User({
    email,
    password: await User.encryptPassword(password),
  });
  // ahora pregunto por los roles
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const userRole = await Role.findOne({ name: "user" });
    console.log(userRole._id);
    newUser.roles = [userRole._id];
  }
  const savedUser = await newUser.save();
  // Guardado el usuario en la BD ahora genero un JWT y se lo envio
  // la funcion recibe: 1- El contenido 2- Palabra secreta 3- Configuracion
  // el token dura 6horas
  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: config.EXPIRE,
  });
  res.json({ token });
};

export const login = async (req = request, res = response) => {
  const { email, password } = req.body;
  // Busco el usuario
  const userFound = await User.findOne({ email: email }).populate("roles");
  if (!userFound) {
    return res
      .status(401)
      .json({ token: null, message: "Credenciales invalidas" });
  }
  // Comparo las contraseñas
<<<<<<< HEAD
  const matchPassword = await User.comparePassword(
    password,
    userFound.password
  );
=======
  const matchPassword = await User.comparePassword(password, userFound.password);
>>>>>>> 3b593b8d96e67f1ee1b6992be4660c893c055a5e
  if (!matchPassword) {
    return res
      .status(401)
      .json({ token: null, message: "Credenciales invalidas" });
  }
  // Genero el token
  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: config.EXPIRE,
  });
  res.json({ token });
};
