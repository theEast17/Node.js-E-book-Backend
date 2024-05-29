import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  //   check validation
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  //   check whether the user already exists or not

  try {
    const userExists = await userModel.findOne({ email }); // it returns null or document

    if (userExists) {
      const error = createHttpError(400, "User already exists with this email");
      return next(error);
    }

    //   if user not exixsts then we need to store into the database
    // we need to store passwords in hash bcrypt form

    const hashPassword = await bcrypt.hash(password, 10); // there are 2 parameters in hash 1st name of property and 2nd is saltOnRounds  more detail on line No. 269

    //  now we are ready to store into the database

    const newUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    // now one more thing when we are creating user we need to attach one more thing called jwt json web token for security purpose

    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
    });

    res.json({ accessToken: token });

    // if (newUser) {
    //     res.status(201).json({
    //         _id: newUser._id,
    //         name: newUser.name,
    //         email: newUser.email,
    //     })
    // } else {
    //     const error = createHttpError(400, "Invalid Credentials");
    //     return next(error);
    // }
  } catch (error) {
    return next(createHttpError(500, "Error while getting user"));
  }
};

export default registerController;
