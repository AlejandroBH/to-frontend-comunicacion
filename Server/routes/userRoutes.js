import { Router } from "express";
import { registerUser } from "../controllers/userController.js";

import registerValidator from "../middlewares/registerValidator.js";

const userRouter = Router();

userRouter.post("/register", registerValidator, registerUser);

export default userRouter;
