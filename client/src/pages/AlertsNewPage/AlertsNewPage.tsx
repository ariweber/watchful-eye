import { useState } from "react";
import { useNavigate } from "react-router";
import "./AlertsNewPage.css";
import type { NewAlert } from "../../types/alerts.type";
import { useAlertsStore } from "../../store/alerts.store";
import FormNewAlerts from "../../components/FormNewAlerts/FormNewAlerts";
import type { Field } from "../../components/FormNewAlerts/FormNewAlerts";

const emptyAlert: NewAlert = {
    displayName: "",
    description: "",
    priority: "Low",
    arena: "North",
    status: "Active",
    lon: 0,
    lat: 0,
};

export default function AlertsNewPage() {
    const { addAlert, error } = useAlertsStore();
    const [alert, setAlert] = useState<NewAlert>(emptyAlert);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<Field>) => {
        setAlert({ ...alert, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addAlert({
            ...alert,
            lon: Number(alert.lon),
            lat: Number(alert.lat),
        });
        navigate("/");
    };

    return (
        <div className="page">
            <h1>התראה חדשה</h1>

            {error && <p className="error">{error}</p>}

            <FormNewAlerts
                alert={alert}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </div>
    );
}
