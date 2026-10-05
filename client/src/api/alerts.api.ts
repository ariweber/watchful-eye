import axios from "axios";
import type { Alert, NewAlert, UpdateAlert } from "../types/alerts.type";

const api = axios.create({ baseURL: "http://localhost:3000" });

export async function getAllAlerts() {
    const respons = await api.get<Alert[]>("/api/alerts");
    return respons.data;
}


export async function createAlert(newAlert: NewAlert) {
    const respons = await api.post<Alert>("/api/alerts", newAlert);
    return respons.data;
}

export async function updateAlert(id: string, updateAlert: UpdateAlert) {
    const respons = await api.put<Alert>(`/api/alerts/${id}`, updateAlert);
    return respons.data;
}

export async function deleteAlert(id: string) {
    const respons = await api.delete<Alert>(`/api/alerts/${id}`);
    return respons.data;
}


export async function getAlertById(id: string) {
    const respons = await api.get<Alert>(`/api/alerts/${id}`);
    return respons.data;
}

