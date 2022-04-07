import { request, response } from "express";

// import User from "../models/User";

export const createUser = async (req = request, res = response) => {
  res.json({ message: "Creando usuario..." });
};
