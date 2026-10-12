import express from "express";
import authenticate from "../middlewares/authenticatet.middleware.js";
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.use(express.json());
userRouter.use(authenticate);

userRouter.get("/", getUser);

userRouter.get("/:id", getUserById);

userRouter.post("/", createUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;
