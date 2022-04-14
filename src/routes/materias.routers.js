import { Router } from "express";

import {
  createMateria,
  deleteMateriaById,
  getMateriaById,
  getMaterias,
  updateMateriaById,
} from "../controllers/materias.controller";

import { verifyToken, isAdmin } from "../middlewares";

const router = Router();

router.use(verifyToken);

router.get("/", getMaterias);
router.post("/", isAdmin, createMateria);
router.get("/:id", getMateriaById);
router.put("/:id", isAdmin, updateMateriaById);
router.delete("/:id", isAdmin, deleteMateriaById);

export default router;
