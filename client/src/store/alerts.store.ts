import { create } from "zustand";
import type { Alert } from "../types/alerts.type";
import { getAllAlerts } from "../api/alrets.api";

type AlertsStore = {
    alerts: Alert[];
    loading: boolean;
    error: string;
    fetchAlerts: () => Promise<void>;
};

export const useAlertsStore = create<AlertsStore>((set) => ({
    alerts: [],
    loading: false,
    error: "",
    fetchAlerts: async () => {
        set({ loading: true, error: "" });
        try {
            const alerts = await getAllAlerts();
            set({ alerts, loading: false });
        } catch {
            set({ error: "Request failed", loading: false });
        }
    },
}));
