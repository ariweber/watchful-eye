import { alerts } from "../models/alerts.model.js";

function toAlerts(alert) {
    if (!alert) return null;
    return {
        id: alert._id.toString(),
        displayName: alert.displayName,
        description: alert.description,
        priority: alert.priority,
        arena: alert.arena,
        status: alert.status,
        lon: alert.lon,
        lat: alert.lat,
    };
}

async function getAllAlerts() {
    const allAlerts = await alerts.find();
    return allAlerts.map(toAlerts);
}

async function getAlertById(id) {
    const alert = await alerts.findById(id);
    return toAlerts(alert);
}

async function createAlert(newAlert) {
    const alert = await alerts.create(newAlert);
    return toAlerts(alert);
}

async function updateAlert(id, newAlerts) {
    const alert = await alerts.findByIdAndUpdate(id, newAlerts, { new: true });
    return toAlerts(alert);
}

async function deleteAlert(id) {
    const alert = await alerts.findByIdAndDelete(id);
    return toAlerts(alert);
}

export const alertsRepo = {
    getAllAlerts,
    getAlertById,
    createAlert,
    updateAlert,
    deleteAlert,
};
