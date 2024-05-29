import  express  from "express";
import createBook from "../controllers/createBook";



const bookRouter=express.Router()

bookRouter.post('/create',createBook)



export default bookRouter