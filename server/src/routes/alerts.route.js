import express from "express";
import { getAllAlerts, getAlertById, createAlert, updateAlert, deleteAlert } from "../controllers/alerts.controller.js";
import { validData } from "../midddlweare/validData.js";
import { createSchema, updateSchema } from "../validations/alerts.validation.js";

const router = express.Router();

router.get("/", getAllAlerts);
router.get("/:id", getAlertById);
router.post("/", validData(createSchema), createAlert);
router.delete("/:id", deleteAlert);
router.put("/:id", validData(updateSchema), updateAlert);

export default router;
