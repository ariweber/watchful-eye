import mongoose from "mongoose";

const alertsSchema = new mongoose.Schema(
    {
        displayName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High", "Critical"],
            required: true,
        },
        arena: {
            type: String,
            enum: ["North", "South", "Center"],
            required: true,
        },
        status: {
            type: String,
            enum: ["Active", "Handled"],
            required: true,
        },
        lon: {
            type: Number,
            required: true,
        },
        lat: {
            type: Number,
            required: true,
        },
    },
);

export const alerts = mongoose.model("Alerts", alertsSchema);
