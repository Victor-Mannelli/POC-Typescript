import { Router } from "express";
import JoiValidation from "../middlewares/joiValidationMiddleware";
import * as authMiddleware from "../middlewares/userMiddleware"
import * as authSchema from "../schemas/userSchema"
import * as userController from "../controllers/userController"

const userRouter = Router();

userRouter.post("/signup", JoiValidation(authSchema.signUpSchema), authMiddleware.validateSignUp, userController.singUp)
userRouter.post("/signin", JoiValidation(authSchema.signInSchema), authMiddleware.validateSignIn, userController.singIn)
userRouter.post("/updatePassword", authMiddleware.validateAuthToken, userController.changePassword)
userRouter.delete("/accountDeletion", JoiValidation(authSchema.changePasswordSchema), authMiddleware.validateAuthToken, userController.deleteAccount)
userRouter.get("/me", authMiddleware.validateAuthToken, userController.getUserInfo)

export default userRouter;
