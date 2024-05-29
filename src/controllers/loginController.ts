import express, { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";
import createHttpError from "http-errors";
import bcrypt from 'bcrypt'
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  //   check validation
  if (!email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
        return next(createHttpError(404,'User not found'))
    } 

    const isMatch=await bcrypt.compare(password,user.password as string)
    if (!isMatch) {
        return next(createHttpError(400,'email or password incorrect'))
    } 

    // after this we need to create another access token
    const token = sign({ sub: user._id }, config.jwtSecret as string, {
        expiresIn: "7d",
      });

      res.json({accessToken:token})

  } catch (error) {
    return next(createHttpError(500, "Error while login user"));
  }

 
};

export default loginController;
