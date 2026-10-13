const errorHandler = (error, req, res, next) => {
  console.log(error);

  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    message: statusCode === 500 ? "Internal server error" : error.message,
  });
};

export default errorHandler;
