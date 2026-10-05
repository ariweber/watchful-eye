import { useEffect } from "react";
import "./AlertsPage.css";
import { useAlertsStore } from "../../store/alerts.store";
import AlertsList from "../../components/AlertsList/AlertsList";

export default function AlertsPage() {
  const { alerts, loading, error, fetchAlerts } = useAlertsStore();

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  return (
    <div className="page">
      <h1>התראות</h1>

      {loading && <p className="msg">loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <AlertsList alerts={alerts} />}
    </div>
  );
}
