import express from "express";
import { register, login, me } from "../controllers/ahut.controller.js";
import { validData } from "../midddlweare/validData.js";
import { auth } from "../midddlweare/auth.js";
import { usersSchema, loginSchema } from "../validations/ahut.validation.js";

const router = express.Router();

router.post("/register", validData(usersSchema), register);
router.post("/login", validData(loginSchema), login);
router.get("/me", auth, me);

export default router;
