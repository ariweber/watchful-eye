import { create } from "zustand";
import type { Alert, NewAlert } from "../types/alerts.type";
import { getAllAlerts, createAlert } from "../api/alrets.api";

type AlertsStore = {
    alerts: Alert[];
    loading: boolean;
    error: string;
    getAllAlerts: () => Promise<void>;
    addAlert: (newAlert: NewAlert) => Promise<void>;
};

export const useAlertsStore = create<AlertsStore>((set) => ({
    alerts: [],
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
}));

