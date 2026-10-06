import { createError } from "../utils/cerateError.js";
import { usersRepo } from "../repo/users.repo.js";
import { auth } from "./auth.js";

export async function authOrFirstUser(req, res, next) {
    const allUsers = await usersRepo.getAllUsers();
    if (allUsers.length === 0) return next();
    auth(req, res, next);
}

export async function isAdmin(req, _res, next) {
    const allUsers = await usersRepo.getAllUsers();
    if (allUsers.length === 0) return next();
    if (req.user.role !== "admin") return next(createError(403, "admin only"));
    next();
}
