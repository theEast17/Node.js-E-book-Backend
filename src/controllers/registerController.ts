import { NextFunction, Request, Response } from "express";

const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await res.json({ messge: "ello" });
};

export default registerController;
