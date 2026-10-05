import { Link } from "react-router";
import "./AlertsList.css";
import type { Alert } from "../../types/alerts.type";

type AlertsListProps = {
  alerts: Alert[];
};

export default function AlertsList({ alerts }: AlertsListProps) {
  return (
    <ul className="list">
      {alerts.map((alert) => (
        <li key={alert.id}>
          <Link className="row" to={`/alerts/${alert.id}`}>
            <span>{alert.displayName}</span>
            <span>{alert.arena}</span>
            <span>{alert.priority}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
