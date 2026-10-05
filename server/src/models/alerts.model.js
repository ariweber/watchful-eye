import mongoose from "mongoose";

const alertsSchema = new mongoose.Schema(
    {
        displayName: String,
        description: {
            type: String,
            required: true,
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High", "Critical"],
        },
        arena: {
            type: String,
            enum: ["North", "South", "Center"],
        },
        status: {
            type: String,
            enum: ["Active", "Handled"],
        },
        lon: Number,
        lat: Number,
    },
);

export const alerts = mongoose.model("alerts", alertsSchema);
