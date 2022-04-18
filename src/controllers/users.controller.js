import { request, response } from "express";
import jwt from "jsonwebtoken";

import config from "../config";
import User from "../models/User";

export const updateUser = async (req = request, res = response) => {
  const userId = req.params.id;
  const userIdToken = req.userId;
  // verificamos si el id del token es igual al id del parametro
  if (userId != userIdToken) {
    return res.status(404).json({
      ok: false,
      msg: "No tiene permisos para la operación",
    });
  }
  // ahora modifico el perfil del usuario con los datos que me envian
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const changeRol = async (req = request, res = response) => {
  // Ojo hay que ver como validar los valores posible para el rol
  const userId = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const listUser = async (req = request, res = response) => {
  try {
    const users = await User.find();
    res.json({ ok: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const deleteUser = async (req = request, res = response) => {
  const userId = req.params.id;
  const token = req.headers["token"];
  const decode = jwt.verify(token, config.SECRET);
  const adminId = decode.id;
  if (userId === adminId) {
    res.status(400).json({
      ok: false,
      msg: "El administrador no puede eliminarse asi mismo",
    });
  }
  try {
    const user = await User.findByIdAndDelete(userId);
    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};
