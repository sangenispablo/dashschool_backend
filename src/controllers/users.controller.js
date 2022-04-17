import { request, response } from "express";

// import User from "../models/User";

export const createUser = async (req = request, res = response) => {
  res.json({ message: "Creando usuario..." });
};

exports.getAuth = async(req, res) =>{
  try {
    const id = req.id;
    console.log(id)
    const user = await User.findById(id).select('-password');
    res.status(200).json({ok:true, user:user})
  } catch (error) {
    console.log(error);
  }
}

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
