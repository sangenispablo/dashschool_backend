import { request, response } from "express";

// importe el modelo de usuario
import User from "../models/User";

export const register = async (req = request, res = response) => {
  const { email, password } = req.body;
  const newUser = new User({
    email,
    password: await User.encryptPassword(password),
  });
  const userSaved = await newUser.save();
  res.json(userSaved);
};

export const login = async (req = request, res = response) => {
  res.json("register...");
};
