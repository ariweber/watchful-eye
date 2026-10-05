export function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    let message = err.message;

    if (status === 500) {
        console.error(err);
        message = "Internal server error";
    }

    res.status(status).json({ message });
}
