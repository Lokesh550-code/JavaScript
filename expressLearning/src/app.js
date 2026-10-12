import express from "express";
import userRouter from "./routes/user.route.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";

const app = express();

app.use(errorHandler);
app.use("/api/users", userRouter);

export default app;
