import { Router } from "express";

import { createUser, listUser, getAuth } from "../controllers/users.controller";
import { verifyToken, isAdmin } from "../middlewares";

const router = Router();

router.post("/", [verifyToken, isAdmin], createUser);
router.get("/list", [verifyToken, isAdmin], listUser, getAuth);

export default router;
