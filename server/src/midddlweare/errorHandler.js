export function errorHandler(err, req, res, next) {
  const status = err.status || 500;

  if (status === 500) {
    console.error(err);
    message = "Internal server error";
  }

  res.status(status).send(err.message);
}