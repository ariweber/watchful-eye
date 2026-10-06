import { createError } from "./cerateError.js";

export function getUserArena(user) {
    if (user.role === "arena_user") return user.assignedArena;
    return "All";
}

export function checkUserArena(alert, user) {
    const arena = getUserArena(user);
    if (arena !== "All" && alert.arena !== arena) {
        throw createError(403, "Permission denied");
    }
}
