import mongoose from "mongoose";
import { User } from "../types/userTypes";

const userSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,   // there is 2 properties 1- createdAt , 2- updatedAt
  }
);

const userModel=mongoose.model<User>('User',userSchema)   // you can also give third parameter here for overRide User which is name of collection   ('User',userschema,'Author')
export default userModel