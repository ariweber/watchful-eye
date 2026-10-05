import { alertsRepo } from "../repo/alerts.repo.js";
import { createError } from "../utils/cerateError.js";

async function getAllAlerts() {
    return await alertsRepo.getAllAlerts();
}

async function getAlertById(id) {
    const alert = await alertsRepo.getAlertById(id);
    if (!alert) throw createError(404, "alert not found");
    return alert;
}

async function createAlert(newAlert) {
    return await alertsRepo.createAlert(newAlert);
}

async function updateAlert(id, newAlert) {
    const alert = await alertsRepo.updateAlert(id, newAlert);
    if (!alert) throw createError(404, "alert not found");
    return alert;
}

async function deleteAlert(id) {
    const alert = await alertsRepo.deleteAlert(id);
    if (!alert) throw createError(404, "alert not found");
    return alert;
}

export const alertsService = {
    getAllAlerts,
    getAlertById,
    createAlert,
    updateAlert,
    deleteAlert,
};
