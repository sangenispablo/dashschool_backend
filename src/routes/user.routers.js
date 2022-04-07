import { Router } from "express";

import { createUser } from "../controllers/users.controller";
import { verifyToken, isAdmin } from "../middlewares";

const router = Router();

router.post("/", [verifyToken, isAdmin], createUser);

export default router;
