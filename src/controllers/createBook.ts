import { NextFunction, Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import path from "node:path";
import createHttpError from "http-errors";
import bookModel from "../models/bookModel";
import fs from "node:fs";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const { title, genre } = req.body;
  const files = req.files as { [filename: string]: Express.Multer.File[] };
  const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
  const fileName = files.coverImage[0].filename;
  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );

  const bookFileName = files.file[0].filename;
  const bookFilePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    bookFileName
  );

  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      filename_override: fileName,
      folder: "book-covers",
      format: coverImageMimeType,
    });

    const bookUploadResult = await cloudinary.uploader.upload(bookFilePath, {
      resource_type: "raw",
      filename_override: bookFileName,
      folder: "book-pdfs",
      format: "pdf",
    });

    const newBook = await bookModel.create({
      title,
      author: "6656e6947de76859e5a62e15",
      genre,
      coverImage: uploadResult.secure_url,
      file: bookUploadResult.secure_url,
    });
    res.status(201).json({ id: newBook._id });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Error while uploading the files."));
  }

  try {
    await fs.promises.unlink(filePath);
    await fs.promises.unlink(bookFilePath);
    console.log(`Successfully deleted file at ${filePath}`);
    console.log(`Successfully deleted file at ${bookFilePath}`);
  } catch (error) {
    return next(createHttpError(500, "Error while deleting file."));
  }

};

export default createBook;
