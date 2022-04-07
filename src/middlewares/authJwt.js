import { request, response } from "express";
import jwt from "jsonwebtoken";

import config from "../config";
import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = async (req = request, res = response, next) => {
  try {
    const token = req.headers["token"];
    if (!token) {
      return res.status(401).json({ message: "No se envió token" });
    }
    const decode = jwt.verify(token, config.SECRET);
    // Le pongo el id al request para que sirva a los otros middlewares
    req.userId = decode.id;
    // En decode tengo el id y si quiero puedo agregar mas cosas
    // con ese id busco el usuario para ver si existe
    const userFound = await User.findById(req.userId);
    if (!userFound) {
      return res.status(404).json({ message: "No se encontro Usuario" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "No autorizado" });
  }
};

// Puedo verificar si el usuario tiene los roles necesarios para realizar una accion
export const isAdmin = async (req = request, res = response, next) => {
  const userId = req.userId;
  // Busco el usuario
  const user = await User.findById(userId);
  // Busco en Role los roles del usuario
  const roles = await Role.find({ _id: { $in: user.roles } });
  // Busco en roles si es que tiene el rol admin
  const rolFind = roles.findIndex((rol) => rol.name === "admin");
  if (rolFind === -1) {
    return res.status(401).json({ message: "Rol no autorizado" });
  }
  next();
};
