import express from "express";
const userRouter = express.Router();

import { edit, remove, logout, see } from "../controllers/userController";

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);

export default userRouter;
