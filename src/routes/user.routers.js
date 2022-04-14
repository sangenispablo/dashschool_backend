import { Router } from "express";

import { updateUser, changeRol } from "../controllers/users.controller";
import { verifyToken, isAdmin } from "../middlewares";

const router = Router();

router.post("/profile/:id", verifyToken, updateUser);
router.post("/changerol/:id", [verifyToken, isAdmin], changeRol);

export default router;
