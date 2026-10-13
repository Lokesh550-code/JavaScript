const errorHandler = (error, req, res, next) => {
  console.log(error);

  if (error.name === "CastError") {
    return res.status(400).json({ sucess: false, message: "Bad request" });
  }

  const statusCode = error.statusCode || 500;

  res
    .status(statusCode)
    .json({
      sucess: true,
      message: statusCode === 500 ? "Internal server error" : error.message,
    });
};

export default errorHandler;
