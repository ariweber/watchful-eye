import "./FormNewAlerts.css";
import type { NewAlert } from "../../types/alerts.type";

export type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type FormNewAlertsProps = {
  alert: NewAlert;
  onChange: (event: React.ChangeEvent<Field>) => void;
  onSubmit: (event: React.FormEvent) => void;
};

export default function FormNewAlerts({ alert, onChange, onSubmit }: FormNewAlertsProps) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        שם
        <input name="displayName" value={alert.displayName} onChange={onChange} required />
      </label>

      <label className="field">
        תיאור
        <textarea name="description" value={alert.description} onChange={onChange} required />
      </label>

      <label className="field">
        עדיפות
        <select name="priority" value={alert.priority} onChange={onChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
      </label>

      <label className="field">
        איזור
        <select name="arena" value={alert.arena} onChange={onChange}>
          <option value="North">North</option>
          <option value="Center">Center</option>
          <option value="South">South</option>
        </select>
      </label>

      <label className="field">
        סטטוס
        <select name="status" value={alert.status} onChange={onChange}>
          <option value="Active">Active</option>
          <option value="Handled">Handled</option>
        </select>
      </label>

      <label className="field">
        קו אורך
        <input type="number" name="lon" value={alert.lon} onChange={onChange} required />
      </label>

      <label className="field">
        קו רוחב
        <input type="number" name="lat" value={alert.lat} onChange={onChange} required />
      </label>

      <button type="submit">הוספה</button>
    </form>
  );
}

