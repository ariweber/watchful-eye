import express from "express";
import { getAllAlerts, createAlert } from "../controllers/alerts.controller.js";
import { validData } from "../midddlweare/validData.js";
import { createSchema } from "../validations/alerts.validation.js";

const router = express.Router();

router.get("/", getAllAlerts);
router.post("/", validData(createSchema), createAlert);

export default router;
