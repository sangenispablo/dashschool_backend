import { request, response } from "express";

import { getPagination } from "../libs/getPagination";

import Materia from "../models/Materia";

export const createMateria = async (req = request, res = response) => {
  try {
    const nuevaMateria = new Materia(req.body);
    const materiaGuardada = await nuevaMateria.save();
    res.json(materiaGuardada);
  } catch (error) {
    res
      .status(500)
      .json({ msg: error.message || "Algo ocurrio mal en el servidor" });
  }
};

export const getMaterias = async (req = request, res = response) => {
  try {
    const { page, size, nombre } = req.query;
    const condition = nombre
      ? {
          nombre: { $regex: new RegExp(nombre), $options: "i" },
        }
      : {};
    console.log(condition);
    const { limit, offset } = getPagination(page, size);
    const materias = await Materia.paginate(condition, { limit, offset });
    if (!materias) {
      return res.status(404).json({ msg: "No se encontro documento" });
    }
    res.json(materias);
  } catch (error) {
    res
      .status(500)
      .json({ msg: error.message || "Algo ocurrio mal en el servidor" });
  }
};

export const getMateriaById = async (req = request, res = response) => {
  try {
    const id = req.params.id;
    const materia = await Materia.findById(id);
    if (!materia) {
      return res.status(404).json({ msg: "No se encontro documento" });
    }
    res.json(materia);
  } catch (error) {
    res
      .status(500)
      .json({ msg: error.message || "Algo ocurrio mal en el servidor" });
  }
};

export const updateMateriaById = async (req = request, res = response) => {
  try {
    const id = req.params.id;
    const materiaUpdate = await Materia.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!materiaUpdate) {
      return res.status(404).json({ msg: "No se encontro documento" });
    }
    res.json(materiaUpdate);
  } catch (error) {
    res
      .status(500)
      .json({ msg: error.message || "Algo ocurrio mal en el servidor" });
  }
};

export const deleteMateriaById = async (req = request, res = response) => {
  try {
    const id = req.params.id;
    const materiaDeleted = await Materia.findByIdAndDelete(id);
    if (!materiaDeleted) {
      return res.status(404).json({ msg: "No se encontro documento" });
    }
    res.json({ msg: `${id} se eliminó correctamente` });
  } catch (error) {
    res
      .status(500)
      .json({ msg: error.message || "Algo ocurrio mal en el servidor" });
  }
};
