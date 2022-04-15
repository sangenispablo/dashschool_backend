import { request, response } from "express";

import Curso from "../models/Curso";

export const createCurso = async (req = request, res = response) => {
  try {
    const nuevoCurso = new Curso(req.body);
    const CursoGuardado = await nuevoCurso.save();
    res.json({ ok: true, Curso: CursoGuardado });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const getCursos = async (req = request, res = response) => {
  try {
    const { nombre } = req.query;
    const condition = nombre
      ? {
          nombre: { $regex: new RegExp(nombre), $options: "i" },
        }
      : {};
    const Cursos = await Curso.find(condition);
    if (!Cursos) {
      return res.status(404).json({
        ok: false,
        msg: "No existe un Curso para ese id",
      });
    }
    res.json({ ok: true, Cursos });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const getCursoById = async (req = request, res = response) => {
  try {
    const id = req.params.id;
    const curso = await Curso.findById(id);
    if (!curso) {
      return res.status(404).json({
        ok: false,
        msg: "No existe un Curso para ese id",
      });
    }
    res.json({ ok: true, curso });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const updateCursoById = async (req = request, res = response) => {
  try {
    const id = req.params.id;
    const CursoUpdate = await Curso.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!CursoUpdate) {
      return res.status(404).json({
        ok: false,
        msg: "No existe un Curso para ese id",
      });
    }
    res.json({ ok: true, Curso: CursoUpdate });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const deleteCursoById = async (req = request, res = response) => {
  try {
    const id = req.params.id;
    const CursoDeleted = await Curso.findByIdAndDelete(id);
    if (!CursoDeleted) {
      return res.status(404).json({
        ok: false,
        msg: "No existe un Curso para ese id",
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
