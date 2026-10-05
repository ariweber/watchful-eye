import axios from "axios";
import type { Alert, NewAlert } from "../types/alerts.type";

const api = axios.create({ baseURL: "http://localhost:3000" });

export async function getAllAlerts() {
    const respons = await api.get<Alert[]>("/api/alerts");
    return respons.data;
}

export async function createAlert(newAlert: NewAlert) {
    const respons = await api.post<Alert>("/api/alerts", newAlert);
    return respons.data;
}

