import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./AlertPage.css";
import { useAlertsStore } from "../../store/alerts.store";
import AlertCard from "../../components/AlertCard/AlertCard";
import EditAlert from "../../components/EditAlert/EditAlert";

export default function AlertPage() {
  const { id } = useParams();
  const { alert, loading, error, getAlertById, removeAlert } = useAlertsStore();
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) getAlertById(id);
  }, [id, getAlertById]);

  const handleDelete = async () => {
    if (alert) await removeAlert(alert.id);
    navigate("/alerts");
  };

  return (
    <div className="page">
      {loading && <p className="msg">loading...</p>}
      {error && <p className="error">{error}</p>}

      {alert && edit && <EditAlert alert={alert} onDone={() => setEdit(false)} />}

      {alert && !edit && (
        <AlertCard alert={alert} onEdit={() => setEdit(true)} onDelete={handleDelete} />
      )}
    </div>
  );
}

