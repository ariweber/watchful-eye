import express from "express";
import { getAllAlerts, getAlertById, createAlert, updateAlert, deleteAlert } from "../controllers/alerts.controller.js";
import { validData } from "../midddlweare/validData.js";
import { bodyAlertsSchema } from "../validations/alerts.validation.js";

const router = express.Router();

router.get("/", getAllAlerts);
router.get("/:id", getAlertById);
router.post("/", validData(bodyAlertsSchema), createAlert);
router.delete("/:id", deleteAlert);
router.put("/:id", validData(bodyAlertsSchema), updateAlert);


export default router;
