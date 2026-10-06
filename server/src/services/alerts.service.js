import { alertsRepo } from "../repo/alerts.repo.js";
import { createError } from "../utils/cerateError.js";
import { getUserArena, checkUserArena } from "../utils/arena.utils.js";

async function getAllAlerts(user) {
    const arena = getUserArena(user);
    const allAlerts = await alertsRepo.getAllAlerts();
    if (arena === "All") return allAlerts;
    return allAlerts.filter((alert) => alert.arena === arena);
}

async function getAlertById(id, user) {
    const alert = await alertsRepo.getAlertById(id);
    if (!alert) throw createError(404, "alert not found");
    checkUserArena(alert, user);
    return alert;
}

async function createAlert(newAlert, user) {
    checkUserArena(newAlert, user);
    return await alertsRepo.createAlert(newAlert);
}

async function updateAlert(id, newAlert, user) {
    const alert = await alertsRepo.getAlertById(id);
    if (!alert) throw createError(404, "alert not found");
    checkUserArena(alert, user);
    return await alertsRepo.updateAlert(id, newAlert);
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
