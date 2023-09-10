import express from "express";
import { register, login, logout, updateProfile, deleteMyProfile } from "../controllers/userController.mjs";
import { isAuthenticated } from "../middleares/authentication.mjs"

const userRouter = express.Router()

userRouter.route("/register").post(register)
userRouter.route("/login").post(login)
userRouter.route("/logout").get(logout)
userRouter.route("/update").put(isAuthenticated, updateProfile)
userRouter.route("/delete").delete(isAuthenticated, deleteMyProfile)

export default userRouter;