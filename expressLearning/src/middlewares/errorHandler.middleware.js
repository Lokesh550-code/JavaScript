const errorHandler = (error, req, res, next) => {
  console.log(error);
  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal server error";

  if (error.name === "CastError") {
    return res.status(400).json({ sucess: false, message });
  }

  if (error.code === 11000) {
    statusCode = 409;
    message = "Resource already exists";
  }

  res.status(statusCode).json({
    sucess: true,
    message,
  });
};

export default errorHandler;
