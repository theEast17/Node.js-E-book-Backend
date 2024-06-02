import { User } from "./userTypes";

export interface Book {
  _id: string;
  title: string;
  author: User;
  genre: string;
  coverImage: string;
  description:string;
  file: string;
  createdAt: Date;
  updatedAt: Date;
}
