import { request, response } from "express";

// importo el modelo que necesito
import Materia from "../models/Materia";

export const createMateria = async (req = request, res = response) => {
  const { nombre, abreviatura } = req.body;
  const newMateria = new Materia({ nombre, abreviatura });
  const materiaSaved = await newMateria.save();
  res.status(201).json(materiaSaved);
};

export const getMaterias = async (req = request, res = response) => {
  const materias = await Materia.find();
  res.json(materias);
};

export const getMateriaById = async (req = request, res = response) => {
  const id = req.params.id;
  const materia = await Materia.findById(id);
  res.json(materia);
};

export const updateMateriaById = async (req = request, res = response) => {
  const id = req.params.id;
  const materiaUpdate = await Materia.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  console.log(materiaUpdate);
  res.json(materiaUpdate);
};

export const deleteMateriaById = async (req = request, res = response) => {
  const id = req.params.id;
  await Materia.findByIdAndDelete(id);
  res.status(204).json();
};
