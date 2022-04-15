import { Router } from "express";

import {
  createCurso,
  deleteCursoById,
  getCursoById,
  getCursos,
  updateCursoById,
} from "../controllers/cursos.controller";

import { verifyToken, isAdmin } from "../middlewares";

const router = Router();

router.use(verifyToken);

router.get("/", getCursos);
router.post("/", isAdmin, createCurso);
router.get("/:id", getCursoById);
router.put("/:id", isAdmin, updateCursoById);
router.delete("/:id", isAdmin, deleteCursoById);

export default router;
