import { request, response } from "express";

import User from "../models/User";

<<<<<<< HEAD
export const checkDuplicateEmail = async (
  req = request,
  res = response,
  next
) => {
=======
export const checkDuplicateEmail = async (req = request, res = response, next) => {
>>>>>>> 3b593b8d96e67f1ee1b6992be4660c893c055a5e
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ message: "El email ya existe" });
  }
  next();
};
