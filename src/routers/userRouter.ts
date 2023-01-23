import { Router } from "express";
import JoiValidation from "../middlewares/joiValidationMiddleware";
import * as authMiddleware from "../middlewares/userMiddleware"
import * as authSchema from "../schemas/userSchema"
import * as userController from "../controllers/userController"
import { test } from "../controllers/testController";

const userRouter = Router();

userRouter.post("/signup", JoiValidation(authSchema.signUpSchema), authMiddleware.validateSignUp, userController.singUp)
userRouter.post("/signin", JoiValidation(authSchema.signInSchema), authMiddleware.validateSignIn, userController.singIn)
// userRouter.delete("/delete", authMiddleware.validateAuthToken, userController.deleteAccount)
// userRouter.post("/updatePassword", authMiddleware.validateAuthToken, userController.changePassword)
// userRouter.get("/me", authMiddleware.validateAuthToken, userController.getUserInfo)

export default userRouter;
