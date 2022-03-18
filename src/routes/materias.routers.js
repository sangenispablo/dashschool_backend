import { Router } from "express";
import {
  createMateria,
  deleteMateriaById,
  getMateriaById,
  getMaterias,
  updateMateriaById,
} from "../controllers/materias.controller";

const router = Router();

router.get("/", getMaterias);
router.post("/", createMateria);
router.get("/:id", getMateriaById);
router.put("/:id", updateMateriaById);
router.delete("/:id", deleteMateriaById);

export default router;
