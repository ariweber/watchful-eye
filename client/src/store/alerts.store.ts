import { create } from "zustand";
import type { Alert, NewAlert, UpdateAlert } from "../types/alerts.type";
import {
    createAlert,
    deleteAlert,
    getAlertById,
    getAllAlerts,
    updateAlert,
} from "../api/alerts.api";

type AlertsStore = {
    alerts: Alert[];
    alert: Alert | null;
    loading: boolean;
    error: string;
    getAllAlerts: () => Promise<void>;
    addAlert: (newAlert: NewAlert) => Promise<void>;
    getAlertById: (id: string) => Promise<void>;
    editAlert: (id: string, updatedAlert: UpdateAlert) => Promise<void>;
    removeAlert: (id: string) => Promise<void>;
};

export const useAlertsStore = create<AlertsStore>((set) => ({
    alerts: [],
    alert: null,
    loading: false,
    error: "",
    getAllAlerts: async () => {
        set({ loading: true, error: "" });
        try {
            const alerts = await getAllAlerts();
            set({ alerts, loading: false });
        } catch {
            set({ error: "Request failed", loading: false });
        }
    },
    addAlert: async (newAlert) => {
        set({ error: "" });
        try {
            const alert = await createAlert(newAlert);
            set((state) => ({ alerts: [...state.alerts, alert] }));
        } catch {
            set({ error: "Request failed" });
        }
    },
    getAlertById: async (id) => {
        set({ loading: true, error: "", alert: null });
        try {
            const alert = await getAlertById(id);
            set({ alert, loading: false });
        } catch {
            set({ error: "Request failed", loading: false });
        }
    },
    editAlert: async (id, updatedAlert) => {
        set({ error: "" });
        try {
            const alert = await updateAlert(id, updatedAlert);
            set((state) => ({
                alerts: state.alerts.map((
                    item,
                ) => (item.id === id ? alert : item)),
                alert: state.alert?.id === id ? alert : state.alert,
            }));
        } catch {
            set({ error: "Request failed" });
        }
    },
    removeAlert: async (id) => {
        set({ error: "" });
        try {
            await deleteAlert(id);
            set((state) => ({
                alerts: state.alerts.filter((item) => item.id !== id),
            }));
        } catch {
            set({ error: "Request failed" });
        }
    },
}));
