import express from "express";
import { register } from "../controllers/ahut.controller.js";
import { validData } from "../midddlweare/validData.js";
import { usersSchema } from "../validations/ahut.validation.js";

const router = express.Router();

router.post("/register", validData(usersSchema), register);

export default router;
