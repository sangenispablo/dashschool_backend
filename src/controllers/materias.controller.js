import { request, response } from "express";

export const createMateria = (req = request, res = response) => {
  res.json("crear materia");
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
