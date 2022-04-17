import { request, response } from "express";
import jwt from "jsonwebtoken";

// importo el modelo de usuario
import User from "../models/User";

// import config por que dentro tengo secret
import config from "../config";

export const register = async (req = request, res = response) => {
  const { email, password, profile } = req.body;
  const newUser = new User({
    email,
    password: await User.encryptPassword(password),
    profile,
  });
  const savedUser = await newUser.save();
  // Guardado el usuario en la BD ahora genero un JWT y se lo envio
  // la funcion recibe: 1- El contenido 2- Palabra secreta 3- Configuracion
  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: config.EXPIRE,
  });
  res.json({ token });
};

export const login = async (req = request, res = response) => {
  const { email, password } = req.body;
  // Busco el usuario
  const userFound = await User.findOne({ email: email });
  if (!userFound) {
    return res
      .status(401)
      .json({ token: null, message: "Credenciales invalidas" });
  }
  // Comparo las contraseñas
  const matchPassword = await User.comparePassword(
    password,
    userFound.password
  );
  if (!matchPassword) {
    return res
      .status(401)
      .json({ token: null, message: "Credenciales invalidas" });
  }
  // Genero el token
  const token = jwt.sign(
    {
      id: userFound._id,
      email: userFound.email,
      rol: userFound.rol,
      profile: userFound.profile,
    },
    config.SECRET,
    {
      expiresIn: config.EXPIRE,
    }
  );
  res.json({
    token,
  });
};
