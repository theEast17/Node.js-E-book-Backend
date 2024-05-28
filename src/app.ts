import express, { Request, Response, NextFunction } from "express";
import createHttpError, { HttpError } from "http-errors";
import { config } from "./config/config";
import globalErrorHandler from "./middlewares/globalErrorhandlers";

const app = express();

app.get("/", (req, res, next) => {
    const error=createHttpError(401,'something wrong here')
    throw error
//   res.json({ message: "hello" });
});


app.use(globalErrorHandler)
export default app;
