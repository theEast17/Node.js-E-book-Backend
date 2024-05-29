import  express  from "express";
import registerController from "../controllers/registerController";
import loginController from "../controllers/loginController";



const userRouter=express.Router()

userRouter.post('/register',registerController)
userRouter.post('/login',loginController)


export default userRouter