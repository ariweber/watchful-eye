import "./AlertCard.css";
import type { Alert } from "../../types/alerts.type";

type AlertCardProps = {
    alert: Alert;
    onEdit: () => void;
    onDelete: () => void;
};

export default function AlertCard({ alert, onEdit, onDelete }: AlertCardProps) {
    return (
        <div className="card">
            <h1>{alert.displayName}</h1>
            <p>{alert.description}</p>

            <div className="card-row">
                <span>עדיפות:</span>
                <span>{alert.priority}</span>
            </div>

            <div className="card-row">
                <span>זירה:</span>
                <span>{alert.arena}</span>
            </div>

            <div className="card-row">
                <span>סטטוס:</span>
                <span>{alert.status}</span>
            </div>

            <div className="card-row">
                <span>קו אורך:</span>
                <span>{alert.lon}</span>
            </div>

            <div className="card-row">
                <span>קו רוחב:</span>
                <span>{alert.lat}</span>
            </div>

            <div className="card-buttons">
                <button type="button" onClick={onEdit}>
                    עריכה
                </button>
                <button type="button" onClick={onDelete}>
                    מחיקה
                </button>
            </div>
        </div>
    );
}
