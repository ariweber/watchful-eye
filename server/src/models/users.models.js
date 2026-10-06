import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            enum: ["arena_user", "general_user", "admin"],
            required: true,
        },
        assignedArena: {
            type: String,
            enum: ["North", "South", "Center", "All"],
            required: true,
        },
    },
);

export const users = mongoose.model("Users", usersSchema);
