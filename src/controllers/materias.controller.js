import { request, response } from "express";
import Materia from "../models/materia";

export const createMateria = async (req = request, res = response) => {
  const { nombre, abreviatura } = req.body;
  const nuevaMateria = new Materia({
    nombre,
    abreviatura,
  });
<<<<<<< HEAD
  const materiaGuardada = res.json("creando una materia en la BD");
=======
  const materiaGuardada = 
  res.json("creando una materia en la BD");
>>>>>>> 3b593b8d96e67f1ee1b6992be4660c893c055a5e
};

export const getMaterias = (req = request, res = response) => {
  res.json("get materias");
};

export const getMateriaById = (req = request, res = response) => {
  const id = req.params.id;
  res.json("get materia by " + id);
};

export const updateMateriaById = (req = request, res = response) => {
  res.json("update materias by id");
};

export const deleteMateriaById = (req = request, res = response) => {
  res.json("delete materias by id");
};
