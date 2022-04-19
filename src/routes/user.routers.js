import { Router } from "express";

import { updateUser, changeRol, listUser, deleteUser } from "../controllers/users.controller";
import { verifyToken, isAdmin } from "../middlewares";

const router = Router();

router.post("/profile/:id", verifyToken, updateUser);
router.post("/changerol/:id", [verifyToken, isAdmin], changeRol);
router.delete("/delete/:id", [verifyToken, isAdmin], deleteUser);
router.get("/list", verifyToken, listUser);

export default router;
