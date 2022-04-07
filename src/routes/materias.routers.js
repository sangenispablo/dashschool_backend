import { Router } from "express";

import {
  createMateria,
  deleteMateriaById,
  getMateriaById,
  getMaterias,
  updateMateriaById,
} from "../controllers/materias.controller";

// import { verifyToken, isAdmin } from "../middlewares";

const router = Router();

// router.get("/", [verifyToken, isAdmin], getMaterias);
router.get("/", getMaterias);
router.post("/", createMateria);
router.get("/:id", getMateriaById);
router.put("/:id", updateMateriaById);
router.delete("/:id", deleteMateriaById);

export default router;