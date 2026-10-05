import "./AlertCard.css";
import type { Alert } from "../../types/alerts.type";

type AlertCardProps = {
  alert: Alert;
};

export default function AlertCard({ alert }: AlertCardProps) {
  return (
    <div className="card">
      <div className="card-top">
        <h1>{alert.displayName}</h1>
        <span>{alert.status}</span>
      </div>

      <p>{alert.description}</p>
      <p>{alert.id}</p>

      <div className="card-bottom">
        <span>{alert.priority}</span>
        <span>{alert.arena}</span>
      </div>
    </div>
  );
}
