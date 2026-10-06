import express from "express";
import { register, login } from "../controllers/ahut.controller.js";
import { validData } from "../midddlweare/validData.js";
import { usersSchema, loginSchema } from "../validations/ahut.validation.js";

const router = express.Router();

router.post("/register", validData(usersSchema), register);
router.post("/login", validData(loginSchema), login);

export default router;
