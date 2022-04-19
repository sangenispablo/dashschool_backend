import { request, response } from "express";

import User from "../models/User";

export const checkDuplicateEmail = async (
  req = request,
  res = response,
  next
) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ ok: false, msg: "El email ya existe" });
  }
  next();
};
