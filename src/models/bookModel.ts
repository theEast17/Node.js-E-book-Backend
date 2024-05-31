import mongoose from "mongoose";

// import { Book } from "../types/bookTypes";

export interface Book {
  title: string;
  author: mongoose.Schema.Types.ObjectId;
  genre: string;
  coverImage: string;
  file: string;
}

const bookSchema = new mongoose.Schema<Book>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'User',
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,   // there is 2 properties 1- createdAt , 2- updatedAt
  }
);

const bookModel=mongoose.model<Book>('Book',bookSchema)   // you can also give third parameter here for overRide User which is name of collection   ('User',userschema,'Author')
export default bookModel