import { useEffect } from "react";
import { Link } from "react-router";
import "./AlertsPage.css";
import { useAlertsStore } from "../../store/alerts.store";
import AlertsList from "../../components/AlertsList/AlertsList";
import AlertsMap from "../../components/AlertsMap";

export default function AlertsPage() {
  const { alerts, loading, error, getAllAlerts: fetchAlerts } = useAlertsStore();

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  return (
    <div className="page">
      <div className="top">
        <h1>התראות</h1>
        <Link className="add" to="/new-alerts">
          התראה חדשה
        </Link>
      </div>

      {loading && <p className="msg">loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="content">
          <AlertsMap alerts={alerts} className="map" />
          <AlertsList alerts={alerts} />
        </div>
      )}
    </div>
  );
}
