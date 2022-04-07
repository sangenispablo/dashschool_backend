import { Router } from "express";

import { login, register } from "../controllers/auth.controller";
import { verifyToken, isAdmin, checkDuplicateEmail } from "../middlewares";

const router = Router();

router.post("/login", login);
router.post("/register", verifyToken, isAdmin, checkDuplicateEmail, register);

export default router;
