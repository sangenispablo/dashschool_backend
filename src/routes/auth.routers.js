import { Router } from "express";

import { login, register } from "../controllers/auth.controller";
import { checkDuplicateEmail } from "../middlewares";

const router = Router();

router.post("/login", login);
router.post("/register", checkDuplicateEmail, register);

export default router;
