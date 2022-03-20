import { request, response } from "express";
import jwt from "jsonwebtoken";

// importe el modelo de usuario y role
import User from "../models/User";
import Role from "../models/Role";
// import secret
import config from "../config";

export const register = async (req = request, res = response) => {
  const { email, password, roles } = req.body;
  const newUser = new User({
    email,
    password: await User.encryptPassword(password),
  });
  // ahora pregunto por las roles
  if (roles) {
    await Role.find({ name: { $in: roles } });
  }
  const savedUser = await newUser.save();
  // Guardado el usuario en la BD ahora genero un JWT y se lo envio
  // la funcion recibe: 1- El contenido 2- Palabra secreta 3- Configuracion
  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: "6h",
  });
  res.json({ savedUser, token });
};

export const login = async (req = request, res = response) => {
  res.json("register...");
};
