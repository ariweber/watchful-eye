import { alertsService } from "../services/alerts.service.js";

export async function getAllAlerts(_req, res, next) {
    try {
        const alerts = await alertsService.getAllAlerts();
        res.json(alerts);
    } catch (err) {
        next(err);
    }
}

export async function createAlert(req, res, next) {
    try {
        const alert = await alertsService.createAlert(req.body);
        res.status(201).json(alert);
    } catch (err) {
        next(err);
    }
}
