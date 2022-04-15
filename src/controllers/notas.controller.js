import { request, response } from "express";

import Materia from "../models/Materia";
import Curso from "../models/Curso";
import User from "../models/User";
import Nota from "../models/Nota";

export const createNota = async (req = request, res = response) => {
  try {
    // verificamos si el alumno es alumno
    const { alumno, profesor, curso, materia } = req.body;
    let user = await User.findById(alumno);
    if (user.rol != "alumno") {
      return res.status(404).json({
        ok: false,
        msg: "El id en alumno no corresponde a un alumno",
      });
    }
    // verificamos si el profesor es profesor
    user = await User.findById(profesor);
    if (user.rol != "profesor") {
      return res.status(404).json({
        ok: false,
        msg: "El id en profesor no corresponde a un profesor",
      });
    }
    // controlamos que no se repita todos los id's
    const existeNota = await Nota.findOne({ alumno, profesor, curso, materia });
    if (existeNota) {
      return res.status(404).json({
        ok: false,
        msg: "Ya existe una nota para esos id's",
      });
    }
    const nuevaNota = new Nota(req.body);
    const notaGuardada = await nuevaNota.save();
    res.json({ ok: true, nota: notaGuardada });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const updateNotaById = async (req = request, res = response) => {
  try {
    const id = req.params.id;
    const notaUpdate = await Nota.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!notaUpdate) {
      return res.status(404).json({
        ok: false,
        msg: "No existe notas para ese id",
      });
    }
    res.json({ ok: true, nota: notaUpdate });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const getNotaByAlumnoMateria = async (req = request, res = response) => {
  try {
    const { idAlumno, idMateria } = req.params;
    const notas = await Nota.find({
      alumno: idAlumno,
      materia: idMateria,
    })
      .populate("alumno", "email")
      .populate("profesor", "email");
    res.json({ ok: true, notas });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const getNotaByAlumno = async (req = request, res = response) => {
  try {
    const { idAlumno } = req.params;
    const notas = await Nota.find({ alumno: idAlumno })
      .populate("alumno", "email")
      .populate("profesor", "email")
      .populate("curso", "nombre")
      .populate("materia", "nombre");
    res.json({ ok: true, notas });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};
