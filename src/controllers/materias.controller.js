import { request, response } from "express";

import Materia from "../models/Materia";

export const createMateria = async (req = request, res = response) => {
  try {
    const nuevaMateria = new Materia(req.body);
    const materiaGuardada = await nuevaMateria.save();
    res.json({ ok: true, materia: materiaGuardada });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const getMaterias = async (req = request, res = response) => {
  try {
    const { nombre } = req.query;
    const condition = nombre
      ? {
          nombre: { $regex: new RegExp(nombre), $options: "i" },
        }
      : {};
    const materias = await Materia.find(condition);
    if (!materias) {
      return res.status(404).json({
        ok: false,
        msg: "No existe una materia para ese id",
      });
    }
    res.json({ ok: true, materias });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const getMateriaById = async (req = request, res = response) => {
  try {
    const id = req.params.id;
    const materia = await Materia.findById(id);
    if (!materia) {
      return res.status(404).json({
        ok: false,
        msg: "No existe una materia para ese id",
      });
    }
    res.json({ ok: true, materia });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const updateMateriaById = async (req = request, res = response) => {
  try {
    const id = req.params.id;
    const materiaUpdate = await Materia.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!materiaUpdate) {
      return res.status(404).json({
        ok: false,
        msg: "No existe una materia para ese id",
      });
    }
    res.json({ ok: true, materia: materiaUpdate });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const deleteMateriaById = async (req = request, res = response) => {
  try {
    const id = req.params.id;
    const materiaDeleted = await Materia.findByIdAndDelete(id);
    if (!materiaDeleted) {
      return res.status(404).json({
        ok: false,
        msg: "No existe una materia para ese id",
      });
    }
    res.json({ ok: true, msg: `${id} se eliminó correctamente` });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};
