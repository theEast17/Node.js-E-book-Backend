import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bookModel from "../models/bookModel";
import { AuthRequest } from "../middlewares/authenticate";
import cloudinary from "../config/cloudinary";

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  const bookId = req.params.bookId;
  try {
    const book = await bookModel.findOne({ _id: bookId });
    if (!book) {
      return next(createHttpError(404, "Book not found"));
    }
    const _req = req as AuthRequest;
    if (book.author.toString() !== _req.userId) {
      return next(createHttpError(403, "You can not delete others book."));
    }

    const coverFileSplit = book.coverImage.split("/");
    const coverPublicId =
      coverFileSplit.at(-2) + "/" + coverFileSplit.at(-1)?.split(".").at(-2);

    const bookfileSplits = book.file.split("/");
    const bookPublicId = bookfileSplits.at(-2) + "/" + bookfileSplits.at(-1);

    console.log(bookPublicId);
    await cloudinary.uploader.destroy(coverPublicId);
    await cloudinary.uploader.destroy(bookPublicId, {
      resource_type: "raw",
    });

    await bookModel.deleteOne({ _id: bookId });

    res.status(204).json({ id: bookId });
  } catch (error) {
    return next(createHttpError(500, "Error while getting a book"));
  }
};

export default deleteBook;
