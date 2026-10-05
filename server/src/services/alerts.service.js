import { alertsRepo } from "../repo/alerts.repo.js";

async function getAllAlerts() {
    return await alertsRepo.getAllAlerts();
}

async function createAlert(newAlert) {
    return await alertsRepo.createAlert(newAlert);
}

export const alertsService = {
    getAllAlerts,
    createAlert,
};
