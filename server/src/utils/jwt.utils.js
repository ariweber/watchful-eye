import jwt from "jsonwebtoken";
import { createError } from "./cerateError.js";




export function signToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });
}

export function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch {
        throw createError(401, "invalid token");
    }
}
