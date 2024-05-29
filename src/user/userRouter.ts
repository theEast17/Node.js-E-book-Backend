import  express  from "express";
import registerController from "../controllers/registerController";



const userRouter=express.Router()

userRouter.post('/register',registerController)

export default userRouter