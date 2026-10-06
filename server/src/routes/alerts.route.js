import express from "express";
import { getAllAlerts, getAlertById, createAlert, updateAlert, deleteAlert } from "../controllers/alerts.controller.js";
import { validData } from "../midddlweare/validData.js";
import { auth } from "../midddlweare/auth.js";
import { createSchema, updateSchema } from "../validations/alerts.validation.js";
import { isAdmin } from "../midddlweare/isAdmin.js";

const router = express.Router();

router.get("/", auth, getAllAlerts);
router.post("/", auth, validData(createSchema), createAlert);
router.get("/:id", auth, getAlertById);
router.delete("/:id", auth, isAdmin, deleteAlert);
router.put("/:id", auth, validData(updateSchema), updateAlert);

export default router;
