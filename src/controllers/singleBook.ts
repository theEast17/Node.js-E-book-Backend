import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bookModel from "../models/bookModel";

const singleBook=async(req: Request, res: Response, next: NextFunction)=>{
    const bookId=req.params.bookId
    try {
        const book=await bookModel.findOne({_id:bookId}).populate('author','name')
        if(!book){
            return next(createHttpError(404,'Book not found'))
        }
        res.json(book)
    } catch (error) {
        return next(createHttpError(500,'Error while getting a book'))
    }
}


export default singleBook;