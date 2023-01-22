import { Router } from "express";
import * as authMiddleware from "../middlewares/userMiddleware"
import * as authSchema from "../schemas/userSchema"
import JoiValidation from "../middlewares/joiValidationMiddleware";

const userRouter = Router();

userRouter.post("/signup", JoiValidation(authSchema.signUpSchema), authMiddleware.validateSignUp)
userRouter.post("/signin", JoiValidation(authSchema.signInSchema), authMiddleware.validateSignIn)
// userRouter.delete("/delete", ) // delete account
// userRouter.update("/updatePassword", ) // change password
// userRouter.get("/me", ) // get user information

export default userRouter;
