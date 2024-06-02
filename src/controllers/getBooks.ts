import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bookModel from "../models/bookModel";

const getBooks=async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const book=await bookModel.find().populate('author','name')
        // const book=await bookModel.find().populate('author','name email')  you can write like this to fetch the data that you want 
        res.json(book)
    } catch (error) {
        return next(createHttpError(500,'Error while getting books'))
    }
}


export default getBooks;