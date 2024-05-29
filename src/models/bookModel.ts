import mongoose from "mongoose";

import { Book } from "../types/bookTypes";

const bookSchema = new mongoose.Schema<Book>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
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

const userModel=mongoose.model<Book>('Book',bookSchema)   // you can also give third parameter here for overRide User which is name of collection   ('User',userschema,'Author')
export default userModel