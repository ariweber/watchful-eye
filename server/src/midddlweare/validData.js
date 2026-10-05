import { createError } from "../utils/cerateError.js";

export function validData(schema) {
    return (req, _res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const message = result.error.issues
            .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
            .join(", ");
            return next(createError(400, message));
        }

        req.body = result.data;
        next();
    };
}
