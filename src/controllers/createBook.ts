import { NextFunction, Request, Response } from "express"

const createBook=async(req:Request,res:Response,next:NextFunction)=>{
    const { title, author, genre, coverImage,file } = req.body;
    res.json({message:'create book'})
}


export default createBook