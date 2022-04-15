import { Router } from "express";

import {
  createNota,
  updateNotaById,
  getNotaByAlumnoMateria,
  getNotaByAlumno,
} from "../controllers/notas.controller";

import { verifyToken, isAdminOrProfesor } from "../middlewares";

const router = Router();

router.use(verifyToken);

router.get("/:idAlumno", getNotaByAlumno);
router.get("/:idAlumno/:idMateria", getNotaByAlumnoMateria);
router.post("/", isAdminOrProfesor, createNota);
// router.get("/:id", getCursoById);
router.put("/:id", isAdminOrProfesor, updateNotaById);
// router.delete("/:id", isAdmin, deleteCursoById);

export default router;
