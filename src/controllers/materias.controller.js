import { request, response } from "express";

import Materia from "../models/Materia";

export const createMateria = async (req = request, res = response) => {
  const { nombre, abreviatura } = req.body;
  const nuevaMateria = new Materia({
    nombre,
    abreviatura,
  });
  const materiaGuardada = "";
  res.json("creando una materia en la BD");
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
