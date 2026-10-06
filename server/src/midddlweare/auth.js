import { verifyToken } from "../utils/jwt.utils.js";
import { createError } from "../utils/cerateError.js";

export function auth(req, _res, next) {
    const header = req.headers.authorization || "";
    const token = header.split("Bearer ")[1];

    if (!token) return next(createError(401, "missing token"));

    try {
        req.user = verifyToken(token);
        next();
    } catch (error) {
        next(error);
    }
}


