import express from "express";
import { register, login, me, deleteUser, getAll } from "../controllers/ahut.controller.js";
import { validData } from "../midddlweare/validData.js";
import { auth } from "../midddlweare/auth.js";
import { isAdmin, authOrFirstUser } from "../midddlweare/isAdmin.js";
import { usersSchema, loginSchema } from "../validations/ahut.validation.js";

const router = express.Router();

router.get("/",auth, isAdmin, getAll)
router.post("/register", authOrFirstUser, validData(usersSchema), register);
router.post("/login", validData(loginSchema), login);
router.get("/me", auth, me);
router.delete("/:id", auth, isAdmin, deleteUser);


export default router;
