import { useState } from "react";
import type { Alert } from "../../types/alerts.type";
import { useAlertsStore } from "../../store/alerts.store";
import FormNewAlerts from "../FormNewAlerts/FormNewAlerts";

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type EditAlertProps = {
  alert: Alert;
  onDone: () => void;
};

export default function EditAlert({ alert, onDone }: EditAlertProps) {
  const editAlert = useAlertsStore((state) => state.editAlert);
  const [form, setForm] = useState(alert);

  const handleChange = (e: React.ChangeEvent<Field>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await editAlert(form.id, { ...form, lon: Number(form.lon), lat: Number(form.lat) });
    onDone();
  };

  return <FormNewAlerts alert={form} onChange={handleChange} onSubmit={handleSubmit} />;
}

