import { request, response } from "express";
import jwt from "jsonwebtoken";

import config from "../config";
import User from "../models/User";

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
      return res.status(404).json({ message: "Id de token invalido" });
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
  if (user.rol != "admin") {
    return res.status(401).json({ message: "Rol no autorizado" });
  }
  next();
};

export const isAlumno = async (req = request, res = response, next) => {
  const userId = req.userId;
  // Busco el usuario
  const user = await User.findById(userId);
  if (user.rol != "alumno") {
    return res.status(401).json({ message: "Rol no autorizado" });
  }
  next();
};

export const isProfesor = async (req = request, res = response, next) => {
  const userId = req.userId;
  // Busco el usuario
  const user = await User.findById(userId);
  if (user.rol != "profesor") {
    return res.status(401).json({ message: "Rol no autorizado" });
  }
  next();
};
