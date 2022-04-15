import { Router } from "express";

import { updateUser, changeRol, listUser } from "../controllers/users.controller";
import { verifyToken, isAdmin } from "../middlewares";

const router = Router();


router.post("/profile/:id", verifyToken, updateUser);
router.post("/changerol/:id", [verifyToken, isAdmin], changeRol);
router.get("/list", [verifyToken, isAdmin], listUser);

export default router;
