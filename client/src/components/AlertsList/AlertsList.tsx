import "./AlertsList.css";
import type { Alert } from "../../types/alerts.type";
import AlertCard from "../AlertCard/AlertCard";

type AlertsListProps = {
  alerts: Alert[];
};

export default function AlertsList({ alerts }: AlertsListProps) {
  return (
    <ul className="list">
      {alerts.map((alert) => (
        <li key={alert.id}>
          <AlertCard alert={alert} />
        </li>
      ))}
    </ul>
  );
}

