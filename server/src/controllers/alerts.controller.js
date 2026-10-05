import { alertsService } from "../services/alerts.service.js";

export async function getAllAlerts(_req, res, next) {
    try {
        const alerts = await alertsService.getAllAlerts();
        res.json(alerts);
    } catch (error) {
        next(error);
    }
}

export async function createAlert(req, res, next) {
    try {
        const alert = await alertsService.createAlert(req.body);
        res.status(201).json(alert);
    } catch (error) {
        next(error);
    }
}

export async function getAlertById(req, res, next) {
    try {
        const alert = await alertsService.getAlertById(req.params.id);
        res.json(alert);
    } catch (error) {
        next(error);
    }
}

export async function updateAlert(req, res, next) {
    try {
        const alert = await alertsService.updateAlert(req.params.id, req.body);
        res.json(alert);
    } catch (error) {
        next(error);
    }
}

export async function deleteAlert(req, res, next) {
    try {
        const alert = await alertsService.deleteAlert(req.params.id);
        res.json(alert);
    } catch (err) {
        next(err);
    }
}
